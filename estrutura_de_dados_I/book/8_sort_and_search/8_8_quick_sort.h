#define exchange(a, b) { int x=a; a=b; b=x; }

int partition(int v[], int p, int u) {
    int x = v[p];
    p--;
    u++;
    while( p<u ) {
        do u--; while( v[u]>x );
        do p++; while( v[p]<x );
        if( p<u ) exchange(v[p], v[u]); 
    }
    return *v;
}

void quick_sort(int v[], int p, int u) {
    if( p>=u ) return;
    int m = partition(v, p, u);
    quick_sort(v,p,m);
    quick_sort(v,m+1,u);
}

//int v = {72,69,51,46,33,28,15};