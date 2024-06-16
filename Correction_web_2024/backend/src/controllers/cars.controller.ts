import * as CarsService from "../services/cars.service";

export const getCars = (req: any, res: any) => {
  const cars = CarsService.getCars();
  return res.status(200).json(cars);
};

export const getModels = (req: any, res: any) => {
  const brand = req.params.brand;
  // const { brand } = req.params;
  const models = CarsService.getModels(brand);
  return res.status(200).json(models);
}

export const addCar = (req: any, res: any) => {
  const cars = CarsService.addCar(req.body);
  return res.status(200).json(cars);
}
