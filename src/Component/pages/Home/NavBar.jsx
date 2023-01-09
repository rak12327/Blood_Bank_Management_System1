import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";

const NavBar = () => {
  const activeStyle = `text-[crimson] font-semibold text-[1rem]`;
  const unActiveStyle = `font-semibold text-[1rem]`;

  const [openNavBar, setOpenNavBar] = useState(true);

  const { token } = useSelector((state) => state.auth);
  // const user = JSON.parse(localStorage.getItem("token"));

  return (
    <div className="h-[3.5rem] lg:h-[4rem]">
      <div className="fixed top-0 z-20 w-[100%] bg-[#fff] shadow-sm">
        <div className="flex justify-center">
          <div className="max-w-[1300px] w-[100%] h-[3.5rem] lg:h-[4rem] border-b'">
            {/* destop view */}
            <div className="px-[1rem] py-[.8rem] flex items-center justify-between">
              <div className="w-[15%] md:w-[10%] lg:w-[7%]">
                <img src="/assets/logo.png" alt="..." className="w-full" />
              </div>
              <div className="hidden sm:block">
                <nav>
                  <ul className="flex items-center justify-between gap-[1.25rem] md:gap-[2.5rem]">
                    <li>
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive ? activeStyle : unActiveStyle
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/Donor"}
                        className={({ isActive }) =>
                          isActive ? activeStyle : unActiveStyle
                        }
                      >
                        Donor
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/Request"}
                        className={({ isActive }) =>
                          isActive ? activeStyle : unActiveStyle
                        }
                      >
                        Request
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/Contact-us"}
                        style={{ width: "80%" }}
                        className={({ isActive }) =>
                          isActive ? activeStyle : unActiveStyle
                        }
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    {!token ? (
                      <li className="flex items-center justify-between gap-2">
                        <NavLink
                          to={"/sign-in"}
                          className={({ isActive }) =>
                            isActive ? activeStyle : unActiveStyle
                          }
                        >
                          Sign in
                        </NavLink>

                        <NavLink
                          to={"/sign-up"}
                          className={`rounded-[.5rem] text-white bg-[black]  border-none px-[1rem] py-[.4rem]`}
                        >
                          Sign up
                        </NavLink>
                      </li>
                    ) : (
                      <li>
                        <NavLink
                          to={"/profile/user"}
                          className={({ isActive }) =>
                            isActive ? activeStyle : unActiveStyle
                          }
                        >
                          Account
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
              <div className="sm:hidden">
                {openNavBar ? (
                  <MenuIcon
                    className="h-5 w-5"
                    onClick={(e) => setOpenNavBar(!openNavBar)}
                  />
                ) : (
                  <XIcon
                    className="w-5 h-5"
                    onClick={(e) => setOpenNavBar(!openNavBar)}
                  />
                )}
              </div>
            </div>

            {/* mobile view */}
            {!openNavBar && (
              <nav className="sm:hidden bg-[#fff] max-h-[70vh] overflow-y-auto z-10 fixed shadow-md w-full duration-1000">
                <ul className="px-[1.5rem] py-[1.5rem]">
                  <li className="border-b border-black py-[.5rem] ">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? activeStyle : unActiveStyle
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="border-b border-black py-[.5rem] ">
                    <NavLink
                      to={"/Donor"}
                      className={({ isActive }) =>
                        isActive ? activeStyle : unActiveStyle
                      }
                    >
                      Donor
                    </NavLink>
                  </li>
                  <li className="border-b border-black py-[.5rem] ">
                    <NavLink
                      to={"/Request"}
                      className={({ isActive }) =>
                        isActive ? activeStyle : unActiveStyle
                      }
                    >
                      Request
                    </NavLink>
                  </li>
                  <li className="border-b border-black py-[.5rem] ">
                    <NavLink
                      to={"/Contact-us"}
                      className={({ isActive }) =>
                        isActive ? activeStyle : unActiveStyle
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <div className="flex flex-col items-start mt-[1rem]">
                    {!token ? (
                      <>
                        <NavLink
                          to={"/sign-in"}
                          className={
                            "border border-black bg-transparent w-full mb-[1rem] text-center py-[.5rem] rounded-md font-normal outline-none"
                          }
                        >
                          Sign in
                        </NavLink>

                        <NavLink
                          to={"/sign-up"}
                          className={`text-white bg-[black] outline-none w-full py-[.5rem] text-center rounded-md`}
                        >
                          Sign up
                        </NavLink>
                      </>
                    ) : (
                      <NavLink
                        to={"/profile"}
                        className={({ isActive }) =>
                          isActive ? activeStyle : unActiveStyle
                        }
                      >
                        Account
                      </NavLink>
                    )}
                  </div>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
