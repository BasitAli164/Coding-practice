// loop
#include<iostream>
using namespace std;
int main(){
	int n,sum=0;
	
	cout<<"Enter a number"<<ends;
	cin>>n;
	
	for(int i=2;i<=n;i+=2){
		sum+=i;
	}
	cout<<"Sum is: "<<sum<<endl;
	
	int i=2,sumOfEven=0;
		

	do{
		sumOfEven+=i;
		i+=2;
	}while(i<=n);
	cout<<"Sum of Even number is: "<<sumOfEven<<endl;
	
	return 0;
}