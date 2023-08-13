// Products Page that will display all the products on their own individual cards
// A search function should include:
// Filters (hides and shows) certain products
// Organizes the shown products by several orders
// Alphabetical (descending and ascending)
// Numerical (least and most)
// Individual Cards for each product should include:
// Image and Product
// Title of Product
// Truncated Description
// Add to Cart button
// Link to the product's page

// import { useState, useEffect } from "react";
import Filter from "../../images/filter-solid.svg";

export default function Products(props) {
  const { allProducts, addToCart } = props;

  function trunk(text) {
    let smallerString;

    text.length > 10
      ? (smallerString = `${text.slice(0, 45)}...`)
      : (smallerString = text);

    return smallerString;
  }

  console.log(allProducts);
  return (
    <div className="products-wrapper">
      <h1>Products</h1>
      <div className="search-area">
        <input className="search-bar" type="text" />
        <img className="filter" src={Filter} alt="filter" />
      </div>
      <div className="product-card-wrapper">
        {allProducts.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt="product" />
              <h3>{product.title}</h3>
              <p>{trunk(product.description)}</p>
              <p>${product.price}</p>
              <button
                className="cart-btn"
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
