import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    console.log(postPerPage, totalPosts );
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className=" mb-2 w-full h-10 text-teal-900 flex space-x-1 justify-end ">
        {pageNumber.map((number) => (
          <li
            key={number}
            className="border-2 p-2 m-0 hover:bg-teal-800 hover:text-white"
          >
            <a onClick={()=>paginate(number)}>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
