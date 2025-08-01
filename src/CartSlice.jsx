import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // Each item: { name, image, cost, quantity }
};

// Creating the slice
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add it as a new item with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove an item from the cart based on name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Update the quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },

    // Clear the entire cart (optional helper)
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity, clearCart } = CartSlice.actions;

// Export the reducer
export default CartSlice.reducer;
