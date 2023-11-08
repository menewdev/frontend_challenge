import React, { useState } from 'react';
import CalendarHeader from '../components/CalendarHeader';

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };
    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <div className='w-[375px] h-[355px] m-auto mt-20 bg-white border-[1px] border-gray-light '>
            <CalendarHeader
                currentDate={currentDate}
                onPrevClick={prevMonth}
                onNextClick={nextMonth}
            />
        </div>
    );
};

export default Calendar;