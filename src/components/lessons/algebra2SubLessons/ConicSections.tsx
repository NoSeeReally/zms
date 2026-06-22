import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const conicSectionsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Conic Sections",
        content: ``,
        
    },
     {
        type: "content",
        title: "Conic Sections",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Conic Sections",
        content: `` 
    },
    {
        type: "content",
        title: "Conic Sections",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Conic Sections",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Conic Sections",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Conic Sections",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Conic Sections",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Conic Sections",
        content: ``
        
    }
];

export default function ConicSections(){

    return(
        <>
           return <LessonRenderer lessonTitle="Conic Sections" cards={conicSectionsLesson} returnPath="/Algebra 2" />;
        </>
    );
}