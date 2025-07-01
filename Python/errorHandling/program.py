'''
How to handle errors in python:
1. we use try and except ---> this is same with try catch block in javascript
2.syntax: 

  try:
    logic or codes
  except

3. Type of errors:
    --> Syntax Error: this error come when we don't follow the rules and regulation of the language , it show before the execution means at compile time

    -->Run time error: this error comes when we write wrong logic like 10/0

'''

try:
    with open("not_exiting.txt","r") as file:
        content=file.read()
        print(content)
except FileNotFoundError:
    print("Error: The file does not exits!")


try:
    num=int(input("Enter a number:"))
    print(10%num)
except ZeroDivisionError:
    print("Invalide input")
