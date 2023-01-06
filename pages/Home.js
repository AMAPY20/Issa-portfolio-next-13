import Link from "next/link"
import Layout from "../src/Components/layout/Layout"
import RightPart from "../src/Components/layout/RightPart"
import Navbar from "../src/Components/Navbar"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa"

export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <RightPart>
        {/* <!-- HOME --> */}
        <div id='home' class='tokyo_tm_section animated'>
          <div class='container'>
            <div class='tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative'>
              <div class='home_content flex items-center'>
                <div
                  class='avatar min-w-[300px] min-h-[300px] relative rounded-full'
                  data-type='wave'>
                  {/* <!-- data-type values are: "wave", "circle", "square"--> */}
                  <div
                    class='image absolute inset-0 bg-no-repeat bg-center bg-cover'
                    data-img-url='assets/img/portfolio/1.jpg'></div>
                </div>
                <div class='details ml-[80px]'>
                  <h3 class='name text-[55px] font-extrabold uppercase mb-[14px]'>
                    Issa <span>Halbi</span>
                  </h3>
                  <p class='job font-montserrat font-medium max-w-[450px] mb-[25px]'>
                    I am a WordPress Developer at heart and create features that
                    are best suited for the job at hand.
                  </p>
                  <div class='social w-full float-left'>
                    <ul class='m-0 list-none'>
                      <li class='mr-[8px] inline-block'>
                        <a
                          class='text-black text-[20px] transition-all duration-300 hover:text-black'
                          href='#'>
                          <FaFacebookSquare className="w-auto h-auto" />
                        </a>
                      </li>
                      <li class='mr-[8px] inline-block'>
                        <a
                          class='text-black text-[20px] transition-all duration-300 hover:text-black'
                          href='#'>
                          <FaTwitterSquare className="w-auto h-auto"/>
                        </a>
                      </li>
                      <li class='mr-[8px] inline-block'>
                        <a
                          class='text-black text-[20px] transition-all duration-300 hover:text-black'
                          href='#'>
                          <FaLinkedin className="w-auto h-auto"/>
                        </a>
                      </li>
                      <li class='mr-[8px] inline-block'>
                        <a
                          class='text-black text-[20px] transition-all duration-300 hover:text-black'
                          href='#'>
                          <FaGithubSquare className="w-auto h-auto"/>
                        </a>
                      </li>
                      <li class='inline-block'>
                        <a
                          class='text-black text-[20px] transition-all duration-300 hover:text-black'
                          href='#'>
                          <FaInstagramSquare className="w-auto h-auto"/>
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
