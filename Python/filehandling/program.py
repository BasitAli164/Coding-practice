''' create a file
 here one is you file name with its extention and another one is mode which is used to take which type of operation you perform like reading file, write somthing in file , delete the file 
# syntax:
1 .variable=open("file name","mode")
2. variable.permissionModeMethod("wirte something")
3. varibale.close()
    example:
    file=open("text.txt","w")----> here text.txt is a file and w is a permission of writing 
    file.write("Hello i am basit ") --> after open file and give the permit of writting we write anything through write method 
    file.close() ---> after open a file it is mendatory to close that file using close method

'''

file=open("text.txt","w")
file.write("My name is basit ali")
file.close()



read=open("text.txt",'r')
content=read.read()
read.close()
print(content)

file=open("text.txt",'a')
file.write("I belogn to gb and i am a std")
file.close()


print(content)
