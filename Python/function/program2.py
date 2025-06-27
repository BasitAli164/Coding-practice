# # User Define function 
# def showMessage():
#     ''' simply show the message'''
#     print("Hi! I am a function ")

# result=showMessage()
# # print("Id of result 1:",id(result))
# def showMessages(message):
#     print(message)
# results=showMessages("Hi! How are you")
# # print("Id of results 2:",id(results))



def sum(a,b=9):
    return a+b
add=sum(4)
print("Sum of two number is:",add)
add=sum(4,4)
print("Sum of two number is:",add)