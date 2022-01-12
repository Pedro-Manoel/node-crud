import { Router } from "express";

import { DeleteVideoController } from './controllers/DeleteVideoController';
import { UpdateVideoController } from './controllers/UpdateVideoController';
import { GetAllVideosController } from './controllers/GetAllVideosController';
import { GetVideoController } from './controllers/GetVideoController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { GetCategoryController } from './controllers/GetCategoryController';

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/categories/:id", new GetCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.get("/videos/:id", new GetVideoController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle);

export { routes }
