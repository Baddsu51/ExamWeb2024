import * as CarsService from "../services/cars.service";

export const getCars = (req: any, res: any) => {
  const cars = CarsService.getCars();
  return res.status(200).json(cars);
};
