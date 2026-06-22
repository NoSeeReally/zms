import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const systemOfEquationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Systems of Equations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Systems of Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Systems of Equations",
        content: `` 
    },
    {
        type: "content",
        title: "Systems of Equations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Systems of Equations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Systems of Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Systems of Equations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Systems of Equations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Systems of Equations",
        content: ``
        
    }
];

export default function SystemsOFEquations(){

    return(
        <>
           return <LessonRenderer lessonTitle="Systems of Equations" cards={systemOfEquationsLesson} returnPath="/Algebra 1" />;
        </>
    );
}