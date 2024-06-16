import express from "express";
import {
  getCars,
  getModels,
  addCar
} from "../controllers/cars.controller";

export const router = express.Router();

router.get("/", getCars);

router.get("/:brand", getModels);

router.put("/", addCar)