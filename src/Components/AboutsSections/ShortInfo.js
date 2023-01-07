import { AboutData } from '../../data/Data'

export default function ShortInfo() {
    return (
        <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
            <div className="left w-1/2 pr-[50px]">
                <div className="tokyo_tm_info w-full h-auto clear-both float-left">
                    <ul className="m-0 list-none">
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Birthday:</span>
                            <span>{AboutData.ShortInfo.Birthday}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Age:</span>
                            <span>{AboutData.ShortInfo.Age}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Address:</span>
                            <span>{AboutData.ShortInfo.Address}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Email:</span>
                            <span>
                                <a
                                    className="text-[#767676] transition-all duration-300 hover:text-black"
                                    href={`mailto:${AboutData.ShortInfo.Email}`}
                                >
                                    {AboutData.ShortInfo.Email}
                                </a>
                            </span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Phone:</span>
                            <span>
                                <a
                                    className="text-[#767676] transition-all duration-300 hover:text-black"
                                    href={`tel:${AboutData.ShortInfo.Phone}`}
                                >
                                    {AboutData.ShortInfo.Phone}
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
                <div className="tokyo_tm_info">
                    <ul className="m-0 list-none">
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                                Nationality:
                            </span>
                            <span>{AboutData.ShortInfo.Nationality}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Study:</span>
                            <span>{AboutData.ShortInfo.Study}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Degree:</span>
                            <span>{AboutData.ShortInfo.Degree}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Interest:</span>
                            <span>{AboutData.ShortInfo.Iinterest}</span>
                        </li>
                        <li className="m-0">
                            <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Freelance:</span>
                            <span>{AboutData.ShortInfo.Freelance}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
