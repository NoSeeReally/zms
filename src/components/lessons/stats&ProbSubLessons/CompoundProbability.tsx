import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const compoundProbabilityLesson: LessonCard[] = [
    {
        type: "content",
        title: "Compound Probability",
        content: ``,
        
    },
     {
        type: "content",
        title: "Compound Probability",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Compound Probability",
        content: `` 
    },
    {
        type: "content",
        title: "Compound Probability",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Compound Probability",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Compound Probability",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Compound Probability",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Compound Probability",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Compound Probability",
        content: ``
        
    }
];

export default function CompoundProbability(){

    return(
        <>
           return <LessonRenderer lessonTitle="Compound Probability" cards={compoundProbabilityLesson} returnPath="/Stats & Probability" />;
        </>
    );
}