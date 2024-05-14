"use client";

export default function filter({ setObjFilters, objFilters }) {
  return (
    <div className="filter-s">
      <div>
        <form className="max-w-sm mx-auto">
          <label
            for="countries"
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
            <option value="">Choose genre</option>
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
        <div>
          <label htmlFor="sortAZ">A-Z</label>
          <input
            type="radio"
            id="sortAZ"
            name="sortOrder"
            value={"A"}
            onChange={(e) =>
              setObjFilters({ ...objFilters, alphabetic: e.target.value })
            }
          />

          <label htmlFor="sortZA">Z-A</label>
          <input
            type="radio"
            id="sortZA"
            name="sortOrder"
            value={"Z"}
            onChange={(e) =>
              setObjFilters({ ...objFilters, alphabetic: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}
