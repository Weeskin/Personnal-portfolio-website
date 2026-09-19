document.addEventListener('DOMContentLoaded', function() {

    // Vérification : si l'utilisateur a déjà vu la popup, on arrête tout
    if (sessionStorage.getItem('popupDenierVue') === 'oui') {
        return;
    }

    // ==========================================
    // 1. CONFIGURATION
    // ==========================================
    const urlImageFond = 'https://pierresourice.fr/images/messe-plein-air.jpg';
    const urlRedirection = 'https://autun.catholique.fr/annoncer-accompagner/services-des-pelerinages';
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
      #popup-close { position: absolute; top: 12px; right: 18px; color: #1a3a6b; font-size: 32px; font-family: Arial, sans-serif; font-weight: bold; cursor: pointer; line-height: 1; z-index: 10; transition: transform 0.2s; }
      #popup-close:hover { transform: scale(1.2); }
      #popup-btn { position: absolute; bottom: 18%; right: 10%; background-color: #1a3a6b; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 50px; font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; z-index: 10; box-shadow: 0 4px 10px rgba(26, 58, 107, 0.4); transition: all 0.2s; white-space: nowrap; }
      #popup-btn:hover { background-color: #122a52; transform: scale(1.04); color: #ffffff; }
      @media (max-width: 600px) { #popup-btn { font-size: 14px; padding: 8px 16px; bottom: 8%; right: 5%; } #popup-close { top: 6px; right: 12px; font-size: 26px; } }
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
    img.alt = 'Messe en plein air';

    const closeBtn = document.createElement('div');
    closeBtn.id = 'popup-close';
    closeBtn.innerHTML = '&times;';

    const ctaBtn = document.createElement('a');
    ctaBtn.id = 'popup-btn';
    ctaBtn.href = urlRedirection;
    ctaBtn.target = '_blank';
    ctaBtn.rel = 'noopener noreferrer';
    ctaBtn.textContent = 'Retrouvez les infos ici';

    const ui = document.createElement('div');
    ui.id = 'popup-ui';
    ui.appendChild(closeBtn);
    ui.appendChild(ctaBtn);

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
        sessionStorage.setItem('popupDenierVue', 'oui');
    }, 800);

});
