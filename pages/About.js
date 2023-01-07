import Image from 'next/image'
import Progressbox from '../src/Components/AboutsSections/Progressbox'
import Resumebox from '../src/Components/AboutsSections/ResumeboxSections/Resumebox'
import Skillsbox from '../src/Components/AboutsSections/Skillsbox'
import Testimonials from '../src/Components/AboutsSections/Testimonials'
import Layout from '../src/Components/layout/Layout'
import RightPart from '../src/Components/layout/RightPart'
import profile from '../public/profile.jpeg'
import ShortInfo from '../src/Components/AboutsSections/ShortInfo'
import Navbar from '../src/Components/Navbar/Navbar'
import 'animate.css'
export default function About() {
    return (
        <Layout>
            <Navbar />
            <RightPart>
                <div id="about" className="tokyo_tm_section animate__fadeInLeft">
                    <div className="container">
                        <div className="tokyo_tm_about w-full h-auto clear-both float-left py-[100px] px-0">
                            <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                                <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                                    <div className="left">
                                        <span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">
                                            About
                                        </span>
                                        <h3 className="font-extrabold font-montserrat">About Me</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
                                <Image
                                    className="min-w-full animate__fadeInLeft"
                                    src={profile}
                                    alt={'profile'}
                                    // width="auto"
                                    // height="auto"
                                />
                            </div>
                            <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
                                <h3 className="text-[22px] font-bold"> Issa Halabi</h3>
                                <span>Software Engineer</span>
                            </div>
                            <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
                                <p className="mb-[11px]">
                                    Results-driven and experienced software engineer with a background in executing
                                    innovative software solutions with Back End development expertise in MERN Stack, R&D
                                    and code writing using different programming languages in order to improve
                                    efficiency, traceability, productivity and excellent outcomes.
                                </p>
                                <p>
                                    I want to pursue a job opportunity where I can apply my technical expertise along
                                    with my professional skills as well as to be able to learn new things to enrich my
                                    career path.
                                </p>
                            </div>

                            <ShortInfo />

                            <div className="tokyo_tm_button " data-position="left">
                                <a className="rounded-xl" href="../public/Issa Al-Halabi.pdf" download>
                                    <span>Download CV</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <Progressbox />

                    <Skillsbox />

                    <Resumebox />

                    <Testimonials />
                </div>
            </RightPart>
        </Layout>
    )
}
