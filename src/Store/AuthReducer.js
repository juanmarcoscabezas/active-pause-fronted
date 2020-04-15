const authLogout = {
    accessToken: null,
    isAuthenticated: false,
    user: {}
};

const AuthReducer = (state = authLogout, action) => {
    switch (action.type) {
        case 'LOGIN':
            state.accessToken = action.data.accessToken;
            state.isAuthenticated = true;
            localStorage.removeItem('userToken');
            localStorage.setItem('userToken', JSON.stringify(action.data));
            return { ...state };
        case 'LOGOUT':
            state = authLogout;
            localStorage.removeItem('userToken');
            return { ...state };
        default:
            const userToken = localStorage.getItem('userToken');
            if (userToken !== 'undefined' && userToken && userToken !== null) {
                state.accessToken = JSON.parse(userToken).accessToken;
                state.isAuthenticated = true;
            }
            return { ...state };
    }
}


export default AuthReducer;