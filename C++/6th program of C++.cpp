// operaters in C++
#include<iostream>
using namespace std;
int main(){
	
	// Arithmetic operators
	int a=2,b=5;
	cout<<"sum: "<<(a+b)<<endl;
	cout<<"sub: "<<(b-a)<<endl;
	cout<<"product: "<<(a*b)<<endl;
	cout<<"division: "<<(b/a)<<endl;
	cout<<"division: "<<(b/(float)a)<<endl; // explore the type casting
	cout<<"modulo: "<<(a%b)<<endl;
	
	// Relational operators
	cout<<(3<5)<<endl; // true or 1
	cout<<(3>=5)<<endl; // false or 0
	cout<<(3<=3)<<endl; // true or 1
	cout<<(3<=5)<<endl; // true or 1
	cout<<(3==5)<<endl; // false or 0
	cout<<(3!=5)<<endl; // true or 1
	
	return 0;
}