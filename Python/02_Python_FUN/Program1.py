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
            print( num)        

loop=loop(80)
# print("new function :",loop)