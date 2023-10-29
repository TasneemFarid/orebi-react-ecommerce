import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Button from "./components/Button";
import RootLayouts from "./components/RootLayouts";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayouts />}>
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
