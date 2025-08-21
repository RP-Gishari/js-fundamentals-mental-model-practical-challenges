# JavaScript Fundamentals Workshop 🚀

## **Workshop Overview**

**Goal**: Reinforce 3 weeks of JavaScript fundamentals through practical, collaborative problem-solving.

**Format**: Each team tackles the **same type of problem** (building a simple application) but with **different themes** and **emphasis areas**. All teams will encounter all fundamental concepts.

**Time**: 60 minutes coding + 60 minutes presentations (15 min per team)

---

## **Git Workflow**

### **Repository Setup**

```bash
# Main repository structure:
js-fundamentals-workshop/
├── README.md (this file)
├── main-branch/
│   ├── shared-utils.js (common utilities all teams can use)
│   └── examples/ (reference examples)
├── team-gold/
├── team-jade/
├── team-crimson/
└── team-azure/
```

### **Team Workflow**

1. **Clone the repository**
2. **Git checkout to your team branch**: `git checkout team-[color]`
3. **Work in your team folder**: `/team-[color]/`
4. **Commit regularly**: Document your problem-solving process
5. **Final push**: Complete solution ready for demo

### **Integration Phase (After 60 minutes)**

- Each team demos their solution on their branch
- Teams can explore other branches to see different approaches
- Discussion: "How did other teams solve similar problems differently?"

---

## **The Challenge: "Daily Life Apps"**

Each team builds a **simple application** that uses **all JavaScript fundamentals** but focuses on different **real-world scenarios**. This ensures everyone practices the same concepts while solving relatable problems.

### **Core Fundamentals Every Team Must Use:**

- ✅ **Variables** (`let`, `const`, `var` differences)
- ✅ **Functions** (declarations, expressions, arrow functions)
- ✅ **Objects** (properties, methods, `this` keyword)
- ✅ **Arrays** (manipulation, iteration, methods)
- ✅ **Control Flow** (loops, conditionals, logical operators)
- ✅ **Strings** (manipulation, template literals)
- ✅ **Type Conversion** (implicit/explicit, comparison operators)
- ✅ **Scope** (global, function, block scope)

---

## **Team Challenges**

### **🥇 Team Gold: "Personal Budget Tracker"**

**Theme**: Managing money and expenses **Files to create**:

- `budget-tracker.js` (main application)
- `test-budget.js` (test your functions)
- `README.md` (document your approach)

**Your Mission**: Build a budget tracker that helps people manage their spending.

**Required Features**:

```javascript
// 1. VARIABLES & SCOPE: Track budget data safely
let monthlyBudget = 2000;
const categories = ['food', 'transportation', 'entertainment'];
// Challenge: Prevent accidental budget overwrites

// 2. FUNCTIONS: Core budget operations
function addExpense(amount, category, description) {}
function calculateRemaining() {}
function getExpensesByCategory(category) {}

// 3. OBJECTS: Expense records
const expense = {
    amount: 25.50,
    category: 'food',
    description: 'lunch',
    date: '2024-08-21'
};

// 4. ARRAYS: Manage expense lists
const expenses = [];
// Challenge: Sort, filter, and summarize expenses

// 5. CONTROL FLOW: Smart budget logic
// Challenge: Warn when over budget, categorize spending patterns

// 6. STRINGS: User-friendly formatting
// Challenge: Format currency, create spending summaries

// 7. TYPE CONVERSION: Handle user input
// Challenge: Convert string inputs to numbers safely

// 8. SCOPE: Protect budget data
// Challenge: Prevent external code from corrupting budget
```

**Success Criteria**:

- Track expenses without breaking the budget system
- Handle invalid inputs gracefully (negative amounts, empty categories)
- Create readable spending reports
- Demonstrate understanding of all 8 fundamental concepts

---

### **💚 Team Jade: "Recipe Collection Manager"**

**Theme**: Organizing and scaling cooking recipes **Files to create**:

- `recipe-manager.js` (main application)
- `test-recipes.js` (test your functions)
- `README.md` (document your approach)

**Your Mission**: Build a recipe manager that helps people organize and scale their favorite recipes.

**Required Features**:

