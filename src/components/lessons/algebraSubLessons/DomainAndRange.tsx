import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const domainAndRangeLesson: LessonCard[] = [
    {
        type: "content",
        title: "Domain and Range",
        content: ``,
        
    },
     {
        type: "content",
        title: "Domain and Range",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Domain and Range",
        content: `` 
    },
    {
        type: "content",
        title: "Domain and Range",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Domain and Range",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Domain and Range",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Domain and Range",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Domain and Range",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Domain and Range",
        content: ``
        
    }
];

export default function DomainAndRange(){

    return(
        <>
           return <LessonRenderer lessonTitle="Domain and Range" cards={domainAndRangeLesson} returnPath="/Algebra 1" />;
        </>
    );
}