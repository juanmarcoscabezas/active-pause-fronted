const authLogout = {
    token: null,
    isAuthenticated: false,
    user: {}
};

const AuthReducer = (state = authLogout, action) => {
    switch (action.type) {
        case 'LOGIN':
            state.token = action.data.token;
            state.isAuthenticated = true;
            localStorage.setItem('userToken', JSON.stringify(state.token));
            return {...state};
        case 'LOGOUT':
            state = authLogout;
            localStorage.removeItem('userToken');
            return {...state};
        default:
            const token = localStorage.getItem('userToken');
            if (token !== null) {
                state.token = JSON.parse(token);
                state.isAuthenticated = true;
            }
            return {...state};
    }
}


export default AuthReducer;