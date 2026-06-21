import LessonRenderer, { type LessonCard } from "../LessonRenderer";

const likeTerms: LessonCard[] = [
    {
        type: "content",
        title: "What are like terms?",
        content: `Like terms are terms that have the same variable raised to the same power.
        
        3x, 7x, -x
        These are all like terms, same variable x, raised to the same power 1.
        
        4x^2, 3x
        These are not like terms, same variable but raised to different powers.`,
        
    },
     {
        type: "content",
        title: "The coefficient is the only difference",
        content: `In term like 5x, 5 is the coefficient, the number in fornt of the variable.
        
        When combining like terms, you only add or subtract the coefficients. 
        The variable part stays the same.
        
        3x + 4x = (3+4)x = 7x
        
        Think of it like 3 apples + 4 apples = 7 apples`
        ,
        
    },
    {
        type: "content",
        title: "Constants are like terms too",
        content: `Plain numbers (no variables) are called constants, and theyre like terms with each other.
        
        8, -3, 100
        These can all be combined with each other
        8 - 3 + 100 = 105

        5 and 5x are not like terms, one has a variable one has doesnt` 
    },
    {
        type: "content",
        title: "Mixed Expressions",
        content: `
        You will encounter something like these
        =4x+2+1+3x
        
        The key to simplification: Group like terms and combine them!
        
        =4x+3x+2+1
        =7x+3
        `
        ,
        
    },
    {
        type: "content",
        title: "Multiple Variable",
        content: `You will encounter expressions/equations with multiple variables.
        =4x+y+5x+3y
        
        The key to simplification: Group like terms and combine them!
        Remember: Like terms same variable and raised to the same power.
        
        =4x+5x+y+3y
        =9x+4y
        `
        
    },
    {
        type: "quiz",
        question: "What are like terms?",
        choices:["like terms are good terms",
            "like terms is when the coefficients are the same and the variables are raised to the same power",
            "like terms is when the varibles are the same and the variables are raised to the same power",
            "like terms is when the variables are the same and the coeffecients are the same"],
        answer: 2    
    },
    {
        type: "quiz",
        question: "What does 8x + 12x^2 when combined?",
        choices: ["20x","20x^3","8x + 12x^2"],
        answer: 2
    },
    {
        type: "quiz",
        question: "Spot like terms",
        choices: ["4y, -y", "13, 6z", "z^2, 2z"],
        answer: 0
    },
    {
        type: "content",
        title: "Mistakes to avoid",
        content: `
        ! Combining same variables with varying exponents
        ! Disregarding the coeffecients
        ! Disregarding that a single variable alrady contains the 1 coefficient
        ! Forgetting the signs `
        
    }
];

export default function LikeTerms(){

    return(
        <>
           return <LessonRenderer lessonTitle="Like Terms" cards={likeTerms} returnPath="/Pre-Algebra" />;
        </>
    );
}