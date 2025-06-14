import { createSlice } from '@reduxjs/toolkit';
import type { Theme } from '../../models/Theme.ts';

const savedTheme = localStorage.getItem('theme');
const initialState:Theme = {
  current:savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light',
}
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.current = action.payload;
      localStorage.setItem("theme", action.payload);
    }
  }
})
export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;