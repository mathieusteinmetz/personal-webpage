![Tests](https://github.com/mathieusteinmetz/personal-webpage/actions/workflows/prod-ci.yml/badge.svg)

# 💼 Mathieu Steinmetz – CV en ligne

Bienvenue sur mon CV interactif, hébergé en front-only sur [Vercel](https://mathieusteinmetz.com).  
Ce site me permet de centraliser mes compétences, mon parcours professionnel ainsi que mes projets open-source GitHub.

---

## 🚀 Fonctions principales

- [ ] **Présentation dynamique** de mon profil professionnel
- [ ] **Section "Projets GitHub"** automatiquement alimentée à partir de mes dépôts publics taggés avec `cv`
- [x] **CI/CD / Tests ...** intégrés dans la CI

---

## 🔧 Stack technique

- **Frontend** : [Vite](https://vitejs.dev/) + [Vue.js](https://vuejs.org/)
- **Déploiement** : GitHub Actions w/ Vercel
  - Pour combler les manques de l'app Vercel intégrée à Github
- **CI/CD** : Lint / Prettier / Tests + coverage / Lighthouse
