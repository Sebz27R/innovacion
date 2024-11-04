require('dotenv').config();

const userPath = process.env.API_PATH + '/user';

const getCompleteUser = (userId) => {
    return fetch(`${userPath}/complete/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });;
};

const getBasicUser = (userId) => {
    return fetch(`${userPath}/basic/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

const createUser = (user) => {
    return fetch(userPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}

const updateUser = (userId, userNew) => {
    return fetch(`${userPath}/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userNew)
    });
}
