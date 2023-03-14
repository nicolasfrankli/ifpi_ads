import threading

def thread1():
    for i in range(1, 6):
        print("Thread 1:", i)

def thread2():
    for i in range(1, 6):
        print("Thread 2:", i)

t1 = threading.Thread(target=thread1)
t2 = threading.Thread(target=thread2)

t1.start()
t2.start()

t1.join()
t2.join()