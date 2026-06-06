import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import back from '../../assets/back.png'
import backwardArrow from '../../assets/backwardArrow.png'
import forwardArrow from '../../assets/forwardArrow.png'
import done from '../../assets/done.png'

export interface LessonCard {
    type: "content" | "quiz";
    title?: string;
    content?: string;
    question?: string;
    choices?: string[];
    answer?: number;
}

interface LessonRendererProps {
    cards: LessonCard[];
    lessonTitle?: string;
    /**
     * Where the Finish button should navigate. Defaults to the main lessons list.
     * Sublessons should pass their parent list path (e.g. "/Arithmetic Review").
     */
    returnPath?: string;
}

function clampStep(step: number, maxStep: number) {
    if (Number.isNaN(step)) {
        return 0;
    }

    return Math.min(Math.max(step, 0), maxStep);
}

export default function LessonRenderer({ cards, lessonTitle, returnPath = "/lessons" }: LessonRendererProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedChoice, setSelectedChoice] = useState<number | null>(null);

    const stepParam = searchParams.get("step");
    const parsedStep = stepParam === null ? 0 : Number.parseInt(stepParam, 10);
    const maxStep = Math.max(cards.length - 1, 0);
    const step = useMemo(() => clampStep(parsedStep, maxStep), [parsedStep, maxStep]);
    const currentCard = cards[step];

    useEffect(() => {
        const normalizedStep = String(step);
        if (stepParam !== normalizedStep) {
            const nextParams = new URLSearchParams(searchParams);
            nextParams.set("step", normalizedStep);
            setSearchParams(nextParams, { replace: true });
        }
    }, [searchParams, setSearchParams, step, stepParam]);

    useEffect(() => {
        setSelectedChoice(null);
    }, [step]);

    const setStep = (nextStep: number) => {
        const nextParams = new URLSearchParams(searchParams);
        nextParams.set("step", String(clampStep(nextStep, maxStep)));
        setSearchParams(nextParams);
    };

    if (!currentCard) {
        return null;
    }

    const isLastStep = step >= maxStep;
    const isQuizCard = currentCard.type === "quiz";
    const selectedAnswer = typeof currentCard.answer === "number" ? currentCard.answer : null;
    const isCorrect = selectedAnswer !== null && selectedChoice !== null && selectedChoice === selectedAnswer;
    const answerLabel = selectedAnswer !== null && currentCard.choices ? currentCard.choices[selectedAnswer] : "";

    return (
        <div className="lesson-stepper">
            
            <div className="lesson-stepper-shell">
                <div className="lesson-stepper-topbar">
                    <Link className="lesson-stepper-button lesson-stepper-button--exit" to={returnPath}>
                        <img src={back} alt="Exit" className="navButton-icon" />
                    </Link>
                </div>

                {lessonTitle ? <p className="lesson-stepper-label">{lessonTitle}</p> : null}
                <div className="lesson-stepper-progress">
                    Step {step + 1} of {cards.length}
                </div>

                <article className="lesson-step-card">
                    {currentCard.title ? <h2>{currentCard.title}</h2> : null}

                    {isQuizCard ? (
                        <div className="lesson-quiz-block">
                            {currentCard.question ? <p className="lesson-quiz-question">{currentCard.question}</p> : null}
                            <div className="lesson-quiz-choices">
                                {currentCard.choices?.map((choice, index) => {
                                    const isSelected = selectedChoice === index;
                                    const choiceClassName = [
                                        "lesson-quiz-choice",
                                        isSelected ? "lesson-quiz-choice--selected" : "",
                                        isCorrect && isSelected ? "lesson-quiz-choice--correct" : "",
                                        selectedChoice !== null && !isCorrect && selectedAnswer === index ? "lesson-quiz-choice--answer" : ""
                                    ]
                                        .filter(Boolean)
                                        .join(" ");

                                    return (
                                        <button
                                            key={choice}
                                            type="button"
                                            className={choiceClassName}
                                            onClick={() => setSelectedChoice(index)}
                                            aria-pressed={isSelected}
                                        >
                                            {choice}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedChoice === null ? (
                                <p className="lesson-quiz-feedback">Choose an answer to check yourself.</p>
                            ) : isCorrect ? (
                                <p className="lesson-quiz-feedback lesson-quiz-feedback--correct">Correct.</p>
                            ) : (
                                <p className="lesson-quiz-feedback lesson-quiz-feedback--wrong">
                                    Not quite. The correct answer is {answerLabel}.
                                </p>
                            )}
                        </div>
                    ) : (
                        <p className="lesson-step-content">{currentCard.content}</p>
                    )}
                </article>

                <div className="lesson-stepper-controls">
                    <button
                        type="button"
                        className="lesson-stepper-button"
                        onClick={() => setStep(step - 1)}
                        disabled={step === 0}
                    >
                        <img src={backwardArrow} alt="Prev" className="navButton-icon" />
                    </button>
                    {isLastStep ? (
                        <Link className="lesson-stepper-button lesson-stepper-button--primary" to={returnPath}>
                            <img src={done} alt="Done" className="navButton-icon" />
                        </Link>
                    ) : (
                        <button
                            type="button"
                            className="lesson-stepper-button lesson-stepper-button--primary"
                            onClick={() => setStep(step + 1)}
                        >
                            <img src={forwardArrow} alt="Prev" className="navButton-icon" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}