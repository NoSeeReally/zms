import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const sequencesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Sequences",
        content: ``,
        
    },
     {
        type: "content",
        title: "Sequences",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Sequences",
        content: `` 
    },
    {
        type: "content",
        title: "Sequences",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Sequences",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Sequences",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Sequences",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Sequences",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Sequences",
        content: ``
        
    }
];

export default function Sequences(){

    return(
        <>
           return <LessonRenderer lessonTitle="Sequences" cards={sequencesLesson} returnPath="/Algebra 1" />;
        </>
    );
}