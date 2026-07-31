
import { courseData } from "@/app/data/course.data";
import CourseCard from "../components/course-card/course-card";
import './style.css';

export default function Example5() {
    
    return (
        <>
            <div className="container">
                <h1 className="heading">Upcoming Courses</h1>
                {courseData.map((courseItem) => (
                    <>
                        <CourseCard 
                            key={courseItem.id}
                            title={courseItem.title} 
                            numberOfSeats={courseItem.numberOfSeats}/>
                    </>
                ))}
                
            </div>
        </>
    )
}