```javascript
// 1. VARIABLES & SCOPE: Manage recipe data
let recipeCollection = [];
const measurementUnits = ['cups', 'tbsp', 'tsp', 'oz'];
// Challenge: Keep recipe data organized and accessible

// 2. FUNCTIONS: Recipe operations
function addRecipe(name, ingredients, instructions, servings) {}
function scaleRecipe(recipeName, newServings) {}
function searchRecipes(ingredient) {}

// 3. OBJECTS: Recipe structure
const recipe = {
    name: 'Chocolate Chip Cookies',
    ingredients: [
        { name: 'flour', amount: 2, unit: 'cups' },
        { name: 'sugar', amount: 1, unit: 'cup' }
    ],
    instructions: ['Mix dry ingredients', 'Add wet ingredients'],
    servings: 24
};

// 4. ARRAYS: Manage ingredients and instructions
// Challenge: Scale ingredient amounts, reorder instructions

// 5. CONTROL FLOW: Recipe logic
// Challenge: Scale ingredients proportionally, validate recipe data

// 6. STRINGS: Recipe formatting
// Challenge: Generate shopping lists, format instructions clearly

// 7. TYPE CONVERSION: Handle measurements
// Challenge: Convert between units, handle fractional amounts

// 8. SCOPE: Protect recipe integrity
// Challenge: Prevent accidental recipe modification
```

**Success Criteria**:

- Scale recipes accurately for different serving sizes
- Search and filter recipes effectively
- Handle edge cases (zero servings, missing ingredients)

---

### **❤️ Team Crimson: "Student Grade Calculator"**

**Theme**: Academic performance tracking and analysis **Files to create**:

- `grade-calculator.js` (main application)
- `test-grades.js` (test your functions)
- `README.md` (document your approach)

**Your Mission**: Build a grade calculator that helps students track their academic progress.

**Required Features**:

```javascript
// 1. VARIABLES & SCOPE: Academic data management
let currentSemester = 'Fall 2024';
const gradingScale = { A: 90, B: 80, C: 70, D: 60, F: 0 };
// Challenge: Maintain accurate grade records

// 2. FUNCTIONS: Grade calculations
function addAssignment(subject, assignmentName, score, maxPoints) {}
function calculateGPA(grades) {}
function predictFinalGrade(currentGrades, upcomingAssignments) {}

// 3. OBJECTS: Student and assignment records
const student = {
    name: 'Alice Johnson',
    subjects: ['Math', 'Science', 'English'],
    assignments: [],
    calculateAverage: function() { /* method challenge */ }
};

// 4. ARRAYS: Grade lists and calculations
// Challenge: Handle different assignment weights, missing grades

// 5. CONTROL FLOW: Academic logic
// Challenge: Determine pass/fail, honor roll eligibility, improvement trends

// 6. STRINGS: Report generation
// Challenge: Create grade reports, format academic summaries

// 7. TYPE CONVERSION: Score processing
// Challenge: Handle percentage vs. point-based grades

// 8. SCOPE: Protect academic records
// Challenge: Prevent grade tampering, maintain data integrity
```

**Success Criteria**:

- Calculate accurate GPAs and grade averages
- Handle different grading systems and edge cases
- Generate meaningful academic reports
- Predict outcomes based on current performance

---

### **💙 Team Azure: "Contact List Organizer"**

**Theme**: Managing personal and professional contacts **Files to create**:

- `contact-organizer.js` (main application)
- `test-contacts.js` (test your functions)
- `README.md` (document your approach)

**Your Mission**: Build a contact organizer that helps people manage their personal and professional networks.

**Required Features**:

```javascript
// 1. VARIABLES & SCOPE: Contact data protection
let contactDatabase = [];
const contactTypes = ['family', 'friend', 'colleague', 'business'];
// Challenge: Secure contact information management

// 2. FUNCTIONS: Contact operations
function addContact(name, phone, email, type) {}
function findContact(searchTerm) {}
function updateContact(contactId, newInfo) {}

// 3. OBJECTS: Contact records
const contact = {
    id: 1,
    name: 'John Doe',
    phone: '555-123-4567',
    email: 'john@email.com',
    type: 'friend',
    getDisplayName: function() { /* method challenge */ }
};

// 4. ARRAYS: Contact management
// Challenge: Sort contacts, group by type, handle duplicates

// 5. CONTROL FLOW: Contact logic
// Challenge: Validate contact info, merge duplicates, categorize contacts

// 6. STRINGS: Contact formatting
// Challenge: Format phone numbers, validate emails, create contact cards

// 7. TYPE CONVERSION: Data validation
// Challenge: Clean up messy contact data input

// 8. SCOPE: Privacy protection
// Challenge: Control access to sensitive contact information
```

