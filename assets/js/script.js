
(function() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_EMAILJS_USER_ID");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Vérifier si tous les champs sont remplis
    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Paramètres à envoyer via EmailJS
    var templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Appel à EmailJS pour envoyer l'e-mail
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            alert("Votre message a été envoyé avec succès !");
        }, function(error) {
            alert("Erreur lors de l'envoi du message, veuillez réessayer.");
        });
});
