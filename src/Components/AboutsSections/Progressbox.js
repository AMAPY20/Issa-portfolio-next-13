
import { AboutData } from '../../data/Data'

export default function Progressbox() {

    const progressbox = AboutData.Progressbox;
    const linguages = AboutData.Linguages;

    return (
        <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
            <div className="container">
                <div className="in w-full h-auto clear-both float-left flex">
                    <div className="left w-1/2 pr-[50px]">
                        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                            <h3 className="text-[20px] font-bold">Programming Skills</h3>
                        </div>
                        <div className="tokyo_progress">
                            {progressbox.map((item) => (
                                <div key={item.id} className="progress_inner" data-value={item.number}>
                                    <span>
                                        <span className="label">{item.label}</span>
                                        <span className="number">{item.number}%</span>
                                    </span>
                                    <div className="background">
                                        <div className="bar">
                                            <div className="bar_in" style={{width:`${item.number}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="right w-1/2 pl-[50px]">
                        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
                            <h3 className="text-[20px] font-bold">Language Skills</h3>
                        </div>
                        <div className="tokyo_progress">
                            {linguages.map((item) => (
                                <div key={item.id} className="progress_inner" data-value={item.number}>
                                    <span>
                                        <span className="label">{item.label}</span>
                                        <span className="number">{item.number}%</span>
                                    </span>
                                    <div className="background">
                                        <div className="bar">
                                            <div className="bar_in" style={{width:`${item.number}%`}}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
