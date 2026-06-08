import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const variablesLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Are Variables?",
        content: `A variable is a letter that holds a number.`,
        
    },
     {
        type: "content",
        title: " If x=5, then x represents 5.",
        content: `In 3+n=10, n represents the unknown number that makes the equation true.`,
        
    },
    {
        type: "content",
        title: "What makes an equation true?",
        content: `An equation is true when the left and right of the = symbol is equivalent. ` 
    },
    {
        type: "content",
        title: "Such as",
        content: `
        5 = 5
        3+2 = 5 , the left side of the equal sign 3+2 is 5, while the right side is 5
        2x3 = 6 , same for this one
        4+5 = 7+2 , as well as this`,
        
    },
    {
        type: "quiz",
        question: "Going back to our previous example 3+n=10, what is n? Hint: What should be added in 3 such that the outcome is 10?",
        choices: ["8", "-7", "7"],
        answer: 2
    },
    {
        type: "content",
        title: "Key Points",
        content: `Variables can represent unknow numbers. Example: 4n = 24, what is n? Such that when I multiply it by 4, the answer is 24
        Variables can represent numbers that can change.
        You can use any variables/letters to represent a number, though most common varibales you will encounter are x,y,and z.`
    },
    {
        type: "quiz",
        question: "2n+3 = 9",
        choices: ["-6","6","3"],
        answer: 2
    },
    {
        type: "quiz",
        question: "12n = 144",
        choices: ["12", "-12", "14"],
        answer: 0
    }
];

export default function Variables(){

    return(
        <>
           return <LessonRenderer lessonTitle="Variables" cards={variablesLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}