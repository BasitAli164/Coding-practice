# class Solution:
#     def reverseArr(self,arr:list)->list:
#         left=0
#         right
#         while(left<right):
#             temp=arr[left]
#             arr[left]=arr[right]
#             arr[right]=temp
#             left+=1
#             right-=1
#         return arr
    
# obj=Solution()
# result=obj.reverseArr([34,4,6,767,3,2])
# print(result)


# def binarySearch(arr:list,key:int)->int:
#     left=0
#     right=len(arr)-1
#     while(left<=right):
#         mid=((left+right)//2)
#         if(arr[mid]==key):
#             return mid
#         elif arr[mid]>key:
#             right=mid-1
#         else:
#             left=mid+1
#     return -1

# print(binarySearch([1,2,3,4,5,6,7,8,9],6))

class Solution:
    def findTargetValue(self,arr:list,target:int)->list:
        # first occurance
        left=0
        right=len(arr)-1
        first=-1
        last=-1
        while left<=right:
            mid=((left+right)//2)
            if arr[mid]==target:
                first=mid
                right=mid-1
            elif arr[mid]>target:
                right=mid-1
            else:
                left=mid+1
        left=0
        right=len(arr)-1
        while left<=right:
            mid=((left+right)//2)
            if arr[mid]==target:
                last=mid
                left=mid+1
            elif arr[mid]>target:
                right=mid-1
            else:
                left=mid+1

        return [first,last]
    def searchInsert(self,arr:list,target:int)->int:
        left=0
        right=len(arr)-1
        index=len(arr)
        print(index)
        while left<=right:
            mid=((left+right)//2)
            if arr[mid]==target:
                index=mid
                break
            elif arr[mid]>target:
                index=mid
                right=mid-1
            else:
                left=mid+1
        return index
    def sqrt(self,num:int)->int: 
        left=0
        if num>0:
            right=num-1
        else:
            right=num+1
        
        index=num
        while left<=right:
            mid=((left+right)//2)
            square=mid*mid
            if square==num:
                index=mid
                break
            elif square>num:
                right=mid-1
            else:
                index=mid
                left=mid+1
            
        return index    
    def peakEleOfArr(self,arr:list)->int:
        left=0
        rigth=len(arr)-1
        while(left<=rigth):
            mid=((left+rigth)//2)
            if(arr[mid]>arr[mid-1] and arr[mid]>arr[mid+1]):
                return mid
            elif arr[mid]>arr[mid-1]:
                left=mid+1
            else:
                rigth=mid-1
        return -1
    def dublicate(self,arr:list)->int:
        left=0
        right=1
        unique=1
        while right<=len(arr)-1:
            if arr[left]==arr[right]:
                right+=1
            else:
                unique+=1
                left=right
                right+=1
        return unique
    
            
                


obj=Solution()
# print(obj.findTargetValue([5,7,7,8,8,10],8))
# print(obj.searchInsert([1,4,6,8,10,12,16,18],4))
# print(obj.sqrt(80))
# print(obj.peakEleOfArr([2,4,6,8,10,8,5]))
# print(obj.peakEleOfArr([1,6,3,2,1]))
print(obj.dublicate([1,1,1,2,2,2,3,3,3,4,4,5,5,5,5,6,6,6,6,6,6,6,6,66]))

