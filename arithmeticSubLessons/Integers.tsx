import LessonRenderer, { type LessonCard } from "../src/components/lessons/LessonRenderer";

const integersLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Are Integers?",
        content: "Integers are whole numbers, their opposites, and zero. They include values like -3, 0, and 8."
    },
    {
        type: "content",
        title: "Positive and Negative",
        content: "Positive integers are greater than zero. Negative integers are less than zero and are often shown on a number line to the left of zero."
    },
    {
        type: "content",
        title: "Ordering Integers",
        content: "On a number line, numbers farther to the right are greater. This helps you compare integers quickly."
    },
    {
        type: "content",
        title: "Adding Integers",
        content: "When adding integers, think about direction and distance on the number line or combine signs carefully."
    },
    {
        type: "quiz",
        question: "Which integer is less than -2?",
        choices: ["-1", "-3", "2"],
        answer: 1
    }
];

export default function Integers() {
    return <LessonRenderer lessonTitle="Integers" cards={integersLesson} returnPath="/Arithmetic Review" />;
}