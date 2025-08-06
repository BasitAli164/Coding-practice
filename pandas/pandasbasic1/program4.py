import pandas as pd;

df=pd.read_csv("car_Prices.csv")
print("Informaiton of the car_prices.csv file:")
print(df.info()) # this info show the summary of the dataset
listOfPerson={
    "name":["basit","ali"],
    "age":[23,12],
    "gender":["male","male"]
}

df1=pd.DataFrame(listOfPerson)
df1.to_json("jsonfile.json")


print("Top data:\n ",df.head()) # in tail and head method of pandas we can pass an integer value if we don't pass then by default it set by 5
print("Bottom data:\n ",df.tail())