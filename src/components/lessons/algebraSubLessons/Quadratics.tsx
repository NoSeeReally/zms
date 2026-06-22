import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const quadraticsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Quadratics",
        content: ``,
        
    },
     {
        type: "content",
        title: "Quadratics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Quadratics",
        content: `` 
    },
    {
        type: "content",
        title: "Quadratics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Quadratics",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Quadratics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Quadratics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Quadratics",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Quadratics",
        content: ``
        
    }
];

export default function Quadratics(){

    return(
        <>
           return <LessonRenderer lessonTitle="Quadratics" cards={quadraticsLesson} returnPath="/Algebra 1" />;
        </>
    );
}