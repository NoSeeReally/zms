import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const expressionLesson: LessonCard[] = [
    {
        type: "content",
        title: "What does 'evaluate' mean?",
        content: `To evaluate a formula means to plug in numbers for the variables, then calculate the result.
                    Think of a formula as a recipe — the variables are the ingredients, and the value you get is the finished dish.`,
        
    },
     {
        type: "content",
        title: " Variables are just placeholders",
        content: `a varibale like x holds a number you will fill in later
        y = 2x + 3
        Here, x is the placeholder. Once you know what x is, you can find y.`,
        
    },
    {
        type: "content",
        title: "Evaluate y = 2x + 3 when x = 4",
        content: `y = 2x + 3
        1. Substitute: replace x with 4 -> y = 2(4) + 3 
        2. Multiply first: 2 x 4 = 8
        3. Add: 8 + 3 = 11
        y = 11` 
    },
    {
        type: "content",
        title: "Order matters, use PEMDAS",
        content: `
        When you plug in values, follow the order of operations
        
        P - parentheses first
        E - exponents
        M - multiply
        D - divide
        A - addition
        S - subtraction
        
        skipping  this is the #1 mistake when evaluating formulas
        `
        ,
        
    },
    {
        type: "content",
        title: "Example: Two Variables",
        content: `Evaluate A = l x w, when l=6 and w=4
        1. Substitute: A = 6 x 4
        2. Multiply: A = 24
        
        A = 24 square units
        This is the formula for a rectangle`
        
    },
    {
        type: "content",
        title: "Example: with an exponent",
        content: `Evalute V = s^3, when s = 3
        1. Subtitute: V = 3^3
        2. Compute the exponent: 3 x 3 x 3 = 27 
        
        V = 27 cubic units
        This is the formula for a cube`
    
    },
    {
        type: "quiz",
        question: "Evaluate P = 2l + 2w, when w =   3, and l = 5",
        choices: ["P = -16","P = 16","P = 15"],
        answer: 1
    },
    {
        type: "quiz",
        question: "Evaluate F = 3n - 1, when n = 5",
        choices: ["P = -14", "P = 15", "P = 14"],
        answer: 2
    },
    {
        type: "quiz",
        question: "Evaluate d = t^2 + 2 when t = 4",
        choices: ["t = 18", "t = 15", "t = -14"],
        answer: 0
    },
    {
        type: "content",
        title: "Mistakes to avoid",
        content: `
        ! Writing 2x as 2 + x instead of 2 * x
        ! Adding before multiplying (Skipping PEMDAS)
        ! Forgetting to substitute every variable
        ! Dropping a negative sign when plugging in `
        
    }
];

export default function EvaluatingFormulas(){

    return(
        <>
           return <LessonRenderer lessonTitle="Evaluating Formulas" cards={expressionLesson} returnPath="/Pre-Algebra" />;
        </>
    );
}