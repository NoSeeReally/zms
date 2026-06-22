import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const distributivePropertyLesson: LessonCard[] = [
    {
        type: "content",
        title: "Distributive Property",
        content: ``,
        
    },
     {
        type: "content",
        title: "Distributive Property",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Distributive Property",
        content: `` 
    },
    {
        type: "content",
        title: "Distributive Property",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Distributive Property",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Distributive Property",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Distributive Property",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Distributive Property",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Distributive Property",
        content: ``
        
    }
];

export default function DistributiveProperty(){

    return(
        <>
           return <LessonRenderer lessonTitle="Distributive Property" cards={distributivePropertyLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}