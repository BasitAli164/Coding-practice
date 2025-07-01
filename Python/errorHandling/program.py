# '''
# How to handle errors in python:
# 1. we use try and except ---> this is same with try catch block in javascript
# 2.syntax: 

#   try:
#     logic or codes
#   except

# 3. Type of errors:
#     --> Syntax Error: this error come when we don't follow the rules and regulation of the language , it show before the execution means at compile time

#     -->Run time error: this error comes when we write wrong logic like 10/0

# '''

# try:
#     with open("not_exiting.txt","r") as file:
#         content=file.read()
#         print(content)
# except FileNotFoundError:
#     print("Error: The file does not exits!")


# try:
#     num=int(input("Enter a number:"))
#     print(10%num)
# except ZeroDivisionError:
#     print("Invalide input")



# '''
# We can use multiple except block if our code is lengthy and complex with single try
# '''

# # program

# try:
#     num1=int(input("Enter first number:"))
#     num2=int(input("Enter second number"))
#     result=num1/num2
#     print("Result is:",result)
# except ZeroDivisionError:
#     print("Error: Can't divided by 0")
# except ValueError:
#     print("Error: Invalide Input! Please enter numbers only")

# """
# Now handle generically...
# """

# try:
#     num3=int(input("Enter a number"))
#     num4=int(input("enter again a nmber"))
#     output=num3/num4
#     print(output)
# except Exception as e:
#     print("error:",e)



    

try:
    file=open("text.txt",'r')
    content=file.read()
except FileNotFoundError:
    print("file not found")
finally:
    print("File closed")