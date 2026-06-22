import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const inequalitiesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Inequalities",
        content: ``,
        
    },
     {
        type: "content",
        title: "Inequalities",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Inequalities",
        content: `` 
    },
    {
        type: "content",
        title: "Inequalities",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Inequalities",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Inequalities",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Inequalities",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Inequalities",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Inequalities",
        content: ``
        
    }
];

export default function Inequalities(){

    return(
        <>
           return <LessonRenderer lessonTitle="Inequalities" cards={inequalitiesLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}