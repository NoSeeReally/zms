import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const distributivePropertyLesson: LessonCard[] = [
    {
        type: "content",
        title: "Distributive Property",
        content: ``,
        
    },
     {
        type: "content",
        title: "Distributive Property",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Distributive Property",
        content: `` 
    },
    {
        type: "content",
        title: "Distributive Property",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Distributive Property",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Distributive Property",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Distributive Property",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Distributive Property",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Distributive Property",
        content: ``
        
    }
];

export default function SimplifyingExpressions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Like Terms" cards={distributivePropertyLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}