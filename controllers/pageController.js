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
//Contact Sayfasını Görüntüle
const getContactPage=(req,res)=>{
    res.render("contact");
}

//Doctors Sayfasını Görüntüle
const getDoctorsPage=(req,res)=>{
    res.render("doctors");
}
//Departments Sayfasını Görüntüle
const getDepartmentsPage=(req,res)=>{
    res.render("departments");
}


//Farklı Yerde Kullanmak İçin Export
export {getIndexPage,getAboutPage,getContactPage,getDoctorsPage,getDepartmentsPage};