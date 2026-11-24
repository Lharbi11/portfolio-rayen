# Portfolio — Rayen Harabi

Portfolio personnel statique réalisé en HTML, CSS et JavaScript.

## Fichiers
- `index.html` : contenu et structure du site
- `style.css` : design responsive dark / modern
- `script.js` : menu mobile, filtres des projets, animation d'apparition et copie de l'e-mail

## Lancer en local
Ouvrir `index.html` dans un navigateur. Pour un meilleur confort de développement, utiliser l'extension **Live Server** de VS Code.

## Personnalisation avant publication
1. Vérifier les informations personnelles et les dates.
2. Remplacer les liens GitHub génériques des projets par les URL exactes de chaque dépôt.
3. Ajouter un fichier `cv.pdf` et un lien de téléchargement si tu souhaites proposer ton CV.
4. Ajouter une photo professionnelle si tu le souhaites.
5. Vérifier les projets affichés : le projet Unity est présenté comme un concept / projet académique.

## Publier avec GitHub et Vercel
1. Créer un dépôt GitHub nommé `portfolio-rayen`.
2. Ajouter les trois fichiers (`index.html`, `style.css`, `script.js`) et ce README.
3. Sur Vercel, choisir **Add New → Project**, puis importer le dépôt GitHub.
4. Framework Preset : **Other**. Build Command : laisser vide. Output Directory : `.`.
5. Cliquer sur **Deploy**. Vercel fournit une URL publique.
6. Chaque `git push` sur la branche connectée déclenchera un nouveau déploiement.

Aucune commande de build n'est nécessaire : le site est statique.
