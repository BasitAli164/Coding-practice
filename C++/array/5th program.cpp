#include<iostream>
using namespace std;
int reversArr(int arr[],int size){
	int start=0,end=size-1;
	while(start<end){
			swap(arr[start],arr[end]);
			start++;
			end--;		
	}
}


int main(){
	int arr[]={3,4,23,6,787,34,24}, size=sizeof(arr)/sizeof(int);
	reversArr(arr,size);
	for(int i=0;i<size;i++){
		cout<<arr[i]<<ends;
	}
	cout<<endl;
	
	
	
	return 0;
}