//function
#include<iostream>
using namespace std;
int sum(int a,int b); // function declaration
 
int main(){
	int a,b;
	cout<<"Enter first number"<<ends;
	cin>>a;
	cout<<"Enter second number"<<ends;
	cin>>b;
	int add=sum(a,b); // function invoke or calling and store in the variabel
	cout<<"Sum of two number is:"<<add;
	
	
	return 0;
}
// function definition
sum(int a,int b){
	return a+b;
}