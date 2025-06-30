#List
list1=[2,3,4,56,["basit",3,True,[(1,2,3,4,5),{"Name":"basit","age":23}]]]
for item in list1:
    print(item)
list1=[2,3,4,56,["basit",3,True,[(1,2,3,4,5),{"Name":"basit","age":273}]]]
for item in list1[4]:
    print(item)
#Dictionary
dict={
    "name":"Basit Ali",
    "age":23,
    "gender":"male",
    "Student":True
}


for key in dict:
    print(f"{key} : {dict[key]}")


car={
    "name":"Tx",
    "model":"Royal",
    "modelNumber":234
}

for item in car:
    print(f"{car[item]}")

# now we can access the key and value from dictionary through the built-in function item()
for i, j in car.items():
    print(f"Key:{i}----Value:{j}")



for item in range(10):
    if item==5:
        print("skipping...")
        