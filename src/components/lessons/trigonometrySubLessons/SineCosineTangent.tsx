import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const sinCosTanLesson: LessonCard[] = [
    {
        type: "content",
        title: "Sine Cosine Tangent",
        content: ``,
        
    },
     {
        type: "content",
        title: "Sine Cosine Tangent",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Sine Cosine Tangent",
        content: `` 
    },
    {
        type: "content",
        title: "Sine Cosine Tangent",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Sine Cosine Tangent",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Sine Cosine Tangent",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Sine Cosine Tangent",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Sine Cosine Tangent",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Sine Cosine Tangent",
        content: ``
        
    }
];

export default function SineCosineTangent(){

    return(
        <>
           return <LessonRenderer lessonTitle="Sine, Cosine, Tangent" cards={sinCosTanLesson} returnPath="/Trigonometry" />;
        </>
    );
}