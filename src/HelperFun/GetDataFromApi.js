const GetDataFromApi=async(url)=>{

    try {
        const res = await fetch(url);
        const resjson= await res.json();
        return resjson;
    } catch (error) {
        console.error(error);
         return [];
    }
}

export default GetDataFromApi;