/*5. The task is to design and implement methods of an LRU cache. 
The class has two methods get and set which are defined as follows.
get(x) : Gets the value of the key x if the key exists in the cache 
otherwise returns -1
set(x,y) : inserts the value if the key x is not already present. 
If the cache reaches its capacity it should invalidate the least 
recently used item before inserting the new item.
In the constructor of the class the size of the cache should be initialized.
*/
//just using hash
// class LRU {
//   constructor(max = 3) {
//     this.max = max;
//     this.cache = new Map();
//   }

//   get(key) {
//     let item = this.cache.get(key);
//     if (item) {
//       // refresh key
//       return this.cache;
//       // this.cache.delete(key);
//       // this.cache.set(key, item);
//     } else {
//       return -1;
//     }
//   }

//   set(key, val) {
//     if (this.cache.size == this.max) {
//       // evict oldest
//       this.cache.delete(this._first());
//     }

//     this.cache.set(key, val);
//   }

//   _first() {
//     return this.cache.keys().next().value;
//   }
// }
// let cache = new LRU(3);
// //[1, 2, 3, 4, 5].forEach(v => cache.set(v, 'v:' + v))
// cache.set("a", 1);
// cache.set("b", 2);
// cache.set("c", 3);
// console.log(cache);
// cache.get('b');
// cache.set('d',4);
// console.log(cache);

//Using doublt linked list and hash map
class Node
{
  constructor(key, value, next = null, prev = null)
  {
    this.key = key;
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU {
  //set default limit of 3 if limit is not passed.
  constructor(limit = 3) {
    this.size = 0;
    this.limit = limit;
    this.head = null;
    this.tail = null;
    this.cache = {};
  }

  // Set Node to head of LinkedList
  // update cache with Node key and Node reference
  set(key, value)
  {
    this.ensureLimit();

    if (!this.head)
    {
      this.head = this.tail = new Node(key, value);
    } else
    {
      const node = new Node(key, value, this.head);
      this.head.prev = node;
      this.head = node;
    }

    //Update the cache map
    this.cache[key] = this.head;
    this.size++;
  }

  // Read from cache map and make that node as new Head of LinkedList

  get(key) {
    if (this.cache[key]) {
      const value = this.cache[key].value;

      // node removed from it's position and cache
      this.remove(key)
      // set node again to the head of LinkedList to make it most recently used
      this.set(key, value);

      return value;
    }

    console.log(`Item not available in cache for key ${key}`);
  }

  ensureLimit()
  {
    if (this.size === this.limit) {
      this.remove(this.tail.key)
    }
  }

  remove(key) {
    const node = this.cache[key];
ev !== null) {
      node.prev.next = node.next;
    } else {
    if (node.pr
      this.head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev
    }

    delete this.cache[key];
    this.size--;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.cache = {};
  }

  // Invokes the callback function with every node of the chain and the index of the node.
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // To iterate over LRU with a 'for...of' loop
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

let lruCache = new LRU(3);
lruCache.set('a', 123);
lruCache.set('b', 456);
lruCache.set('c', 789);
//console.log(lruCache);
lruCache.get('a'); // output 123
//console.log(lruCache);
// Now max limit 3 is reached. 
lruCache.set('d', 0);
console.log(lruCache);

