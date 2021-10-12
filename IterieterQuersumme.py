n = input('请输入任意整数(n): ')


def qs(num):
    s = 0
    for i in str(num):
        s += int(i)
    if s > 9:
        qs(s)
    else:
        print(s)


qs(n)
