import LessonRenderer, { type LessonCard } from "../LessonRenderer";
/**may mali somewhere dito */
const congruenceAndSimilaritiesLesson: LessonCard[] = [
    {
        type: "content",
        title: "Congruence And Similarity",
        content: ``,
        
    },
     {
        type: "content",
        title: "Congruence And Similarity",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Congruence And Similarity",
        content: `` 
    },
    {
        type: "content",
        title: "Congruence And Similarity",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Congruence And Similarity",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Congruence And Similarity",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Congruence And Similarity",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Congruence And Similarity",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Congruence And Similarity",
        content: ``
        
    }
];

export default function CongruenceAndSimilarity(){

    return(
        <>
           return <LessonRenderer lessonTitle="Congruence And Similarity" cards={congruenceAndSimilaritiesLesson} returnPath="/Geometry" />;
        </>
    );
}