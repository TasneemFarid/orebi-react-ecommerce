import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Button from "./components/Button";
import RootLayouts from "./components/RootLayouts";
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/Signup";
import Product from "./components/Product";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayouts />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/shop" element={<Product />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
