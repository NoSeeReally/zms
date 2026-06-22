import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const functionBasicsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Functions and Basics",
        content: ``,
        
    },
     {
        type: "content",
        title: "Functions and Basics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Functions and Basics",
        content: `` 
    },
    {
        type: "content",
        title: "Functions and Basics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Functions and Basics",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Functions and Basics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Functions and Basics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Functions and Basics",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Functions and Basics",
        content: ``
        
    }
];

export default function FunctionAndBasics(){

    return(
        <>
           return <LessonRenderer lessonTitle="Functions and Basics" cards={functionBasicsLesson} returnPath="/Algebra 1" />;
        </>
    );
}