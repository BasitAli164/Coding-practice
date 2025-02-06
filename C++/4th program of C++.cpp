#include<iostream>
using  namespace std;
//type casting in C++ 
/* 
i-Implicit: through compiler
ii-explicit: through programmer and this must be from large to small data type
*/
int main(){
	
	// implicit
	
	char grad='a';
	int change=grad;
	cout<<change<<endl;
	
	// explicit
	
	double price=12.897;
//	float newPrice=int(price);
	float newPrice=(int)price; // line 19 and 20 are both same
	cout<<"The converting price is:"<<newPrice<<endl;
	
	
	return 0;
}