# LeetCode Practice Solutions (TypeScript)

## 📖 About

This repository contains a curated collection of highly optimized LeetCode solutions implemented in **TypeScript**. It serves as a technical portfolio demonstrating proficiency in algorithms, data structures, and modern TypeScript practices.

The solutions prioritize clean, well-documented code with an emphasis on optimal time and space complexities. Methodologies utilized throughout this repository include Dynamic Programming, the Sliding Window technique, Two-Pointer traversal, and Hash Map implementations. This project reflects a continuous dedication to refining problem-solving skills and tackling complex technical challenges for software engineering roles.

## 🚀 Technical Highlights

* **Language:** TypeScript
* **Focus Areas:**
* Time & Space Complexity Optimization (e.g., $O(n)$ Hash Map solutions, $O(n)$ Two-Pointer techniques).
* Memory-safe operations (e.g., avoiding string conversions for integer manipulation).
* Advanced algorithm paradigms (Dynamic Programming, Binary Search, Sliding Window).


* **Documentation:** Every file is extensively commented with step-by-step logic breakdowns, making the codebase highly readable and educational.

## 🧩 Problem Index

Here is a comprehensive list of the problems solved in this repository, categorized by the core algorithm or data structure utilized:

### Arrays & Hashing

* **[Two Sum](https://www.google.com/search?q=./twosum.ts)**: Utilizes a Hash Map for an optimal $O(n)$ lookup to find complementary indices.
* **[Container With Most Water](https://www.google.com/search?q=./maxarea.ts)**: Employs a Two-Pointer technique to find the maximum area in $O(n)$ time by shifting the boundary of the shorter height.
* **[Integer to Roman](https://www.google.com/search?q=./itor.ts)**: Uses a greedy approach with a predefined value-symbol lookup map to construct Roman numerals.

### Strings & Sliding Window

* **[Longest Substring Without Repeating Characters](https://www.google.com/search?q=./longestsubstring.ts)**: Implements a Sliding Window approach with a Hash Map to dynamically track character indices and calculate maximum window size.
* **[String to Integer (atoi)](https://www.google.com/search?q=./atoi.ts)**: Parses strings handling leading whitespace, signs, and 32-bit signed integer overflow/underflow clamping.
* **[Zigzag Conversion](https://www.google.com/search?q=./zigzag.ts)**: Simulates the zigzag traversal direction using an array of row strings.

### Dynamic Programming & Recursion

* **[Regular Expression Matching](https://www.google.com/search?q=./ismatch.ts)**: Uses a 2D Dynamic Programming table to evaluate string patterns containing `.` and `*` wildcards.

### Math & Bit Manipulation

* **[Reverse Integer](https://www.google.com/search?q=./reverse.ts)**: Safely reverses 32-bit signed integers using modulo math while avoiding string conversions and explicitly handling overflow limits.
* **[Palindrome Number](https://www.google.com/search?q=./palindrome.ts)**: Determines if an integer is a palindrome purely through mathematical digit extraction, discarding edge cases like negative numbers early.

### Linked Lists

* **[Add Two Numbers](https://www.google.com/search?q=./addtwonumbers.ts)**: Iterates through two linked lists representing numbers in reverse order, utilizing a dummy head and carry-over logic for the sum.

### Binary Search & Pointers

* **[Median of Two Sorted Arrays](https://www.google.com/search?q=./findmedian.ts)**: Achieves an optimal $O(\log(\min(m, n)))$ runtime by applying binary search on the partition index of the shorter array to balance the left and right halves.
* **[Longest Palindromic Substring](https://www.google.com/search?q=./longestpalindrome.ts)**: Uses an "expand around center" pointer approach to evaluate both odd- and even-length palindromes efficiently.

## 💻 Getting Started

### Prerequisites

To run or compile these scripts, ensure you have Node.js and TypeScript installed on your local machine.

```bash
# Install TypeScript globally if you haven't already
npm install -g typescript

```

### Running the Code

You can compile the TypeScript files to JavaScript using the `tsc` compiler, or run them directly using `ts-node`:

```bash
# Example: Running the Two Sum solution directly
npx ts-node twosum.ts

```

## 👨‍💻 About the Author

**Matthew Penner**
*B.S. Computer Science (Honors College) – Portland State University*

A software engineer with a passion for high-performance computing, AI/ML integrations, and game development. When not writing TypeScript, Python, or C++, you can find me customizing small form factor (SFF) PCs, exploring transportation infrastructure, or attending local pop culture conventions.
