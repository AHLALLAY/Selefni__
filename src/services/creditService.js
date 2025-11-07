import handleEndpoint from "./api.js";

// pour les listes
async function getCreditTypes() {
    return await handleEndpoint('/creditTypes');
}
async function getEmploymentTypes() {
    return await handleEndpoint('/employmentTypes');
}
async function getJobs() {
    return await handleEndpoint('/jobs');
}

// pour les calcules
function simulationCalc(){
    
}


export default {
    getCreditTypes,
    getEmploymentTypes,
    getJobs
}