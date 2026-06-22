import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const coordinateGeometryLesson: LessonCard[] = [
    {
        type: "content",
        title: "Coordinate Geometry",
        content: ``,
        
    },
     {
        type: "content",
        title: "Coordinate Geometry",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Coordinate Geometry",
        content: `` 
    },
    {
        type: "content",
        title: "Coordinate Geometry",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Coordinate Geometry",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Coordinate Geometry",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Coordinate Geometry",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Coordinate Geometry",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Coordinate Geometry",
        content: ``
        
    }
];

export default function CoordinateGeometry(){

    return(
        <>
           return <LessonRenderer lessonTitle="Coordinate Geometry" cards={coordinateGeometryLesson} returnPath="/Geometry" />;
        </>
    );
}