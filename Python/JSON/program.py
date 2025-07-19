'''
JSON: Javscript Object Notation
    --> it is a method to store and exchnage of data , for any language when you working with api and store and update or modify data between different file and locatoin 

    --> it is like to dictionary in python
    --> Python give a built-in function 
'''

# import the json built-in function 
import json

# create/make json like data which also called dictionary in python
data={"name":"basit","age":23,"city":"skardu"}

# Writing JSON data to a file
with open('data.json',"w") as file:
    json.dump(data,file)
with open('data.json','r') as file:
    data=json.load(file)
    print(data)


