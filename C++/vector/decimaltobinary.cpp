#include<iostream>
using namespace std;


int main(){
	
int num=12,rem,ans=0,mul=1;
   while(num>0){
       rem=num%2;
       num=num/2;
       ans=ans+mul*rem;
       mul=mul*10;
    }
    cout<<"Answer is:"<<ans;
    return 0;
}
