import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const inverseTrigFuncLesson: LessonCard[] = [
    {
        type: "content",
        title: "Inverse Trig Functions",
        content: ``,
        
    },
     {
        type: "content",
        title: "Inverse Trig Functions",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Inverse Trig Functions",
        content: `` 
    },
    {
        type: "content",
        title: "Inverse Trig Functions",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Inverse Trig Functions",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Inverse Trig Functions",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Inverse Trig Functions",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Inverse Trig Functions",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Inverse Trig Functions",
        content: ``
        
    }
];

export default function InverseTrigFunctions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Inverse Trigonometric Functions " cards={inverseTrigFuncLesson} returnPath="/Trigonometry" />;
        </>
    );
}