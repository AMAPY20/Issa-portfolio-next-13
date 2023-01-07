import { AboutData } from '../../data/Data'

export default function Skillsbox() {
    const skillslist = AboutData.SkillsList
    const interests = AboutData.Interests

    return (
        <div className="tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]">
            <div className="container">
                <div className="in w-full h-auto clear-both float-left flex">
                    <div className="left w-1/2 pr-[50px]">
                        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                            <h3 className="text-[20px] font-bold">Knowledge</h3>
                        </div>
                        <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                            <ul className="m-0 list-none">
                                {skillslist.map((item) => (
                                    <li key={item.id}>
                                        <div className=" flex items-center custom_list_b ">
                                            {item.icons}
                                            <span className="custom_list">{item.skills}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="right w-1/2 pl-[50px]">
                        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                            <h3 className="text-[20px] font-bold">Interests</h3>
                        </div>

                        <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                            <ul className="m-0 list-none">
                                {interests.map((item) => (
                                    <li key={item.id}>
                                        <div className=" flex items-center custom_list_b ">
                                            {item.icons}
                                            <span className="custom_list">{item.skills}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
