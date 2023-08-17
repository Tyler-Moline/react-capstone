export default function Product(props) {
  function renderSingleProduct() {
    return props.allProducts.map((item) => {
      if (parseInt(props.match.params.slug) === item.id) {
        return (
          <div className="individual-product" key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.image} alt="product" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button
              className="cart-btn"
              onClick={() => props.addToCart(item.id)}
            >
              Add to cart
            </button>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  return (
    <div className="App">
      <div>{renderSingleProduct()}</div>
    </div>
  );
}
