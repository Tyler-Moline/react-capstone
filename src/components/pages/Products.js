import { useState } from "react";
import { Link } from "react-router-dom";
import { successfulToast } from "../../util/Toast";

export default function Products(props) {
  const { allProducts, addToCart } = props;

  const [result, setResult] = useState([]);
  const [filter, setFilter] = useState("");

  const trunk = (text) => {
    let smallerString;

    text.length > 10
      ? (smallerString = `${text.slice(0, 45)}...`)
      : (smallerString = text);

    return smallerString;
  };

  const search = (searchInput) => {
    setResult(
      allProducts.filter((product) =>
        product.title.toLowerCase().includes(searchInput)
      )
    );
  };

  if (filter === "default") {
    allProducts.sort((a, b) => a.id - b.id);
  }
  if (filter.includes("1")) {
    allProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter.includes("2")) {
    allProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (filter.includes("3")) {
    allProducts.sort((a, b) => a.price - b.price);
  } else if (filter.includes("4")) {
    allProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products-wrapper">
      <h1>Products</h1>
      <div className="search-area">
        <input
          placeholder="Search Items Here"
          className="search-bar"
          type="text"
          onChange={(e) => search(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="default">Filter Options</option>
          <option value="1">A to Z</option>
          <option value="option2">Z to A</option>
          <option value="option3">Low to High</option>
          <option value="option4">High to Low</option>
        </select>
      </div>
      <div className="product-card-wrapper">
        {result.length === 0
          ? allProducts.map((product) => {
              return (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt="product" />
                  <h3>{product.title}</h3>
                  <p>{trunk(product.description)}</p>
                  <p>${product.price}</p>
                  <div className="button-wrapper">
                    <button
                      className="cart-btn"
                      onClick={() => {
                        addToCart(product.id);
                        successfulToast("Item added to cart");
                      }}
                    >
                      Add to cart
                    </button>

                    <Link to={`/products/${product.id}`}>
                      <button className="cart-btn">More info</button>
                    </Link>
                  </div>
                </div>
              );
            })
          : result.map((product) => {
              return (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt="product" />
                  <h3>{product.title}</h3>
                  <p>{trunk(product.description)}</p>
                  <p>${product.price}</p>
                  <div className="button-wrapper">
                    <button
                      className="cart-btn"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to cart
                    </button>

                    <Link to={`/products/${product.id}`}>
                      <button className="cart-btn">More info</button>
                    </Link>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
