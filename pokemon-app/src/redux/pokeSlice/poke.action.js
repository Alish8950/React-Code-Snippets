import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemonList = createAsyncThunk(
  "pokemon/pokemonList",
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        
        return rejectWithValue({
          message: errorData?.message || "Failed to fetch Pokemons",
          status: response.status,
        });
      }
      const data = await response.json();
      return { data, message: "Pokemon Fetched Successfully" };
    } catch (error) {
      return rejectWithValue({
        message: error.message || "Network error",
      });
    }
  }
);
