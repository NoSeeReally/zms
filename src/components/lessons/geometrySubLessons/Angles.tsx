import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const anglesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Angles Lesson",
        content: ``,
        
    },
     {
        type: "content",
        title: "Angles Lesson",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Angles Lesson",
        content: `` 
    },
    {
        type: "content",
        title: "Angles Lesson",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Angles Lesson",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Angles Lesson",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Angles Lesson",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Angles Lesson",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Angles Lesson",
        content: ``
        
    }
];

export default function Angles(){

    return(
        <>
           return <LessonRenderer lessonTitle="Angles" cards={anglesLesson} returnPath="/Geometry" />;
        </>
    );
}