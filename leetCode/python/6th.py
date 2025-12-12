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



