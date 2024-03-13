let loggedInUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Här skulle du lägga till logik för att kontrollera användarnamn och lösenord mot en databas eller en hårdkodad lista
    // För demonstrationens skull, låt oss anta att vi har två användare:
    const users = [
        { name: 'Salar', username: 'user1', password: 'pass1', balance: 1000 },
        { name: 'Sanaz', username: 'user2', password: 'pass2', balance: 1000 }
    ];

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        loggedInUser = user;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('account-info').style.display = 'block';
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('balance').textContent = user.balance;
    } else {
        alert('Fel användarnamn eller lösenord');
    }
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Felaktig insättning. Ange ett positivt belopp.');
        return;
    }
    loggedInUser.balance += amount;
    document.getElementById('balance').textContent = loggedInUser.balance;
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        alert('Felaktigt uttag. Ange ett positivt belopp.');
        return;
    }
    if (amount > loggedInUser.balance) {
        alert('Otillräckligt saldo.');
        return;
    }
    loggedInUser.balance -= amount;
    document.getElementById('balance').textContent = loggedInUser.balance;
}


function logout() {
    loggedInUser = null;
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('account-info').style.display = 'none';
}
