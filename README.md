# ZMS (ZimAsul)

A fun interactive web-based application for learning the foundations/basics of Math.

---
### Overview
ZMS is an interactive educational platform designed to prepare learners for higher-level mathematics by strengthening the core skills expected before entering college or advanced study. Many students struggle with advanced math not because they lack ability, but because foundational topics were never fully mastered. ZMS aims to close that gap through a learning experience that is engaging, rewarding, confidence-building, and far from boring.

Instead of passive memorization, ZMS uses interactive tasks, guided practice, progress-based challenges, and motivating feedback to help learners build both competence and confidence step by step.

The platform covers essential mathematics foundations across multiple levels:

- Arithmetic Review
  Integers (+, −, ×, ÷)
  Fractions
  Decimals
  Percentages
  Ratios and Proportions
  Order of Operations (PEMDAS/BODMAS)
  Basic Exponents
  Square Roots
- Pre-Algebra
  Variables
  Expressions
  Evaluating Formulas
  Like Terms
  Simplifying Expressions
  Distributive Property
  Basic Equations
  Inequalities
  Word Problems
- Algebra I
  Linear Equations
  Multi-Step Equations
  Systems of Equations
  Graphing Lines
  Slope and Intercepts
  Functions Basics
  Domain and Range
  Sequences
  Exponent Rules
  Polynomials
  Factoring Basics
  Introduction to Quadratics
- Geometry
  Points, Lines, and Planes
  Angles
  Triangles
  Congruence and Similarity
  Perimeter and Area
  Surface Area and Volume
  Circles
  Coordinate Geometry
  Distance and Midpoint Formula
  Pythagorean Theorem
  Transformations
- Algebra II
  Quadratic Equations
  Advanced Factoring
  Completing the Square
  Quadratic Formula
  Radical Expressions
  Rational Expressions
  Complex Numbers
  Exponential Functions
  Introduction to Logarithms
  Polynomial Functions
  Matrices Basics
  Conic Sections
- Trigonometry
  Right Triangle Trigonometry
  Sine, Cosine, Tangent
  Special Triangles
  Unit Circle
  Graphs of Trig Functions
  Inverse Trigonometric Functions
  Applications
- Statistics and Probability
  Mean, Median, Mode
  Range
  Intro to Standard Deviation
  Graphs and Charts
  Basic Probability
  Compound Probability
  Permutations and Combinations
  Data Interpretation

ZMS is built to make learning math feel achievable, enjoyable, and progressive—turning weak foundations into lasting strength.

## Current Features
- still working on web layout, themes, fonts, etc
- User interface for core pages
  working on it
- Organized project structure
  working on it
- Responsive layout
  working on it
- Navigation system
  working on it
- Ongoing feature development
  none yet

---

## Planned Features

- User authentication / login
- Dashboard analytics
- CRUD operations for records
- Search and filtering
- Role-based access
- Reports / export tools
- Notifications

---

## Tech Stack

### Frontend
- React *(replace with actual framework)*
- TypeScript / JavaScript
- HTML / CSS

### Backend
- Not yet *(replace if different)*

### Database
- Not yet*(replace with actual DB)*

---

## Installation

```bash
git clone <your-repository-url>
cd zms
npm install
npm run dev
```

---

## Usage

After running the development server, open the local host URL shown in the terminal and explore the system features currently available.

---

## Project Status

Currently in active development. Features and structure may continue to evolve.

---

## Screenshots

(Add screenshots here as development progresses)

---
## Theme Layout
1. Color System
  -Primary color (main brand color) : #547792 (button, links, highlights, active states)
  -Secondary color : #6B8FA8 (secondary buttons, badges, icons, supportive UI elements, hover accents)
  -Background color : #182634 (main app background, page canvas, overall layout base)
  -Surface colors : #2A3D50 (cards, modals, sections, containers, quiz blocks, dashboards)

  -Primary text : #EAE0CF (main readable content, headings)
  -Secondary text :  #C9C0AF (subtitles, descriptions, hints)
  -Muted text : #8FA0A8 (disabled text, metadata, timestamps)

  -Success color : #8aeb90 (correct answers, completion, progress success)
  -Error color : #eb8a8a (wrong answers, validation errors)
  -Warning color : #ebbf8a (alerts, caution states, partial correctness)

  -Border / divider color : rgba(234, 224, 207, 0.2) (card outlines, separators, subtle structure lines)
  -Hover color : #6aa6cd (slightly brighter version of primary for buttons/cards hover)
  -Active state :  #4A6A86 (pressed state, selected items, active navigation tabs)

