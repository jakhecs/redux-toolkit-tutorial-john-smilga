import CartContainer from "./components/cartContainer";
import Navbar from "./components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
