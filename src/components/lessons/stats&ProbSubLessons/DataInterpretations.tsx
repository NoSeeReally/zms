import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const dataInterpretationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Data Interpretations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Data Interpretations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Data Interpretations",
        content: `` 
    },
    {
        type: "content",
        title: "Data Interpretations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Data Interpretations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Data Interpretations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Data Interpretations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Data Interpretations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Data Interpretations",
        content: ``
        
    }
];

export default function DataInterpretations(){

    return(
        <>
           return <LessonRenderer lessonTitle="Data Interpretations" cards={dataInterpretationsLesson} returnPath="/Stats & Probability" />;
        </>
    );
}