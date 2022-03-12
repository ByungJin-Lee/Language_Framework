import Que

nQue = Que.Que(int, 10)

for i in range(20):
    nQue.enqueue(Que.Node(i))

for _ in range(10):
    print(nQue.dequeue().get_content())

for i in range(10):
    nQue.enqueue(Que.Node(i+10))

for _ in range(10):
    print(nQue.dequeue().get_content())
