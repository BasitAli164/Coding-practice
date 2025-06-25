class House:
    def __init__(self,name,color):
        self.name=name
        self.color=color
    def display(self):
        print(f"Name:{self.name}\nColor:{self.color}")
        


myHouse=House("Ali's House","white")
myHouse.display()

# print(f"House Name: {myHouse.name}\nHouse Color: {myHouse.color}")
        