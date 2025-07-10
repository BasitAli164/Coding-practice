# Encapsulation in oop


class Home:
    def __init__(self,homeName,numberOfRooms):
        self.__homeName=homeName # homeName is become a private variable
        self.rooms=numberOfRooms
    def get_fun(self):
        print("Name:",self.__homeName,"\n","Rooms:",self.rooms,"\n","Address:",self.address)
    def set_value(self,hadd):
        self.__address=hadd # address is private variable

    

h1=Home("Apo ali House",12)

print(h1.rooms)
h1.set_value("Kushmara")
h1.get_fun()
# print(h1.address)
