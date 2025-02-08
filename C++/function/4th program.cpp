// solve problem making function
#include<iostream>
using namespace std;
int sumOfNum(int n){
	int sum=0;
	for(int i=1;i<=n;i++){
		sum+=i;
	}
	return sum;
}
int factorial(int n){
	int fact=1;
	for(int i=1;i<=n;i++){
		fact*=i;
	}
	return fact;
}
int main(){
	int num;
	cout<<"Enter a number"<<ends;
	cin>>num;
	cout<<"Sum of 1 to "<<num<<" is: "<<sumOfNum(num);
	cout<<"\nFactorial of "<<num<<" is:"<<factorial(num);
	
	
	
	return 0;
}
