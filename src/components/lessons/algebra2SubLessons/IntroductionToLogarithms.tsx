import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const introToLogarithmsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Intro to Logarithms",
        content: ``,
        
    },
     {
        type: "content",
        title: "Intro to Logarithms",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Intro to Logarithms",
        content: `` 
    },
    {
        type: "content",
        title: "Intro to Logarithms",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Intro to Logarithms",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Intro to Logarithms",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Intro to Logarithms",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Intro to Logarithms",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Intro to Logarithms",
        content: ``
        
    }
];

export default function IntroductionToLogarithms(){

    return(
        <>
           return <LessonRenderer lessonTitle="Introduction to Logarithms" cards={introToLogarithmsLesson} returnPath="/Algebra 2" />;
        </>
    );
}