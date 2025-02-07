// loops
#include<iostream>
using namespace std;
int main(){
	cout<<"Count through for loop: ";
	for(int i=0;i<5;i++){
		cout<<i<<ends;
	}
	cout<<endl;
	int count=1;
	cout<<"Count thorugh while loop: ";
	while(count<6){
		cout<<count<<ends;
		count++;
	}
	
	int n,sum=0;
	cout<<"\nEnter a number"<<ends;
	cin>>n;
	for(int i=1;i<=n;i++){
		if(i>6) break;
		sum+=i;
	}
	cout<<"sum of n number is :"<<sum<<endl;
	
	int sumOfOdd=0;
	for(int i=1; i<=n; i+=2){
		sumOfOdd+=i;
	}
	int i=1 ,sumOfOdd1=0;
	while(i<=n){
		sumOfOdd1+=i;
		i+=2;
	}
	cout<<"sum of n odd number is: "<<sumOfOdd<<endl;
	cout<<"sum of n odd number is through while loop: "<<sumOfOdd1;
	
	return 0;
}