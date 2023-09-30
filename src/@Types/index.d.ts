type TCardProduct = {
  _id?: string;
  urlImge: string;
  name: string;
  price: number;
  percentDiscount: number;
};
type TTableProduct = TFormProduct;
type TPostProduct = TFormProduct;
type TSidebarItem = {
  icon: any;
  text: string;
  to: string;
};
type TFormProduct = {
  _id?: string;
  name: string;
  urlImge: string;
  price: number;
  percentDiscount: number;
};
