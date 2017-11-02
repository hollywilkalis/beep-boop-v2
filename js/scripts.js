//back end logic begins here
function createNumArray(a, b) {
   var arr = [],
       i = a;

    while((arr[arr.length] = i) < b) {i++}
    return arr;
}

//front end logic begins here
$(document).ready(function() {
  $("form#user-form").submit(function(event) {
    event.preventDefault();
    debugger;
    var inputtedNumber = $("#number-input").val();
    var newArray = createNumArray(0, inputtedNumber);
    alert(newArray);
    $("#output").text(newArray).val();
    $(".output-box").show().fadeIn("slow");
    $('#user-form')[0].reset();
  }); //close form submit
}); //close ready function
