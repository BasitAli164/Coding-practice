#Problem-1
age=25;

if age<13:
    print("Child")
elif age<20:
    print("adult")
elif age<60:
    print("Senior")
else:
    print("Old")

#Perblem:2

Age=23
day="wed"


price=12 if age<18 else 8
# print(price)

if day=="wed":
    price=price-2
print("Ticket price for you is $:",price)
