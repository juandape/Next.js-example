import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = ({ products = [] }) => {
  //peticion del lado del cliente

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const url = 'api/products';
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   getProducts();
  // }, []);

  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={200}
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;

//peticion del lado del servidor, pide datos al servidor en cada peticion
// export async function getServerSideProps() {
//   const url = 'http://localhost:3000/api/products';
//   const response = await fetch(url);
//   const data = await response.json();
//   return {
//     props: {
//       products: data,
//     },
//   };
// }

//peticion estatica, no pide datos al servidor, los datos se cargan en el build
export async function getStaticProps() {
  const url = 'https://fakestoreapi.com/products';
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}

//incremental static regeneration, pide datos al servidor,
//los datos se cargan en el build y se actualizan cada cierto tiempo
