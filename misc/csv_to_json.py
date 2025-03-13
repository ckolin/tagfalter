import csv
import json


tagfalter = []

with open("table.csv", encoding="utf-8") as input:
    for row in csv.DictReader(input):
        for key in row:
            row[key] = list(
                filter(lambda x: x != "", map(lambda x: x.strip(), row[key].split(";")))
            )
        tagfalter.append(row)

with open("tagfalter.json", "w", encoding="utf-8") as output:
    str = json.dumps(tagfalter, indent=4)
    output.write(str)
