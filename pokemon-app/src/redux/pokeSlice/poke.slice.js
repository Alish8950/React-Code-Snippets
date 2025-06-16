import { createSlice } from "@reduxjs/toolkit";
import { getPokemonList } from "./poke.action";

const initialState = {
  loading: false,
  pokemonList: {},
  singlePokemon: {},
  error: "",
  searchTerm: "",
  sortTerm: "",
};

const PokeSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.searchTerm = action.payload;
    },
    sortQuery: (state, action) => {
      state.sortTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Get Pokemon list
    builder.addCase(getPokemonList.fulfilled, (state, action) => {
      state.error = "";
      state.loading = false;
      state.pokemonList = action.payload;
    });
    builder.addCase(getPokemonList.pending, (state) => {
      state.error = "";
      state.loading = true;
    });
    builder.addCase(getPokemonList.rejected, (state, action) => {
      state.error = "";
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { searchQuery, sortQuery } = PokeSlice.actions;

export default PokeSlice.reducer;
