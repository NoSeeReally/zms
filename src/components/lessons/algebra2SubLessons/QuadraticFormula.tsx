import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const quadraticFormulaLesson: LessonCard[] = [
    {
        type: "content",
        title: "Quadratic Formula",
        content: ``,
        
    },
     {
        type: "content",
        title: "Quadratic Formula",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Quadratic Formula",
        content: `` 
    },
    {
        type: "content",
        title: "Quadratic Formula",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Quadratic Formula",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Quadratic Formula",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Quadratic Formula",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Quadratic Formula",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Quadratic Formula",
        content: ``
        
    }
];

export default function QuadraticFormula(){

    return(
        <>
           return <LessonRenderer lessonTitle="Quadratic Formula" cards={quadraticFormulaLesson} returnPath="/Algebra 2" />;
        </>
    );
}