require('dotenv').config();

const userPath = process.env.API_PATH + '/user';

const getCompleteUser = async (userId) => {
    const response = await fetch(`${userPath}/complete/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
};

const getBasicUser = async (userId) => {
    const response = await fetch(`${userPath}/basic/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return response;
}

const createUser = async (user) => {
    const response = await fetch(userPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    
    return response;
}

const updateUser = async (userId, userNew) => {
    const response = await fetch(`${userPath}/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userNew)
    });
    
    return response;
}
