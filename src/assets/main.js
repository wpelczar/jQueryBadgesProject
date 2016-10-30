$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2094378.json',
    dataType: 'jsonp',
    success: function(response){
      $.each(response.courses.completed, function(index, value){
        var course = $('<div class="course"></div>');
        course.append($('<h3>', { text: value.title }));
        course.append($('<img>', { src: value.badge }));
        course.append($('<a>', { href: value.url, target: '_blank', class: 'btn btn-primary', text: 'See course' }));
        $('#badges').append(course); 
      });
    }
  })

});
