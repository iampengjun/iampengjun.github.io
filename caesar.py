text = input()
n = int(input())


def caesar(text, n):
    for x in text:
        if ord('a') <= ord(x) <= ord('z'):
            if ord(x) + n >= ord('z'):
                print(chr(ord(x) + n - 26), end='')
            else:
                print(chr(ord(x) + n), end='')
        elif ord('A') <= ord(x) <= ord('Z'):
            if ord(x) + n >= ord('Z'):
                print(chr(ord(x) + n - 26), end='')
            else:
                print(chr(ord(x) + n), end='')
        else:
            print(x, end='')


caesar(text, n)
