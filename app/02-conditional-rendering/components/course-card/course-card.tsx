import { ICourseItem } from "@/app/models/course.interface";

export default function CourseCard({
    title,
    numberOfSeats
}: ICourseItem) {

    const enrollFullJsx = numberOfSeats > 0 && numberOfSeats <= 5 ? (
        <>
            <p className="warning">Almost Full</p>
        </>
    ): null;
    const enrollJsx = numberOfSeats > 0 ? (
        <>
            <p className="status">Open for Enrollment</p>
            {enrollFullJsx}
            <button className="enroll-btn">Enroll Now</button>  
        </>) : null;

    const noSeatAvailable = numberOfSeats === 0 ? (
        <>
            <p className="status">Sold Out</p>
        </>
    ): null;
    
    return (
        <>
            <div className="card">
                <h2>{title}</h2>
                <p className="seats">
                    {numberOfSeats} seats left
                </p>
                {enrollJsx}
                {noSeatAvailable}
            </div>
        </>
    )
}