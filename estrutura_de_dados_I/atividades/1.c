#include <stdio.h>
int main(void){
float speed;

printf("Enter the speed: ");
scanf("%f", &speed);
printf("%.2f m/s = %.2f km/h\n", speed, speed * 3.6);
}