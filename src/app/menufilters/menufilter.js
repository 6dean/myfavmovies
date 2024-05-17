"use client";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

export default function menuFilter({ setObjFilters, objFilters, setResearch }) {
  return (
    <div className="filter-s">
      <div>
        <form className="w-[200px]">
          <select
            id="genres"
            className=""
            onChange={(e) =>
              setObjFilters({ ...objFilters, genre: e.target.value })
            }
          >
            <option value="">Genre</option>
            <option value="Action">Action</option>
            <option value="Animation">Animation</option>
            <option value="Aventure">Aventure</option>
            <option value="Biographie">Biographie</option>
            <option value="Comédie">Comédie</option>
            <option value="Drame">Drame</option>
            <option value="Famille">Famille</option>
            <option value="Fantaisie">Fantaisie</option>
            <option value="Fantastique">Fantastique</option>
            <option value="Guerre">Guerre</option>
            <option value="Horreur">Horreur</option>
            <option value="Mystère">Mystère</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
          </select>
        </form>
      </div>
      <div>
        <form className="w-[200px]">
          <select
            id="sort"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "A" || value === "Z") {
                setObjFilters({
                  ...objFilters,
                  alphabetic: value,
                  year: "",
                  note: "",
                });
              } else if (value === "1" || value === "2") {
                setObjFilters({
                  ...objFilters,
                  alphabetic: "",
                  year: value,
                  note: "",
                });
              } else if (value === "good" || value === "bad") {
                setObjFilters({
                  ...objFilters,
                  alphabetic: "",
                  year: "",
                  note: value,
                });
              } else if (value === "") {
                setObjFilters({
                  ...objFilters,
                  alphabetic: "",
                });
              }
            }}
            className=""
          >
            <option value="">Trier par</option>
            <option value="A">Alphabétique ↓</option>
            <option value="Z">Alphabétique ↑</option>
            <option value="1">Plus récent</option>
            <option value="2">Plus ancien</option>
            <option value="good">Notes ↓</option>
            <option value="bad">Notes ↑</option>
          </select>
        </form>
      </div>

      <div>
        <div>
          {objFilters.topSearch ? (
            <div
              className="topChoice-styleTrue"
              onClick={() =>
                setObjFilters({
                  ...objFilters,
                  topSearch: !objFilters.topSearch,
                })
              }
            >
              <span style={{ marginRight: "6px" }}>Top Choice</span>
              <FaStar color="orange" size={24} />
            </div>
          ) : (
            <div
              className="topChoice-style"
              onClick={() =>
                setObjFilters({
                  ...objFilters,
                  topSearch: !objFilters.topSearch,
                })
              }
            >
              <span style={{ marginRight: "6px" }}>Top Choice</span>
              <FaRegStar
                size={24}
                onClick={() =>
                  setObjFilters({
                    ...objFilters,
                    topSearch: !objFilters.topSearch,
                  })
                }
              />
            </div>
          )}
        </div>
      </div>

      <div>
        <div>
          <input
            type="search"
            placeholder="Rechercher un film"
            className="searchInput-style"
            onChange={(e) => setResearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
