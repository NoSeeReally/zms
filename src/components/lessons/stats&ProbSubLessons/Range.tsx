import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const rangeLesson: LessonCard[] = [
    {
        type: "content",
        title: "Range",
        content: ``,
        
    },
     {
        type: "content",
        title: "Range",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Range",
        content: `` 
    },
    {
        type: "content",
        title: "Range",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Range",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Range",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Range",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Range",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Range",
        content: ``
        
    }
];

export default function Range(){

    return(
        <>
           return <LessonRenderer lessonTitle="Range" cards={rangeLesson} returnPath="/Stats & Probability" />;
        </>
    );
}