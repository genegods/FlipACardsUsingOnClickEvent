import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Register from "./components/user/Register";
import Login from "./components/user/Login";


const FormPage = () => {
    const activeLink = 'border-red-500 border-b-4'
    const normalLink = ''
  return (
    <React.Fragment>
      <section>
        <div className="wrapper text-white w-full h-96 md:h-screen md:pt-36">
          <div className="w-full font-semibold text-2xl flex justify-evenly uppercase pt-5 md:px-20">
            <NavLink to='/'
            className={({ isActive }) =>
            isActive ? activeLink : normalLink}
            >
              <p>register</p>
            </NavLink>
            <NavLink to='/login'
            className={({ isActive }) =>
            isActive ? activeLink : normalLink}
            >
              <p>login</p>
            </NavLink>
          </div>
          <div className='md:ml-32'>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FormPage;
