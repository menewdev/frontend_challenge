import React from "react";
import { CalendarHeaderProps } from "../utils/interfaces";

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, onPrevClick, onNextClick }) => {
    const year: number = currentDate.getFullYear();
    const month: number = currentDate.getMonth() + 1;

    const weekdaysList: string[] = ['日', '月', '火', '水', '木', '金', '土'];
    return (
        <div className="text-center mt-[20px]">
            <h2 className="font-roboto text-[11px] text-gray-dark">{year}</h2>
            <div className="flex justify-between ">
                <button className="text-grey" onClick={onPrevClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <p className="font-roboto text-[20px] text-gray-dark">{month}<span className="font-hira">月</span></p>
                <button className="text-grey" onClick={onNextClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="flex justify-between px-[20px]">
                {weekdaysList.map((day, index) => (
                    <div key={day} className={'text-[11px] ' + (index === 0 ? "text-red" : index === 6 ? 'text-blue-dark' : 'text-gray')}>
                        {day}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarHeader;