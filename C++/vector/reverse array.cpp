#include<iostream>
using namespace std;
int main (){
	int arr[5]={1,2,3,4,5};
	int i=0,j=4;
	while(i<j){
		swap(arr[i],arr[j]);
	}
	cout<<arr<<endl;
	
}