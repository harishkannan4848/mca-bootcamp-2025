    document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const gender = document.getElementById("gender").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  



  const resultDisplay = document.getElementById("resultDisplay");
  resultDisplay.innerHTML = `
    <h3>Submitted Data:</h3>
    <table border="1" cellpadding="8" cellspacing="0">
     
    
      <tr><td><strong>details</strong></td><td><strong>value</strong></td>
      <tr><td>Age</td><td>${age}</td></tr>
      <tr><td>Email</td><td>${email}</td></tr>
      <tr><td>Password</td><td>${'*'.repeat(password.length)}</td></tr>
      <tr><td>Gender</td><td>${gender}</td></tr>
      <tr><td>Phone</td><td>${phone}</td></tr>
      <tr><td>Address</td><td>${address}</td></tr>
  
    </table>
  `;
});