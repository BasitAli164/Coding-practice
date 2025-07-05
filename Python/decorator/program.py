# Decorator in Python

def greet():
    return "Hi! Basit"

def call_func(func):
    return func()


fun=call_func(greet) # python is also a first class function or first class citzen

print(fun) 

