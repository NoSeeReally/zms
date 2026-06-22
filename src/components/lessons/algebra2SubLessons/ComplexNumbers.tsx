import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const complexNumbersLesson: LessonCard[] = [
    {
        type: "content",
        title: "Complex Numbers",
        content: ``,
        
    },
     {
        type: "content",
        title: "Complex Numbers",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Complex Numbers",
        content: `` 
    },
    {
        type: "content",
        title: "Complex Numbers",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Complex Numbers",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Complex Numbers",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Complex Numbers",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Complex Numbers",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Complex Numbers",
        content: ``
        
    }
];

export default function ComplexNumbers(){

    return(
        <>
           return <LessonRenderer lessonTitle="Complex Numbers" cards={complexNumbersLesson} returnPath="/Algebra 2" />;
        </>
    );
}