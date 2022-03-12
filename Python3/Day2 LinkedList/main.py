import LinkedList

class PriorityData:
    def __init__(self, priority, seq_number) -> None:
        self.priority = priority
        self.seq_number = seq_number
    def get_priority(self):
        return self.priority

linked_list = LinkedList.LinkedList(PriorityData)

for i in range(10):
    node = LinkedList.Node(PriorityData(5, i))
    linked_list.append(node)

def print_filter(node : LinkedList.Node):
    data : PriorityData = node.data
    print(data.get_priority(), data.seq_number)
    return 1

linked_list.filter(print_filter)