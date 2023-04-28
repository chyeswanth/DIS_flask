from flask import render_template
import re
from datetime import datetime
from flask import Flask
from flask import request
import sqlite3
import json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/services/")
def services():
    return render_template("content.html")

@app.route("/addrec", methods = ['POST', 'GET'])
def addrec():
    if request.method == 'POST':
        try:
            data=json.loads(request.data.decode('utf-8'))
            nm = data['name']
            em = data['email']
            ph = data['phone']
            qu = data['query']

           
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO contactus (name, email, phone, query) VALUES (?,?,?,?)",(nm, em, ph, qu))

                con.commit()
                msg = "Record successfully added to database"
        except:
            con.rollback()
            msg = "Error in the INSERT"

        finally:
            con.close()
            
            return render_template('result.html',msg=msg)
        
@app.route("/list/")
def list():

    con = sqlite3.connect("database.db")
    con.row_factory = sqlite3.Row

    cur = con.cursor()
    cur.execute("SELECT rowid, * FROM contactus")

    rows = cur.fetchall()
    con.close()
    
    return render_template("list.html",rows=rows)


@app.route("/edit", methods=['POST','GET'])
def edit():
    if request.method == 'POST':
        try:
            # Use the hidden input value of id from the form to get the rowid
            id = request.form['id']
            # Connect to the database and SELECT a specific rowid
            con = sqlite3.connect("database.db")
            con.row_factory = sqlite3.Row

            cur = con.cursor()
            cur.execute("SELECT rowid, * FROM contactus WHERE rowid = " + id)

            rows = cur.fetchall()
        except:
            id=None
        finally:
            con.close()
            # Send the specific record of data to edit.html
            return render_template("edit.html",rows=rows)

# Route used to execute the UPDATE statement on a specific record in the database
@app.route("/editrec", methods=['POST','GET'])
def editrec():
    # Data will be available from POST submitted by the form
    if request.method == 'POST':
        try:
            # Use the hidden input value of id from the form to get the rowid
            rowid = request.form['rowid']
            nm = request.form['name']
            email = request.form['email']
            phone = request.form['Phone']
            query = request.form['query']

            # UPDATE a specific record in the database based on the rowid
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("UPDATE contactus SET name='"+nm+"', addr='"+email+"', city='"+phone+"', zip='"+query+"' WHERE rowid="+rowid)

                con.commit()
                msg = "Record successfully edited in the database"
        except:
            con.rollback()
            msg = "Error in the Edit: UPDATE contactus SET name="+nm+", addr="+email+", city="+phone+", zip="+query+" WHERE rowid="+rowid

        finally:
            con.close()
            # Send the transaction message to result.html
            return render_template('result.html',msg=msg)





@app.route("/aboutus/")
def aboutus():
    return render_template("aboutus.html")

@app.route("/login/")
def login():
    return render_template("loginpage.html")

@app.route("/signup/")
def signup():
    return render_template("signup.html")

@app.route("/consultnow/")
def consultnow():
    return render_template("content.html")

@app.route("/services/physician/")
def physician():
    return render_template("physician.html")

@app.route("/services/covidcon/")
def covidcon():
    return render_template("Covid-19 Consultation Appointment.html")


@app.route("/services/cardiology/")
def cardiology():
    return render_template("Cardiology.html")

@app.route("/services/derm/")
def derm():
    return render_template("Dermatology.html")

@app.route("/services/gas/")
def gas():
    return render_template("gastreoenrelogy.html")

@app.route("/services/neuro/")
def neuro():
    return render_template("Neurology.html")

@app.route("/services/opth/")
def opth():
    return render_template("opthalmalogy.html")


@app.route("/services/orth/")
def orth():
    return render_template("orthopedics.html")

@app.route("/services/pedia/")
def pedia():
    return render_template("pediatrics.html")

@app.route("/services/psych/")
def psych():
    return render_template("psychiatry.html")

@app.route("/services/radio/")
def radio():
    return render_template("radiology.html")

@app.route("/services/repro/")
def repro():
    return render_template("reproductivehealth.html")


@app.route("/addrecords", methods = ['POST', 'GET'])
def addrecords():
    if request.method == 'POST':
        try:
            data=json.loads(request.data.decode('utf-8'))
            name = data['name']
            email = data['email']
            phone = data['phone']
            date = data['date']
            time = data['time']

           
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO appointment(name, email, phone, dt,time) VALUES (?,?,?,?,?)",(name, email, phone, date,time))

                con.commit()
                msg = "Record successfully added to database"
        except:
            con.rollback()
            msg = "Error in the INSERT"

        finally:
            con.close()
            
            return render_template('result2.html',msg=msg)
        
@app.route("/list2/")
def list2():

    con = sqlite3.connect("database.db")
    con.row_factory = sqlite3.Row

    cur = con.cursor()
    cur.execute("SELECT rowid, * FROM appointment")

    rows = cur.fetchall()
    con.close()
    
    return render_template("list2.html",rows=rows)

        

@app.route("/services/cardiology/pay1")
def pay1():
    return render_template("payment.html")




@app.route("/add", methods = ['POST', 'GET'])
def add():
    if request.method == 'POST':
        try:
            user = request.form['user']
            pwd = request.form['pwd']
           
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO login(username, password) VALUES (?,?)",(user, pwd))

                con.commit()
                msg = "Record successfully added to database"
        except:
            con.rollback()
            msg = "Error in the INSERT"

        finally:
            con.close()
            
            return render_template('content.html',msg=msg)
        


@app.route("/addsi", methods = ['POST', 'GET'])
def addsi():
    if request.method == 'POST':
        try:
            email = request.form['email']
            user = request.form['user']
            pwd = request.form['pwd']
            
           
            with sqlite3.connect('database.db') as con:
                cur = con.cursor()
                cur.execute("INSERT INTO signup(email, username,password) VALUES (?,?,?)",(email, user,pwd))

                con.commit()
                msg = "Record successfully added to database"
        except:
            con.rollback()
            msg = "Error in the INSERT"

        finally:
            con.close()
            
            return render_template('loginpage.html',msg=msg)







    