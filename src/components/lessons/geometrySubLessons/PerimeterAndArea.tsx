import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const perimeterAndAreaLesson: LessonCard[] = [
    {
        type: "content",
        title: "Perimeter and Area",
        content: ``,
        
    },
     {
        type: "content",
        title: "Perimeter and Area",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Perimeter and Area",
        content: `` 
    },
    {
        type: "content",
        title: "Perimeter and Area",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Perimeter and Area",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Perimeter and Area",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Perimeter and Area",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Perimeter and Area",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Perimeter and Area",
        content: ``
        
    }
];

export default function PerimeterAndArea(){

    return(
        <>
           return <LessonRenderer lessonTitle="Perimeter and Area" cards={perimeterAndAreaLesson} returnPath="/Geometry" />;
        </>
    );
}