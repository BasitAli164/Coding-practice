# User Define function 
def showMessage():
    ''' simply show the message'''
    print("Hi! I am a function ")

result=showMessage()
# print("Id of result 1:",id(result))
def showMessages(message):
    print(message)
results=showMessages("Hi! How are you")
# print("Id of results 2:",id(results))

print(result is results)


def sum(a,b=9):
    return a+b
add=sum(4)
print("Sum of two number is:",add)
add=sum(4,4)
print("Sum of two number is:",add)


def product(*arg):
    for item in arg:
        print(f"{item}")
        
product(2,3,4,5,"Basit")


def name(*agr):
    return "First Name "+agr[0] + "\n"+"Middle Name: "+agr[1] +"\n"+ "Last Name: "+agr[2]+"\n"+" Then: " +agr[3]

print(name("basit","ali","khan","anchan","king"))



count=0

def increment():
    global count # Explicitly modifying global varibale if we don't use this line then we face error and don't update or increase the value of count ,don't use globle variable mostly
    count+=1
increment()
print("Counter is",count)