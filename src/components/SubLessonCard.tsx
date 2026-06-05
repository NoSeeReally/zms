import { Link } from "react-router-dom";

interface SubLessonsProp{
    title:string
}
export default function SubLessonCard({title}:SubLessonsProp){
    return(
        <>
            <Link className="subLesson-card" to={`/${title}`} aria-label={`Open ${title}`}>
                <h4 className="subLesson-card-title">{title}</h4>
            </Link>
        </>
    );
}