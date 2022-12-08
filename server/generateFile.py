import numpy as np
import time
import sys
import pandas as pd
import os.path

print("Inside Python Script")

a = os.path.exists("./AttendanceList.csv")
if (a == True):
    os.remove("AttendanceList.csv")

names = sys.argv[1].split(",")
values = sys.argv[2].split(",")
print(names)

list_of_tuples = list(zip(names, values))
df = pd.DataFrame(list_of_tuples,columns = ['Names', 'Precentage of attendance']) 
df.to_csv('AttendanceList.csv')
