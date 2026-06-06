import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const orderOfOperationsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Why Order Matters",
        content: "Order of operations tells you the sequence for evaluating expressions so everyone gets the same answer."
    },
    {
        type: "content",
        title: "Parentheses First",
        content: "Work inside grouping symbols first, including parentheses, brackets, and braces."
    },
    {
        type: "content",
        title: "Exponents Next",
        content: "After grouping, evaluate exponents before multiplication or division."
    },
    {
        type: "content",
        title: "Multiply and Divide",
        content: "Multiply and divide from left to right, then add and subtract from left to right."
    },
    {
        type: "quiz",
        question: "What is the first step in 3 + 2 × 4?",
        choices: ["Add", "Multiply", "Subtract"],
        answer: 1
    }
];

export default function OrderOfOperations() {
    return <LessonRenderer lessonTitle="Order of Operations" cards={orderOfOperationsLesson} returnPath="/Arithmetic Review" />;
}