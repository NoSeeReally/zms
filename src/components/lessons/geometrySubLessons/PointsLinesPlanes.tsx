import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const pointsLinesPlanesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Points, Lines, and Planes",
        content: ``,
        
    },
     {
        type: "content",
        title: "Points, Lines, and Planes",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Points, Lines, and Planes",
        content: `` 
    },
    {
        type: "content",
        title: "Points, Lines, and Planes",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Points, Lines, and Planes",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Points, Lines, and Planes",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Points, Lines, and Planes",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Points, Lines, and Planes",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Points, Lines, and Planes",
        content: ``
        
    }
];

export default function PointsLinesPlanes(){

    return(
        <>
        
            <LessonRenderer lessonTitle="Points, Lines, and Planes" cards={pointsLinesPlanesLesson} returnPath="/Geometry" />
        
        </>
    );
}