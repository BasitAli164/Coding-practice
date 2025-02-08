// partern 
#include<iostream>
using namespace std;
int main(){
	// square pattern
	cout<<"First Pattern\n";
	for(int i=1;i<=4;i++){
		for(int j=1;j<=4;j++){
			cout<<j<<ends;
		}
		cout<<endl;
	}
	cout<<"Second Pattern\n";
	for(int i=1;i<=4;i++){
		for(int j=1;j<=4;j++){
			cout<<"*"<<ends;
		}
		cout<<endl;
	}
	
	cout<<"Third Pattern\n";
	for(int i=1;i<=4;i++){
		for(char j='A';j<='D';j++){
			cout<<j<<ends;
		}
		cout<<endl;
	}
	cout<<"4th Pattern\n";
	int sum=1;
	for(int  i=1;i<=3;i++){
		for(int j=0;j<3;j++){
		cout<<sum<<ends;
		sum++;
			
		}
		cout<<endl;
	}
	
	
	return 0;
}