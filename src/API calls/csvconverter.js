const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

require('dotenv').config();

const authPath = process.env.API_PATH + '/csvchanger/csvchanger';

const sendCsvFile = async (filePath) => {
    // TODO
}

module.exports = {
    sendCsvFile
};