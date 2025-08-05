# import pandas and use alias name pd for pandas
import pandas as pd;

# Read file from local with pandas method and store in a variable

'''
In pandas there are two type of expressing format of data which are 
    i-series: one dimentional array ---> single row
    ii- Datafram : two dimentional array ---> combination of row and column means table

'''

# Read data from  csv file 
df=pd.read_csv("car_prices.csv",encoding="utf-8")

# print(df)

# Read data from json:
df1=pd.read_json("medical_ner_entities.json")
# print(df1)



# Read data from excel:
df2=pd.read_excel("sis.xlsx")
# print(df2)


# gcsfs for the clound data read


