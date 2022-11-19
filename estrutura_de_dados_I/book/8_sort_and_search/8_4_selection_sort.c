#define exchange(a, b) { int x=a; a=b; b=x; }

void bubble_sort(int v[], int n) {
    for(int i=1; i<=n-1; i++) 
        for(int j=0; j<n-i; j++)
            if( v[j]>v[j+1] )
                exchange(v[j], v[j+1]);
}

int select(int v[], int n) {
    int i = 0;
    for(int j=1; j<n; j++)
        if( v[i]<v[j] ) i = j;
    return i;
}

void selectionSort(int v[], int n) {
    while ( n>1 ) {
        exchange( v[selection(v, n)], v[n-1] );
        n--;
    }
 }