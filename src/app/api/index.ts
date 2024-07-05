const baseUrl: string = 'https://api.themoviedb.org/3';
const api_key: string | undefined = process.env.API_KEY;

export const getList = async (params: any) => {
    const url = new URL(`${baseUrl}/discover/movie`);
    const searchParams = new URLSearchParams(params);
    try {
        let request = await fetch(`${url}?${searchParams.toString()}`, {
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${api_key}`
            }
        })
            .then(data => data.json())
            .then(resp => {return resp});
        return request;
    } catch (error) {

    }
}


