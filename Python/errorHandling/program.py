'''
How to handle errors in python:
 we use try and except ---> this is same with try catch block in javascript
  syntax: 

  try:
    logic or codes
  except


'''

try:
    with open("not_exiting.txt","r") as file:
        content=file.read()
        print(content)
except FileNotFoundError:
    print("Error: The file does not exits!")
    



