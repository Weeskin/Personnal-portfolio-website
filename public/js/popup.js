document.addEventListener('DOMContentLoaded', function() {

    // Vérification : domaine et page d'accueil uniquement
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    if (hostname !== 'autun.catholique.fr' || (pathname !== '/' && pathname !== '/index.php')) {
        return;
    }

    // Vérification : si l'utilisateur a déjà vu la popup, on arrête tout
    const cleSession = 'popupPanneMessagerieVue';
    if (sessionStorage.getItem(cleSession) === 'oui') {
        return;
    }

    // ==========================================
    // 1. CONFIGURATION
    // ==========================================
    const urlImageFond = 'https://pierresourice.fr/images/panne-messagerie.jpg';
    const emailContact = 'economat.autun@gmail.com';
    // ==========================================

    // 2. Injection du style CSS dynamiquement
    const style = document.createElement('style');
    style.innerHTML = `
      #popup-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: 999999; display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: opacity 0.4s ease, visibility 0.4s; }
      #popup-overlay.show-popup { opacity: 1; visibility: visible; }
      #popup-container { display: grid; grid-template-areas: "stack"; width: 90%; max-width: 860px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transform: translateY(20px); transition: transform 0.4s ease; }
      #popup-overlay.show-popup #popup-container { transform: translateY(0); }
      #popup-bg { grid-area: stack; width: 100%; height: auto; display: block; border-radius: 10px; }
      #popup-ui { grid-area: stack; position: relative; border-radius: 10px; }
      #popup-close { position: absolute; top: 0; right: 4px; color: #9b2790; font-size: 32px; font-family: Arial, sans-serif; font-weight: bold; cursor: pointer; line-height: 1; z-index: 10; transition: transform 0.2s; }
      #popup-close:hover { transform: scale(1.2); }
      /* Zone cliquable invisible posée sur l'adresse e-mail de l'image */
      #popup-mail { position: absolute; left: 45%; top: 61%; width: 10%; height: 4%; z-index: 10; }
      @media (max-width: 600px) { #popup-close { font-size: 26px; } }
    `;
    document.head.appendChild(style);

    // 3. Création de la boite et de l'image
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';

    const container = document.createElement('div');
    container.id = 'popup-container';

    const img = document.createElement('img');
    img.id = 'popup-bg';
    img.src = urlImageFond;
    img.alt = 'Panne de messagerie : nous rencontrons actuellement une panne de notre messagerie Outlook. '
            + 'Merci de privilégier les contacts par téléphone. En cas d\'urgence : ' + emailContact;

    const closeBtn = document.createElement('div');
    closeBtn.id = 'popup-close';
    closeBtn.innerHTML = '&times;';

    const mailLink = document.createElement('a');
    mailLink.id = 'popup-mail';
    mailLink.href = 'mailto:' + emailContact;
    mailLink.title = 'Écrire à ' + emailContact;
    mailLink.setAttribute('aria-label', 'Écrire à ' + emailContact);

    const ui = document.createElement('div');
    ui.id = 'popup-ui';
    ui.appendChild(closeBtn);
    ui.appendChild(mailLink);

    // Assemblage
    container.appendChild(img);
    container.appendChild(ui);
    overlay.appendChild(container);
    document.body.appendChild(overlay);

    // 4. Fonction pour fermer la popup
    const closePopup = function() {
        overlay.classList.remove('show-popup');
        setTimeout(() => overlay.remove(), 400);
    };

    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) { closePopup(); }
    });

    // 5. Affichage final et sauvegarde dans la session
    setTimeout(() => {
        overlay.classList.add('show-popup');
        sessionStorage.setItem(cleSession, 'oui');
    }, 800);

});
