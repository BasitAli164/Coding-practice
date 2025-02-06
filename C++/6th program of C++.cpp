// operaters in C++
#include<iostream>
using namespace std;
int main(){
	
	// Arithmetic Operators
	int a=2,b=5;
	cout<<"Arithmetic Operators"<<endl;
	cout<<"sum: "<<(a+b)<<endl;
	cout<<"sub: "<<(b-a)<<endl;
	cout<<"product: "<<(a*b)<<endl;
	cout<<"division: "<<(b/a)<<endl;
	cout<<"division: "<<(b/(float)a)<<endl; // explore the type casting
	cout<<"modulo: "<<(a%b)<<endl;
	
	// Relational Operators
	cout<<"Relational Operators"<<endl;
	cout<<(3<5)<<endl; // true or 1
	cout<<(3>=5)<<endl; // false or 0
	cout<<(3<=3)<<endl; // true or 1
	cout<<(3<=5)<<endl; // true or 1
	cout<<(3==5)<<endl; // false or 0
	cout<<(3!=5)<<endl; // true or 1
	
	// Logical Operators
	cout<<"Logical Operators"<<endl;
	cout<<!(2<1)<<endl; // true or 1
	
	return 0;
}