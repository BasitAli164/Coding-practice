class Car:
    brand=None
    model:2020

my_car= Car()
my_car.brand="Apo"
# print(my_car.brand)


class Room:
    def __init__(self,windowSize,DoorLength):
        self.door=DoorLength
        self.wind=windowSize

my_room=Room(12,34)
door=my_room.door
# print(door)


class Teacher:
    def __init__(self,tname,tphone):
        self.teacherName=tname
        self.teacherPhoneNumber=tphone
    def displayDetailOfTeacher(self):
        print("Teacher Detail is:")
        print("Teacher_Name:",self.teacherName)
        print("Teacher_Phone_Number:",self.teacherPhoneNumber)


teacherInstance=Teacher("Basit Ali",+923475495500)
# teacherInstance.displayDetailOfTeacher()




class Calculator:
    def __init__(self,num1,num2):
        self.number1=num1
        self.number2=num2
    def addition(self):        
        return self.number1+self.number2
    def subtraction(self):
        if(self.number1>self.number2):
            return self.number1-self.number2
        else:
            return self.number2-self.number1
    def product(self):
        return self.number1*self.number2
    def division(self):
        if(self.number1>self.number2):
            return self.number1/self.number2
        else:
            return self.number2/self.number1
    def reminder(self):
        return self.number1%self.number2
    
    def sqare(self):
        return self.number1*self.number2
    def cubic(self):
        return self.number2*self.number2*self.number2
    def power(self):
        return self.number1**self.number2
    def displayResult(self):
        print("Sum of ",self.number1," and ",self.number2," is: ",self.addition())
        if(self.number1>self.number2):
            print("Subtract of ",self.number1," and ",self.number2," is: ",self.subtraction())
        else:
           print("Subtract of ",self.number2," and ",self.number1," is: ",self.subtraction())
        
        print("Product of ",self.number1," and ",self.number2," is: ",self.product())
        if(self.number1>self.number2):
            print("Division of ",self.number1," and ",self.number2," is: ",self.division())
        else:
           print("Division of ",self.number2," and ",self.number1," is: ",self.division())
        
        print("Mod of ",self.number1," and ",self.number2," is: ",self.reminder())
        print("Square of ",self.number1," is: ",self.sqare())
        print("Cube of ",self.number2," is: ",self.cubic())
        print("Power of ",self.number1," and ",self.number2," is: ",self.power())

cal=Calculator(3,5)
cal.displayResult()