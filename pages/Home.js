import {FaTwitterSquare, FaFacebookSquare, FaLinkedin, FaInstagramSquare} from 'react-icons/fa'
import Image from 'next/Image'
import Link from 'next/link'
import {MdOutlineMenuOpen} from 'react-icons/md'
import Navbar from '../src/Components/Navbar'
export default function Home() {
  return (
    <>

      {/* <Navbar/> */}

      <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
                <div className="leftpart_inner w-full h-auto">
                    <div className="logo" data-type="image">
                        <a href="#">
                            <img className="max-w-[150px]" src="assets/img/logo/dark.png" alt="" />
                            <h3 className="font-poppins font-black text-[31px] tracking-[5px]">TOKYO</h3>
                        </a>
                    </div>
                    <div className="menu px-[0px] py-[50px] w-full float-left">
                        <ul className="transition_link m-0 list-none">
                            <li className="active m-0 w-full float-left">
                                <Link
                                    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                                    href="/Home"
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
      





      <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
      <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">

        <div id="home" className="tokyo_tm_section animated">
          <div className="container">
            <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
              <div className="home_content flex items-center">
                <div className="avatar min-w-[300px] min-h-[300px] relative rounded-full" data-type="wave"> 
                  <div className="image absolute inset-0 bg-no-repeat bg-center bg-cover"></div>
                </div>
                <div className="details ml-[80px]">
                  <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">Issa <span>Halbi</span></h3>
                  <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">I am a WordPress Developer at heart and create features that are best suited for the job at hand.</p>
                  <div className="social w-full float-left">
                    <ul className="m-0 list-none">
                      <li className="mr-[8px] inline-block">
                        <a className="text-black text-[23px] transition-all duration-300 hover:text-black" href="#">
                          <FaFacebookSquare className=" w-auto h-auto "/>
                        </a>
                      </li>
                      <li className="mr-[8px] inline-block">
                        <a className="text-black text-[23px] transition-all duration-300 hover:text-black" href="#">
                          <FaTwitterSquare className=" w-auto h-auto "/>
                        </a>
                      </li>
                      
                      <li className=" mr-[8px] bord inline-block">
                        <a className="text-black text-[23px] transition-all duration-300 hover:text-black" href="#">
                          <FaInstagramSquare className=" w-auto h-auto "/>
                        </a>
                      </li>

                      <li className="mr-[8px] inline-block">
                        <a className="text-black text-[23px]  transition-all duration-300 hover:text-black" href="#">
                          <FaLinkedin className=" w-auto h-auto "/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
