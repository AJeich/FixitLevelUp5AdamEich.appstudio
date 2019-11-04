customerTable = ""
results = ""

seeCustomers.onshow=function(){

  drpCompanies.clear()
    let query = "SELECT name from customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
    if (req1.status == 200) {

    customerTable = JSON.parse(req1.responseText)
    for (i = 0; i <= results.length - 1; i++)
    drpCompanies.addItem(customerTable[i])
   
    lblResult.value = customerTable + "\n"
  }
 
    if (customerTable.length == 0)
        NSB.MsgBox("There are no pets of that type.")
    else {        
        // output the names of all
        let message = ""
        for (i = 0; i <= customerTable.length - 1; i++)
            message = message + customerTable[i][1] + "\n"
        lblResult.value = message
      } 
      
  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}

Hamburger1.clear()
Hamburger1.addItem("See Customers")
Hamburger1.addItem("Add Customers")
Hamburger1.addItem("Edit Customers")
Hamburger1.addItem("Delete Customers")
}

drpCompanies.onclick=function(){
  if (typeof(s) == "object"{
  return
}
else {
  drpCompanies.value = s
  
  let query01 = "SELECT name from customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
    if (req1.status == 200) {

    customerTable = JSON.parse(req1.responseText)
    for (i = 0; i <= results.length - 1; i++)
    drpCompanies.addItem(customerTable[i])
   
    lblResult.value = customerTable + "\n"
  }
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
  
