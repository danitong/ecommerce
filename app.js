$( document ).ready(function() {

// to close the modal popup 

$("#close-button").click(function() {
    $(".alert-info").hide();
});

$("#signUpBtn").on("click", function(){
    $("#signUpConfirm").show();
    $(".hideModal").hide();

    var userInput = $("#firstName");
    
    // Only add to list if not empty
    if (userInput.length == 0)
      userInput.addClass("error");
    });
  
  // reset text input after an error 
  $("#firstName").on("click", function(){
    // get rid of red border
    // remove error text
    userInput.removeClass("error");
    userInput.empty();
    
});
  
// initialize popover with custom content and show it on load
$("#chatPopover").popover({
    title: `How can we help you?<button id="close-popover" class="ml-auto float-right"><i class="fas fa-times"></i></button>`,
    content: `
      <form>
        <div class="form-group">
          <label for="questions">Ask me anything</label>
          <input type="text" class="form-control" id="questions" aria-described="Ask a question">
        </div>
        <button id="submit" type="button" class="btn">Submit</button>
      </form>`,
    html: true,
    placement: "top",
    trigger: "toggle"
  }).popover("show");


  // opens popover when button is clicked
  $("#chatPopover").click(function(){
    $("popover").show();
  });
  
  // hides popover when X is clicked
  $("#close-popover").click(function () {
    $("#chatPopover").popover("hide");

    $("#chatPopover").css("background-color", "#9a82b9");

    $("#chatPopover").css("color", "white");
  });
  
  // when need submit button is clicked
  $("#submit").click(function () {
  
    // hide the popover
    $("#chatPopover").popover("hide");
  
    // set background color to green on signIn button
    $("#chatPopover").css("background-color", "#9a82b9");

    // set text button white
    $("#chatPopover").css("color", "white");

   
    
  });

  // cart item counter
$("#addCart").click(function(){
  // define variable for number of items in cart
  var $numCartItem = $("#cartCounter");
  // define variable for the selected value in the dropdown
  var $selectedNumber = $("#selectQuantity option:selected").text();
  $numCartItem.html($selectedNumber);

});
  
});
