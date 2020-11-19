
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


     return fetch("http://localhost:3000/users", configObj)
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
        appendError(error.message)
      })

}


const body = document.querySelector('body')
const errorMsg = document.createElement('p')

function appendToDom(id) {
    body.innerHTML = id
}

function appendError(message) {
    errorMsg.innerHTML = message
    body.appendChild(errorMsg)
    
}
submitData('bob', 'bob@bob.com')