import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4ce8b2fd24msh35094b12a6c1303p113626jsn0507a00774f2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        },
    });

    return data;
}