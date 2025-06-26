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

