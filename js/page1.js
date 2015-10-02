$(document).ready(function () {

  // Compile people template
  var template = Handlebars.compile($('#people-template').html());

  // Add the person partial
  Handlebars.registerPartial('person', $('#person-partial').html());

  // Define people object
  var data = {
    people: [{
      firstName: 'Alan',
      lastName: 'Johnson',
      phone: '1234567890',
      email: 'alan@test.com',
      memberSince: 'Mar 25, 2011'
    }, {
      firstName: 'Allison',
      lastName: 'House',
      phone: '0987654321',
      email: 'allison@test.com',
      memberSince: 'Jan 13, 2011'
    }, {
      firstName: 'Nick',
      lastName: 'Pettit',
      phone: '9836592272',
      email: 'nick@test.com',
      memberSince: 'Apr 9, 2009'
    }, {
      firstName: 'Jim',
      lastName: 'Hoskins',
      phone: '7284927150',
      email: 'jim@test.com',
      memberSince: 'May 21, 2010'
    }, {
      firstName: 'Ryan',
      lastName: 'Carson',
      phone: '8263729224',
      email: 'ryan@test.com',
      memberSince: 'Nov 1, 2008'
    }]
  };

  $('#people-list').html(template(data));
});
