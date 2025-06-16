import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../redux/pokeSlice/poke.action";
import Loader from "./Loader";
import PokemonCI from "../assets/pokemon.jpg";
import Header from "./Header";
import { searchQuery } from "../redux/pokeSlice/poke.slice";

const PokemonList = () => {
  const { pokemonList, loading, error, searchTerm, sortTerm } = useSelector(
    (state) => state.pokemon
  );
  const dispatch = useDispatch();
  // const [filteredData, setFilteredData] = useState();
  const [limit] = useState(16);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(getPokemonList({ limit, offset }));
  }, [dispatch, offset, limit]);

  const processedData = useMemo(() => {
    if (!pokemonList?.data?.results) return;
    let result = [...pokemonList.data.results];

    if (sortTerm === "name_asc") {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortTerm === "name_desc") {
      result = result.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (searchTerm) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return result;
  }, [searchTerm, pokemonList, sortTerm]);

  // useEffect(() => {
  //   if (!pokemonList?.data?.results) return;
  //   let result = [...pokemonList.data.results];

  //   if (sortTerm === "name_asc") {
  //     result = result.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (sortTerm === "name_desc") {
  //     result = result.sort((a, b) => b.name.localeCompare(a.name));
  //   }

  //   if (searchTerm) {
  //     result = result.filter((item) =>
  //       item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }

  //   setFilteredData(result);
  // }, [searchTerm, pokemonList, sortTerm]);

  return (
    <>
      {loading && <Loader />}
      <div>
        <Header />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {processedData?.map((item) => {
            return (
              <div key={item.url}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "fit-content",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <img src={PokemonCI} alt="pokemon" />
                  <span
                    style={{ fontSize: "22px", textTransform: "capitalize" }}
                  >
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => setOffset((prev) => prev - limit)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ccc",
                  background: "#f9f9f9",
                  cursor: "pointer",
                }}
                disabled={offset === 0 ? true : false}
              >
                Previous
              </button>
              <button
                onClick={() => setOffset((prev) => prev + limit)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ccc",
                  background: "#f9f9f9",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
