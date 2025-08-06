import pandas as pd;

df=pd.read_csv("car_Prices.csv")
print(df)


listOfPerson={
    "name":["basit","ali"],
    "age":[23,12],
    "gender":["male","male"]
}

df1=pd.DataFrame(listOfPerson)
df1.to_json("jsonfile.json")