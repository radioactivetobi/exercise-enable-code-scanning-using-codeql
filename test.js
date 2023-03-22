function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Client-side validation
  if (username == "" || password == "") {
    alert("Username and password are required");
    return false;
  }
  
  // Insecure cryptographic function
  password = md5(password);
  
  // Lack of input sanitization
  var query = "SELECT * FROM users WHERE username='" + username + "' AND password='" + password + "'";
  
  // Send query to server
  // ...
}
