#!/usr/bin/python3
for abc in range(ord('a'), ord('z')+1):
    if chr(abc) == 'q' or chr(abc) == 'e':
        continue
    print("{}".format(chr(abc)), end='')
