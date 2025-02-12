#include<iostream>
using namespace std;
int main(){
	int min=INT_MAX,marks[]={30,12,40,56,67,20,23};
	int size=sizeof(marks)/sizeof(int);
	for(int i=0;i<size;i++){
		if(marks[i]<min){
			min=marks[i];
		}
	}
	cout<<"Minimum number is:"<<min<<endl;
	
	
	return 0;
}