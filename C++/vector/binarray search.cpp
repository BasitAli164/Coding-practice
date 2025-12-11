#include<iostream>
using namespace std;
int main(){
	int left=0,right=9,mid,key=8,arr[9]={1,2,3,4,5,6,7,8,9};
	while(left<=right){
		mid=left+right/2;
		if(arr[mid]==key){
			cout<<"mid";
			return mid;
		}
		else if(arr[mid]>key){
			cout<<"right";
			right=mid-1;
			
		}else{
			cout<<"left";
			left=mid+1;
			
		}
		return -1;
	}
}