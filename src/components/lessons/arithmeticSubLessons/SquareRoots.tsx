import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const squareRootsLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Is a Square Root?",
        content: "A square root asks which number multiplied by itself makes the original number."
    },
    {
        type: "content",
        title: "Perfect Squares",
        content: "Perfect squares are numbers like 1, 4, 9, 16, and 25 because they come from whole-number squares."
    },
    {
        type: "content",
        title: "Estimating Roots",
        content: "If a number is not a perfect square, estimate its square root by finding nearby perfect squares."
    },
    {
        type: "content",
        title: "Simplifying Roots",
        content: "Break a radical into factors and simplify whenever possible. For example, sqrt(18) can be rewritten using sqrt(9) × sqrt(2)."
    },
    {
        type: "quiz",
        question: "What is the square root of 16?",
        choices: ["2", "4", "8"],
        answer: 1
    }
];

export default function SquareRoots() {
    return <LessonRenderer lessonTitle="Square Roots" cards={squareRootsLesson} returnPath="/Arithmetic Review" />;
}