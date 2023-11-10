import { configureStore } from "@reduxjs/toolkit";
import breadcrumbSlices from "./slices/breadcrumbSlices";

export default configureStore({
  reducer: {
    breadcrumb: breadcrumbSlices,
  },
});
