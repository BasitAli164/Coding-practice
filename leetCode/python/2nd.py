class Solution:
    def containDublicate(self,nums:list[int])->bool:
        seen=set()
        for i in nums:
            if i in seen:
                return True
            seen.add(i)
        return False
    

obj=Solution()
input=[1,2,3,1]
output=obj.containDublicate(input)
print(output)