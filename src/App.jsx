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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayouts />}>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/shop" element={<Product />}></Route>
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
