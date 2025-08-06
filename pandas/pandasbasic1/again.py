import pandas as pd;

df=pd.read_csv("car_prices.csv")
# print(df)
print(df.shape)
print(df.head()
)
print("Tail: ")
print(df.tail(2))

person={
    "name":["Basit"],
    "age":[12]
}


df1=pd.DataFrame(person)

df1.to_csv("output.csv",index=False)
print(df1.shape)