"use client";

export default function menuFilter({ setObjFilters, objFilters, setResearch }) {
  return (
    <div className="filter-s">
      <div>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="genres"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Genre :
          </label>
          <select
            id="countries"
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
          <div>Trier par :</div>
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
              }
            }}
            className="mb-4 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Choisir</option>
            <option value="A">A-Z</option>
            <option value="Z">Z-A</option>
            <option value="1">Plus récent</option>
            <option value="2">Plus ancien</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
        </form>

        <div>
          <label htmlFor="sortTOP">Top Choice:</label>
          <label className="switch">
            <input
              type="checkbox"
              id="topmovies"
              checked={objFilters.topSearch}
              onChange={() =>
                setObjFilters({
                  ...objFilters,
                  topSearch: !objFilters.topSearch,
                })
              }
            />
            <span className="slider"></span>
          </label>
        </div>
        <div>
          <input
            type="search"
            className="border border-red-500"
            onChange={(e) => setResearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
