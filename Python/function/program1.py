# Function 
'''
There are two types of function exits in python
1.Built-in function
2.User Define funciton 
'''

#Built-function


# print and input
print("Hello world")
userName=input("Enter your name: ")
print("My name is:",userName)
print("Type of userName:",type (userName))


# sorted
price=[34,12,87,42,12,3]
print("Sorted Price is:",sorted(price))

#len
print("Length of userName:",len(userName))
print("Length of Price:",len(price))

# max and min
print("Max price is:",max(price))
print("Min price is:",min(price))

#range
for item in range(2):
    print(item)

# id
print("Id of userName:",id(userName))

# eval
exp="3-4*9+3"
result=eval(exp)
print("Result is:",result)



