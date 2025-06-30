'''
-->Loop: indicate for itration or repeatation 
-->Types:
        The following are the type of loops in python:
        i- for loop
        ii- while loop

'''
print("Simple Loop Program")
for item in "Basit":
    print("Value:",item)

 # enumerate return index and value both without using enumerate we write more code
print("\nUsing Enumerate")
for i,j in enumerate("King"):
    print(f"Index- {i}:{j}")


#Without enumerate

myName="Basit Ali"
index=0

print("\nWithout Enumerate")
for item in myName:
    print(f"Index: {index} and Value: {item}")
    index+=1

    