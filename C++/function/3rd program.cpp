// function
#include<iostream>
using namespace std;
int minOfTwo(int a,int b){
		if(a>b){
			cout<<"min number is:"<<b;
		}else{
			
			cout<<"min number is:"<<a;
		}
}
int main(){
	int min=minOfTwo(2,3);
	cout<<"\n min number is:"<<min;
	return 0;
}
