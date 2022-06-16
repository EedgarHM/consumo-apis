import React from "react";
import { Outlet, Link } from "react-router-dom";


export const MainLayout = () => {
  return (
    <div>
    <Link to="/">
    <h1 className="text-center bg-slate-900 p-10 text-cyan-600 uppercase text-2xl bg-fixed" >
        Api Consumer
      </h1>
    </Link>
      <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-slate-800  px-5 py-10 ">
          <aside className="md:block">
            <Link
              className=" w-full md:block text-center hover:bg-slate-700 p-5 text-2xl uppercase text-teal-600"
              to="/pokemon"
            >
              Pokemon
            </Link>

            <Link
              className=" w-full  mt-5 hover:bg-slate-700  md:block text-center p-5 text-2xl uppercase text-teal-600"
              to="/rick-morty"
            >
              Rick & Morty
            </Link>

            <Link
              className=" w-full mt-5 bg-slate-800 md:block text-center p-5 text-2xl uppercase text-teal-600"
              to="/movies"
            >
              Movies
            </Link>
          </aside>
        </div>

        <div className="md:w-3/4 p-5 md:h-screen overflow-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
