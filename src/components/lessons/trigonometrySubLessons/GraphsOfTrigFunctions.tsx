import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const graphsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Graphs",
        content: ``,
        
    },
     {
        type: "content",
        title: "Graphs",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Graphs",
        content: `` 
    },
    {
        type: "content",
        title: "Graphs",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Graphs",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Graphs",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Graphs",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Graphs",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Graphs",
        content: ``
        
    }
];

export default function GraphsOfTrigFunctions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Graphs of Trig Functions" cards={graphsLesson} returnPath="/Trigonometry" />;
        </>
    );
}