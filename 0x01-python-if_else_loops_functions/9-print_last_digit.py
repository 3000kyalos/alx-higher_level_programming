#!/usr/bin/python3
def print_last_digit(number):
    number_str = str(number)
    if len(number_str) > 1:
        print("{}".format(number_str[-1]))
    else:
        print("{}".format(number_str))
