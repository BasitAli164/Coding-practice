import pandas as pd;

df=pd.read_csv("car_prices.csv")
print(df)


person={
    "name":["Basit"],
    "age":[12]
}


df1=pd.DataFrame(person)

df1.to_csv("output.csv",index=False)