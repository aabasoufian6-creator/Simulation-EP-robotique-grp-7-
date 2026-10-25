# Intégration Groupe 7 — identité visuelle unifiée

- Page d’accueil : AABA Soufian en première position, sans supprimer les autres contributeurs.
- ERICC : rendu 3D React/Three.js de Yassir piloté par les consignes du simulateur scientifique ERICC Studio V21.
- NAO : rendu 3D React/Three.js de Yassir piloté par les consignes du simulateur NAO Motion Lab V2.1.
- Les moteurs de calcul originaux sont préservés dans `public/studios/` et intégrés sous le rendu 3D.
- Communication via `postMessage` (même origine, contrôle du message côté React) ; la synchronisation est unidirectionnelle depuis le moteur scientifique vers le rendu 3D.
- Les rendus 3D sont stylisés et ne constituent pas une preuve d’exactitude géométrique du robot réel. Les sorties scientifiques du moteur sont les valeurs de référence.
- L’apparence des simulateurs est harmonisée avec l’identité rouge/noir/crème du site.

## Publication

Il faut envoyer tous les fichiers et dossiers à la racine du dépôt, **en conservant les chemins** (`app/`, `components/`, `lib/`, `public/`). Le moyen fiable est GitHub Desktop ou git CLI. Vercel déploie les nouveaux commits de la branche `main`.

## Test rapide

1. Accueil : AABA Soufian doit être premier dans l’équipe.
2. `/lab/ericc` : bouger θ1 dans le simulateur intégré et vérifier que la valeur et le modèle Three.js réagissent.
3. `/lab/nao` : bouger RShoulderPitch et vérifier la même chose.
4. Tester MGD/MGI dans les moteurs intégrés ; les valeurs de référence sont celles de ces moteurs.
