import express from "express";
import { getAboutPage, getCrud, getHomePage, postCrud, getNguoiDung, getEditNguoiDung, editNguoiDung, deleteNguoiDung } from "../controllers/homeController";
import userController from "../controllers/userController";
import topProductsController from "../controllers/topProductsController"
import productsController from "../controllers/productsController"

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
    router.post('/api/signUp', userController.handleSignUp)

    router.get('/api/top-Smartphone', topProductsController.handleTopSmartphone)
    router.get('/api/top-TableLet', topProductsController.handleTopTablet)
    router.post('/api/add-Product', productsController.handleAddProduct)
    router.get('/api/get-list-product-type', productsController.handleGetProductType)
    router.get('/api/get-list-product-group', productsController.handleGetProductGroup)
    router.get('/api/get-list-product', productsController.handleGetProduct)
    router.get('/api/get-info-product', productsController.handleGetInfoProduct)
    router.post('/api/post-edit-info-product', productsController.handlePostEditInfoProduct)
    router.post('/api/post-search-product', productsController.handlePostSearchProduct)
    router.get('/api/get-info-bill', productsController.handleGetInfoBill)
    router.get('/api/get-info-oderDetail', productsController.handleGetInfoOderDetail)

    return app.use("/", router);
}

module.exports = initWebRoutes;