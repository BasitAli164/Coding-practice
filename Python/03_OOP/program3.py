class Student:
    def __init__(self, name,reg):
        self.name=name
        self.reg=reg
    def display(self):
        return f"Name: {self.name} Reg# :{self.reg}"
    


std1=Student("Basit","S23BSCS012")
# print(std1.display())


class Father:
    def __init__(self,name,address):
        self.fname=name
        self.faddr=address

class Son(Father):
    def __init__(self,fname,faddr,sname):
        super().__init__(fname,faddr)
        self.sname=sname
    def display(self):
        return f"Father Name:{self.fname} \nFather Address:{self.faddr} \nSon Name:{self.sname}"

s1=Son("Ali","Kushmarah","Basit Ali")
print(s1.display())
