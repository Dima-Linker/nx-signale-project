# Artikel-Verwaltungssystem

Ein modernes Angular-Projekt zum Verwalten von Artikeln, Kommentaren, Teams und mehr.

## API-Endpunkte

### Artikel
- `GET /articles` - Alle Artikel anzeigen
- `GET /articles/{articles_id}` - Einen bestimmten Artikel anzeigen
- `POST /articles` - Neuen Artikel erstellen
- `POST /articles/{articles_id}` - Artikel aktualisieren
- `DELETE /articles/{articles_id}` - Artikel löschen

### Authentifizierung
- `POST /auth/signup` - Registrierung und Token-Erstellung
- `POST /auth/login` - Anmeldung und Token-Erstellung
- `GET /auth/me` - Profildaten des angemeldeten Benutzers abrufen
- `PUT /auth/change_password` - Passwort ändern

### Kommentare
- `GET /comments` - Alle Kommentare anzeigen
- `GET /comments/{comments_id}` - Einen bestimmten Kommentar anzeigen
- `POST /comments` - Neuen Kommentar erstellen
- `POST /comments/{comments_id}` - Kommentar aktualisieren
- `DELETE /comments/{comments_id}` - Kommentar löschen
- `GET /commentsByArticle/{article_id}` - Kommentare zu einem bestimmten Artikel anzeigen

### Benutzer
- `GET /users` - Alle Benutzer anzeigen
- `GET /users/{id}` - Einen bestimmten Benutzer anzeigen
- `POST /users` - Neuen Benutzer erstellen
- `POST /users/{id}` - Benutzer aktualisieren
- `DELETE /users/{id}` - Benutzer löschen
- `POST /users/upload/image` - Benutzerbild hochladen

### Teams
- `GET /teams` - Alle Teams anzeigen
- `GET /teams/{teams_id}` - Ein bestimmtes Team anzeigen
- `POST /teams` - Neues Team erstellen
- `DELETE /teams/{teams_id}` - Team löschen

### Aufgaben
- `GET /todos` - Alle Aufgaben anzeigen
- `GET /todos/me` - Eigene Aufgaben anzeigen
- `POST /todos` - Neue Aufgabe erstellen
- `POST /todos/change` - Aufgabe bearbeiten
- `DELETE /todos/{todos_id}` - Aufgabe löschen

### Weitere Funktionen
- Materialverwaltung
- Ordnerverwaltung
- Backlog-Management
- GitHub-API-Integration
- PDF-Erstellung

## Erste Schritte

### Entwicklungsserver starten

```bash
npx nx serve users
```

### Build erstellen

```bash
npx nx build users
```

### Tests ausführen

```bash
npx nx test users
```

## Technologien

- Angular 20.0.5
- TypeScript 5.8.3
- Nx Workspace 21.2.1
- RxJS 7.8.0
- TailwindCSS 4.1.11
