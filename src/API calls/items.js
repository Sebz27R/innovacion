require('dotenv').config();

const itemPath = process.env.API_PATH + '/item/item';

const getAllItems = () => {
    return fetch(itemPath, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const getItem = (itemId) => {
    return fetch(`${itemPath}/${itemId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const deleteItem = (itemId) => {
    fetch(`${itemPath}/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const createItem = (item) => {
    return fetch(itemPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
};

const updateItem = (itemId, itemUpdate) => {
    fetch(`${itemPath}/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemUpdate)
    });
};

const deactivateItem = (itemId) => {
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
