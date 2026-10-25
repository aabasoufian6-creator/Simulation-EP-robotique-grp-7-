# EP Robotique — Groupe 7 | Site de Yassir + Simulateurs de Soufian

Projet **Next.js 14 / React / Three.js** basé sur l'archive `ERIC-main.zip` fournie par le groupe.

## Intégration

- **Design et page d’accueil :** conservés à partir du dépôt de Yassir (composants, animations 3D, CSS et navigation).
- **ERICC → « ERICC Studio V21 » :** simulateur complet de Soufian, dans `public/studios/ericc-studio-v21.html`.
- **NAO → « NAO Motion Lab V2.1 » :** simulateur de Soufian, dans `public/studios/nao-motion-lab-v21.html`.
- **Autres onglets ERICC et NAO :** tous les modules de Yassir sont conservés et accessibles sans réécriture.
- Les simulateurs sont chargés via des `iframe` dans l’interface de Yassir : ils conservent **leurs propres calculs, scripts et styles**, sans remplacer silencieusement `lib/ericc.js` ou `lib/nao.js` (qui restent utilisés par les onglets de Yassir).

## Lancer le site

Installer Node.js 18.17+ (idéalement Node.js 20 ou 22), puis :

```bash
npm ci
npm run dev
```

Ouvrir http://localhost:3000 puis **ERICC** ou **NAO**. L'onglet du simulateur personnel s'ouvre par défaut ; les autres onglets restent accessibles.

## Construire pour le déploiement

```bash
npm run build
npm run start
```

**Important :** il s'agit d'un site **Next.js**, pas d'un site HTML statique. Pour un nouveau dépôt GitHub, importer **tout le contenu de ce dossier à la racine**, puis connecter le dépôt à **Vercel** (framework Next.js, réglages par défaut). GitHub Pages avec simple « Deploy from a branch » ne convient pas à ce projet sans export statique configuré et vérifié.

## Fichiers importants

```
app/page.js                           # accueil Yassir, inchangé
app/globals.css                       # style Yassir + intégration
components/EriccLab.js               # onglet Studio V21 ajouté, anciens onglets préservés
components/NaoLab.js                 # onglet Motion Lab V2.1 ajouté, anciens onglets préservés
public/studios/ericc-studio-v21.html  # code complet autonome ERICC V21
public/studios/nao-motion-lab-v21.html# code complet autonome NAO V2.1
lib/ericc.js, lib/nao.js              # moteurs d'origine de Yassir, préservés
```

## Limites et vérification

- Les deux simulateurs personnels sont intégrés **comme applications autonomes embarquées**, pas refondus en composants React natifs. Leur interface interne garde son style propre, mais le cadre du site, l'accueil et les menus sont ceux de Yassir.
- Les calculs des onglets de Yassir restent les calculs de Yassir ; pour ceux de Soufian, choisir l'onglet **Studio V21 / Motion Lab V2.1**.
- NAO : les résultats numériques doivent être validés sur le modèle exact du robot de laboratoire ; aucune précision physique de 99,99 % n'est garantie.
- L'installation et le build doivent être exécutés sur une machine disposant des dépendances npm.

## Crédits

Le code et design du site proviennent du dépôt transmis par Yassir ; les simulateurs intégrés proviennent des fichiers du projet de Soufian. Conserver les crédits d'équipe présents sur la page d'accueil.
