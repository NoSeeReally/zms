import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const factoringBasicsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Factoring Basics",
        content: ``,
        
    },
     {
        type: "content",
        title: "Factoring Basics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Factoring Basics",
        content: `` 
    },
    {
        type: "content",
        title: "Factoring Basics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Factoring Basics",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Factoring Basics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Factoring Basics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Factoring Basics",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Factoring Basics",
        content: ``
        
    }
];

export default function FactoringBasics(){

    return(
        <>
           return <LessonRenderer lessonTitle="Factoring Basics" cards={factoringBasicsLesson} returnPath="/Algebra 1" />;
        </>
    );
}