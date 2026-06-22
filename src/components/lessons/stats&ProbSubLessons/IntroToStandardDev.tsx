import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const introToStandardDevLesson: LessonCard[] = [
    {
        type: "content",
        title: "Standard Deviation",
        content: ``,
        
    },
     {
        type: "content",
        title: "Standard Deviation",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Standard Deviation",
        content: `` 
    },
    {
        type: "content",
        title: "Standard Deviation",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Standard Deviation",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Standard Deviation",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Standard Deviation",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Standard Deviation",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Standard Deviation",
        content: ``
        
    }
];

export default function IntroToStandardDev(){

    return(
        <>
           return <LessonRenderer lessonTitle="Introduction to Standard Deviation" cards={introToStandardDevLesson} returnPath="/Stats & Probability" />;
        </>
    );
}