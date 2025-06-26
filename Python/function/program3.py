# Higher Order Function 
'''
Higher Order Function:
    It is a type of function which take another function as a parameter/input and return a function as an output
    The following are the higher order function 
    -map()
    -filter()
    -reduce()
    -zip()
    -enumerate()
'''

# map() function 

number=[3,2,4,5]
def double(x):
    return x*x

doubled=list(map(double,number))
print("Double: ",doubled)



# persons={
#     {"name":"Basit","gender":"Male","age":23,"std":True,},
#     {"name":"Muhammad","gender":"Male","age":19,"std":False,},
#     {"name":"Sakina","gender":"Female","age":14,"std":True,},
#     {"name":"Khatija","gender":"Female","age":12,"std":True,},
#     {"name":"Kubra","gender":"Female","age":10,"std":True,},
# }
# def showList(per):
#     for key,value in per:
#         return "key:{key}  ------- value:{value}"
# detail=list(map(showList,persons))

# print("Detail is: ",detail)

