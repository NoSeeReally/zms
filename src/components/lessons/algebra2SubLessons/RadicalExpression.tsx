import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const radicalExpressionLesson: LessonCard[] = [
    {
        type: "content",
        title: "Radical Expression",
        content: ``,
        
    },
     {
        type: "content",
        title: "Radical Expression",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Radical Expression",
        content: `` 
    },
    {
        type: "content",
        title: "Radical Expression",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Radical Expression",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Radical Expression",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Radical Expression",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Radical Expression",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Radical Expression",
        content: ``
        
    }
];

export default function RadicalExpression(){

    return(
        <>
           return <LessonRenderer lessonTitle="Radical Expression" cards={radicalExpressionLesson} returnPath="/Algebra 2" />;
        </>
    );
}