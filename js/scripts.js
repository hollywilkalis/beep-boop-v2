//back end logic begins here

function createNumArray(a, b) {
   var arr = [],
       i = a;
    while((arr[arr.length] = i) < b) {i++}
    return arr;
}

function evalArray (itemsArray) {
  var modifiedArray = [];
  for (var i = 0; i < itemsArray.length; i++) {
    if ((itemsArray[i]) === 0) {
      modifiedArray.push(itemsArray[i]);
    } else if ((itemsArray[i]) % 12 === 0) {
      modifiedArray.push("witches");
    } else if ((itemsArray[i]) % 3 === 0) {
      modifiedArray.push("goblins");
    } else if ((itemsArray[i]) % 4 === 0) {
      modifiedArray.push("ghouls");
    } else {
      modifiedArray.push(itemsArray[i]);
    }
  } //close for loop
  return modifiedArray;
} //close evalArray function

//front end logic begins here
$(document).ready(function() {
  $("form#user-form").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = $("#number-input").val();
    var itemsArray = createNumArray(0, inputtedNumber);
    var modifiedArray = evalArray(itemsArray);
    var arrayToString = modifiedArray.join(", ");
    $("#output").text(arrayToString).val();
    $(".output-box").show().fadeIn("slow");
    $('#user-form')[0].reset();
  }); //close form submit
}); //close ready function
