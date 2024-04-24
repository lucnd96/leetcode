class LinkedNode<K, T> {
  public next?: LinkedNode<K, T>;
  public previous?: LinkedNode<K, T>;
  public value: T;
  public key: K;

  constructor(
    key: K,
    value: T,
    next?: LinkedNode<K, T>,
    previous?: LinkedNode<K, T>,
  ) {
    this.value = value;
    this.next = next;
    this.key = key;
    this.previous = previous;
  }
}

class LRUCache<K, T> {
  private readonly capacity: number;
  private map: Map<K, LinkedNode<K, T>>;
  private head?: LinkedNode<K, T>;
  private tail?: LinkedNode<K, T>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  moveToHead(node: LinkedNode<K, T>) {
    if (node.key === this.head?.key) {
      return;
    }
    const pre = node.previous;
    const next = node.next;
    if (pre) {
      pre.next = next;
    }
    if (next) {
      next.previous = pre;
    }
    if (this.tail?.key === node.key) {
      this.removeTail();
    }
    this.addNode(node);
  }

  addNode(node: LinkedNode<K, T>) {
    if (this.head) {
      this.head.previous = node;
    }
    node.next = this.head;
    node.previous = undefined;
    this.head = node;
  }

  removeTail() {
    if (this.tail) {
      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = undefined;
      }
    }
  }

  get(key: K) {
    const node = this.map.get(key);
    if (!node) {
      return -1 as const;
    }
    this.moveToHead(node);
    return this.map.get(key)?.value;
  }

  put(key: K, value: T): void {
    const node = this.map.get(key);
    if (this.capacity === 1) {
      this.map.clear();
      this.map.set(key, new LinkedNode(key, value));
      return;
    }

    if (node) {
      node.value = value;
      this.moveToHead(node);
    } else {
      const newNode = new LinkedNode(key, value);
      this.addNode(newNode);
      this.map.set(key, newNode);
      if (this.map.size > this.capacity) {
        this.map.delete(this.tail?.key!);
        this.removeTail();
      } else if (this.map.size === 1) {
        this.tail = this.head;
      }
    }
  }
}
