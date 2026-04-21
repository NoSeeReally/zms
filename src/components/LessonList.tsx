import LessonCard from "./LessonCard";
import '../App.css'


export default function LessonList(){
const lessons: Array<{
  title: string;
  subtopics: string[];
  status: 'ongoing' | 'Yet to learn';
}> = [
  {
    title: "Arithmetic Review",
    subtopics: ["Integers", "Fractions", "Decimals", "Percentages", "Ratios and Proportions", "Order of Operations", "Basic Exponents", "Square Roots"],
    status: "Yet to learn"
  },
  {
    title: "Pre-Algebra",
    subtopics: ["Variables", "Expressions", "Evaluating Formulas", "Like Terms", "Simplifying Expressions", "Distributive Property", "Basic Equations", "Inequalities", "Word Problems"],
    status: "Yet to learn"
  },
  {
    title: "Algebra 1",
    subtopics: ["Linear Equations", "Multi-step Equations", "Systems of Equations", "Graphing Lines", "Slopes and Intercepts", "Function Basics", "Domain and Range", "Sequence", "Exponent Rules", "Polynomials", "Factoring Basics", "Intro to Quadratics"],
    status: "Yet to learn"
  },
  {
    title: "Geometry",
    subtopics: ["Points, Lines, and Planes", "Angles", "Confruence and Similarity", "Perimeter and Area", "Surface Area and Volume", "Circles", "Coordinate Geometry", "Distance and Midpoint Formula", "Pythagorean Theorem", "Transformations"],
    status: "Yet to learn"
  },
  {
    title: "Algebra 2",
    subtopics: ["Quadratic Equations", "Advanced Factoring", "Completing the Square", "Quadratic Formula", "Radical Expressions", "Rational Expressions", "Complex Numbers", "Exponential Functions", "Introduction to Logarithms", "Polynomial Functions", "Matrices Basics", "Conic Sections"],
    status: "Yet to learn"
  },
  {
    title: "Trigonometry",
    subtopics: ["Right Triangle Trigonometry", "Sine, Cosine, Tangent", "Special Triangles", "Unit Circle", "Graphs of Trig Functions", "Inverse Trig Functions", "Applications"],
    status: "Yet to learn"
  },
  {
    title: "Statistics and Probability",
    subtopics: ["Mean, Median, Mode", "Range", "Intro to Standard Deviation", "Graphs and Charts", "Basic Probability", "Compound Probability", "Permutation and Combinations", "Data Interpretation"],
    status: "Yet to learn"
  }
  ];
    return(
        <>
            <div className="padding"></div>
            <div className="lesson-list-container">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.title}
              title={lesson.title}
              status={lesson.status}
            />
          ))}
            </div>
        </>
    );
}