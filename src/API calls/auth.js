require('dotenv').config();

const authPath = process.env.API_PATH + '/auth';

const validateLogin = (login) => {
    return fetch(`${authPath}/login`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });
};

module.exports = {
    validateLogin
};
