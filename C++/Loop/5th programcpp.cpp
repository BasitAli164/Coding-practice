// home work
#include<iostream>
using namespace std;
int main(){
	//sum  of divide by 3
	int sum=0,n;
	cout<<"Enter a number"<<ends;
	cin>>n;
	for(int i=0;i<=n;i+=3){
		sum+=i;
	}
	cout<<"Sum is: "<<sum<<endl;
	
	// factorial
	
	int i=1,fact=1;
	
	while(i<=n){
		fact*=i;
		i++;
	}
	cout<<"Factorial of "<<n<<" is: "<<fact<<endl;
	
	
	
	return 0;
}