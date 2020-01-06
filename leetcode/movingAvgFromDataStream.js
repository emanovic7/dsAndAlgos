//QUESTION

// Given a stream of integers and a window size,
// calculate the moving average of all integers in the sliding window.
//
// Example:
//
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3


/**
 * Initialize your data structure here.
 * @param {number} size
 */

 /**
 * @param {number} val
 * @return {number}
 */

 /**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

 class Node {
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class Queue {
  constructor(){
   this.first = null;
   this.last = null;
   this.length = 0;
 }

  enqueue(val){
     let newNode = new Node(val);
     if(this.length === 0){
       this.first = newNode;
       this.last = newNode;
    }else {
       this.last.next = newNode;
       this.last = newNode;
    }
     this.length++;
  }

   dequeue(){
     if(!this.first){
         return null;
     }
     if(this.length === 1){
         this.last = null;
     }
     this.first = this.first.next;
     this.length--;
   }

   total(){
    let sum = 0;
    let currentNode = this.first;
    while(currentNode){
      sum += currentNode.val;
      currentNode = currentNode.next;
     }
       return sum;
   }

}


const MovingAverage = (size) => {
    this.maxSize = size;
    this.queue = new Queue;
};


MovingAverage.prototype.next = function(val) {
    if(this.queue.length === this.maxSize ){
        this.queue.dequeue();
    }
    this.queue.enqueue(val);
    return this.queue.total()/this.queue.length;
};
