# Configuration du formulaire de contact

## Étapes pour configurer l'envoi d'emails

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour gratuits)
3. Vérifiez votre email

### 2. Obtenir une clé API

1. Connectez-vous à votre compte Resend
2. Allez dans "API Keys"
3. Cliquez sur "Create API Key"
4. Donnez-lui un nom (ex: "Portfolio Contact Form")
5. Copiez la clé générée

### 3. Configurer votre domaine (Optionnel mais recommandé)

Pour envoyer depuis votre propre domaine au lieu de `onboarding@resend.dev` :

1. Dans Resend, allez dans "Domains"
2. Cliquez sur "Add Domain"
3. Entrez votre nom de domaine
4. Ajoutez les enregistrements DNS fournis à votre fournisseur de domaine
5. Attendez la vérification (peut prendre quelques minutes)
6. Une fois vérifié, modifiez le `from` dans `src/app/api/contact/route.ts` :
   ```typescript
   from: 'Contact <contact@votre-domaine.com>',
   ```

### 4. Créer le fichier .env.local

1. À la racine du projet, créez un fichier `.env.local`
2. Ajoutez ces deux variables :

```env
RESEND_API_KEY=re_votre_cle_api_ici
CONTACT_EMAIL=votre-email@example.com
```

⚠️ **Important** : Remplacez :
- `re_votre_cle_api_ici` par votre vraie clé API Resend
- `votre-email@example.com` par votre email personnel où vous voulez recevoir les messages

### 5. Redémarrer le serveur de développement

```bash
pnpm dev
```

## Test du formulaire

1. Allez sur votre site local : http://localhost:3000
2. Scrollez jusqu'à la section "Contact"
3. Remplissez le formulaire et envoyez
4. Vous devriez recevoir l'email dans quelques secondes !

## Déploiement en production

Lorsque vous déployez sur Vercel, Netlify ou autre :

1. Ajoutez les variables d'environnement dans les paramètres de votre plateforme :
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`

2. Redéployez votre site

## Limites gratuites de Resend

- 100 emails/jour
- 3 000 emails/mois
- Parfait pour un portfolio personnel !

Pour plus d'emails, consultez leurs [plans payants](https://resend.com/pricing).

