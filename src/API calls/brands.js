require('dotenv').config();

const brandPath = process.env.API_PATH + '/brand';

const getAllBrands = () => {
    return fetch(brandPath, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        
    });
};

const getBrand = (brandId) => {
    return fetch(`${brandPath}/${brandId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const createBrand = (brand) => {
    return fetch(brandPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brand)
    });
};

const updateBrand = (brandId, brandUpdate) => {
    fetch(`${brandPath}/${brandId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brandUpdate)
    });

    return response;
};

const deleteBrand = (brandId) => {
    fetch(`${brandPath}/${brandId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const addLocation = (brandId, locationCreation) => {
    fetch(`${brandPath}/location/${brandId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(locationCreation)
    });
};

module.exports = {
    getAllBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
    addLocation
}
