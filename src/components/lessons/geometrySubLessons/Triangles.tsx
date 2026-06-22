import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const trianglesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Triangles",
        content: ``,
        
    },
     {
        type: "content",
        title: "Triangles",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Triangles",
        content: `` 
    },
    {
        type: "content",
        title: "Triangles",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Triangles",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Triangles",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Triangles",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Triangles",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Triangles",
        content: ``
        
    }
];

export default function Triangles(){

    return(
        <>
           return <LessonRenderer lessonTitle="Triangles" cards={trianglesLesson} returnPath="/Geometry" />;
        </>
    );
}