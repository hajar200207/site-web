document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const loginType = document.getElementById('login-type').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérifiez les informations d'identification
    if (username === 'admin' && password === 'password' && loginType === 'smg_system') {
        alert('SMG System login successful!');
    } else if (username === 'user' && password === 'password' && loginType === 'qa_technic') {
        alert('QA Technic login successful!');
    } else if (username === 'global' && password === 'password' && loginType === 'global_certification') {
        alert('Global Certification login successful!');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de rediriger
    alert('A password reset link has been sent to your email address.');
});

// Fonction pour afficher/masquer le mot de passe
document.getElementById('toggle-password').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});