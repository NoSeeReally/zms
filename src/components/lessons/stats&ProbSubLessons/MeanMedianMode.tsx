import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const meanMedianModeLesson: LessonCard[] = [
    {
        type: "content",
        title: "Mean, Median, Mode",
        content: ``,
        
    },
     {
        type: "content",
        title: "Mean, Median, Mode",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Mean, Median, Mode",
        content: `` 
    },
    {
        type: "content",
        title: "Mean, Median, Mode",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Mean, Median, Mode",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Mean, Median, Mode",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Mean, Median, Mode",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Mean, Median, Mode",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Mean, Median, Mode",
        content: ``
        
    }
];

export default function MeanMedianMode(){

    return(
        <>
           return <LessonRenderer lessonTitle="Mean, Median, Mode" cards={meanMedianModeLesson} returnPath="/Stats & Probability" />;
        </>
    );
}