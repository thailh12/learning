#include<iostream>
#include<iomanip>

using namespace std;

double fToC(double n){
    return (n-32)*5/9;
}
double ctoK(double n){return n + 273.15;}

int main(){
    double a;
    cin >> a;
        cout <<a;
        cout <<fixed<<setprecision(2)<< " "<< fToC(a)<< " " <<ctoK(fToC(a));


}
