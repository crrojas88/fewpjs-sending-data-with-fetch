
function submitData(name, email) {

    let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email
  })
    };


     fetch("http://localhost:3000/users", configObj)
     .then(function(response) {
        return response.json();
      })
      .then(function(object) {
          console.log(object)
        /*find the new id and append it to the DOM */
        appendToDom(object.id)
      })
      .catch(function(error) {
        /*expect to receive an object on error with a property, message*/
      })

}


function appendToDom(id) {
    const body = document.querySelector('body')
    body.innerHTML = id
}

function appendError(message) {
    const errorMsg = document.createElement('p')
    errorMsg.innerHTML = message
}
submitData('rod', 'blabbla@gmaiol.com')