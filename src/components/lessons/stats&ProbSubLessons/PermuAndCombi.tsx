import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const permuAndCombiLesson: LessonCard[] = [
    {
        type: "content",
        title: "Permutation and Combination",
        content: ``,
        
    },
     {
        type: "content",
        title: "Permutation and Combination",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Permutation and Combination",
        content: `` 
    },
    {
        type: "content",
        title: "Permutation and Combination",
        content: ``
        ,
        
    },
    {
        type: "content",
        title: "Permutation and Combination",
        content: ``
        
    },
    {
        type: "quiz",
        question: "Permutation and Combination",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Permutation and Combination",
        /*choices:
        answer: */
    },
    {
        type: "quiz",
        question: "Permutation and Combination",
        /*choices: 
        answer: */
    },
    {
        type: "content",
        title: "Permutation and Combination",
        content: ``
        
    }
];

export default function PermuAndCombi(){

    return(
        <>
           return <LessonRenderer lessonTitle="Permutations and Combinations" cards={permuAndCombiLesson} returnPath="/Stats & Probability" />;
        </>
    );
}