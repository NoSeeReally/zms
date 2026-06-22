import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const rightTriangleTrigLesson: LessonCard[] = [
    {
        type: "content",
        title: "Right Triangle",
        content: ``,
        
    },
     {
        type: "content",
        title: "Right Triangle",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Right Triangle",
        content: `` 
    },
    {
        type: "content",
        title: "Right Triangle",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Right Triangle",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Right Triangle",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Right Triangle",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Right Triangle",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Right Triangle",
        content: ``
        
    }
];

export default function RightTriangleTrigonometry(){

    return(
        <>
           return <LessonRenderer lessonTitle="Right Triangle Trigonometry" cards={rightTriangleTrigLesson} returnPath="/Trigonometry" />;
        </>
    );
}