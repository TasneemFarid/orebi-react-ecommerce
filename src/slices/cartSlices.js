import { createSlice } from "@reduxjs/toolkit";

export const cartSlices = createSlice({
  name: "cart",
  initialState: {
    cartitem: [],
  },
  reducers: {
    addtocart: (state, action) => {
      if (state.cartitem.length > 0) {
        let arr = [];
        state.cartitem.map((item) => {
          if (item.title == action.payload.title) {
            item.quantity = item.quantity + 1;
            arr.push(item.title);
          }
        });
        if (arr.indexOf(action.payload.title) == -1) {
          state.cartitem.push(action.payload);
        }
      } else {
        state.cartitem.push(action.payload);
      }
    },
    increment: (state, action) => {
      state.cartitem.map((item) => {
        if (item.title == action.payload.title) {
          item.quantity = item.quantity + 1;
        }
      });
    },
    decrement: (state, action) => {
      state.cartitem.map((item, index) => {
        if (item.title == action.payload.title) {
          if (item.quantity > 1) {
            item.quantity = item.quantity - 1;
          } else {
            state.cartitem.splice(index, 1);
          }
        }
      });
    },
    removeFromCart: (state, action) => {
      // let index;
      // index = state.cartitem.findIndex(
      //   (item) => item.title == action.payload.title
      // );
      // state.cartitem.splice(index, 1);

      state.cartitem.map((item, index) => {
        if (item.title == action.payload.title) {
          state.cartitem.splice(index, 1);
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtocart, increment, decrement, removeFromCart } =
  cartSlices.actions;

export default cartSlices.reducer;
