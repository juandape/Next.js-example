import React from 'react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductDetailPage = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const url = `https://fakestoreapi.com/products/${query.productId}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [query.productId]);



  return (
    <div>
      <h1>Product Detail Page {query.productId}</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Image src={product.image} alt={product.title} width={150} height={200} />
    </div>
  );
};

export default ProductDetailPage;
