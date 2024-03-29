import React from 'react'
import "./style.css"
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className='m_top bg-white   d-flex align-items-center '>
                <div className="container  p-0">
                    <div className="row w-100 mx-auto d-flex justify-content-between align-items-center">
                        <div className='col-12 col-md-7 '>
                            <div className='row d-flex align-items-center'>
                                <div className='col-12 col-md-3'>
                                    <div className='logo'>
                                        <img width={150} style={{ mixBlendMode: "multiply" }} src={"bookmyshow.webp"} alt="" />
                                    </div>
                                </div>

                                <div className='col-12 col-md-9'>
                                    <div className='border d-flex align-items-center  rounded-2 p-1 px-2'>
                                        <CiSearch size={20} className='mt-1' />
                                        <input type="text" placeholder='Search for Movies, Plays, sport and activities' className='border-0' style={{ flex: 1, outline: "none" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-3 ' style={{ cursor: "pointer" }}>
                            <div className='row text-end align-items-center justify-content-end'>
                                <div className='col-12 col-md-10 d-flex align-items-center  justify-content-end gap-4'>
                                    <div className='d-flex  gap-2'>
                                        <span>Bhokardan</span><MdKeyboardArrowDown color='#6B7188' className='mt-1' />
                                    </div>
                                    <button className='btn btn-sm m_bg_pinkish text-white m_sign_in px-3 border-0'>Sing In</button>
                                </div>
                                <div className='col-12 col-md-2'>
                                    <RxHamburgerMenu size={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header top end */}

            {/* header bottom starts */}
            <div className='m_bottom border-bottom'>
                <div className="container">
                    <div className='row p-2 justify-content-between'>
                        <div className='col-12 col-md-5'>
                            <ul className='d-flex gap-3 '>
                                <li>
                                    <NavLink to={"/"}>Movies </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/stream"}>Stream </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/events"}>Events </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/plays"}>Plays </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/sports"}>Sports </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/activities"}>Activities </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-3 '>
                            <ul className='d-flex gap-3 justify-content-end'>
                                <li>
                                    <NavLink to={"/list-your-shows"}><span>Listyourshow</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/corporates"}><span>corporates</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/offers"}><span>offers</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/Giftcards"}><span>Giftcards</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
