class ReverseDigit:
    def reversedigits(self,num:int)->int:
        ans=0
        while num!=0:
            rem=num%10
            num//=10
            ans=ans*10+rem
        print("Number is:",ans)
    def powerOfTwo(self,num:int)->int:
        if(num<1):
            print("Not comes in power of two")
            return 0
        while(num>1):
            if num%2==1:
                print("Not comes in power of two")
                return 0
            num=num//2
        print("Comes in power of two")
        return 1
    

obj1=ReverseDigit()
obj1.reversedigits(457)
obj1.powerOfTwo(23)
obj1.powerOfTwo(32)

 