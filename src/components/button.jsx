// write button card here
import React from "react";

const ViewProductButton = () => {
  return (
    <button style={styles.button}>View Product</button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ViewProductButton;