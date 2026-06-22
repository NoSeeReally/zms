import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const graphingLinesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Graphing Lines",
        content: ``,
        
    },
     {
        type: "content",
        title: "Graphing Lines",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Graphing Lines",
        content: `` 
    },
    {
        type: "content",
        title: "Graphing Lines",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Graphing Lines",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Graphing Lines",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Graphing Lines",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Graphing Lines",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Graphing Lines",
        content: ``
        
    }
];

export default function GraphingLines(){

    return(
        <>
           return <LessonRenderer lessonTitle="Graphing Lines" cards={graphingLinesLesson} returnPath="/Algebra 1" />;
        </>
    );
}