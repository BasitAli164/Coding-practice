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

# print(h1.rooms)
# h1.set_value("Kushmara")
# h1.get_fun()
# # print(h1.address)




class Vehical:
    def __init__(self, vname,vmodel,venginNu,vBookNo):
        self.name=vname
        self.model=vmodel
        self.__enginNumber=venginNu
        self.__vbookN=vBookNo
    def getter(self):
        return f"Vechical Detail:\nVechical Name:{self.name}\nVechical Model:{self.model}\nVechical Engine Number:{self.__enginNumber}\nVechical Book Number:{self.__vbookN}"
    def setter(self,color):
        self.VechicalColor=color

v1=Vehical("Honda",2024,"sdf324435sdf","234")
print(v1.getter())
v1.setter("red")
v1.name="suzikii"
print(v1.getter())
v1.__enginNumber=32
print(v1.getter())
        
