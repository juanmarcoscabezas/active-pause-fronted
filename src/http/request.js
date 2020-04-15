import AuthReducer from '../Store/AuthReducer';

const APIConfig = {
    host: 'http://localhost:3010/api/'
};

export default async function apiRequest (
    method = 'GET',
    relativePath = '/auth/login',
    body = {},
    token = ''
    ) {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    if (method !== 'GET') {
        config['body'] = JSON.stringify(body)
    }

    try {
        const res = await fetch(APIConfig.host + relativePath, config);
        const result = await res.json();
        if (!result.error) {
            return result;
        } else {
            // In case the token has expire
            if (result.statusCode === 401 && result.message === 'Expired access token') {
                const newToken = await apiRequest('POST', '/auth/refresh-token', JSON.parse(localStorage.getItem('userToken')));
                if (newToken !== null) {
                    AuthReducer(
                        undefined,
                        {
                            type: 'LOGIN',
                            data: newToken
                        }
                    );
                    return await apiRequest(method, relativePath, body, JSON.parse(localStorage.getItem('userToken')).accessToken);
                }
                return null;
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
