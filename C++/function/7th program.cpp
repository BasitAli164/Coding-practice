// function
#include<iostream>
using namespace std;
int decNum(int num){
	int pow=1,ans=0;
	while(num>0){
		int rem=num%2;
		num/=2;
//		cout<<"befor"<<ans<<endl;
		ans+=(rem*pow);
//		cout<<"after"<<ans<<endl;
		pow*=10;
	}
	return ans;
}
int binNum(int num){
	int ans=0,pow=1;
	while(num>0){
		int rem=num%10;
		num/=10;
		ans+=(rem*pow);
		pow*=2;
	}
	return ans;
}
int main(){
	int d,b;
	cout<<"Enter a decemail number "<<ends;
	cin>>d;
	cout<<"The Binary number of this "<<d<<" decimal number is: "<<decNum(d);
	cout<<"\nEnter a Binary number "<<ends;
	cin>>b;
	cout<<"The Decimal number of this "<<b<<" binary number is: "<<binNum(b);

	
	
	return 0;
}