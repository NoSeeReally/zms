import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const applicationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Applications",
        content: ``,
        
    },
     {
        type: "content",
        title: "Applications",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Applications",
        content: `` 
    },
    {
        type: "content",
        title: "Applications",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Applications",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Applications",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Applications",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Applications",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Applications",
        content: ``
        
    }
];

export default function Applications(){

    return(
        <>
           return <LessonRenderer lessonTitle="Applications" cards={applicationsLesson} returnPath="/Trigonometry" />;
        </>
    );
}