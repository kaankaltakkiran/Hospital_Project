//Sunucu İmport
import  express  from "express";
// Çevre Değişkenleri İmport
import dotenv from "dotenv";
//Veritabanı İmport
import conn from "./db.js";
//PageRoute İmport
import pageRoute from "./routes/pageRoute.js";

//Çevre Değişkenleri Çağırma
dotenv.config();
//Veritabanı Çağırma
conn();

//Sunucu Tanımlama
const app=express();
//Port Tanımlama
const port=process.env.PORT;
//Host Adı
const hostname=process.env.HOSTNAME;
//Ejs Template Engine
app.set('view engine','ejs');

//Static Dosyalar İçin Middleware
//Static Dosylarımı Belirliyoruz
app.use(express.static('public'));


//Route Bölümü
// / isteği gelirse pageRoute a git
app.use('/',pageRoute);

//Sunucu Çalıştırma
app.listen(port,hostname, () => {
console.log(`Server Şu Adreste Çalişiyor,http://${hostname}:${port}/`)
 });