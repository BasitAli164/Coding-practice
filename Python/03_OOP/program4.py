# Encapsulation in oop


class Home:
    def __init__(self,homeName,numberOfRooms):
        self.__homeName=homeName
        self.rooms=numberOfRooms
    def show(self):
        print("Name:",self.__homeName,"\n","Rooms:",self.rooms)

h1=Home("Apo ali House",12)

print(h1.rooms)