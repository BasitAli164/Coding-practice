def console():
    print("Syntax of funtion")

console()


#function-2

def square(number):
    return number*number;

sq=square(2)
# print("Square of a number is:",sq)


#function-3

def loop(number):
    for num in range(100):
        if(num==number):
            return "Good luck" 
        else:
            return num

loop=loop(80)
# print("new function :",loop)


def func(a,b=5):
    return a+b

# print("Sum is:",func(2))


import math as m

square=m.sqrt(9)
# print(int(square))



def circle(radius):
    return m.floor(m.pi*(radius*radius))

# print("Area of circle",circle(3))

# lamda function 
cube=lambda x: x**3
cubic=cube;
print("Cube by using lamda function :",cubic(30))


def new(a):
    for val in a:
        print("number is:",val)

list=[1,2,3,4,"basit","aahil"]
dic={1:"one",2:"two"}
new(dic)


def sum_all(*args):
    return sum(args)

print(sum_all(3,2,4,1))