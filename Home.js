import products from "../data/products";
import Product from "../components/Product";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((item) => (
          <Product key={item.id} product={item} addToCart={addToCart} />
        ))
      )}
    </div>
  );
}

export default Home;