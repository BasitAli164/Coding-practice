'''
How to handle errors in python:
1. we use try and except ---> this is same with try catch block in javascript
2.syntax: 

  try:
    logic or codes
  except

3. Type of errors:
    --> Syntax Error: this error come when we don't follow the rules and regulation of the language
    -->

'''

try:
    with open("not_exiting.txt","r") as file:
        content=file.read()
        print(content)
except FileNotFoundError:
    print("Error: The file does not exits!")
    



