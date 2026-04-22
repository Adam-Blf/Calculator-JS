![version](https://img.shields.io/badge/version-1.0.1-DC0A2D?style=flat-square) ![vanilla-js](https://img.shields.io/badge/vanilla--js-es6-141418?style=flat-square) ![license](https://img.shields.io/badge/license-MIT-424242?style=flat-square) ![type](https://img.shields.io/badge/type-pwa-4CAF50?style=flat-square)

# 🧮 Calculatrice Scientifique JavaScript

![Status](https://img.shields.io/badge/status-complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/deploy-Vercel-000?logo=vercel&logoColor=white)

Une calculatrice scientifique moderne et élégante développée en JavaScript vanilla avec interface responsive et historique des calculs.

## 🌟 Fonctionnalités

### Opérations de Base
- ➕ Addition
- ➖ Soustraction
- ✖️ Multiplication
- ➗ Division

### Fonctions Scientifiques
- 🔢 **Racine carrée** (√)
- 🔢 **Puissance** (x²)
- 🥧 **Pi** (π = 3.14159...)
- 📊 **Pourcentage** (%)

### Fonctionnalités Avancées
- 📋 **Historique des calculs** (50 derniers calculs)
- 💾 **Sauvegarde locale** (localStorage)
- ⌨️ **Support clavier complet**
- 📱 **Design responsive** (mobile-friendly)
- 🎨 **Interface moderne** avec animations
- 🔢 **Notation scientifique** (grands nombres)

## 🚀 Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec gradients et animations
- **JavaScript ES6** : Logique applicative
- **LocalStorage API** : Persistance des données

## 💻 Installation

### Cloner le Projet

```bash
git clone https://github.com/Adam-Blf/Calculator-JS.git
cd Calculator-JS
```

### Lancer l'Application

Ouvrez simplement le fichier `index.html` dans votre navigateur :

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou utilisez un serveur local :

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

Puis ouvrez [http://localhost:8000](http://localhost:8000)

## 🎮 Utilisation

### Interface Graphique

1. **Saisir des nombres** : Cliquez sur les boutons numériques 0-9
2. **Choisir une opération** : Cliquez sur +, −, ×, ÷
3. **Calculer** : Cliquez sur le bouton `=`
4. **Effacer** : Bouton `C` pour tout effacer
5. **Supprimer** : Bouton `⌫` pour supprimer le dernier chiffre
6. **Historique** : Cliquez sur "📋 Historique" pour voir les calculs précédents

### Raccourcis Clavier

| Touche | Action |
|--------|--------|
| `0-9` | Saisir un chiffre |
| `.` | Point décimal |
| `+` `-` `*` `/` | Opérations |
| `Enter` ou `=` | Calculer le résultat |
| `Escape` | Effacer tout |
| `Backspace` | Supprimer le dernier chiffre |

### Fonctions Scientifiques

- **√ (Racine carrée)** : Calcule la racine carrée du nombre affiché
- **x² (Puissance 2)** : Calcule le carré du nombre
- **π (Pi)** : Insère la valeur de π (3.14159...)
- **% (Pourcentage)** : Divise le nombre par 100

### Historique

- 📋 **Afficher** : Cliquez sur "Historique" pour ouvrir le panneau
- 🔄 **Réutiliser** : Cliquez sur un calcul pour réutiliser son résultat
- 🗑️ **Effacer** : Cliquez sur la poubelle pour vider l'historique
- 💾 **Sauvegarde automatique** : Les 50 derniers calculs sont sauvegardés

## 📂 Structure du Projet

```
Calculator-JS/
│
├── index.html          # Structure HTML de la calculatrice
├── style.css           # Styles CSS avec animations
├── script.js           # Logique JavaScript
├── README.md           # Documentation (ce fichier)
└── .gitignore          # Fichiers à ignorer par Git
```

## 🎨 Aperçu des Fonctionnalités

### Interface Moderne
- Design avec dégradés violet/bleu
- Boutons avec effets de hover et d'animation
- Affichage avec historique en temps réel
- Panel d'historique glissant

### Responsive Design
- 🖥️ **Desktop** : Panneau latéral pour l'historique
- 📱 **Mobile** : Modal centré pour l'historique
- 🔄 **Adaptabilité** : S'ajuste à toutes les tailles d'écran

### Gestion des Erreurs
- ❌ Division par zéro détectée
- ❌ Racine carrée de nombres négatifs impossible
- 🔢 Notation scientifique pour grands nombres

## 🔧 Fonctionnement Interne

### État de l'Application

```javascript
let currentValue = '0';        // Valeur affichée
let previousValue = '';        // Valeur précédente pour opération
let operation = null;          // Opération en cours (+, -, *, /)
let shouldResetScreen = false; // Flag pour réinitialiser l'écran
let calculationHistory = [];   // Historique des calculs
```

### Fonctions Principales

- `appendNumber(number)` : Ajoute un chiffre à la valeur actuelle
- `chooseOperation(operator)` : Sélectionne l'opération à effectuer
- `calculate()` : Effectue le calcul et met à jour l'affichage
- `clear()` : Réinitialise la calculatrice
- `addToHistory(calculation)` : Ajoute un calcul à l'historique
- `saveHistory()` / `loadHistory()` : Sauvegarde/charge depuis localStorage

## 🎯 Exemples d'Utilisation

### Calcul Simple
```
12 + 8 = 20
```

### Calcul avec Fonctions
```
25 → √ = 5
5 → x² = 25
```

### Pourcentage
```
200 → % = 2 (200 ÷ 100)
```

### Utilisation de π
```
π → x² ≈ 9.8696
```

## 🌐 Compatibilité Navigateurs

| Navigateur | Version Minimale |
|-----------|------------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |

## 🚀 Améliorations Futures

- [ ] Mode sombre/clair
- [ ] Fonctions trigonométriques (sin, cos, tan)
- [ ] Fonction logarithmique
- [ ] Puissances personnalisées (xⁿ)
- [ ] Export de l'historique en CSV
- [ ] Thèmes personnalisables
- [ ] Mode RPN (Reverse Polish Notation)

## 📝 Notes de Développement

### LocalStorage
L'historique est sauvegardé dans le localStorage du navigateur :
```javascript
localStorage.setItem('calculatorHistory', JSON.stringify(history));
```

### Notation Scientifique
Nombres > 12 chiffres affichés en notation scientifique :
```javascript
return parseFloat(number).toExponential(6);
```

### Précision
Les résultats sont arrondis à 8 décimales pour éviter les erreurs de virgule flottante :
```javascript
Math.round(number * 100000000) / 100000000;
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créez** une branche (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Pushez** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

## 📄 Licence

Ce projet est open source. Libre d'utilisation pour des projets personnels ou éducatifs.

## 👤 Auteur

**Adam Beloucif**
- GitHub: [@Adam-Blf](https://github.com/Adam-Blf)
- Portfolio: [Voir mes autres projets](https://github.com/Adam-Blf?tab=repositories)

## 🙏 Remerciements

- Interface inspirée par les calculatrices modernes iOS/Android
- Design basé sur les principes Material Design
- Merci à la communauté JavaScript pour les meilleures pratiques

---

⭐ **Si vous aimez ce projet, n'oubliez pas de lui donner une étoile sur GitHub !** ⭐

---

<p align="center">
  <sub>Par <a href="https://adam.beloucif.com">Adam Beloucif</a> · Data Engineer & Fullstack Developer · <a href="https://github.com/Adam-Blf">GitHub</a> · <a href="https://www.linkedin.com/in/adambeloucif/">LinkedIn</a></sub>
</p>
