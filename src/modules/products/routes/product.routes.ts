import { Router } from "express";
import ProductController from "../controllers/ProductController";

const productRouter = Router();
const productController = new ProductController();

productRouter.get('/', async (req, res, next) =>{
    try{
        await productController.index(req, res, next);
    }catch(err){
        next(err);
    }
});

productRouter.get('/:id', async (req, res, next) =>{
    try{
        await productController.show(req, res, next);
    }catch(err){
        next(err);
    }
});

productRouter.post('/', async (req, res, next) =>{
    try{
        await productController.create(req, res, next);
    }catch(err){
        next(err);
    }
});

productRouter.put('/:id', async (req, res, next) =>{
    try{
        await productController.update(req, res, next);
    }catch(err){
        next(err);
    }
});

productRouter.delete('/:id', async (req, res, next) =>{
    try{
        await productController.delete(req, res, next);
    }catch(err){
        next(err);
    }
});

export default productRouter;