
//let btn=document.querySelector('.btn');
//document.addEventListener('DOMContentLoaded',showUserdata)
//console.log(userType)
// function uploadedetails(){
//console.log(country)
 
//     gender = gender.value 
//     console.log(gender)
//     //document.getElementsByName('gender').forEach(radio =>{if(radio.checked) {console.log(radio.value)}})
var selectedRow = null
function onFormSubmit()
{     
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData()
{ let fullName = document.getElementById('full-name')
const email = document.querySelector('#email')
//const form = document.querySelector('#user-details')
let gender = document.querySelector('input[name="gender"]:checked').value
let userType = document.querySelector('input[name="userType"]:checked')
var x = document.getElementById("myselect").selectedIndex;
let country = document.getElementsByTagName("option")[x].value;

    var formData = {};
    formData['userName'] = fullName.value;
    formData['email'] = email.value;
    formData['gender'] = gender;
    formData['type'] = userType.value;
    formData['country'] = country;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById('users').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.type;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.country;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)" class="btn btn-success btn-sm edit"><i class="far fa-edit" style="pointer-events: none;"></i></a>`;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt" style="pointer-events: none;"></i></a>`;
}
function resetForm()
{
    document.getElementById('full-name').value = '';
    document.querySelector('#email').value='';
    document.querySelector('input[name="gender"]').value= '';
    document.querySelector('input[name="userType"]').value = '';
    var x = document.getElementById("myselect").selectedIndex;
     document.getElementsByTagName("option")[x].value='';
    selectedRow = null;
}

function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('full-name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.querySelector('input[name="gender"]:checked').value = selectedRow.cells[2].innerHTML;
    document.querySelector('input[name="userType"]:checked').value = selectedRow.cells[3].innerHTML;
    var x = document.getElementById("myselect").selectedIndex;
     document.getElementsByTagName("option")[x].value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.type;
    selectedRow.cells[4].innerHTML = formData.country;
}

function onDelete(td)
{
    row = td.parentElement.parentElement;
    document.getElementById('users').deleteRow(row.rowIndex);
    resetForm();
}
