# Decorator in Python

def greet():
    return "Hi! Basit"

def call_func(func):
    return func()


fun=call_func(greet)

print(fun)