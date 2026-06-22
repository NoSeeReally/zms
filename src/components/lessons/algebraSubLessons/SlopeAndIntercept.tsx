import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const slopeAndInterceptsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Slope And Intercepts",
        content: ``,
        
    },
     {
        type: "content",
        title: "Slope And Intercepts",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Slope And Intercepts",
        content: `` 
    },
    {
        type: "content",
        title: "Slope And Intercepts",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Slope And Intercepts",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Slope And Intercepts",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Slope And Intercepts",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Slope And Intercepts",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Slope And Intercepts",
        content: ``
        
    }
];

export default function SlopeAndIntercept(){

    return(
        <>
           return <LessonRenderer lessonTitle="Slope and Intercepts" cards={slopeAndInterceptsLesson} returnPath="/Algebra 1" />;
        </>
    );
}