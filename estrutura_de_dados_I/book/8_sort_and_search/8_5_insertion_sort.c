void insert(int x, int v[], int n) {
    while( n>0 && x<v[n-1] ) {
        v[n] = v[n-1];
        n--;
    }
    v[n] = x;
}

void insertion_sort(int v[], int n) {
    for(int i=0; i<n; i++)
     insert(v[i],v,i);
}