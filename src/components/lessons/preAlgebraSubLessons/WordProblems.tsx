import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const wordProblemsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Word Problems",
        content: ``,
        
    },
     {
        type: "content",
        title: "Word Problems",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Word Problems",
        content: `` 
    },
    {
        type: "content",
        title: "Word Problems",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Word Problems",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Word Problems",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Word Problems",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Word Problems",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Word Problems",
        content: ``
        
    }
];

export default function SimplifyingExpressions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Like Terms" cards={wordProblemsLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}