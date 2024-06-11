


var web= document.getElementById('bookMark');
var link= document.getElementById('bookWebSite');
var addBtn= document.getElementById('addbtn');
var table=  document.getElementById('table');

var addData=[]

function addLink()

{

   var data= {

    index: +1, 
    wname:web.value,
    visit:link.value ,
    delete:'go',
   }

   addData.push(data);

   localStorage.setItem('Data',JSON.stringify(addData))
  
    displayData(addLink)

     clearForm()


};

function clearForm()

{

  web.value= null;
  link.value= null;

}

function displayData(addLink)

{
var cartona=` <tr class="border-bottom justify-content-between">
<th id="index">Index</th>
<th id="website">Website Name</th>
<th id="visit">Visit</th>
<th id="delete">Delete</th>
</tr>`;


for(i=0;i<addData.length;i++)

  {
cartona+= 

` 

    <tr class="border-bottom justify-content-between">
    <td id="index">${i+1}</td>
    <td id="website">${addData[i].wname}</td>
    <td id="visit"> <a href='${addData[i].visit}' target='_blank'><button type="button" class="btn btn-success w-50">Visit</button> <a></td>
    <td id="delete"><button type="button" class="btn btn-danger w-50" onclick="deleteDiv(${i})">Delete</button></td>
    </tr>`

  }

  document.getElementById('table').innerHTML=cartona;
};

function deleteDiv(index)

{

addData.splice(index,1);
displayData ()

};