class ReverseDigit:
    def reversedigits(self,num:int)->int:
        ans=0
        while num!=0:
            rem=num%10
            num//=10
            ans=ans*10+rem
        print("Number is:",ans)

obj1=ReverseDigit()
obj1.reversedigits(457)
