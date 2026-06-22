import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const completingTheSquareLesson: LessonCard[] = [
    {
        type: "content",
        title: "Completing the Square",
        content: ``,
        
    },
     {
        type: "content",
        title: "Completing the Square",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Completing the Square",
        content: `` 
    },
    {
        type: "content",
        title: "Completing the Square",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Completing the Square",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Completing the Square",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Completing the Square",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Completing the Square",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Completing the Square",
        content: ``
        
    }
];

export default function CompletingTheSquare(){

    return(
        <>
           return <LessonRenderer lessonTitle="Completing the Square" cards={completingTheSquareLesson} returnPath="/Algebra 2" />;
        </>
    );
}