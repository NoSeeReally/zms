import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const advancedFactoringLesson: LessonCard[] = [
    {
        type: "content",
        title: "Advanced Factoring",
        content: ``,
        
    },
     {
        type: "content",
        title: "Advanced Factoring",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Advanced Factoring",
        content: `` 
    },
    {
        type: "content",
        title: "Advanced Factoring",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Advanced Factoring",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Advanced Factoring",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Advanced Factoring",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Advanced Factoring",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Advanced Factoring",
        content: ``
        
    }
];

export default function AdvancedFactoring(){

    return(
        <>
           return <LessonRenderer lessonTitle="Advanced Factoring" cards={advancedFactoringLesson} returnPath="/Algebra 2" />;
        </>
    );
}