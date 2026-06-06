import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const basicExponentsLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Is an Exponent?",
        content: "An exponent tells you how many times to multiply a base by itself."
    },
    {
        type: "content",
        title: "Repeated Multiplication",
        content: "For example, 3^4 means 3 × 3 × 3 × 3. The base is 3 and the exponent is 4."
    },
    {
        type: "content",
        title: "Special Powers",
        content: "Any number to the power of 1 equals itself, and any nonzero number to the power of 0 equals 1."
    },
    {
        type: "content",
        title: "Powers and Squares",
        content: "A square is a number raised to the second power, and a cube is raised to the third power."
    },
    {
        type: "quiz",
        question: "What does 2^3 equal?",
        choices: ["6", "8", "9"],
        answer: 1
    }
];

export default function BasicExponents() {
    return <LessonRenderer lessonTitle="Basic Exponents" cards={basicExponentsLesson} returnPath="/Arithmetic Review" />;
}