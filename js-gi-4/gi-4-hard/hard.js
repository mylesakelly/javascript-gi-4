
function updateBodyClass(className) { // updateBodyClass function is given the parameter class name
    document.body.className = className; //we want to target the body of the page so we give the document.body element the value of the className parameter
  } //this function should UPDATE the body element
  
  document.getElementById('btnred').addEventListener('click', function() { // using an onclick event listener to update the body to red when btnred is clicked
    updateBodyClass('red');
  });
  
  document.getElementById('btnwhite').addEventListener('click', function() { // using an onclick event listener to update the body to white when btnwhite is clicked
    updateBodyClass('white');
  });