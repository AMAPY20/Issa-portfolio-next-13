import ResumeList from './ResumeList'
import {ResumeListData} from '../../../data/Data'

export default function Resumebox() {
    
    return (
        <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
            <div className="container">
                <div className="in w-full h-auto clear-both float-left flex">
                    <div className="left w-1/2 pr-[50px]">
                        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                            <h3 className="text-[20px] font-bold">Education</h3>
                        </div>
                        <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
                            <ul className="m-0 list-none relative inline-block pt-[10px] ">

                                {ResumeListData.Education.map((item) => (
                                    <ResumeList
                                        key={item.id}
                                        date={item.date}
                                        CompanyName={item.UniName}
                                        WorkDescreption={item.Degree}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="right w-1/2 pl-[50px]">
                        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                            <h3 className="text-[20px] font-bold">Experience</h3>
                        </div>

                        <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
                            <ul className="m-0 list-none relative inline-block pt-[10px]">
                                {ResumeListData.Experience.map((item) => (
                                    <ResumeList
                                        key={item.id}
                                        date={item.date}
                                        CompanyName={item.CompanyName}
                                        WorkDescreption={item.WorkDescreption}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
