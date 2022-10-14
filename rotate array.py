n = int(input('Number of integers in the array: ' ))
a = []

for x1 in range(n):
    n1 = int(input())
    a.append(n1)

r = int(input('rotate: '))

for x2 in range(r):
    last = a[-1]
    a.pop()
    a.insert(0,last)


print(a)