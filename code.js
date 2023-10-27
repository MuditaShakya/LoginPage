const users = [
    { username: 'infobyte', password: 'yerrowslap' },
    { username: 'user', password: 'password45' },
    
  ];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  

    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
    
      window.location.href = 'welcome.html'; 
    } else {
      errorMessage.textContent = 'Invalid username or password.';
    }
}
