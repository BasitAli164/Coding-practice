// Prime or composit
#include<iostream>
using namespace std;
int main(){
	int n;
	bool isPrime=true;
	cout<<"Enter a number to check prime or not! "<<endl;
	cin>>n;
	for(int i=2;i<n-1;i++){
		if(n%i==0){
			isPrime=false;
			break;
		}
		
		
	}
	if(isPrime){
		cout<<n<<" is a Prime Number"<<endl;
	}else{
		cout<<n<<" is a Composite Number"<<endl;
	}
		return 0;
}