const axios = require ('axios');

async function getData() {
    const result = await axios.get('https://dube.io/service')
    const data = result.data

    console.log('data', data)

    return data 
}

getData();
