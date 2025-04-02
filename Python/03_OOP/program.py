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
teacherInstance.displayDetailOfTeacher()