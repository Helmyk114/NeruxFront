export type CreateBusinessCommand = {
  name: string;
  nit: string;
  email: string;
  phone: string;
  address: string;
};

export type BusinessCreate ={
  token: string;
  idBusiness: string;
}
