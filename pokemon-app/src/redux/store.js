import { configureStore } from "@reduxjs/toolkit";
import PokeSlice from "./pokeSlice/poke.slice";

const store = configureStore({
  reducer: {
    pokemon: PokeSlice,
  },
});


export default store;