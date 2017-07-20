$(document).ready(function(){
  // call functions here
  submitForm();
  addUl();
});

// define functions here
function addUl(){
  ul = document.createElement("ul");
  ul.id = "list";
  $('h3')[0].appendChild(ul);
}
function submitForm(){

  $('form').on('submit',()=>{
    event.preventDefault();
    li = document.createElement("li");
    li.innerHTML = $('input#item').val();
    $('#list')[0].appendChild(li);


  });
}
