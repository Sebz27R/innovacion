require('dotenv').config();

const authPath = process.env.API_PATH + '/auth';

const validateLogin = async (login) => {
    const response = await fetch(`${authPath}/login`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });

    return response;
};

module.exports = {
    validateLogin
};
