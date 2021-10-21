menu = '''**********
欢迎使用
i. 添加
p. 显示全部
**********'''
dict = {}
x = ''
y = ''
sum = 0
while True:
    print(menu)
    f = input('输入请写i，输出请写p: ')
    if f == 'i':
        x = input('请输入商品名称:')
        y = float(input('请输入商品价格:'))
        n = int(input('请输入商品数量:'))
        s = y * n
        dict[x] = s
        sum += s
    elif f == 'p':
        for key in dict:
            print(str(key) + ' :' + str(dict[key]))
        print('总共消费:', round(sum, 2))
        break
