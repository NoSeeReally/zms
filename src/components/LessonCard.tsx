import { Link } from 'react-router-dom';
import openLesson from '../assets/openLesson.png'
interface LessonCardProp{
    title:string
    index:number
}

export default function LessonCard({title,index}:LessonCardProp){
    return(
        <div className='lesson-card'>
            <div className='lesson-pill'>{index}</div>
            <h3 className='lesson-card-title'>{title}</h3>
            <div className='lesson-card-actions'>
                <Link className='lesson-card-button' to={`/${title}`}><img src={openLesson} alt="Lesson" className='navButton-icon' /></Link>
            </div>
        </div>
    );

}