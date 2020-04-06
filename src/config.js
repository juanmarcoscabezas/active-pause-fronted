const APIConfig = {
    host: 'http://localhost:3000',
    request: {
        method: '',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem('userToken'))
        }
    }
};

export default APIConfig;