require('dotenv').config();

const brandPath = process.env.API_PATH + '/brand';

const getAllBrands = async () => {
    const response = await fetch(brandPath, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
};

const getBrand = async (brandId) => {
    const response = await fetch(`${brandPath}/${brandId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
};

const createBrand = async (brand) => {
    const response = await fetch(brandPath, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brand)
    });

    return response;
};

const updateBrand = async (brandId, brandUpdate) => {
    fetch(`${brandPath}/${brandId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brandUpdate)
    });

    return response;
};

const deleteBrand = async (brandId) => {
    fetch(`${brandPath}/${brandId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

const addLocation = async (brandId, locationCreation) => {
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
