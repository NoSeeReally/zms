import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const pythagoreanTheoremLesson: LessonCard[] = [
    {
        type: "content",
        title: "Pythagorean Theorem",
        content: ``,
        
    },
     {
        type: "content",
        title: "Pythagorean Theorem",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Pythagorean Theorem",
        content: `` 
    },
    {
        type: "content",
        title: "Pythagorean Theorem",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Pythagorean Theorem",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Pythagorean Theorem",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Pythagorean Theorem",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Pythagorean Theorem",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Pythagorean Theorem",
        content: ``
        
    }
];

export default function PythagoreanTheorem(){

    return(
        <>
           return <LessonRenderer lessonTitle="Pythagorean Theorem" cards={pythagoreanTheoremLesson} returnPath="/Geometry" />;
        </>
    );
}