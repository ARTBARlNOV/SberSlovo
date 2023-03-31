export const formData = new FormData();

export const url = 'https://sberslovo.ru/api/public/verify/signature';

export const date = new Date(Date.now())
  .toString().substring(8, 15)
  .split(' ')
  .join('.');
