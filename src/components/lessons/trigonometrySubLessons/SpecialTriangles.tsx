import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const specialTrianglesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Special Triangles",
        content: ``,
        
    },
     {
        type: "content",
        title: "Special Triangles",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Special Triangles",
        content: `` 
    },
    {
        type: "content",
        title: "Special Triangles",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Special Triangles",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Special Triangles",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Special Triangles",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Special Triangles",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Special Triangles",
        content: ``
        
    }
];

export default function SpecialTriangles(){

    return(
        <>
           return <LessonRenderer lessonTitle="Special Triangles" cards={specialTrianglesLesson} returnPath="/Trigonometry" />;
        </>
    );
}