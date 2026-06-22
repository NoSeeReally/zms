import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const expressionLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Are Expressions?",
        content: `An expression is a combination of numbers, variables, and operations.`,
        
    },
     {
        type: "content",
        title: " Examples",
        content: `5+3
        x+4
        2n
        3a-7`,
        
    },
    {
        type: "content",
        title: "Key Points",
        content: `Expressions can contain numbers, variables, and operation symbols(+ - x /)
        Expressions do not have an equal sign, if it had, that would be called an equation ` 
    },
    {
        type: "content",
        title: "Evaluating Expressions",
        content: `
        To evaluate an expression means to find its value by replacing the variable with a number.
        Example
        If x=3
        What is x+5 = 8?
                3+5 = 8`
        ,
        
    },
    {
        type: "quiz",
        question: "3+n=10, what is n? Hint: What should be added in 3 such that the outcome is 10?",
        choices: ["8", "-7", "7"],
        answer: 2
    },
    {
        type: "content",
        title: "Note",
        content: `An expression becomes an equation when an equals sign is added`
    },
    {
        type: "quiz",
        question: "2n+3 = 9",
        choices: ["-6","6","3"],
        answer: 2
    },
    {
        type: "quiz",
        question: "Which of the following is an expression",
        choices: ["2+2", "2x=4", "3=3"],
        answer: 0
    }
];

export default function Expressions(){

    return(
        <>
           return <LessonRenderer lessonTitle="Expressions" cards={expressionLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}