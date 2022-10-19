#include <stdio.h>

int main(void){
    float speed;

    printf("Enter the speed in km/h:");
    scanf("%f", &speed);
    printf("%.2fkm/h = %.2fm/s\n", speed, speed/3.6);

}