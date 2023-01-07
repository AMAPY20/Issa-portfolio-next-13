import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    const handletoggle = () => {
        setToggle((prev) => !prev)
    }

    return (
        <>
            {/* Mobile Menu */}
            <div className="tokyo_tm_topbar bg-white fixed top-0 left-0 right-0 h-[50px] z-[14] hidden">
                <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
                    <div className="logo">
                        <a href="#">
                            <Image className="max-w-[100px] max-h-[40px]" src="" alt="" />
                            <h3 className="font-black font-poppins text-[25px] tracking-[4px]">Issa</h3>
                        </a>
                    </div>
                    <div className="trigger relative top-[5px]">
                        <div
                            className={
                                !toggle ? 'hamburger hamburger--slider' : 'hamburger hamburger--slider is-active'
                            }
                        >
                            <div onClick={handletoggle} className="hamburger-box w-[30px]">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={
                    !toggle
                        ? 'tokyo_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300'
                        : 'tokyo_tm_mobile_menu fixed top-[50px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 opened'
                }
            >
                <div className="menu_list w-full h-auto clear-both float-left text-right px-[20px] pt-[100px] pb-[0px]">
                    <ul className="transition_link list-none">
                        <li className="active mb-[7px]">
                            <Link className="text-black font-montserrat" href="/">
                                Home
                            </Link>
                        </li>
                        <li className="mb-[7px]">
                            <Link className="text-black font-montserrat" href="/About">
                                About
                            </Link>
                        </li>
                        <li className="mb-[7px]">
                            <Link className="text-black font-montserrat" href="/Service">
                                Service
                            </Link>
                        </li>
                        <li className="mb-[7px]">
                            <Link className="text-black font-montserrat" href="/Portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="mb-[7px]">
                            <Link className="text-black font-montserrat" href="/News">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link className="text-black font-montserrat" href="/Contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* /Mobile Menu */}

            <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
                <div className="leftpart_inner w-full h-auto">
                    <div className="logo">
                        <a href="#">
                            <h3 className="font-poppins font-black text-[31px] tracking-[5px]">TOKYO</h3>
                        </a>
                    </div>
                    <div className="menu px-[0px] py-[50px] w-full float-left">
                        <ul className="transition_link m-0 list-none">
                            <li className="active m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/About"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/Service"
                                >
                                    Service
                                </Link>
                            </li>
                            <li className="m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/Portfolio"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li className="m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/News"
                                >
                                    News
                                </Link>
                            </li>
                            <li className="m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/Contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright w-full float-left">
                        <p className="text-[15px] text-[#999] font-montserrat leading-[25px]">
                            &copy; 2022 Tokyo
                            <br />
                            Created by{' '}
                            <a
                                className="text-[#787878] font-medium transition-all duration-300 hover:text-black"
                                href="https://themeforest.net/user/marketify"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Marketify
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
