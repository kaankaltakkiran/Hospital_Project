//Veritabanı İçin
import mongoose from "mongoose";
//Veritabanı Oluşturma
const conn = () =>{
    mongoose.set('strictQuery',true);
    mongoose
    .connect(process.env.DB_URI,{
     dbName:'Hospital_web_site',
     useNewUrlParser:true,
     useUnifiedTopology:true,
    })
    .then(()=>{
     console.log('Veritabanına Bağlandı');
    })
    .catch((err)=>{
     console.log(`!!!!Veritabanına Bağlanmadı!!!!:,${err}`);
    });
};

//AppJste Kullanmak İçin Export ettim
export default conn;