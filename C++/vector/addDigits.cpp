#include<iostream>
using namespace std;
int main(){
	char ask;
	
	do{
		int num;
	cout<<"Enter a number:"<<ends;
	cin>>num;
	while(num>9){
		int rem,ans=0;
		while(num!=0){
			rem=num%10;
			num/=10;
			ans+=rem;
			
		}
		num=ans;
	}
	cout<<"After add all digit the result is:"<<num<<endl;
	cout<<"Do you want to execute again y/n"<<ends;
	cin>>ask;
	}while(ask=='y');
	
}