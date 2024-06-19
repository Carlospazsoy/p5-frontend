// import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./CardProduct.css";

function CardProduct({ imageUrl, title, price, linkTo }) {
  return (
    <div className="card">
      <Link to={linkTo} className="text-decoration-none text-dark">
        <img src={imageUrl} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: ${price}</p>
          <button className="btn btn-primary">View Details</button>
        </div>
      </Link>
    </div>
  );
}

CardProduct.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default CardProduct;
