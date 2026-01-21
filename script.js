
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function() {
        const btn = form.querySelector('input[type="submit"]');
        
        // On change le texte pour montrer que ça travaille
        btn.value = "Envoi en cours...";
        
        // On désactive le bouton pour empêcher de cliquer à nouveau
        btn.disabled = true;
        
        // (Optionnel) On change le style pour montrer qu'il est inactif
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
    });
