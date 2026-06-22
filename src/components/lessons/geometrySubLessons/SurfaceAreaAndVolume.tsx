import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const surfaceAreaAndVolumeLesson: LessonCard[] = [
    {
        type: "content",
        title: "Surface Area and Volume",
        content: ``,
        
    },
     {
        type: "content",
        title: "Surface Area and Volume",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Surface Area and Volume",
        content: `` 
    },
    {
        type: "content",
        title: "Surface Area and Volume",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Surface Area and Volume",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Surface Area and Volume",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Surface Area and Volume",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Surface Area and Volume",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Surface Area and Volume",
        content: ``
        
    }
];

export default function SurfaceAreaAndVolume(){

    return(
        <>
           return <LessonRenderer lessonTitle="Surface Area and Volume" cards={surfaceAreaAndVolumeLesson} returnPath="/Geometry" />;
        </>
    );
}