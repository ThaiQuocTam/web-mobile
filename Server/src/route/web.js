import express from "express";
import { getAboutPage, getCrud, getHomePage, postCrud, getNguoiDung, getEditNguoiDung, editNguoiDung, deleteNguoiDung } from "../controllers/homeController";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRoutes = (app) => {
    // router.get('/', getHomePage);
    // router.get('/about', getAboutPage);
    // router.get('/getCrud', getCrud);
    // router.post('/post-crud', postCrud);
    // router.get('/get-nguoi-dung', getNguoiDung);

    // router.get('/edit-nguoi-dung', getEditNguoiDung)
    // router.post('/put-nguoi-dung', editNguoiDung)
    // router.get('/delete-nguoi-dung', deleteNguoiDung)

    router.post('/api/signIn', userController.handleSignIn)
    router.post('api/signUp',)

    return app.use("/", router);
}

module.exports = initWebRoutes;