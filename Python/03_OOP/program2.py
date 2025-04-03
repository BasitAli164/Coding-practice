class Car:
    def __init__(self,brand,model):
        self.brand=brand
        self.model=model

class ElectricCar(Car):
    def __init__(self,brand,model, batterySize):
        super().__init__(brand,model)
        self.bSize=batterySize
    def display(self):
        print("Car Brand:",self.brand,"\n","Car Model:",self.model,"\n","Car Battery Size:",self.bSize)

car1=ElectricCar("Royal","R","100kwh")