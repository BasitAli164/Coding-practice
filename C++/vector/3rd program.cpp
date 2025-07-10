// vector
#include<iostream>
#include<vector>
using namespace std;
int main(){
	vector<int>data(5,8);
	cout<<"The size of the vector is: "<<data.size()<<endl;
	data.push_back(34);
	data.push_back(349);
	data.push_back(324);
	cout<<"The size of the vector is: "<<data.size()<<endl;
	data.pop_back();
	cout<<"The size of the vector is: "<<data.size()<<endl;
		
	for(int item:data){
		cout<<item<<ends;
	}
	
	return 0;
}