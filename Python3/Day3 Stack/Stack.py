class Node:
    def __init__(self, content = None, next = None):
        self.content = content
        self.back = next
    def get_content(self):
        return self.content
    def next(self):
        return self.back
    def set_next(self, next):
        self.back = next

class Stack:
    def __init__(self, data_type : type, capacity : int = 10) -> None:
        self.capacity = capacity
        self.len = 0
        self.data_type = data_type
        self.top : Node = None
    def push(self, node : Node)-> bool:
        if type(node.content) != self.data_type:
            return False
        if self.len >= self.capacity:
            return False
        if self.is_empty() == False:
            node.set_next(self.top)
        self.top = node
        self.len += 1
        return True
    def pop(self) -> Node:
        if self.len < 1: 
            return None
        result : Node = self.top
        self.top = result.next()
        self.len -= 1
        return result
    def get_capacity(self):
        return self.capacity
    def size(self):
        return self.len
    def is_empty(self) -> bool:
        return self.len < 1

