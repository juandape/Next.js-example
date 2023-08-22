const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];


export default function handler(req, res) {
  const method = req.method;

  const data = req.body;

  if (method !== 'POST') {
    return res.status(201).json({ message: 'Method not allowed' });
  }

  const product = {
    id: new Date().getTime(),
    ...data,
  }

  products.push(product);

  res.status(200).json(products);
}
