$(document).ready(function() {
  configureFromLogin($('#username').text());
  bindEvents();
})

constants = {
  greeting: '. What would you like to conspiricize today?',
  username: $('#username').text(),
  user_id: $('#user_id').text()
};

function configureFromLogin (r) {
  if (r) {
    $('#welcome_nav').text('Welcome back! ' + r + constants.greeting);
    $('#welcome_nav_link').show();
    $('#loginbox').hide();
    $('#login_link').hide();
    $('#logout_link').show();
    $('#all-events').show();
    $('#all-articles').show();
    $('#signupbox').hide();
  }
}

function configureFromLogout () {
  $('#login_link').show();
  $('#welcome_nav_link').hide();
  $('#logout_link').hide();
  $('#all-events').hide();
  $('#all-articles').hide();
  constants.user = "";
}

function bindEvents() {
  "use strict";

  // bind to conspiracy submit form
  $('#articles-form').submit(function(e) {
    e.preventDefault();

    if ($('#event-name').text() === "No Event Selected") {
      alert("Hey! You didn't select an event yet! Select one from the list above or create a new one then select it!");
    } else {
      $.ajax({
        url: '/users/' + $('#user_id').text() + '/events/articles/new',
        type: 'post',
        dataType: 'json',
        data: $(this).serialize()
      })
      .done(function(r) {
        var $conspiracy = $('#conspiracy-template').clone();
        $conspiracy.show();
        $conspiracy.text(r.content);
        $('#conspiracy-list').prepend($conspiracy);

        var $new_event = $('#my-event-template').clone();
        $new_event.show();
        $new_event.find("a").text($('#event-name').text())
        $('#my-conspiracies').prepend($new_event)
      })
    }
  })


  // bind to event name
  $(document).on("click", '.event-link', function(e) {
    e.preventDefault();
    $.ajax({
      url: '/events/' + $(e.target).data('id'),
      type: 'post',
      dataType: 'json',
    })
    .done(function(r) {
      $('#event-name').text($(e.target).text())
      $('#event-help').show();
      var $new_list = $('#conspiracy-list-template').clone();
      $new_list.attr('id','other-list');
      jQuery.each(r, function(i, val) {
        // console.log(val)
        // console.log(val.content)
        var $new_conspiracy = $('#conspiracy-template').clone();
        $new_conspiracy.show();
        $new_conspiracy.text(val.content);
        $new_list.append($new_conspiracy);
      })
      // debugger
      $('#conspiracy-list').replaceWith($new_list);
      $new_list.attr('id','conspiracy-list');
    })
  })

  // bind to submit a new Event
  $('#events-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: '/user/' + $('#user_id').text() + '/event',
      type: 'post',
      dataType: 'json',
      data: $(this).serialize()
    })
    .done(function(r) {
      var $event = $('#event-template').clone();
      $event.attr('id',"");
      $event.show();
      $event.find('a').attr('class','event-link');
      $event.find('a').text(r.title);
      $event.find('a').data('id', r.id);
      $event.find('td:last-child').text(r.begin_date);
      if ( $('#event-list-body').children().length ) {
        $('#event-list-body').prepend($event)
      } else {
        console.log($event);
        $('#event-list-body').append($event);
      }
    })
  })

  // bind Login Link that pops out submit form
  $('a#signin').click(function() {
    $('div#login').show( "slow" );
    $('#loginbox').show();
  })

  // bind Registration Link that pops out Registration Form
  $('a#register_link').click(function() {
    $('#loginbox').hide();
    $('#signupbox').show();
  })

  // bind Registration Link Submit button
  $('#signupform').submit(function(e) {
    e.preventDefault();
    if ($(this).find("#reg_retyped_pw").val() != $(this).find("#reg_pw").val()) {
      $('#signupalert').find("span").text("Passwords do not match. Please double check your spelling.");
      $('#signupalert').show();
    } else {
      $.ajax({
        url: '/register',
        type: 'post',
        dataType: 'json',
        data: $(this).serialize(),
        success: function(r) {
          configureFromLogin(r);
        }
      })
    }
  })

  // bind logout button
  $('a#signout').click(function(e) {
    e.preventDefault();
    $.ajax({
      url: '/signout',
      type: 'post',
      // dataType: 'json'
    }).done(function(r) {
      configureFromLogout();
    });
  })

  // bind Login Form Submit button
  $('#loginform').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: '/signin',
      type: 'post',
      dataType: 'json',
      data: $(this).serialize()
    })
    .done(function(r) {
      $('#welcome_nav').text('Welcome back! ' + $('#username').text() + constants.greeting);
      $('#welcome_nav_link').show();
      $('#loginbox').hide();
      $('#login_link').hide();
      $('#logout_link').show();
    })
    .fail(function(r) {
      $('#loginalert').find("span").text("Username and password combination is incorrect. Please check your information.");
      $('#loginalert').show();
    })
  })
}



// function getNewsRSS () {}

//   $('.add').submit(function(e) {
//     "use strict";
//     e.preventDefault();
//     var data = $(this).serialize();
//     $.ajax({
//       url: '/add_todo',
//       type: 'post',
//       dataType: 'json',
//       data: data,
//       success: function(response) {
//         debugger
//         var newContent = response.todo.todo_content;
//         var id = response.todo.id;
//         var newTodo = buildTodo(newContent);
//         addToView(newTodo,id);
//       }
//     })
//   });
//     $('.todo_list').on("click", "delete", function(event){
//     event.preventDefault();
//     $target = $(event.target)
//     $.ajax({
//       url:$target.attr('href'),
//       type:"DELETE"
//     }).done(function(){
//      $target.closest(".todo").remove();
//    })
//   });

//   $('.todo_list').on("click", ".complete", function(event){
//     event.preventDefault();
//     $target = $(event.target)
//     $.ajax({
//       url: $target.attr('href'),
//       type: "POST"
//     }).done(function(){
//       $target.closest(".todo").addClass("complete");
//       $target.closest("li").remove();
//     })
//   })
// }

//   // Bind functions which add, remove, and complete todos to the appropriate
//   // elements

//   function buildTodo(todoName, id) {
//     "use strict";
//   // gets todoTemplate stored in DOM.
//   var todoTemplate = $.trim($('#todo_template').html());
//   // Creates an jQueryDOMElement from the todoTemplate.
//   var $todo = $(todoTemplate);
//   // Modifies it's text to use the passed in todoName.
//   $todo.find('h2').text(todoName);
//   // Returns the jQueryDOMElement to be used elsewhere.
//   var route = '/todos/' + id
//   $todo.find('a').attr('href', route)
//   return $todo;
// }

// function addToView(jQueryObj) {
//   $('.todo_list').append(jQueryObj);
// }
