import React, { useState } from "react";
import { IoIosMenu, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiBooksBold } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { IoCloseOutline } from "react-icons/io5";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [featOpen, setFeatOpen] = useState(false);
  // const [compOpen, setCompOpen] = useState(false);
  const [drops, setDrops] = useState({
    features: false,
    company: false
  })

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu Open");
  };

  // const toggleFeatures = () => {
  //   setFeatOpen(!featOpen);
  // };

  // const toggleComp = () => {
  //   setCompOpen(!compOpen);
  // };

  const toggleDrops = (drops) => {
      setDrops((prevState) => ({
        ...prevState,
        [drops] : !prevState[drops]
      }));
  }

  return (
    <>
      <div className="sm:w-full sm:flex items-center justify-between">
        <div className="flex m-4 justify-between items-center text-mBlack sm:gap-5">
          <h1 className="font-bold">
            <span className="text-3xl">snap</span>
          </h1>
          <button
            type="button"
            title="Toggle Menu"
            className={`sm:hidden`}
            onClick={toggleMenu}
          >
            <IoIosMenu className="text-4xl text-mGray" />
          </button>

          <div className="hidden sm:flex gap-14 text-mGray relative">
            <div className="relative">
              <a
                href="#"
                className="flex items-center gap-2 cursor-pointer hover:text-aBlack duration-300"
                onClick={() => toggleDrops("features")}
              >
                Features {drops.features ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </a>
              {drops.features && (
                <ul className="absolute top-ful left-0 bg-aWhite rounded-md shadow-xl shadow-mGray p-2 w-auto ">
                  <li className="flex items-center gap-2 m-2">
                    <img src="/images/icon-todo.svg" alt="" />
                    <a href="#">Todo List</a>
                  </li>
                  <li className="flex items-center gap-2 m-2">
                    <img src="/images/icon-calendar.svg" alt="" />
                    <a href="#">Calendar</a>
                  </li>
                  <li className="flex items-center gap-2 m-2 ">
                    <img src="/images/icon-reminders.svg" alt="" />
                    <a href="#">Reminders</a>
                  </li>
                  <li className="flex items-center gap-2 m-2">
                    <img src="/images/icon-planning.svg" alt="" />
                    <a href="#">Planning</a>
                  </li>
                </ul>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                className="flex items-center gap-2 cursor-pointer hover:text-aBlack duration-300"
                onClick={() => toggleDrops("company")}
              >
                Company{drops.company ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </a>
              {drops.company && (
                <ul className="absolute top-ful left-0 bg-aWhite rounded-md shadow-xl shadow-mGray p-2">
                  <li className="flex items-center gap-2 m-2">
                    <PiBooksBold className="text-amber-800" />
                    <a href="#">History</a>
                  </li>
                  <li className="flex items-center gap-2 m-2">
                    <RiTeamFill className="text-purple-800" />
                    <a href="#">Our Team</a>
                  </li>
                  <li className="flex items-center gap-2 m-2">
                    <ImBlog className="text-black" />
                    <a href="#">Blog</a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#" className="hover:text-aBlack duration-300">Carrers</a>
            <a href="#" className="hover:text-aBlack duration-300">About</a>
          </div>
        </div>

        <div className="hidden sm:flex gap-2 m-4 text-mGray">
          <button className="p-2 m-1 rounded-lg hover:bg-mGray hover:text-aWhite duration-500 ">Login</button>
          <button className="p-2 m-1 rounded-lg border-2 border-current hover:border-transparent hover:bg-mGray hover:text-aWhite duration-500 ">
            Register
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-mGray bg-opacity-50 z-50 flex justify-end text-mGray">
          <div className="flex flex-col bg-aWhite h-full w-2/3">
            <div className="flex justify-end w-full">
              <button onClick={toggleMenu} type="button" title="toggle menu">
                <IoCloseOutline className="text-4xl text-mGray" />
              </button>
            </div>
            <div className="flex flex-col m-5 gap-5">
              <div>
                <h3
                  className="flex items-center gap-2"
                  onClick={()=> toggleDrops("features")}
                >
                  Features {drops.features ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </h3>
                {drops.features && (
                  <ul className="">
                    <li className="flex items-center gap-2 m-2">
                      <img src="/images/icon-todo.svg" alt="" />
                      <a href="#">Todo List</a>
                    </li>
                    <li className="flex items-center gap-2 m-2">
                      <img src="/images/icon-calendar.svg" alt="" />
                      <a href="#">Calendar</a>
                    </li>
                    <li className="flex items-center gap-2 m-2">
                      <img src="/images/icon-reminders.svg" alt="" />
                      <a href="#">Reminders</a>
                    </li>
                    <li className="flex items-center gap-2 m-2">
                      <img src="/images/icon-planning.svg" alt="" />
                      <a href="#">Planning</a>
                    </li>
                  </ul>
                )}
              </div>
              <div>
                <h3 className="flex items-center gap-2" onClick={()=> toggleDrops("company")}>
                  Company {drops.company ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </h3>
                {drops.company && (
                  <ul className="">
                    <li className="flex items-center gap-2 m-2">
                      <PiBooksBold className="text-amber-800" />
                      <a href="#">History</a>
                    </li>
                    <li className="flex items-center gap-2 m-2">
                      <RiTeamFill className="text-purple-800" />
                      <a href="#">Our Team</a>
                    </li>
                    <li className="flex items-center gap-2 m-2">
                      <ImBlog className="text-black" />
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                )}
              </div>
              <a href="#">Carrers</a>
              <a href="#">About</a>
            </div>
            <div>
              <button className="p-2 m-1 rounded-lg" type="button">
                Login
              </button>
              <button
                className="p-2 m-1 rounded-lg border-2 border-current"
                type="button"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
