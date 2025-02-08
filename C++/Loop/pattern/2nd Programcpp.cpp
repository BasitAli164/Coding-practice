//Pattern
#include<iostream>
using namespace std;
int main(){
	//Triangle pattern
	cout<<"1st Pattern"<<endl;
	for(int i=1;i<=5;i++){
		for(int j=1;j<=i;j++){
			cout<<"*"<<ends;
		}
		cout<<endl;
	}
	cout<<"2nd Pattern\n";
	for(int i=1;i<=4;i++){
		for(int j=1;j<=i;j++){
			cout<<i<<ends;
		}
		cout<<endl;
	}
	cout<<"3rd Pattern\n";
	for(int i=1;i<5;i++){
		for(int j=1;j<=i;j++){
			cout<<j<<ends;
		}
		cout<<endl;
			}
	cout<<"4th Pattern\n";
	for(int i=0;i<4;i++){
		for(int j=i+1;j>0;j--){
			cout<<j<<ends;
		}
		cout<<endl;
			}
	
	cout<<"5th Pattern\n";
	int count=1;
	for(int i=0;i<4;i++){
		for(int j=0;j<i+1;j++){
			cout<<count<<ends;
			count++;
		}
		cout<<endl;
			}
	cout<<"6th Pattern\n";
	
	for(int i=0;i<4;i++){
		for(int j=0;j<i;j++){
			cout<<" ";
		}
		for(int j=0;j<4-i;j++){
			cout<<(i+1);
		}
		cout<<endl;
	}
	
	return 0;
}