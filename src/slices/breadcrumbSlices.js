import { createSlice } from "@reduxjs/toolkit";

export const breadcrumbSlices = createSlice({
  name: "breadcrumbSlices",
  initialState: {
    name: "",
  },
  reducers: {
    pagename: (state, action) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pagename } = breadcrumbSlices.actions;

export default breadcrumbSlices.reducer;
