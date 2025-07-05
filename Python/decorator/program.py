# Decorator in Python

def greet():
    return "Hi! Basit"

def call_func(func):
    return func()


fun=call_func(greet) # python is also a first class function or first class citzen

# print(fun) 


def log_Func(fun):
    def wrapper():
        print(f"Name of function is:{fun.__name__}")

