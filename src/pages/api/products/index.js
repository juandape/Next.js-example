// const products = [
//   { id: 1, name: 'Product 1' },
//   { id: 2, name: 'Product 2' },
//   { id: 3, name: 'Product 3' },
// ];


export default async function handler(req, res) {
  const url = 'https://fakestoreapi.com/products'
  const data = await fetch(url);
  const products = await data.json();

  res.status(200).json(products);
}
