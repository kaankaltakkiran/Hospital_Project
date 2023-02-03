//Sunucu İmport
import  express  from "express";
//Sunucu Tanımlama
const app=express();
//Port Tanımlama
const port=3000;
//Host Adı
const hostname='127.0.0.1';
//Yönlendirme
//Req İle İstek Yapıp
//Res İle Cevap Alırız
app.get("/",(req,res)=>{
res.send("İndex Sayfası");
});

//Sunucu Çalıştırma
app.listen(port,hostname, () => {
console.log(`Server Şu Adreste Çalişiyor,http://${hostname}:${port}/`)
 });