import LessonRenderer, { type LessonCard } from "../LessonRenderer";
const rationalExpressionLesson: LessonCard[] = [
    {
        type: "content",
        title: "Rational Expression",
        content: ``,
        
    },
     {
        type: "content",
        title: "Rational Expression",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Rational Expression",
        content: `` 
    },
    {
        type: "content",
        title: "Rational Expression",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Rational Expression",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Rational Expression",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Rational Expression",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Rational Expression",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Rational Expression",
        content: ``
        
    }
];

export default function RationalExpression(){

    return(
        <>
           return <LessonRenderer lessonTitle="Rational Expression" cards={rationalExpressionLesson} returnPath="/Algebra 2" />;
        </>
    );
}