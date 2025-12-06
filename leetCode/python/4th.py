num=98
ans=0
while(num>9):
    
    while(num!=0):
        rem=num%10
        num=num//10
        ans=ans+rem
    num=ans
print("Number is:",num)