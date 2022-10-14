n = int(input())
temp = format(n,"b")
list1 = list(temp)
list2 = [int(item) for item in list1 ]

max_zeros = 0
print(list2)

#checking if the binary number has atleast two 1's
if sum(list2) >= 2:

    for number in list2:
        zeros = 0
        if number == 1:
            list2.pop(0)

            for x in list2:
                if x ==0:
                    zeros =+ 1

        if zeros > max_zeros:
            max_zeros = zeros

print(max_zeros)


