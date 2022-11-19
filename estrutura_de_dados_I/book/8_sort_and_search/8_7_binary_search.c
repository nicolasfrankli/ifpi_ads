int binary_search(int x, int v[], int n) {
    int p = 0;
    int u = n-1;
    while( p <= u ) {
        int m = (p+u)/2;
        if( x == v[m] ) return 1;
        if( x < v[m] ) u = m-1;
        else p = m+1;
    }
    return 0;
}