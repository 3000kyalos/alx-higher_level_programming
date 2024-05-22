#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    result_list = []
    for i in range(list_length):
        try:
            elem1 = my_list_1[i]
            elem2 = my_list_2[i]

            if not isinstance(elem1, (int, float)):
                print("wrong type")
                result_list.append(0)
                continue
            if not isinstance(elem2, (int, float)):
                print("wrong type")
                result_list.append(0)
                continue

            result = elem1 / elem2
        except ZeroDivisionError:
            print("division by 0")
            result = 0
        except IndexError:
            print("out of range")
            result = 0
        except Exception as e:
            print("unexpected error: {}".format(e))
            result = 0
        finally:
            result_list.append(result)
    return result_list
