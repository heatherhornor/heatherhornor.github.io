// 1.	When the header element is clicked
  // a. Slide up the header
  $('header').on('click', function() {
    $('header').slideUp('slow');
  });

// 2. When the "Throw a party" button is clicked
  // a. Remove the boring class from the section with the id boxes
  // b. Fade out all of the divs in #row4 slowly (hint: your selector could be $('#row4 div') )
  // c. Add a class snazzy in your css with some styles and add it to all items with the class .box
  // c. Change the styling of the span inside of #box3 by adding a class fun (and style that fun class in CSS)
  // SlideUp all the h2s on the page quickly
  // Add the selected class [already in the CSS] to the divs in #row3
  // BONUS: Add a paragraph that says "Time to party!!!" to all boxes with class .add-para (Hint: you'll need to look up the append() method)
  // BONUS: Add an h4 that says "Wild!" to the beginning of #box12 (Hint: you'll need to look up the prepend() method)
  $('#party-time').on('click', function() {
    $('#boxes').removeClass('boring');
    $('#row4 div').fadeOut(300);
    $('.box').addClass('snazzy');
    $('#box3 span').addClass('fun');
    $('h2').slideUp(100);
    $('#row3 div').addClass('selected');
    $(".add-para").append("<b> Time to Party!</b>");
    $("#box12").prepend("<h4> Wild!</h4>");
  });

// 3. When the anchor in #box2 is clicked (hint: your selector could be $('#box2 a') )
  // a. Fade in the footer slowly
  $('#box2 a').on('click', function() {
    $('footer').fadeIn(300);

  });

// 4. When the "Party Pooper" button is clicked
  // a. Slide down the header
  // b. Fade out the footer
  // c. Show the divs in #row4
  // d. Add the boring class to the element with the id boxes
  // e. Remove the snazzy class from everything
  // f. Remove the fun class from the span in #box3
  // g. Remove the selected class from the divs in #row3
  // h. Slide down all of the h2s
  // BONUS: If you completed the above bonus tasks, look up "remove jquery"
  // and then see if you can remove the paragraphs and h3s that you added in.
  // make sure to ONLY remove those paragraphs and h3s you added, not all the paragraphs and h3s!
  $('#reset').on('click', function() {
    $('footer').fadeOut(300);
    $('header').slideDown('slow');
    $('#row4 div').fadeIn(300);
    $('#boxes').addClass('boring');
    $('.box').removeClass('snazzy');
    $('#box3 span').removeClass('fun');
    $('#row3 div').removeClass('selected');
    $('h2').slideDown(100);
    $(".add-para b").remove();
    $("#box12 h4").remove();
  });
