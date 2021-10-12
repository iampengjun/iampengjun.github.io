lst = [1,9,7,2,5,8,9,19,21,1,2,3,4,45,88,1000,12,134]

for j in range(len(lst)-1):
    for i in range(len(lst)-1):
        if lst[i] > lst[i+1]:
            lst[i],lst[i+1] = lst[i+1],lst[i]
print(lst)
