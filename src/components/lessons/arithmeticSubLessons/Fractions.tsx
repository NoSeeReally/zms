import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const fractionsLesson: LessonCard[] = [
    {
        type: "content",
        title: "Intro to Fractions",
        content: "A fraction represents a part of a whole. The number on top tells how many parts you have, and the number on the bottom tells how many equal parts the whole is split into."
    },
    {
        type: "content",
        title: "Numerator and Denominator",
        content: "The numerator is the top number. The denominator is the bottom number. In 3/5, 3 is the numerator and 5 is the denominator."
    },
    {
        type: "content",
        title: "Equivalent Fractions",
        content: "Equivalent fractions name the same value. You can create them by multiplying or dividing the numerator and denominator by the same number."
    },
    {
        type: "content",
        title: "Simplifying Fractions",
        content: "A fraction is simplified when the numerator and denominator have no common factor greater than 1. Divide both numbers by their greatest common factor."
    },
    {
        type: "quiz",
        question: "Which fraction is equivalent to 1/2?",
        choices: ["2/4", "2/3", "3/5"],
        answer: 0
    }
];

export default function Fractions() {
    return <LessonRenderer lessonTitle="Fractions" cards={fractionsLesson} returnPath="/Arithmetic Review" />;
}