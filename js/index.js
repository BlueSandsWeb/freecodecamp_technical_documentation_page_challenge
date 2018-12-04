var button = document.getElementsByTagName("button");
var list = document.getElementsByClassName("nav-link");
var screenWidth = document.body.clientWidth;

window.addEventListener('resize', function () {
  if (document.body.clientWidth >= 704) {
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "block";
    }
  }
  if (document.body.clientWidth < 704) {
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }
  }
}, true);

button[0].addEventListener("click", function () {

  if (list[0].style.display === "none") {
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }
  }

  // if(list[0].style.display === "block"){
  // }

});

// var menu = document.querySelector("button");
// var menuItems = document.querySelectorAll("nav__a");

// menu.addEventListener("click", function(){
//   menuItems[0].style.display = "flex";
//   menu.style.display = "none";
// })

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
// const projectName = 'technical-docs-page';
// localStorage.setItem('example_project', 'Technical Docs Page');