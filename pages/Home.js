import Link from "next/link"
export default function Home() {
  return (
    <>
      <div class="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
      <div class="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">

        <div id="home" className="tokyo_tm_section animated">
              <div className="container">
                <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
                  <div className="home_content flex items-center">
                    <div className="avatar min-w-[300px] min-h-[300px] relative rounded-full" data-type="wave"> 
                      <div className="image absolute inset-0 bg-no-repeat bg-center bg-cover" data-img-url="/public/profile.jpeg"></div>
                    </div>
                    <div className="details ml-[80px]">
                      <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">Issa <span>Halbi</span></h3>
                      <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">I am a WordPress Developer at heart and create features that are best suited for the job at hand.</p>
                      <div className="social w-full float-left">
                        <ul className="m-0 list-none">
                          <li className="mr-[8px] inline-block">
                            <Link className="text-black text-[20px] transition-all duration-300 hover:text-black"     href="/Home">
                              <i className="icon-facebook-squared"></i>
                            </Link>
                          </li>
                          <li className="mr-[8px] inline-block">
                            <Link className="text-black text-[20px] transition-all duration-300 hover:text-black" href="/About">
                              <i className="icon-twitter-squared"></i>
                            </Link>
                          </li>
                          <li className="mr-[8px] inline-block"><a className="text-black text-[20px] transition-all duration-300 hover:text-black" href="#"><i className="icon-behance-squared"></i></a></li>
                          <li className="mr-[8px] inline-block"><a className="text-black text-[20px] transition-all duration-300 hover:text-black" href="#"><i className="icon-linkedin-squared"></i></a></li>
                          <li className="inline-block"><a className="text-black text-[20px] transition-all duration-300 hover:text-black" href="#"><i className="icon-instagram-"></i></a></li>
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
