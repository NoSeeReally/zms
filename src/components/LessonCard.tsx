interface LessonCardProp{
    title:string
    status?: 'ongoing' | 'Yet to learn'
}

export default function LessonCard({title, status = 'Yet to learn'}:LessonCardProp){
    const statusClassName = status === 'ongoing' ? 'lesson-pill ongoing' : 'lesson-pill yet-to-learn';

    return(
        <div className='lesson-card'>
            <h3 className='lesson-card-title'>{title}</h3>
            <div className='lesson-card-actions'>
                <span className={statusClassName}>{status}</span>
                <button className='lesson-card-button' type='button'>Open Lesson</button>
            </div>
        </div>
    );

}