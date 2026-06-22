import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const matrixBasicsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Matrix Basics",
        content: ``,
        
    },
     {
        type: "content",
        title: "Matrix Basics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Matrix Basics",
        content: `` 
    },
    {
        type: "content",
        title: "Matrix Basics",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Matrix Basics",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Matrix Basics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Matrix Basics",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Matrix Basics",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Matrix Basics",
        content: ``
        
    }
];

export default function MatrixBasics(){

    return(
        <>
           return <LessonRenderer lessonTitle="Matrix Basics" cards={matrixBasicsLesson} returnPath="/Algebra 2" />;
        </>
    );
}