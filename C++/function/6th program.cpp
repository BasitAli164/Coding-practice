// calculate combination
#include<iostream>
using namespace std;

int fact(int n){
	int fact=1;
	for(int i=1;i<=n;i++){
		fact*=i;
	}
	return fact;
	
}
int combination(int n,int r){
	int factN=fact(n);
	int factR=fact(r);
	int factDiff=fact(n-r);
	
	return factN/(factR*factDiff);
}
int main(){
	int n,r;
	cout<<"Enter the value of n:"<<ends;
	cin>>n;
	cout<<"Enter the value of r:"<<ends;
	cin>>r;
	cout<<"Combination of "<<n<<" and "<<r<<" is: "<<combination(n,r);	
	
	return 0;
}