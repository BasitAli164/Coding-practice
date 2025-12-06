#include<iostream>
using namespace std;


int main(){
	
int num=101,rem,ans=0,mul=1;
   while(num>0){
       rem=num%10;
       num=num/10;
       ans=ans+mul*rem;
       mul=mul*2;
    }
    cout<<"Answer is:"<<ans;
    return 0;
}
