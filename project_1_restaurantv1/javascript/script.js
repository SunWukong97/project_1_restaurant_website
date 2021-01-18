function toggleDropDownMenu(){
    let menu = document.getElementById("myLinks");

    if(menu.style.display == "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
        
    }
}

function submitButtonAction(){
    let nameField = document.getElementById("nameField").value;
    let emailField = document.getElementById("emailField").value;
    let subjectField = document.getElementById("subjectField").value;
    let messageField = document.getElementById("messageField").value;

    console.log(`${nameField}, ${emailField}, ${subjectField}, ${messageField}`);

    let person = {
        'name': nameField,
        'email': emailField,
        'subject': subjectField
    };

    console.log(person.name);

    // const fs = require('fs');

    // const jsonString = JSON.stringify(person);

    // fs.writeFile('./newPerson.json', jsonString, (err) =>{
    //     if (err){
    //         console.log("Error writing file", err);
    //     }
    //     else{
    //         console.log('Successfully wrote file');
    //     }
    // });
}