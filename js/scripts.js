$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
  $("#add-email").click(function() {
    $("#new-emails").append('<div class="new-email">' +
                '<div class="form-group">' +
                  '<label for="new-email">Email</label>' +
                  '<input type="text" class="form-control new-email-input">' +
                '</div>');
  })
  $("#add-number").click(function() {
    $("#new-numbers").append('<div class="new-number">' +
              '<div class="form-group">' +
                '<label for="new-number">Phone Number</label>' +
                '<input type="text" class="form-control new-number-input">' +
              '</div>');
  })
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [], emails: [], numbers: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      newContact.addresses.push(newAddress);
    });

    $(".new-email").each(function() {
      var inputtedEmail = $(this).find("input.new-email-input").val();

      var newEmail = { iEmail: inputtedEmail };
      newContact.emails.push(newEmail);

    });

    $(".new-number").each(function() {
      var inputtedNumber = $(this).find("input.new-number-input").val();

      var newNumber = { iNumber: inputtedNumber };
      newContact.numbers.push(newNumber);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
      $("ul#emails").text("");
      newContact.emails.forEach(function(email) {
        $("ul#emails").append("<li>" + email.iEmail + "</li>");
      });
      $("ul#numbers").text("");
      newContact.numbers.forEach(function(number) {
        $("ul#numbers").append("<li>" + number.iNumber + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
  });
});
