// vector
#include<iostream>
#include<vector>
using namespace std;
int main(){
	vector<int> data;
	cout<<"The size of the vector is: "<<data.size()<<endl;
	data.push_back(34);
	data.push_back(32);
	cout<<"The size of the vector is: "<<data.size();
	
	
	return 0;
}