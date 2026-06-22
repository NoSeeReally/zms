import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const graphsAndChartsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Graphs and Charts",
        content: ``,
        
    },
     {
        type: "content",
        title: "Graphs and Charts",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Graphs and Charts",
        content: `` 
    },
    {
        type: "content",
        title: "Graphs and Charts",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Graphs and Charts",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Graphs and Charts",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Graphs and Charts",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Graphs and Charts",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Graphs and Charts",
        content: ``
        
    }
];

export default function GraphsAndCharts(){

    return(
        <>
           return <LessonRenderer lessonTitle="Graphs And Charts" cards={graphsAndChartsLesson} returnPath="/Stats & Probability" />;
        </>
    );
}