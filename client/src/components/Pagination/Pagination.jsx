import React from "react";
import "./Pagination.css";

function Pagination({ Allpokemons, pokemonsPerPage, paginated }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(Allpokemons / pokemonsPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <ul className="pagination">
      {pageNumber &&
        pageNumber.map((number) => {
          return (
            <li key={number}>
              <button onClick={() => paginated(number)}>{number}</button>
            </li>
          );
        })}
    </ul>
  );
}

export default Pagination;
