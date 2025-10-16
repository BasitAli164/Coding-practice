class Solution:
    def toSum (self,nums:list[int],target:int)->list[int]:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if(nums[i]+nums[j]==target):
                    return i,j
                

obj=Solution()

index=obj.toSum([2,7,9,1],10)
print("Index are: ",index)