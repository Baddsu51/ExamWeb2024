import express from "express";
import {
  getCars
} from "../controllers/cars.controller";

export const router = express.Router();

router.get("/", getCars);
