// conditional statement
#include<iostream>
using namespace std;
int main(){
	int marks;
	cout<<"Enter your marks"<<ends;
	cin>>marks;
	if(marks>=90 && marks<=100){
		cout<<"Grade is A"<<endl;
	}
	else if(marks>=80 && marks<=89){
		cout<<"Grade is B"<<endl;
	}
	else if(marks>=70 && marks<=79){
		cout<<"Grade is C"<<endl;
	}
	else{
		cout<<"Grade is D"<<endl;
	}
	
	char ch;
	cout<<"Enter a letter"<<endl;
	cin>>ch;
	if(ch>='a'&&ch<='z'){
		cout<<"The character "<<ch<<" is Lowercase"<<endl;
	}
	else if(ch>='A'&&ch<='Z'){
		cout<<"The character "<<ch<<" is Uppercase"<<endl;
	}else{
		cout<<"Invalide"<<endl;
	}
	
	return 0;
}