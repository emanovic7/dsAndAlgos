const is_balanced = (expression) => {
    let stack = [];

    let bracketHash = {
        "{": "}",
        "[": "]",
        "(": ")"
    };

    for (let i = 0; i < expression.length; i++) {
        let currBracket = expression[i];
        if (bracketHash[currBracket] !== undefined){
          stack.push(bracketHash[currBracket]);
        }
        else {
            if (stack.length === 0 || currBracket !== stack[stack.length-1]){
              return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0;
}


// it's an opening bracket, so push the corresponding closing one into the stack

// They're very similar: Implemented the same way, main difference is how items are removed from each. No random access operation like arrays, mainly used to run commands on elements at the beginning or ends of data.
// Linear Data Structure: traverse data elements sequentially, affecting only one data element at a time. Built using arrays or linked-lists, but unlike these, less actions can be performed. 
// Stacks
// stacking pieces of data on top of each other, vertically. Only top plate can be worked with. LIFO (Last In, First Out). 
// In most programming languages, functions are called via LIFO (functions within functions within functions). 
// Browser history, undo, forward; storing previous state of work in memory 
// Mehtods: Pop O(1), Push O(1), Peek O(1), lookup (o(n))
// Queues 
// Line outside a bar, opposite of stacks
// FIFO (First In, First Out).
// Waitlist app, restaurant check-ins, Uber, Lyft
// Methods: Peek O(1), Enqueue O(1), Dequeue O(1), Lookup (o(n))
