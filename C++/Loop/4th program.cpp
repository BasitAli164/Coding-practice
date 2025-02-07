// Nested Loop
#include<iostream>
using namespace std;
int main(){
	for(int i=1;i<6;i++){
		cout<<"******\n";
	}
	cout<<"Second time: \n";
	for(int i=1; i<6;i++){
		for(int j=1; j<=5; j++ ){
			cout<<"*";
		}
		cout<<endl;
	}
	
	
	
	return 0;
}