# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")

def solution(A, K):
    # write your code in Python 3.8.10
    
    for x2 in range(K):
        last = A[-1]
        A.pop()
        A.insert(0,last)
    return A
    
