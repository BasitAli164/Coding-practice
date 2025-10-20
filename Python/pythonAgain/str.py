message="Hello World"
name='basit'
print(message)

# len property
print(len(message))

# fetch using index location
print(message[3])

# slicing
print(message[:3])
print(message[3:])
print(message[:])

#? build in method
print(message.lower())
print(message.upper())
print(message.capitalize())
print(message.count('W')) # how many W in string
print(message.find('l')) # return first matching value from the string
print(message.replace("Hello","basit"))

# concat method
combine=message + ', '+ name
print(combine)

combine1='{} ,{} ,Welcome!'.format(message,name)
combine2=f'{message}, {name}. Welcome!'
print(combine1)
print(combine2)

