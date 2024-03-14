#!/usr/bin/python3
from hidden_4 import hidden_4


if __name__ == "__main__":
    module_names = dir(hidden_4)
    for name in sorted(module_names):
        if not name.startswith("__"):
            print("{}".format(name))
