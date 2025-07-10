#include<iostream>
#include<vector>
using namespace std;
int main(){
	
	vector<int>vec={2,3,4,5,6};
	cout<<"The starting value of the vector is: "<<vec.front()<<endl;
	cout<<"The last value in the vector is: "<<vec.back()<<endl;
	vec.push_back(90);
	vec.push_back(34);
	vec.push_back(292);
	vec.pop_back();
	cout<<"Size of the vector is: "<<vec.size()<<endl; 
	
	for(int item:vec){ //this is the syntax of the for each loop in c++ i think 
		cout<<item<<ends;
	}
	
	
	return 0;
}