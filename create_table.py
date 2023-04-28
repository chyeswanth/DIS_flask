import sqlite3

conn = sqlite3.connect('database.db')
print("Connected to database successfully")

conn.execute('CREATE TABLE contactus (name TEXT, email TEXT, phone TEXT, query TEXT)')
print("Created table successfully!")


conn.execute('CREATE TABLE appointment (name TEXT, email TEXT, phone TEXT, dt DATE, time TEXT )')
print("Created table successfully!")

conn.execute('CREATE TABLE login(username TEXT, password TEXT)')
print("Created table successfully!")

conn.execute('CREATE TABLE signup(username TEXT, password TEXT, repassword TEXT)')
print("Created table successfully!")



conn.close()