async function login(email, password){
    try{
        const admins = await handleEndpoint('/admin');
        console.log(admins);

    }catch(error){
        console.error(`Error inattendu : ${error}`);
    }
}