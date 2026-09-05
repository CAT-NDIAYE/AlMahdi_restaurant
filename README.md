# Site Restaurant — Next.js

Site vitrine développé avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
restaurant-nextjs/
├── app/
│   ├── layout.tsx        # Layout global, polices (Archivo Black + Work Sans), SEO
│   ├── page.tsx          # Page d'accueil (assemble les composants)
│   └── globals.css       # Palette "Braise" + détail signature (soulignement)
├── components/
│   ├── Header.tsx         # Topbar + nav + CTA
│   ├── Hero.tsx            # Section hero plein écran
│   ├── MenuCategories.tsx  # Grille des catégories (Tacos, Pizzas, Poulets...)
│   └── Footer.tsx          # Footer 3 colonnes
├── prompts/
│   └── PROMPTS.md         # Les 6 prompts à utiliser dans l'ordre pour générer le design + le contenu
├── public/                # Images, favicon (à ajouter : hero.jpg, menu/*.jpg)
├── tailwind.config.ts     # Tokens de design (couleurs, typo, espacements)
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

## Direction visuelle retenue : "Braise"

Analyse faite à partir de la capture de référence (fast-food, thème noir + rose fluo,
typo condensée-italique) → direction choisie pour garder l'énergie fast-food sans
copier ces codes précis :

| Token | Valeur | Usage |
|---|---|---|
| `--color-background` | `#211D1A` (anthracite chaud) | fond général |
| `--color-foreground` | `#F5EFE8` | texte principal |
| `--color-accent` | `#C1491A` (orange brûlé) | CTA, liens, accents |
| `--color-accent-soft` | `#E9C9A8` | sous-titres sur fond sombre |
| `--color-neutral` | `#8A8078` | texte secondaire |
| Typo display | Archivo Black | titres |
| Typo texte | Work Sans | corps de texte |

Tout est déjà branché dans `app/layout.tsx` (chargement des polices via `next/font/google`)
et `app/globals.css` (variables CSS). Il reste à :
1. Ajouter les vraies photos dans `/public` (`hero.jpg`, `menu/tacos.jpg`, etc.)
2. Remplacer les textes placeholders (`Prompt 5`)
3. Compléter les vraies coordonnées dans `Header.tsx` et `Footer.tsx`

## Méthode de travail recommandée

1. Envoie la capture d'écran du restaurant de référence à ton assistant IA avec le **Prompt 1** (`prompts/PROMPTS.md`) → tu obtiens une fiche d'analyse, pas du code copié.
2. Utilise le **Prompt 2** pour définir l'arborescence du site.
3. Utilise le **Prompt 3** pour obtenir un système de design (couleurs, typos, espacements) volontairement différent du site de référence et sans les tics visuels typiques des sites générés par IA.
4. Colle les tokens obtenus dans `tailwind.config.ts` et `app/globals.css` (des placeholders sont déjà en place).
5. Utilise le **Prompt 4** pour générer les composants un par un.
6. Utilise le **Prompt 5** pour le contenu texte.
7. Utilise le **Prompt 6** en fin de projet pour auditer le rendu et corriger ce qui "sent" encore l'IA.

## Pourquoi cette approche ?

Copier une capture d'écran directement (couleurs exactes, police exacte, mise en page identique) pose un problème de droit d'auteur / concurrence déloyale si le site copié n'est pas le vôtre. La méthode ci-dessus permet de s'inspirer du **niveau de qualité et du positionnement** perçu, sans reproduire l'identité visuelle d'un tiers — et en prime le résultat est plus original.

## À personnaliser avant de générer le design

Dans `prompts/PROMPTS.md`, avant d'envoyer le Prompt 2, remplis ces informations :
- Nom du restaurant
- Type de cuisine
- Ville / quartier
- Fourchette de prix
- 2-3 éléments différenciants (produit signature, histoire, chef...)

## Stack

- [Next.js](https://nextjs.org) 14+ (App Router)
- TypeScript
- Tailwind CSS
- `next/font` pour le chargement des polices (à définir via Prompt 3)
- `next/image` pour l'optimisation des images
