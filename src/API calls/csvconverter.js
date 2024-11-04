const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

require('dotenv').config();

const csvchangerPath = process.env.API_PATH + '/csvchanger/csvchanger';

const sendCsvFile = async (file) => {
    return fetch(csvchangerPath, {
        method: 'POST',
        body: file
    });
}

module.exports = {
    sendCsvFile
};