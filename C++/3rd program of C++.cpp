#include<iostream>
using namespace std;
int main(){
	
	int age=23;
	
	cout<<"My age is:"<<age<<endl;
	char grade='A';
	cout<<"My grade is:"<<grade<<endl;
	float height=5.7;
	cout<<"My height is:"<<height<<endl;
	cout<<"and it types is:"<<sizeof(height);
	
	bool isSafe=false;
	cout<<"is safe is: "<<isSafe<<endl;
	
	double pi=3.14434343;
	cout<<"PI is:"<<pi<<endl;
	
		cout<<"The size of my variable age(int): "<<sizeof(age)<<endl<<"char grade is:"<<sizeof(grade)<<endl<<"float height is:"<<sizeof(height)<<endl<<
		"is safe bool is:"<<sizeof(isSafe)<<endl<<"last thing is pi double:"<<sizeof(pi);

	return 0;
}