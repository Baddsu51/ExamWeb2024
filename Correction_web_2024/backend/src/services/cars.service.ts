import { cars, Car } from "../mocks/cars.mock";

export const getCars = () => {
  return cars;
};

export const getModels = (brand :string) => {
  const voitures = cars.filter((voiture) => voiture.brand === brand);
  
  const models = voitures.map((voiture) => voiture.model );

  // const models:string[] = [];
  // voitures.map((voiture) => models.push(voiture.model))

  return models.sort();
}
export const addCar = ( body:Car ) => {
  cars.push(body);
  return cars;
}