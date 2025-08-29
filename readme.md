# Demo 05 - JWT

## Setup
Dans le terminal
```
npm i express jsonwebtoken argon2
npm i --save-dev nodemon
```

## Routing
- demo
```
(GET) api/demo/public    # Tout le monde
(GET) api/demo/private   # Connecté
(GET) api/demo/admin     # Connecté en tant qu'admin
```
- auth
```
(POST) api/auth/login    # Obtenir un JWT
(POST) api/auth/register # Permet de créer un compte
```
