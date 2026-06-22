import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const transformationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Transformations",
        content: ``,
        
    },
     {
        type: "content",
        title: "Transformations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Transformations",
        content: `` 
    },
    {
        type: "content",
        title: "Transformations",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Transformations",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Transformations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Transformations",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Transformations",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Transformations",
        content: ``
        
    }
];

export default function Transformations(){

    return(
        <>
           return <LessonRenderer lessonTitle="Transformations" cards={transformationsLesson} returnPath="/Geometry" />;
        </>
    );
}