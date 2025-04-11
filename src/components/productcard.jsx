// write product card here
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  // Static details
  const productImage = "https://m.media-amazon.com/images/I/71UkRZji9fL.jpg";
  const productName = "Kawasaki";
  const productPrice = "$20.99";

  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h2 style={styles.name}>{productName}</h2>
      <p style={styles.price}>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "250px",
    boxShadow: "0 4px 8px rgba(94, 92, 92, 0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  },
  name: {
    fontSize: "18px",
    margin: "12px 0 6px",
    color: "white",
  },
  price: {
    fontSize: "16px",
    margin: "6px 0",
    color: "grey",
  },
};

export default Productcard;