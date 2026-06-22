import LessonRenderer, { type LessonCard } from "../src/components/lessons/LessonRenderer";

const percentagesLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Is a Percent?",
        content: "Percent means 'per 100'. A percent is a ratio that compares a value to 100."
    },
    {
        type: "content",
        title: "Fractions and Decimals",
        content: "Percentages can be written as fractions or decimals. For example, 50% = 1/2 = 0.5."
    },
    {
        type: "content",
        title: "Finding a Percent of a Number",
        content: "Convert the percent to a decimal and multiply. For example, 25% of 80 is 0.25 × 80."
    },
    {
        type: "content",
        title: "Real-World Uses",
        content: "Percents are used for discounts, tax, grades, interest, and data comparison."
    },
    {
        type: "quiz",
        question: "What is 50% written as a decimal?",
        choices: ["0.05", "0.5", "5"],
        answer: 1
    }
];

export default function Percentages() {
    return <LessonRenderer lessonTitle="Percentages" cards={percentagesLesson} returnPath="/Arithmetic Review" />;
}