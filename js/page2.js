$(document).ready(function () {

  // Compile address template
  var theTemplate = Handlebars.compile($('#address-template').html());

  // Define personal data object
  var context = {
    city: 'London',
    street: 'Baker Street',
    number: '221B'
  };

  // Pass the data to the template and append it to the DOM.
  $('.content-placeholder').html(theTemplate(context));
});
