const baseUrl: string = 'https://api.themoviedb.org/3';
const api_key = process.env.API_KEY
const headers = {
    "Content-Type": 'application/json',
    "Authorization": `Bearer ${api_key}`
}

export const getList = async () => {
    debugger;
    try {
        let request = await fetch(`${baseUrl}/discover/movie`, {
            headers: headers
        })
            .then(data => data.json())
            .then(resp => resp);
        return request;
    } catch (error) {

    }
}


