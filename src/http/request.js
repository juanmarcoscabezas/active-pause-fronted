import AuthReducer from '../Store/AuthReducer';

/**
 * Description - API variable
 */
const APIConfig = {
    host: 'http://localhost:3010/api/'
};

/**
 * Description - This function send a Http request to an API
 * @param {String} method - Request method
 * @param {String} relativePath - Request path
 * @param {Object} body - Request body
 * @param {String} token - Authentication token (access token)
 */
export default async function apiRequest (
    method = 'GET',
    relativePath = '/auth/login',
    body = {},
    token = ''
    ) {
    // Default configuration
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    // When the request is not GET, body param is set to @config
    if (method !== 'GET' && method !== 'DELETE') {
        config['body'] = JSON.stringify(body)
    }

    try {
        // Using fetch API
        const res = await fetch(APIConfig.host + relativePath, config);
        const result = await res.json();
        if (!result.error) {
            // In case response has no errors
            return result;
        } else {
            // In case response send statusCode !== 200
            // In case the access token has expire
            if (result.statusCode === 401 && result.message === 'Expired access token') {
                // If the token has expire, send request to refresh-token path
                // and get a new access-token and refresh-token
                const newToken = await apiRequest('POST', '/auth/refresh-token', JSON.parse(localStorage.getItem('userToken')));
                // If the response from refresh-token is not null
                // The new pair of tokens is set in the Storage
                if (newToken !== null) {
                    AuthReducer(
                        undefined,
                        {
                            type: 'LOGIN',
                            data: newToken
                        }
                    );
                    // Re-send the original request with the new token
                    return await apiRequest(method, relativePath, body, JSON.parse(localStorage.getItem('userToken')).accessToken);
                }
                // This piece of code should redirect me to the '/' path
                return null;
            } else if (result.statusCode === 401 && result.message === 'Invalid access token')  {
                //Need implementation
            } else if (result.statusCode === 401 && result.message === 'Expired refresh token')  {
                //Need implementation
            } else if (result.statusCode === 401 && result.message === 'Invalid refresh token')  {
                //Need implementation
            } else {
                alert(result.message);
                return null;
            }
        }
    } catch (error) {
        alert(error);
        return null;
    }
}
