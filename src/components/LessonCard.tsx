import { Link } from 'react-router-dom';
interface LessonCardProp{
    title:string
}

export default function LessonCard({title}:LessonCardProp){
    return(
        <div className='lesson-card'>
            <h3 className='lesson-card-title'>{title}</h3>
            <div className='lesson-card-actions'>
                <Link className='lesson-card-button' to={`/${title}`}>Open Lesson</Link>
            </div>
        </div>
    );

}