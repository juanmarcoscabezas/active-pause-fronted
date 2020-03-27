const authLogout = {
    token: '',
    user: {}
};

const AuthReducer = (state = authLogout, action) => {
    switch (action.type) {
        case 'LOGIN':
            state.token = action.data.token;
            localStorage.setItem('userToken', JSON.stringify(state.token));
            return {...state};
        case 'LOGOUT':
            state = authLogout;
            localStorage.removeItem('userToken');
            return {...state};
        default:
            const token = localStorage.getItem('userToken');
            if (token) {
                state.token = token;
            }
            return state;
    }
}


export default AuthReducer;