//Sunucu İmport
import  express  from "express";

//Sayfa İşlemlerinin Olduğu Controller İmport
import * as pageController from "../controllers/pageController.js";

//Yönlendirme Tanımı
const router=express.Router();

// / isteği geldiğinde İlgili Fonksiyona Git Ve Çalıştır
router.route("/").get(pageController.getIndexPage);
// /about isteği geldiğinde İlgili Fonksiyona Git Ve Çalıştır
router.route("/about").get(pageController.getAboutPage);

//Export İçin
export default router;