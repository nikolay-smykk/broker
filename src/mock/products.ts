export enum colorDress {
  'red',
  'black',
  'white',
}
export enum eMaterial {
  'jersey',
  'cotton',
}

export interface iProducts {
  img: string;
  title: string;
  price: number;
  color: colorDress;
  material: eMaterial;
}

export const products = {
  first: {
    img: 'some require ',
    title: 'Some title',
    price: 20000,
    color: colorDress,
    material: "  'jersey',\n",
  },
  second: {
    img: 'some require ',
    title: 'Some title',
    price: 60000,
    color: colorDress,
    material: 'cotton',
  },
};
