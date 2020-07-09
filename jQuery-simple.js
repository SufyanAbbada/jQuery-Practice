$(function () {
  $("#btnadd").click(AddingnewTodo);
  //This is simple Binding of the Button.

  //$("#todos li").click(removing);

  //Here each li of todos is selected to be removed. And this is binding f clicking
  //So here the code is duplicated because on each li addition, we give them the binding
  //So if rather than that, what if we give the binding to ul tag that if any click is done on any of your li
  //You should call that function. So, it is done by
  $("#todos").on("click", "li", removing);
  //This line simply says to ul tag that as on any of your li tag is clicked, call remove function.
});

/*function AddingnewTodo() {
  //Now here we will add a new Value of 'li' in the 'ul' tag. So rather than long code the new code will be
  var wholenewtodo = $("#newtodo").val();
  //In here the value is fetched by val() function of jQuery and the value is of newtodo ID tag.
  //Now that value is simply added in the ul but
  //For that we have to simply use the function of 'append'.
  $("#todos").append("<li>" + wholenewtodo + "</li>");
  //Here it simply places that inside the ul function.
  //Now if we want that after Button is pressed and its value is placed, we shall empty our Text field then it is
  $("#newtodo").val("");
  //Now this will set the text field to again blank after clicking of button.
}*/

//Upper class was just to show demo
//Now down here is the same code but here in case of not adding any value, it will make it Red.

function AddingnewTodo() {
  var wholenewtodo = $("#newtodo").val();
  if (wholenewtodo == "") {
    $("#newtodo").addClass("error");
    return;
  }
  $("#newtodo").removeClass("error");
  $("#todos").append("<li>" + wholenewtodo + "</li>");
  $("#newtodo").val("");
  //Now in order to make the new one go away too, we need to bind this new creating li with that remove function
  //It can be done by simply using the same binding of above, here.
  $("#todos li").click(removing);
}

//Now if we want to remove that li on clicking then we shall simply add a class of remove
//It can be seen here

function removing() {
  //$(this).remove();
  //'this' keyword takes the 'li' that is been clicked.
  //fadeOut also acts same as remove but with some cool effect
  $(this).fadeOut();
}
