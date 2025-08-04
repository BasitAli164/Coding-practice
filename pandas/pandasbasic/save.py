import pandas as pd

# this is the custom data and make sure all array lenght must same  if not then generate errors
data={
    "name":["basit","muhammad","d"],
    "age":[23,12,4],
    "city":["skd","shigri",'kahpulo']
}

df=pd.DataFrame(data)
print(df)