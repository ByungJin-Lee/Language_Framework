class Node:
    def __init__(self, data = None, back = None) -> None:
        self.content = data
        self.back = back
    def next(self):
        return self.back
    def set_next(self, back):
        self.back = back
    def get_content(self):
        return self.content
    def set_content(self, data):
        self.content = data

class Que:
    def __init__(self, data_type : type, capacity : int = 10) -> None:
        self.capactiy = capacity
        self.data_type = data_type
        self.front = None
        self.back = None
        self.len = 0
    def get_capacity(self):
        return self.capactiy
    def set_capacity(self, value : int)->bool:
        return value >= self.capactiy
    def size(self):
        return self.len
    def enqueue(self, node : Node) -> bool:
        if type(node.content) != self.data_type:
            return False
        if self.len == self.capactiy:
            return False
        if self.len == 0:
            self.front = node
            self.back = node
        else:
            self.back.set_next(node)
            self.back = node
        self.len += 1
        return True
    def dequeue(self) -> Node:
        if self.len < 1:
            return None
        ret = self.front
        self.front = self.front.back
        self.len -= 1
        return ret