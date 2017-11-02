//back end logic begins here


//front end logic begins here
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    $('#formid')[0].reset();
  }); //close form submit
}); //close ready function
