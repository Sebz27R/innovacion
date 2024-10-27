require('dotenv').config();

const itemPath = process.env.API_PATH + '/item';

const getAllItems = async () => {
    const response = await fetch(itemPath, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
};

const getItem = async (itemId) => {
    const response = await fetch(`${itemPath}/${itemId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
};

const deleteItem = async (itemId) => {
    fetch(`${itemPath}/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const createItem = async (item) => {
    const response = await fetch(itemPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });

    return response;
};

const updateItem = async (itemId, itemUpdate) => {
    fetch(`${itemPath}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemUpdate)
    });
};

const deactivateItem = async (itemId) => {
    fetch(`${itemPath}/${itemId}/deactivate`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

module.exports = {
    getAllItems,
    getItem,
    deleteItem,
    createItem,
    updateItem,
    deactivateItem
};
