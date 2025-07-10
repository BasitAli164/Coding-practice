class Student:
    def __init__(self, name,reg):
        self.name=name
        self.reg=reg
    def display(self):
        return f"Name: {self.name} Reg# :{self.reg}"
    


std1=Student("Basit","S23BSCS012")
print(std1.display())

