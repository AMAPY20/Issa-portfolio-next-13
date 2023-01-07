import Layout from '../Components/layout/Layout'
import RightPart from '../Components/layout/RightPart'
import Navbar from '../Components/Navbar/Navbar'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

export default function Homes() {
    return (
        <Layout>
            <Navbar/>
            <RightPart>
                {/* <!-- HOME --> */}
                <div id="home" className="tokyo_tm_section animated">
                    <div className="container">
                        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
                            <div className="home_content flex items-center">
                                <div
                                    className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
                                    data-type="wave"
                                >
                                    {/* <!-- data-type values are: "wave", "circle", "square"--> */}
                                    <div
                                        className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                                        data-img-url="assets/img/portfolio/1.jpg"
                                    ></div>
                                </div>
                                <div className="details ml-[80px]">
                                    <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                                        Issa <span>Halbi</span>
                                    </h3>
                                    <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                                        I am a WordPress Developer at heart and create features that are best suited for
                                        the job at hand.
                                    </p>
                                    <div className="social w-full float-left">
                                        <ul className="m-0 list-none">
                                            <li className="mr-[8px] inline-block">
                                                <a
                                                    className="text-black text-[20px] transition-all duration-300 hover:text-black"
                                                    href="#"
                                                >
                                                    <FaFacebookSquare className="w-auto h-auto" />
                                                </a>
                                            </li>
                                            <li className="mr-[8px] inline-block">
                                                <a
                                                    className="text-black text-[20px] transition-all duration-300 hover:text-black"
                                                    href="#"
                                                >
                                                    <FaTwitterSquare className="w-auto h-auto" />
                                                </a>
                                            </li>
                                            <li className="mr-[8px] inline-block">
                                                <a
                                                    className="text-black text-[20px] transition-all duration-300 hover:text-black"
                                                    href="#"
                                                >
                                                    <FaLinkedin className="w-auto h-auto" />
                                                </a>
                                            </li>
                                            <li className="mr-[8px] inline-block">
                                                <a
                                                    className="text-black text-[20px] transition-all duration-300 hover:text-black"
                                                    href="#"
                                                >
                                                    <FaGithubSquare className="w-auto h-auto" />
                                                </a>
                                            </li>
                                            <li className="inline-block">
                                                <a
                                                    className="text-black text-[20px] transition-all duration-300 hover:text-black"
                                                    href="#"
                                                >
                                                    <FaInstagramSquare className="w-auto h-auto" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /HOME --> */}
            </RightPart>
        </Layout>
    )
}
