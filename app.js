//Sunucu İmport
import  express  from "express";
//Sunucu Tanımlama
const app=express();
//Port Tanımlama
const port=3000;
//Host Adı
const hostname='127.0.0.1';
//Ejs Template Engine
app.set('view engine','ejs');

//Static Dosyalar İçin Middleware
//Static Dosylarımı Belirliyoruz
app.use(express.static('public'));
//Yönlendirme
//Req İle İstek Yapıp
//Res İle Cevap Alırız
//İndex Sayfası
app.get("/",(req,res)=>{
res.render("index");
});

//İndex Sayfası
app.get("/about",(req,res)=>{
res.render("about");
});

//Sunucu Çalıştırma
app.listen(port,hostname, () => {
console.log(`Server Şu Adreste Çalişiyor,http://${hostname}:${port}/`)
 });