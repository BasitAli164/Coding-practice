class Solution:
    def isAnagram(self,s:str,t:str)->bool:
        if len(s)!=len(t):
            return False
        
        dict1={}
        dict2={}
        print("dict1",dict1)

        for i in s:
            dict1[i]=dict1.get(i,0)+1
            print(dict1)
        for i in t:
            dict2[i]=dict2.get(i,0)+1
        return dict1==dict2

obj=Solution()

print(obj.isAnagram("anagram","ramgan"))
print(n)