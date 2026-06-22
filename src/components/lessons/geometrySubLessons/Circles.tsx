import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const circlesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Circles",
        content: ``,
        
    },
     {
        type: "content",
        title: "Circles",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Circles",
        content: `` 
    },
    {
        type: "content",
        title: "Circles",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Circles",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Circles",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Circles",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Circles",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Circles",
        content: ``
        
    }
];

export default function Circles(){

    return(
        <>
           return <LessonRenderer lessonTitle="Circles" cards={circlesLesson} returnPath="/Geometry" />;
        </>
    );
}