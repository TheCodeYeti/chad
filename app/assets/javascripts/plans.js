$(function(){
  i = 0;
  // chad_respond('Hi There!');
  // chad_respond("What's your name?");
  chad_respond();
  chad_respond();
  // var expected_response = 'name'



  $('#chat-button').on('click', function(event){
    event.preventDefault();
    var user_text = $('#user-input').val();
    user_respond(user_text);

    process_response(user_text);
    chad_respond()
    // chad_respond(user_text);
  });

});

function error() {
    console.log("error")
}


function chad_respond() {
 var chad_response = $('<div>')
      .addClass('chad-response')
      .append(Messages[i]);
  $('#chat-window').append(chad_response);
  i++;
}

function user_respond(user_text) {
 var user_response = $('<div>')
      .addClass('user-response')
      .append(user_text);
  $('#chat-window').append(user_response);
}

function process_response(user_text, expected_response) {
  switch (i) {
    case 2:
      set_user_name(user_text);
      break;
    case 3:
      set_goal_name(user_text);
      break;
    case 4:
      set_goal_amount(user_text);
      break;
    case 5:
      set_goal_date(user_text);
      break;

  }
}

function set_user_name(user_text) {
  $('.user-name').text(user_text + "'s");
}

function set_goal_name(user_text) {
  $('.goal-name').text(user_text);
}

var Messages = [
  "Hi there!",
  "What's your name?",
  "What's your savings goal?",
  "How much do you need to save?",
  "How long do you have?"
];

function set_goal_amount(user_text){
  var goal_amount = $('<div>')
    .addClass('goal-amount')
    .text(user_text);
  $('#savings-plan').append(goal_amount);
}

function draw(data) {
    var color = d3.scale.category20b();
    var width = 420,
        barHeight = 20;

    var x = d3.scale.linear()
        .range([0, width])
        .domain([0, d3.max(data)]);

    var chart = d3.select("#graph")
        .attr("width", width)
        .attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform", function (d, i) {
                  return "translate(0," + i * barHeight + ")";
              });

    bar.append("rect")
        .attr("width", x)
        .attr("height", barHeight - 1)
        .style("fill", function (d) {
                   return color(d)
               })

    bar.append("text")
        .attr("x", function (d) {
                  return x(d) - 10;
              })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .style("fill", "white")
        .text(function (d) {
                  return d;
              });
}

function error() {
    console.log("error")
}
