import pandas as pd

# this is the custom data and make sure all array lenght must same  if not then generate errors
data={
    "name":["basit","muhammad","d"],
    "age":[23,12,4],
    "city":["skd","shigri",'kahpulo']
}

# df=pd.Series(data) # give in a rows form
df=pd.DataFrame(data) # give in a tabular form
print(df)


df.to_csv("customData.csv",index=False) # this is a method to store our custome data into file and index=false is to remove the default generate index


df.to_excel("output.xlsx",index=False)

df.to_json("outputJson.json",orient="records",lines=True)