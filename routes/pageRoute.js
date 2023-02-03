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
// /contact isteği geldiğinde İlgili Fonksiyona Git Ve Çalıştır
router.route("/contact").get(pageController.getContactPage);
// /doctors isteği geldiğinde İlgili Fonksiyona Git Ve Çalıştır
router.route("/doctors").get(pageController.getDoctorsPage);
// /departments isteği geldiğinde İlgili Fonksiyona Git Ve Çalıştır
router.route("/departments").get(pageController.getDepartmentsPage);

//Export İçin
export default router;