import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlices from "./slices/breadcrumbSlices";
import cartSlices from "./slices/cartSlices"

export default configureStore({
  reducer: {
    breadcrumb: breadcrumbSlices,
    cart: cartSlices,
  },
});
