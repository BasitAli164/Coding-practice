#include<iostream>
using namespace std;
int linearSearch(int arr[],int target,int size){
	for(int i=0;i<size;i++){
		if(arr[i]==target){
			return i;
		}
	}
	return -1;
}
int main(){
	
	int array []={34,2,54,6,67},size=sizeof(array)/sizeof(int),find=6,index;	
	cout<<"index is: "<<linearSearch(array,find,size);	
	return 0;
}