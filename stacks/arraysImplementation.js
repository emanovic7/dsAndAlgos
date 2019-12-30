//ARRAYS


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[this.array.length - 1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    if(this.array.length === 0){
      return null;
    }
    this.array.pop();
    return this;
  }

}