2. Typography (Fonts)
  -Primary font : Jua 
  -Secondary font : Rock 3D (Logo/Title only)
  -Optional font : Chiron GoRound (Numeral/Symbol clarity if necessary)
  -Link: <link href="https://fonts.googleapis.com/css2?family=Chiron+GoRound+TC:wght@200..900&family=Jua&family=Rock+3D&display=swap" rel="stylesheet">

  Font sizes defined:
  -H1 : 32–40px (page titles, big sections) 
  -H2 : 24–28px (section headers)
  -H3 : 18–22px (subsections)
  -Body: 14–16px (lessons, explanations)
  -Small text: 12px (notes, hints, metadata)
  
  Font weights defined:
    -Regular (400) : (lesson explanations, paragraphs, normal UI text, instructions)
    -Medium (500) : (subheadings, buttons, form labels, highlighted definitions, important keywords in lessons)
    -Bold (700) : (H1 / H2 headings, section titles, quiz questions, key concepts, correct answers (sometimes))
    
    -Line spacing : 1.7 (Body/Lessons)
    -Letter spacing : 1.25

3. Spacing System
  -Base spacing unit defined (e.g. 4px or 8px system)
  -Consistent padding rules
  -Margin rules standardized
  -Component spacing consistency (cards, buttons, sections)

4. Layout System
  -Grid system (e.g. 12-column or flex-based)
  -Max content width defined
  -Responsive breakpoints:
  -Mobile
  -Tablet
  -Desktop
  -Sidebar or top navigation decided
  -Card layout style defined

5. Components Style
  Button styles
  -Primary button : squared with soft radius border
  -Secondary button : pill style
  -Disabled state : greyed out
  -Input fields style
  -Cards design system : soft radius border, consistent size for all
  -Modals / popups style : soft radius borders
  -Navigation bar style : upper right corner of webpage
  -Progress indicators : Percentage style
  -Quiz UI elements : diko pa sure eh
 
 6. Visual Style / Personality
  Overall theme direction chosen:
  -Minimal
  -Academic
  -Friendly / playful
  -Border radius style : rounded
  -Shadow style : soft 
  -Icon style : filled
  -Animation style : fade in/ fade out, pop

7. Responsiveness Rules
  -Mobile-first design decision
  -Text scaling rules
  -Button sizing on mobile
  -Layout stacking behavior

8. UX Consistency Rules
  -One style for all buttons
  -One style for all cards
  -Consistent spacing everywhere
  -Consistent feedback system (correct/wrong answers)
  -Consistent navigation behavior

9. Learning Experience Design (Important for ZMS)
  -Highlight correct answers visually
  -Error explanation style defined
  -Progress feedback system
  -Reward / motivation system (badges, progress bars)
  -Hint system design

10. Implementation Prep
  -Design system stored in code (CSS variables / theme file)
  -Reusable style components created
  -Theme easily adjustable (no hardcoded colors everywhere)

## Roadmap

- [ ]Finalize theme layout
- [ ] Complete authentication system
- [ ] Finish dashboard UI
- [ ] Connect backend API
- [ ] Implement database integration
- [ ] Deploy live version
- [ ] Improve mobile responsiveness
- [ ] Add documentation

---

## Learning Goals

This project is also intended to improve skills in:

- Full-stack development
- Project architecture
- Version control with Git
- UI/UX design
- Deployment workflows

---

## Author

Nocerale Angel Merino

GitHub: https://github.com/noseereally

---

## License

This project is for educational / portfolio purposes.