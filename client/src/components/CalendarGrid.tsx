import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';
import { CalendarGridProps, ScheduleData } from '../utils/interfaces';

//Define the GraphQL query to fetch schedules
const GET_SCHEDULES = gql`
  query GetSchedules{
    schedules {
      id
      user_id
      date
    }
  }
`;

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate }) => {

    const { data } = useQuery<ScheduleData>(GET_SCHEDULES, {
        variables: { month: currentDate },
    });

    const firstDayIndex: number = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDay: number = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const lastDayIndex: number = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
    let pastDay: number = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate() - firstDayIndex;

    const startBlanks: JSX.Element[] = [];
    const endBlanks: JSX.Element[] = [];
    const days: JSX.Element[] = [];

    for (let i = 0; i < firstDayIndex; i++) {
        startBlanks.push(
            <button disabled key={-pastDay} className='w-[39px] h-[39px] opacity-30 m-[5px]'>
                {pastDay + 1}
            </button>
        )
        pastDay++;
    }
    for (let i = 1; i <= lastDay; i++) {
        days.push(
            <button key={i} className='w-[39px] h-[39px] border-[1px] border-gray-light rounded-full m-[5px] '>
                {i}
            </button>
        )
    }
    for (let i = 1; i <= 6 - lastDayIndex; i++) {
        endBlanks.push(
            <button disabled key={-i} className={'w-[39px] h-[39px] opacity-30 m-[5px]'}>
                {i}
            </button>
        )
    }
    return (
        <div className="px-[15px] flex flex-wrap">
            {[...startBlanks, ...days, ...endBlanks]}
        </div>
    );
};

export default CalendarGrid;
