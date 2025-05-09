# /// script
# requires-python = ">=3.10"
# dependencies = [
#     "openpyxl",
#     "pandas",
# ]
# ///

import pandas as pd


def fix(x):
    x = x.str.replace("Ã¼", "ü")
    x = x.str.replace("Ã¤", "ä")
    x = x.str.replace("Ã¶", "ö")
    x = x.str.replace("Ã", "ß")
    return x


tagfalter = []

df = pd.read_excel("table.xlsx", "table", index_col=None)
df = df.fillna("").astype(str)
df.columns = fix(df.columns)
for col in df:
    df[col] = fix(df[col])
    df[col] = df[col].str.strip()
    df[col] = df[col].apply(
        lambda val: list(
            filter(lambda x: x != "", map(lambda x: x.strip(), val.split(";")))
        )
    )

df.to_json("tagfalter.json", orient="records")
