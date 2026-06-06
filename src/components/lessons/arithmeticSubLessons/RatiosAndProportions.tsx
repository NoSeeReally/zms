import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const ratiosAndProportionsLesson: LessonCard[] = [
    {
        type: "content",
        title: "What Is a Ratio?",
        content: "A ratio compares two quantities. It can be written with a colon, as a fraction, or in words."
    },
    {
        type: "content",
        title: "Equivalent Ratios",
        content: "Equivalent ratios describe the same relationship, just like equivalent fractions. Multiply or divide both parts by the same number."
    },
    {
        type: "content",
        title: "Proportions",
        content: "A proportion is a statement that two ratios are equal. Proportions are useful for scaling recipes, maps, and models."
    },
    {
        type: "content",
        title: "Unit Rate",
        content: "A unit rate tells you how much for 1 unit, such as miles per hour or dollars per item."
    },
    {
        type: "quiz",
        question: "Which pair is a ratio?",
        choices: ["3:4", "3 + 4", "3 = 4"],
        answer: 0
    }
];

export default function RatiosAndProportions() {
    return <LessonRenderer lessonTitle="Ratios and Proportions" cards={ratiosAndProportionsLesson} returnPath="/Arithmetic Review" />;
}