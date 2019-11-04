customerTable = ""
results = ""


addCustomers.onshow=function(){
  drpCompanies1.clear()
    let query = "SELECT name from customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
    if (req1.status == 200) {

    customerTable = JSON.parse(req1.responseText)
    for (i = 0; i <= customerTable.length - 1; i++)
    drpCompanies1.addItem(customerTable[i])
   
    lblResult1.value = customerTable + "\n"
  }
 
    if (customerTable.length == 0)
        NSB.MsgBox("There are no customers of that type.")
    else {        
        // output the names of all
        let message = ""
        for (i = 0; i <= customerTable.length - 1; i++)
            message = message + customerTable[i][1] + "\n"
        lblResult1.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
}

Hamburger1.clear()
Hamburger1.addItem("See Customers")
Hamburger1.addItem("Add Customers")
Hamburger1.addItem("Edit Customers")
Hamburger1.addItem("Delete Customers")
}


drpCompanies1.onclick=function(){
  if (typeof(s) == "object"{
  return
}
else {
  drpCompanies1.value = s
  
  let query01 = "SELECT name from customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
    if (req1.status == 200) {

    customerTable = JSON.parse(req1.responseText)
    for (i = 0; i <= customerTable.length - 1; i++)
    drpCompanies1.addItem(customerTable[i])
   
    lblResult.value = customerTable + "\n"
  }
 }
}
  

btnSubmit.onclick=function(){
if (Radiobutton1.value == 0) {
  let newName = inptNewName.value
  let oldName = inptName.value
  let query1 = "SELECT name, street, city, state, zipcode FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
  if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500) {   // means the update succeeded
            let resultUpdate = JSON.parse(req1.responseText)
            lblResult1.value = resultUpdate
            NSB.MsgBox("You have successfully changed the pet name!")
        } else
            NSB.MsgBox("There was a problem changing the pet name.")
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status)
    }  
}
  
  
  } 
  
if (Radiobutton2.value == 1) {
   let nameDel = inptName.value
// make sure the name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= customerTable.length - 1; i++) {
        if (nameDel == customerTable[i][1])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That name is not in the database.")
    else if (found == true) {
      let queryDelete = "DELETE FROM customer WHERE name = " + '"' + nameDel + '"'
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + queryDelete)

      if (req1.status == 200) { //transit worked.
        if (req1.responseText == 500)    // means the insert succeeded
            NSB.MsgBox("You have successfully deleted the customer named " + nameDel)
        else
            NSB.MsgBox("There was a problem deleting " + nameDel + " from the database.")
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } // count if
}
  
}
  }
  
  else {
  NSB.MsgBox("ERROR: Type 'Update' or 'Delete'. Type exactly as shown.")
  }
  
}

}
  
}


}


  
}


  
}

addCustomer.onshow=function(){
  let queryAdd = "SELECT name FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
  if (req1.status == 200) {
    customerTable = JSON.parse(req1.responseText)
    

  if (customerTable.length == 0) {
} else { 
  for (i = 0; i <= customerTable.length - 1; i++)
    
    lstCustomer.addItem(customerTable[i][0])
  }
  }
} else {
  }
  
}


btnRefresh.onclick=function(){
  let name = inptCustName.value
  let street = inptStreet.value
  let city = inptCity.value
  let state = inptState.value
  let zipcode = inptZip.value
  
  letQueryRefresh = "INSERT INTO customer (name, street, city, state, zipcode) VALUES (' "+name+" ', ' "+street+" ', ' "+city+" ', ' "+street+" ', ' "+state+" ', ' "+zipcode+" ')
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
  if (req2.status == 200) {
  
  if (req2.responseText == 500) {
  
  NSB.MsgBox("Added")
  
  let query00 = "SELECT name FROM customer"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
  if (req2.status == 200) {
    lstCustomer.clear()
  
  customerTable = JSON.parse(req2.responseText)
  
  if (customerTable == 0) {
} else {
  for (i = 0; i <= customerTable.length - 1; i++)
  lstCustomer.addItem(customerTable[i][0])

}
  
}

Hamburger1.onclick=function(){
  if (typeof(s) == "object") {
  return
} switch(s) {
case "See Customers":
  ChangeForm(seeCustomers)
  break
case "Add Customers":
  ChangeForm(addCustomers)
  break
case "Edit Customers":
  ChangeForm(deleteUpdateCustomers)
  break
case "Delete Customers":
  ChangeForm(deleteUpdateCustomers)
  break
}

}
