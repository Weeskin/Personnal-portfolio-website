document.addEventListener('DOMContentLoaded', function() {

    // Vérification : si l'utilisateur a déjà vu la popup, on arrête tout
    if (sessionStorage.getItem('popupDenierVue') === 'oui') {
        return;
    }

    // ==========================================
    // 1. CONFIGURATION
    // ==========================================
    const urlImageFond = 'https://i.ibb.co/JjQ8XHnJ/Whats-App-Image-2026-03-02-at-16-08-09.jpg';
    const urlRedirectionDon = 'VOTRE_LIEN_DE_DON_ICI'; // <-- À REMPLACER PAR LE VRAI LIEN
    // ==========================================

    // 2. Injection du style CSS dynamiquement
    const style = document.createElement('style');
    style.innerHTML = `
      #denier-popup-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: 999999; display: flex; justify-content: center; align-items: center; opacity: 0; visibility: hidden; transition: opacity 0.4s ease, visibility 0.4s; }
      #denier-popup-overlay.show-popup { opacity: 1; visibility: visible; }
      #denier-popup-container { position: relative; width: 90%; max-width: 800px; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transform: translateY(20px); transition: transform 0.4s ease; }
      #denier-popup-overlay.show-popup #denier-popup-container { transform: translateY(0); }
      #denier-popup-bg { width: 100%; height: auto; display: block; border-radius: 8px; }
      #denier-popup-close { position: absolute; top: 15px; right: 20px; color: #F8A01A; font-size: 40px; font-family: Arial, sans-serif; font-weight: normal; cursor: pointer; line-height: 1; z-index: 10; transition: transform 0.2s; }
      #denier-popup-close:hover { transform: scale(1.1); }
      #denier-popup-btn { position: absolute; bottom: 12%; left: 7%; background-color: #F8A01A; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 50px; font-family: Arial, sans-serif; font-size: 22px; font-weight: bold; display: flex; align-items: center; gap: 12px; z-index: 10; box-shadow: 0 4px 10px rgba(248, 160, 26, 0.3); transition: all 0.2s; }
      #denier-popup-btn:hover { background-color: #e08b10; transform: scale(1.03); color: #ffffff; }
      .denier-btn-icon { width: 24px; height: 24px; fill: white; }
      @media (max-width: 600px) { #denier-popup-btn { font-size: 16px; padding: 8px 16px; bottom: 8%; left: 5%; } .denier-btn-icon { width: 18px; height: 18px; } #denier-popup-close { top: 5px; right: 15px; font-size: 30px; } }
    `;
    document.head.appendChild(style);

    // 3. Création de la boite et de l'image
    const overlay = document.createElement('div');
    overlay.id = 'denier-popup-overlay';

    const container = document.createElement('div');
    container.id = 'denier-popup-container';

    const img = document.createElement('img');
    img.id = 'denier-popup-bg';
    img.src = urlImageFond;
    img.alt = 'Soutenez le Denier';

    const closeBtn = document.createElement('div');
    closeBtn.id = 'denier-popup-close';
    closeBtn.innerHTML = '&times;';

    const ctaBtn = document.createElement('a');
    ctaBtn.id = 'denier-popup-btn';
    ctaBtn.href = urlRedirectionDon;
    ctaBtn.innerHTML = `
      <svg class="denier-btn-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      Je donne au Denier
    `;

    // Assemblage
    container.appendChild(img);
    container.appendChild(closeBtn);
    container.appendChild(ctaBtn);
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