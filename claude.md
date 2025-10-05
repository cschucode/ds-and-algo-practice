# How to Add New Problems

When adding a new problem to the interview-prep repository, follow this structure:

## Directory Structure

Create a new directory in the appropriate difficulty level folder (`easy/`, `medium/`, or `hard/`) with a kebab-case name:

```
<difficulty>/<problem-name>/
  ├── problem.md
  ├── solution.js
  └── test.js
```

## File Details

### problem.md
Contains the problem description with:
- Problem title
- Problem description
- Examples with input/output
- Constraints

### solution.js
Contains:
- Function signature and JSDoc comments
- Empty implementation for you to complete
- Module export

### test.js
Contains:
- Test suite using Node's built-in `assert` module
- Multiple test cases with try/catch blocks
- Helper functions (if needed for data structures like linked lists, trees, etc.)
- Edge cases and example cases from problem.md
- Console output showing test results with ✓ or ✗

## Example Command

To add a new problem, ask Claude:
```
Add this [problemName] problem to the [difficulty] section with problem.md, solution.js and tests.
Here is the description "[problem description]"
```

Claude will:
1. Create the directory structure
2. Write the problem description
3. Create an empty solution file for you to implement
4. Write comprehensive tests for your solution
