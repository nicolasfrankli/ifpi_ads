#include "../book/2_stack/stack.h"
#include <iostream>
using namespace std;

template <class T>
class Stack: public stack<T> {
	protected:
		stack<T> pilha;
	public:
	T popStack(){
		T tmp=pilha.top();
		pilha.pop();
		return tmp;
	}
	
	
	void popAll(){
		while(is_empty()){}
    }
	
	void simulaFila(T novo){
				
	}
	
	
};

main(){
	
	

}
