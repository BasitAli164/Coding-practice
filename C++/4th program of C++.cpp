/* 
Type casting and Coversion
i-Coversion(implicitly): through compiler means compiler done it through itself
ii-Casting(explicitly): through programmer means type casting perferm by programmer not compiler
*/

#include<iostream>
using  namespace std;
int main(){
	
	// Coversion
	
	char grad='a';
	int change=grad;
	cout<<change<<endl;
	
	// type casting
	
	double price=12.897;
//	float newPrice=int(price);
	float newPrice=(int)price; // line 19 and 20 are both same
	cout<<"The converting price is:"<<newPrice<<endl;
	
	
	return 0;
}