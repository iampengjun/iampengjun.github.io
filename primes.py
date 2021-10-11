def res(r):
    num = 0
    for n in range(3, r):
        flag = 1
        for i in range(2, n - 1):
            if n % i == 0:
                flag = 0
                break
        if flag == 1:
            num += 1
            print(num, ':', n)


res(100)
