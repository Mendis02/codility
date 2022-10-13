n = int(input())
temp = format(n,"b")
l1 = list(temp)
l2 = [int(item) for item in l1]
total = sum(l2)
max_zeros = 0
if total >= 2:
    for number in l2:
        if number ==0:
            l2.pop(0)
        else:
            l2.pop(0)
            for n in l2:

                if n == 0:
                    zeros = 0
                    zeros = zeros +1
                else:
                    zeros = 0

                if zeros > max_zeros:
                    max_zeros = zeros

print(max_zeros)
print(l1)


