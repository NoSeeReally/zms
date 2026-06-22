import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const unitCircleLesson: LessonCard[] = [
    {
        type: "content",
        title: "Unit Circle",
        content: ``,
        
    },
     {
        type: "content",
        title: "Unit Circle",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Unit Circle",
        content: `` 
    },
    {
        type: "content",
        title: "Unit Circle",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Unit Circle",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Unit Circle",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Unit Circle",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Unit Circle",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Unit Circle",
        content: ``
        
    }
];

export default function UnitCircle(){

    return(
        <>
           return <LessonRenderer lessonTitle="Unit Circle" cards={unitCircleLesson} returnPath="/Trigonometry" />;
        </>
    );
}