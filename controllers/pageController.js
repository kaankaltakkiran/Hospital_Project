//Req İle İstek Yapıp
//Res İle Cevap Alırız
//İndex Sayfasını Görüntüle
const getIndexPage=(req,res)=>{
    res.render("index");
}
//About Sayfasını Görüntüle
const getAboutPage=(req,res)=>{
    res.render("about");
}

//Farklı Yerde Kullanmak İçin Export
export {getIndexPage,getAboutPage};