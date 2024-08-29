import { SpecialOffers } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './ways';
export const getAll = async (): Promise<SpecialOffers[]> => {
  return (await axiosInstance.get<SpecialOffers[]>(ApiRoutes.SPECIAL_OFFERS)).data;
};
