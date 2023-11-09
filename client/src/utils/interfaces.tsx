export interface CalendarHeaderProps {
    currentDate: Date;
    onPrevClick: () => void;
    onNextClick: () => void
}

export interface CalendarGridProps {
    currentDate: Date;
}

export interface Schedule {
    id: number;
    user_id: number;
    date: Date;
}

export interface ScheduleData {
    schedules: Schedule[];
}

export interface Day {
    date: number,
    status: boolean,
    schedule: boolean,
}
