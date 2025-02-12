#include<iostream>
using namespace std;
int sumOfDigit(int n){
	int sum=0;
	while(n>0){
		int lastDigit=n%10;
		n=n/10;
		sum+=lastDigit;
	}
	return sum;
}
int main(){
	int num;
	cout<<"Enter a number"<<ends;
	cin>>num;
	cout<<"Sum of Digit of this number "<<num<<" is:"<<sumOfDigit(num);
	
	
	return 0;
}