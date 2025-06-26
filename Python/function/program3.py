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

# Filter()
def isEven(num):
    return num%2==0


searchEle=list(filter(isEven,doubled))

print("Serach Element are:",searchEle)



# reduce()

from functools import reduce # required to import

def multiply(x,y):
    return x*y

list1=[1,2,3,4,5]
product=reduce(multiply,list1)
print("Product is: ",product)


#zip() ---  zip is like a speard concept in js which is combine many array values in one array but zip return a list which contain value in the form of tuple like [(basit,23),(muhammad,19),...-]

list2=["basit","muhammad","sakina","khatija","kubra"]
list3=[23,19,15,12,10]
combine=list(zip(list2,list3)) 
print("Combine List Format: ",combine) #return the output in the form of list because we wrap with list
combine=dict(zip(list2,list3))
print("Combine Dictionary format: ",combine)  #return the output in the form of dictionary because we wrap with dict
combine=tuple(zip(list2,list2))
print("Combine Tuple Format: ",combine)  #return the output in the form of tuple because we wrap with tuple
combine=set(zip(list2,list2))
print("Combine Set Format: ",combine)  #return the output in the form of set because we wrap with set



# enumerate()


persons=[
    {"name":"Basit","gender":"Male","age":23,"std":True,},
    {"name":"Muhammad","gender":"Male","age":19,"std":False,},
    {"name":"Sakina","gender":"Female","age":14,"std":True,},
    {"name":"Khatija","gender":"Female","age":12,"std":True,},
    {"name":"Kubra","gender":"Female","age":10,"std":True,},
]
# def showList(per):
#     for key,value in enumerate(per,start=4):
#         print( f"key:{key}  ------- value:{value}")
# detail=list(map(showList,persons))

print("Name are:")
for key,value in enumerate(persons,start=1):
    # print(f"{key}.{value.items()}")
    # print(f"{key}.{value.values()}")
    print(f"{key}.{value.get("name")}")

