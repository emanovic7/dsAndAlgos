class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    //pass the key through the hash function to create an address
    //wher we will store our value in the table.
    let address = this._hash(key);
    //check to see if the address is empty
    if (!this.data[address]) {
      //if it is, set it to an empty array
      this.data[address] = [];
    }
    //put the key-value pair into the empty address
    //created by the hash function
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    //pass the key through the hash function to create an address
    const address = this._hash(key);
    //set a variable currentBucket to the address returned by the hash function
    const currentBucket = this.data[address]
     //if currentBucket isn't empty
    if (currentBucket) {
      //loop through bucket (a bucket can contain several key value pairs due to collisions)
      for(let i = 0; i < currentBucket.length; i++){
        //if first array element of the ith element in the bucket is the same as the key
        if(currentBucket[i][0] === key) {
          //return the value in the ith element. 
          return currentBucket[i][1]
        }
      }
    }
    //if there's nothing in the bucket(array), return undefined
    return undefined;
  }
}
