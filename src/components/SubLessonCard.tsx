interface SubLessonsProp{
    title:string
}
export default function SubLessonCard({title}:SubLessonsProp){
    return(
        <>
            <div className="subLesson-card">
                <h4 className="subLesson-card-title">{title}</h4>
            </div>
        </>
    );
}