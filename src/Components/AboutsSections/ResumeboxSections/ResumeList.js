import React from 'react'

export default function ResumeList({ date, CompanyName, WorkDescreption, key }) {
    return (
        <li key={key} className="m-0 w-full float-left relative pl-[20px] pb-[45px] resumeCustom_li">
            <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                <div className="time w-1/2 pr-[20px]">
                    <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                        {date}
                    </span>
                </div>
                <div className="place w-1/2 pl-[20px]">
                    <h3 className="text-[16px] mb-[2px] font-semibold"> {CompanyName} </h3>
                    <span className="text-[14px]"> {WorkDescreption} </span>
                </div>
            </div>
        </li>
    )
}
