const API_BASE_URL = 'http://localhost:3001'

async function handleEndpoint(endpoint){
    try{
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if(!response.ok){
            throw new Error(`HTTP Error : ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error(`Error inattendu: ${error.message}`);
    }
}

export default handleEndpoint;