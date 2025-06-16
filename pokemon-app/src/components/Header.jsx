import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchQuery, sortQuery } from "../redux/pokeSlice/poke.slice";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(searchQuery(search.trim()));
    }, 800);
    return () => clearTimeout(timerId);
  }, [search]);

  useEffect(() => {
    if (sort !== "") {
      dispatch(sortQuery(sort));
    }
  }, [sort]);
  return (
    <>
      <div
        style={{
          height: "70px",
          borderBottom: "1px solid #696969",
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: "15px",
        }}
      >
        {/* Basic Search Input */}
        <input
          type="text"
          placeholder="Search..."
          style={{ padding: "5px 10px", fontSize: "14px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort By Dropdown */}
        <select
          style={{ padding: "5px 10px", fontSize: "14px" }}
          onChange={(e) => setSort(e.target.value)}
          value={sort}
        >
          <option value="">Sort By</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
        </select>
      </div>
    </>
  );
};

export default Header;
