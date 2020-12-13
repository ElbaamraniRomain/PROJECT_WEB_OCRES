import axios from 'axios';

const simpleData = async (act, temps) => {
    const response = await axios.get(`http://localhost:8080/activite/${act}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'

        },
        params: {
            "d": temps
        }
    });


    const data = await response.data;

    let sData = {}
    for (let i = 0; i < data.length; i++) {
        sData[data[i]._id] = data[i].info;
    }
  
    return sData;
}

export default simpleData