**Success Criteria**:

- Organize contacts with reliable search and filtering
- Validate and format contact information consistently
- Handle duplicate contacts and data cleanup
- Create useful contact summaries and exports

---

## **Implementation Guidelines**

### **File Structure (Each Team)**

```
team-[color]/
├── [app-name].js           # Main application code
├── test-[app-name].js      # Test functions and examples
├── README.md               # Your approach and learnings
└── demo-data.js            # Sample data for demonstrations
```

### **Code Requirements**

1. **Comment your code**: Explain which fundamental concept each section demonstrates
2. **Test your functions**: Include examples that prove your code works
3. **Handle edge cases**: What happens with invalid input?
4. **Document decisions**: Why did you choose certain approaches?

### **Fundamental Concepts Checklist**

Each team must demonstrate:

- [ ] **Variables**: Proper use of `let`, `const`, `var`
- [ ] **Functions**: At least one of each type (declaration, expression, arrow)
- [ ] **Objects**: With both properties and methods
- [ ] **Arrays**: Using array methods like `map`, `filter`, `find`
- [ ] **Control Flow**: Loops and conditional statements
- [ ] **Strings**: Template literals and string methods
- [ ] **Type Conversion**: Explicit conversion and comparison safety
- [ ] **Scope**: Demonstrating different scope behaviors

---

## **Presentation Format (10 minutes per team)**

### **Structure**

1. **Live Demo** (2.5 min): Show your application working with real data
2. **Code Walkthrough** (2.5 min): Highlight how you used each fundamental concept
3. **Problem-Solving Discussion** (3 min): What challenges did you face and how did you solve them?
4. **Q&A** (2 min): Answer questions from other teams

### **Evaluation Criteria**

- ✅ **Completeness**: All 8 fundamental concepts demonstrated
- ✅ **Functionality**: Application works as intended
- ✅ **Code Quality**: Clean, commented, understandable code
- ✅ **Problem-Solving**: Evidence of debugging and iterative improvement
- ✅ **Collaboration**: All team members contribute meaningfully

---

## **Success Tips**

### **Getting Started**

1. **Read your challenge completely** before writing any code
2. **Plan together**: Discuss approach as a team first
3. **Start simple**: Get basic functionality working before adding complexity
4. **Test frequently**: Run your code often to catch issues early

### **When You're Stuck**

1. **Check the fundamentals**: Are you using the concept correctly?
2. **Use console.log**: Debug by printing values at each step
3. **Ask your team**: Two heads are better than one
4. **Simplify**: Break the problem into smaller pieces

### **Finishing Strong**

1. **Test edge cases**: What breaks your application?
2. **Clean up code**: Remove debugging console.logs, add comments
3. **Prepare demo**: Practice showing your application working
4. **Document learning**: What was most challenging? Most interesting?

---

## **Resources**

### **Quick Reference**

- **Variables**: `let` (reassignable), `const` (fixed), `var` (avoid in new code)
- **Functions**: `function name() {}`, `const name = function() {}`, `const name = () => {}`
- **Arrays**: `push()`, `pop()`, `map()`, `filter()`, `find()`, `forEach()`
- **Objects**: `object.property`, `object['property']`, `object.method()`
- **Strings**: `template literals`, `.trim()`, `.split()`, `.join()`, `.includes()`

### **Common Patterns**

```javascript
// Safe type conversion
const number = parseInt(userInput) || 0;
const string = String(someValue);

// Safe property access
const value = object.property || 'default';

// Array processing
const results = array
  .filter(item => condition)
  .map(item => transform(item));
```

Good luck, and remember: the goal is learning, not perfection! 🎯