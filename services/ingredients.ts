import { Ingredient } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './ways';
export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGRIDIENTS)).data;
};
