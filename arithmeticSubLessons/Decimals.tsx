import LessonRenderer, { type LessonCard } from "../src/components/lessons/LessonRenderer";

const decimalsLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Is a Decimal?",
        content: "Decimals are another way to write parts of a whole using place value and a decimal point."
    },
    {
        type: "content",
        title: "Place Value",
        content: "Digits to the right of the decimal point represent tenths, hundredths, thousandths, and smaller place values."
    },
    {
        type: "content",
        title: "Comparing Decimals",
        content: "Line up the decimal points and compare digits from left to right. Add trailing zeros if it helps you compare equal place values."
    },
    {
        type: "content",
        title: "Adding and Subtracting",
        content: "Line up the decimal points before adding or subtracting. Keep the decimal point in the same column in your answer."
    },
    {
        type: "quiz",
        question: "Which decimal is the greatest?",
        choices: ["0.5", "0.45", "0.405"],
        answer: 0
    }
];

export default function Decimals() {
    return <LessonRenderer lessonTitle="Decimals" cards={decimalsLesson} returnPath="/Arithmetic Review" />;
}