#include<iostream>
using namespace std;


int main(){
	
int num=77n,rem,ans=0,mul=1;
   while(num>0){
       rem=num%8;
       num=num/8;
       ans=ans+mul*rem;
       mul=mul*10;
    }
    cout<<"Answer is:"<<ans;
    return 0;
}
