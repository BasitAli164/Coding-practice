#include<iostream>
using namespace std;
int main(){
	int num,rem,ans=0;
	cout<<"Enter a number:"<<ends;
	cin>>num;
	while(num!=0){
		rem=num%10;
		num/=10;
//		if(ans>(INT_MAX/10) || ans<(INT_MAX/10)) {return 0;} // this line just use in leetcode 
	
		ans=ans*10+rem;
	}
	cout<<"Answer is:"<<ans;
	}