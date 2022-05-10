import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditProductForm from "../components/EditProductForm";
const EditProduct = () => {
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { productId } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + productId, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);
  return <>{loaded && <EditProductForm product={product} />} </>;
};

export default EditProduct;
