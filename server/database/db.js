import mongoose from "mongoose";



const Connection = async(username, password) =>{

    const URL= `mongodb+srv://${username}:${password}@backenddb.vnqwr.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`;
    try{

        await mongoose.connect(URL);
        console.log("database connected succesfully");
    } catch(error){
        console.log("error while connecting to database " + error);
    }
}


export default Connection;