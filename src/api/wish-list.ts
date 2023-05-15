import instance from './index';
export const getWishList = async () => {
  const token = localStorage.getItem('token');
  return await instance.get(`wishlist/${token}`);
};

export const createWishList = async (body: any) => {
  const token = localStorage.getItem('token');
  return await instance.post(`wishlist/add?token=${token}`, body);
};
