# loops
#problem-1

number=[1,2,-3,-4,5,-2,-5,4,2]
count=0
for num in number:
    if(num>0):
        count+=1
print("Positvie number in list :",count)



#problem-2

n=(input("Enter a number"))
sum=0
for num in range(5):
    if(num%2==0):
        sum+=num
print("Sum of even number is :",sum)

a=int(input("Enter a number for table"))
for num in range(11):
    if num==5:
        continue
    print(a,"*",num,"=",a*num)  