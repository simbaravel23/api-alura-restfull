import mongoose, {mongo} from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect("mongodb+srv://celuvel:simba123@cluster0.3b26xcs.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection

};

export default conectaNaDatabase;