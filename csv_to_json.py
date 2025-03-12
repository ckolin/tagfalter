import csv
import json


split_keys = set()
tagfalter = []

with open("table.csv", encoding="utf-8") as input:
    for row in csv.DictReader(input):
        for key in row:
            if ";" in row[key]:
                split_keys.add(key)

with open("table.csv", encoding="utf-8") as input:
    for row in csv.DictReader(input):
        for key in split_keys:
            row[key] = list(map(lambda x: x.strip(), row[key].split(";")))
        tagfalter.append(row)

with open("tagfalter.json", "w", encoding="utf-8") as output:
    str = json.dumps(tagfalter, indent=4)
    output.write(str)
