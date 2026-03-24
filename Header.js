import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ background: "black", color: "white", padding: "10px" }}>
      <h2>My Shop</h2>

      <Link to="/" style={{ marginRight: "10px", color: "white" }}>
        Home
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({cart.length})
      </Link>
    </div>
  );
}

export default Header;