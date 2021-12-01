# CSV to JSON

import csv, json

with open("./achievements.csv", encoding='utf-8', mode='r') as fin:
  with open("./achievements-t.json", mode="w") as fout:
    csv_data = list(csv.reader(fin))
    json_data = []
    
    for (_i, row) in enumerate(csv_data[1:]):
      i = _i + 2

      # Handle Year columns
      if row[0].strip() != "":
        year = row[0]
        json_data.append({
          "year": row[0],
          "competitions": []
        })
      
      # Handle Competition columns
      if row[1].strip() != "":
        if row[2].strip() == "": raise ValueError("Missing Region on Row {}.".format(i))
        json_data[-1]["competitions"].append({
          "code": row[1],
          "region": row[2],
          "desc": row[3],
          "awards": []
        })

      # Handle Award columns
      json_data[-1]["competitions"][-1]["awards"].append({
        "category": row[4],
        "title": row[5],
        "team": row[6],
        "recipients": row[7]
      })

    print(json.dumps(json_data, indent=2, sort_keys=True))
    fout.write(json.dumps(json_data, indent=2, sort_keys=True))