import Stack

stack_int = Stack.Stack(int)


for i in range(10):
    print(i, stack_int.push(Stack.Node(i)))
    #아래 구문은 에러를 발생시킴, 타입에러!
    #stack_int.push(Stack.Node("Hello String"))

for _ in range(10):
    print(stack_int.pop().get_content())
