import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const basicProbabilityLesson: LessonCard[] = [
    {
        type: "content",
        title: "Basic Probability",
        content: ``,
        
    },
     {
        type: "content",
        title: "Basic Probability",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Basic Probability",
        content: `` 
    },
    {
        type: "content",
        title: "Basic Probability",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Basic Probability",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Basic Probability",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Basic Probability",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Basic Probability",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Basic Probability",
        content: ``
        
    }
];

export default function BasicProbability(){

    return(
        <>
           return <LessonRenderer lessonTitle="Basic Probability" cards={basicProbabilityLesson} returnPath="/Stats & Probability" />;
        </>
    );
}