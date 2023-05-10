import { Product } from '../type/categories';
import instance from './index';
export const getCategories = async () => {
  return await instance.get<Product[]>(`/product/`);
};
