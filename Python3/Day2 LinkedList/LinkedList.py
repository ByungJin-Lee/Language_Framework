from pyclbr import Function


class Node:
    def __init__(self, data, next = None):
        self.next = next
        self.data = data
    def get_data(self):
        return self.data
    def get_next(self):
        return self.next
    def set_next(self, node):
        self.next = node

class LinkedList:
    def __init__(self, type_str):
        self.header = Node(None)
        self.tail = None
        self.type_str = type_str
        self.length = 0
    def append(self, node : Node):
        #Check Type
        if type(node.data) != self.type_str:
            raise Exception('Node의 Data Type이 올바르지 않습니다.')
        #Append
        if self.tail == None:
            self.tail = node
            self.header.next = node
        else:
            self.tail.next = node
            self.tail = node
        self.tail.next = None
        self.length += 1
    def travel(self) -> list:
        node_list = list()
        cur : Node = self.header.next
        for _ in range(self.length):
            node_list.append(cur)
            cur = cur.next
        return node_list

    def filter(self, condition : Function) -> list:
        filtered_items = list()
        for node in self.travel():
            if condition(node) == 1:
                filtered_items.append(node)
        return filtered_items

    #IsSuccess, Front, Target
    def front(self, condition : Function) -> tuple:
        front_node = self.header
        cur_node : Node = front_node.next

        while cur_node != None:
            if condition(cur_node) == 1:
                return (1, front_node, cur_node)
        
        return (0, None, None)
    
    def get_size(self) -> int:
        return self.length