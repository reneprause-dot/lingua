# 📋 LINGUA — Vollständiges Changelog

> Alle Änderungen seit Build 1 — rückwirkend dokumentiert  
> Entwickelt von René Prause · Powered by Claude AI

-----

## Legende

|Symbol|Bedeutung             |
|------|----------------------|
|🆕     |Neues Feature         |
|🔧     |Bugfix / Reparatur    |
|📚     |Inhalt hinzugefügt    |
|🎨     |UI / Design           |
|⚡     |Performance           |
|🌍     |Mehrsprachigkeit      |
|🧪     |Tests                 |
|🔢     |Versionierung / System|

-----

## v6.1 · BUILD 64

**💬 Dialoge + Phrasal Verbs + Cloudflare Worker**

- 🆕 **Dialoge lernen** — 11 Alltagsgespräche in 4 Kategorien
  - 🏙️ Alltag: Supermarkt, Beim Arzt, Im Restaurant
  - ✈️ Reise: Am Bahnhof, Im Hotel, Nach dem Weg fragen
  - 💼 Arbeit: Vorstellungsgespräch, Im Meeting
  - 🤝 Sozial: Jemanden kennenlernen, Konflikt lösen
  - Zeile für Zeile mit Fortschrittsbalken und Aussprache
  - Übersetzungen auf 🇷🇺 Russisch und 🇹🇷 Türkisch
- 🆕 **Phrasal Verbs** (EN) — 40 englische Phrasal Verbs in 4 Kategorien
  - Modi: 📚 Lernen, 🎯 Quiz, ✍️ Schreiben
  - Kategorien: Bewegung, Kommunikation, Alltag, Gefühle
- 🆕 **Trennbare Verben** (DE) — 40 Verben in 4 Kategorien
  - Mit Beispielen auf Russisch und Englisch
- 🆕 **Cloudflare Worker** (`deepl-worker.js`) für DeepL
  - Löst CORS-Problem dauerhaft
  - API-Key serverseitig — nie im Browser sichtbar
  - Kostenlos: 100.000 Requests/Tag
- 🧪 Tests für Dialoge und Phrasal Verbs automatisch hinzugefügt
- 🆕 Nav-Buttons: 💬 Dialoge, 🔗 Phrasal Verbs

-----

## v6.0 · BUILD 63

**🧪 Test-Fix: VOCAB_RU_DE Zählung korrigiert**

- 🔧 Test „VOCAB_RU_DE hat 5000+ Einträge” war falsch — EXT-Blöcke wurden nicht mitgezählt
- ✅ Zwei neue Tests: Basis ≥4500 + VOCAB[de] nach buildVocabDe ≥5000
- 📊 VOCAB_RU_DE Basis: 4.654 Einträge, mit EXT1/2/3: 5.000+ (korrekt!)

-----

## v5.9 · BUILD 62

**🇩🇪 Deutsch Niveau stark erweitert: 23 → 30 Themen**

|Level|Vorher|Jetzt|Neue Themen                                     |
|-----|------|-----|------------------------------------------------|
|A1   |6     |6    |—                                               |
|A2   |6     |6    |—                                               |
|B1   |4     |**6**|🏥 Gesundheitssystem, 🗳️ Politik                  |
|B2   |3     |**5**|💻 Technik & Digitalisierung, 🧠 Psychologie      |
|C1   |2     |**4**|⚖️ Ethik & Philosophie, 🗣️ Sprache & Kommunikation|
|C2   |2     |**3**|🔍 Sprachkritik & Manipulation                   |

- 📚 Alle neuen Themen mit vollständigen Übersetzungen DE/RU/TR/EN
- 🧪 Tests für Vollständigkeit automatisch hinzugefügt

-----

## v5.8 · BUILD 61

**📋 Changelog erscheint immer beim ersten Start**

- 🔧 Changelog wurde beim Erststart (storedBuild=0) übersprungen — jetzt immer angezeigt
- ⏱ Beim Erststart: 2.5s Delay (nach Onboarding)
- ⏱ Bei Updates: 1.2s Delay

-----

## v5.7 · BUILD 60

**🧩 Lückentexte, Tagesaufgaben & Lernkalender**

- 🆕 **Lückentexte** — 27 Aufgaben in 3 Schwierigkeiten
  - Leicht / Mittel / Schwer
  - Klick-Optionen als Chips oder direkte Texteingabe
  - 💡 Hinweis-Funktion zeigt ersten Buchstaben
  - +1 XP pro richtige Antwort
- 🆕 **Tagesaufgaben** — 6 tägliche Ziele
  - 📚 10 Vokabeln · ❓ 5 Quiz · 🧠 5 SRS · ✍️ 3 Schreiben · 🧩 3 Lückentexte · 🔥 Streak
  - +50 XP Bonus wenn alle Aufgaben erledigt
  - Automatisches Zurücksetzen um Mitternacht
- 🆕 **Lernkalender** — GitHub-ähnliche Heatmap
  - Letzte 16 Wochen als Aktivitäts-Heatmap
  - Streak · Lerntage gesamt · Bester Streak
  - Monatliche Balkendiagramme (letzte 6 Monate)
  - Tagesaktivität wird automatisch beim Lernen aufgezeichnet
- 🔗 Tagesaufgaben und Kalender vernetzt mit allen Lernmodi

-----

## v5.6 · BUILD 59

**📚 EN Niveau vollständig ausgebaut: 7 → 22 Themen**

|Level|Vorher|Jetzt|Neue Themen                               |
|-----|------|-----|------------------------------------------|
|A1   |6     |6    |—                                         |
|A2   |4     |4    |—                                         |
|B1   |3     |3    |—                                         |
|B2   |1     |**4**|Culture & Society, Economy, Science & Tech|
|C1   |1     |**3**|Academic Writing, Literature & Language   |
|C2   |1     |**2**|Stylistics & Register                     |

- 🧪 Tests für EN Niveau Vollständigkeit automatisch hinzugefügt

-----

## v5.5 · BUILD 58

**🧪 Fixes 3, 6, 8, 10 + erweiterte Test-Suite**

- 🔧 **Fix 3** — Tutorial erscheint nur bei neuer Version, nicht bei jedem Start
- 🔧 **Fix 6** — DeepL-Fehler im Übersetzer jetzt sichtbar + Fallback auf KI
  - Status-Zeile: „🔄 DeepL…” → „🤖 KI…” → „❌ Fehler”
- 🆕 **Fix 8** — Suchfeld in DE- und EN-Niveau (live Filter)
  - Themen und Level-Cards werden ausgeblendet wenn kein Treffer
- 🔧 **Fix 10** — Schreib-Modus nutzt gewählte Übersetzungssprache (RU/TR/EN)
- 🧪 Test-Suite erweitert: 60+ Tests, 5 Suiten (Daten/State/Funktionen/DOM/localStorage)
- 🧪 Test-Bericht gruppiert nach Suiten mit Farbcodierung

-----

## v5.4 · BUILD 57

**🧪 Test-Automatisierung + Fixes switchSection & Fortschritt**

- 🔧 **Fix 2** — `switchSection` zweifaches Override zusammengeführt
  - Alle Handler jetzt an einem Ort — kein Fehlerrisiko mehr
- 🔧 **Fix 9** — Niveau-Fortschritt in `localStorage` gespeichert
  - `niveauState.progress` → `lingua_niveau_progress`
  - `enNiveauState.progress` → `lingua_en_niveau_progress`
  - Fortschrittsbalken und % bleiben nach Reload erhalten
- 🆕 **Automatische Test-Suite** eingebaut
  - Einstellungen → 🧪 Tests ausführen
  - Browser-Konsole: `runLinguaTests()`
  - 50+ Tests: Daten, State, DOM, localStorage, Funktionen
  - Selbst-erweiterbar: `window.linguaTests.register('Name', fn)`

-----

## v5.3 · BUILD 56

**→ Weiter-Button in allen Vokabeltrainings**

- 🆕 Weiter-Button erscheint nach Aufklappen — **zusätzlich** zu Gewusst
- ✅ Gewusst-Button bleibt immer sichtbar
- 📚 Gilt für: Vokabeltraining, DE Niveau, EN Niveau
- 🎯 Buttons werden erst nach Aufklappen eingeblendet
- ↺ Nach Klick werden Buttons für nächste Karte zurückgesetzt

-----

## v5.2 · BUILD 55

**🔧 DeepL komplett überarbeitet**

- 🔧 Zentrale `_deeplFetch()` Hilfsfunktion — alle Aufrufe an einer Stelle
- 🔄 Alte DeepL-Implementierungen (3×) auf neue Funktion konsolidiert
- 📡 4 Fallback-Strategien:
1. Direkt mit `Authorization`-Header
1. corsproxy.io + JSON
1. cors.sh Proxy
1. corsproxy.io + form-encoded
- 🔤 `translateWithDeepl()` akzeptiert jetzt `source_lang` als Parameter

-----

## v5.1 · BUILD 54

**🔧 Übersetzer-Fix: DEEPL_PROXY_URL fehlte**

- 🔧 Variable `DEEPL_PROXY_URL` wurde durch `DEEPL_PROXIES` ersetzt aber nicht als Alias definiert
- ✅ Alias `DEEPL_PROXY_URL` für Rückwärtskompatibilität ergänzt
- 🌍 Alle DeepL-Aufrufe funktionieren wieder

-----

## v4.9 · BUILD 53

**🇬🇧 Englisch Sprachniveau als eigene Sektion**

- 🆕 `id="enniveau"` — separate Sektion (nicht mehr Teil von deniveau)
- 🗺 Nav-Button 🇬🇧 EN Niveau in Navigationsleiste
- 🏠 Home-Card „Englisch Sprachniveau” ergänzt
- 🇩🇪 Übersetzungssprachen: DE / RU / TR wählbar
- ✍️ Alle 5 Modi: Vokabeln, Grammatik, Sätze, Quiz, Schreiben
- 🔧 Deutsch Niveau: Übersetzung nur RU/TR (EN entfernt)

-----

## v4.8 · BUILD 52

**🇬🇧 Englisch Sprachniveau A1–C2 (als Lernsprache)**

- 🆕 Englisch LERNEN (nicht übersetzen) — f=Englisch, t=Deutsch
- 🔄 Lernsprache oben wählbar: 🇩🇪 Deutsch oder 🇬🇧 Englisch
- 📚 Inhalte: A1×6, A2×4, B1×3, B2×1, C1×1, C2×1 = 16 Themen
- 🔑 Neuer DeepL Key eingebettet (`e5b8f6d1-e5ca-4481-a83f-a1762fe3f6d9:fx`)
- 🔧 DeepL: `Authorization`-Header statt `auth_key`, JSON-Body
- → Weiter-Button im Vokabeltraining (ohne Wertung)

-----

## v4.7 · BUILD 51

**🇬🇧 Englisch als Übersetzungssprache im DE Niveau**

- 🆕 Englisch als dritte Übersetzungssprache neben RU/TR
- 📚 274 englische Vokabelübersetzungen eingebaut (A1–C2)
- 📚 69 englische Satzübersetzungen eingebaut

-----

## v4.6 · BUILD 50

**📋 Changelog-System neu aufgebaut**

- 🆕 Changelog ist BUILD-basiert — jeder Build hat eigenen Eintrag
- 🔍 `getChangelogEntry()` sucht automatisch passenden Build
- 📌 Fallback auf nächstniedrigeren Eintrag
- 🏷️ Changelog zeigt Version + Build-Nummer als Untertitel
- 🔢 Versionierung zählt nie rückwärts

-----

## v4.5 · BUILD 49

**✍️ Schreiben-Modus im Sprachniveau**

- 🆕 Schreiben-Modus als 5. Tab in allen A1–C2 Themen
- 💡 Live-Tipp: zeigt richtige/falsche Buchstaben während des Tippens
- 🔊 Aussprache-Button im Schreib-Modus
- 📊 Fortschrittsbalken mit ✓/✗ Zähler
- 🔄 Artikel-Toleranz: „haus” = „das Haus” akzeptiert
- 🎯 +1 XP pro richtigem Wort, +3 XP bei fehlerfreier Runde

-----

## v4.4 · BUILD 48

**🇹🇷 Türkisch im Sprachniveau + Navigationsleiste**

- 🆕 Türkisch als zweite Übersetzungssprache im Sprachniveau
- 📚 246 türkische Vokabelübersetzungen (A1–C2)
- 📚 69 türkische Satzübersetzungen
- 🗺 „Deutsch Sprachniveau” in der Navigationsleiste ergänzt
- 🌍 `nav_deniveau` in allen 13 App-Sprachen übersetzt

-----

## v4.3 · BUILD 46–47

**🇩🇪 Deutsch Sprachniveau A1–C2**

- 🆕 Komplett neues Lernmodul: Deutsch Sprachniveau
- 📚 23 Themen mit 4 Lernmodi pro Thema:
  - 📚 Vokabeln · 📝 Grammatik · 💬 Sätze · 🎯 Quiz
- 🇷🇺 Übersetzungssprache Russisch mit Grammatik-Vergleichen
- 🎯 Fortschrittsanzeige pro Thema in %
- Themen: A1×6, A2×6, B1×4, B2×3, C1×2, C2×2
- 🏠 Home-Card und Navigationsleiste ergänzt

-----

## v4.2 · BUILD 44–45

**🔢 Auto-Versionierung + Polnisch vollständig**

- 🆕 `updateAllVersionDisplays()` aktualisiert alle Versionsstellen
- 👁 TreeWalker scannt alle sichtbaren Texte nach Versionsnummern
- 🔄 MutationObserver für dynamisch gerenderte Elemente
- 🏷️ IDs: `logo-version`, `footer-version`, `settings-version`
- 🆕 Polnisch als Lern- UND App-Sprache komplett
- 📚 150+ polnische Vokabelpaare in 5 Themen
- 🌍 Vollständige polnische UI-Übersetzung aller Strings
- 🔗 DeepL-Unterstützung für Polnisch (PL)

-----

## v4.1 · BUILD 43

**🌍 Sprachen alphabetisch + Gamification-Fix**

- 🔤 Alle 13 Sprachen alphabetisch sortiert (sq,da,de,en,fr,it,pl,ro,ru,sv,es,th,tr)
- 🗂 Doppelter Sprach-Karten-Block entfernt
- 🎮 XP nur bei verifizierter Aussprache — kein Cheaten möglich
- 🔥 Tutorial erscheint bei jedem Start mit Skip-Option
- 🇵🇱 Polnisch in Header-Pills und Navigationsleiste

-----

## v4.0 · BUILD 40–42

**📚 5.005 Russisch-Deutsch + Polnisch Grundlagen**

- 📚 5.005 russisch-deutsche Wortpaare in 100+ Themen
- 🇩🇪 Deutsch als Lernsprache aus dem Russischen vollständig
- 🌍 DeepL-Integration mit eingebettetem Key + Proxy-Fallback
- ⏱ Tagesziel: Wörter ODER Zeit wählbar (5/10/15/30 Min.)
- 🔥 Streak zählt nur bei erfülltem Tagesziel
- 🇵🇱 Polnisch erste Integration (Lernsprache + App-Sprache)

-----

## v3.9 · BUILD 33–39

**🇵🇱 Polnisch integriert + Versionierung**

- 🆕 Polnisch als Lernsprache (VOCAB mit 150+ Wortpaaren)
- 🌍 Polnisch als App-Sprache (vollständige UI-Strings)
- 🔢 `BUILD_VERSION` System: Version hochzählen bei jedem Deploy
- 🔑 DeepL Key als Standard eingebettet
- 🎮 Gamification: Weiter-Button, Aussprache-Pflicht für XP
- 📋 Tutorial: Version-aware (erscheint nur bei neuer Version)

-----

## v3.8 · BUILD 28–32

**🧩 Syntaxfixes + Polnisch Grundgerüst**

- 🔧 Doppelte `buildVocabDe()` Definition entfernt
- 🔧 Kyrillische Zeichen in polnischen Phonetiken korrigiert
- 🇵🇱 Polnisch in LANG_NAMES, LANG_VOICE, LANG_EMOJI, UI_LANGS
- 🔑 DeepL DEEPL_LANG_MAP für Polnisch (PL) hinzugefügt

-----

## v3.7 · BUILD 26–27

**🌍 Mehrsprachigkeit + Auto-Version**

- 🌍 13 Sprachen als Lern- und App-Sprachen
- 🔢 Auto-Version-Increment: 3.7→3.8→3.9→4.0 (bei BUILD-Erhöhung)
- 📋 Tutorial erscheint bei jedem Start (mit Skip-Option)
- 🇷🇺 UI-Strings für Russisch vollständig

-----

## v3.6 · BUILD 20–25

**📋 Changelog-System (erste Version) + 5.000 Wörter**

- 📋 Erstes Changelog-System eingebaut
- 📚 Vokabeldatenbank ausgebaut auf 5.000+ Wortpaare
- 🔧 DeepL Proxy mit corsproxy.io als Fallback
- 🎮 SRS (Spaced Repetition) mit SM-2 Algorithmus
- ✍️ Schreibübungs-Modus
- 🏆 Abzeichen-System
- 🗺 Lernpfad A1→C2

-----

## v3.0 · BUILD 10–19

**🏗️ Grundstruktur + KI-Features**

- 🆕 KI-Vokabel-Generator (Thema eingeben → 20 Wörter)
- 🆕 KI-Assistent (Gesprächspartner, Grammatik-Erklärungen)
- 🆕 Konjugationstrainer mit KI-Tabellen
- 🆕 Übersetzer mit DeepL + KI-Fallback
- 🆕 Meine Vokabeln (eigene Wortlisten)
- 🆕 Quiz-Modus (Multiple Choice)
- 🆕 Freies Lernen (Thema wählen)
- 🎨 Dark/Light Mode
- 📊 Statistiken: Streak, XP, Tagesfortschritt

-----

## v1.0–2.0 · BUILD 1–9

**🚀 Erstveröffentlichung**

- 🆕 Grundlegende App-Struktur (PWA, Single-File HTML)
- 🆕 Vokabeltraining mit Karteikarten
- 🆕 13 Lernsprachen
- 🆕 13 App-Sprachen (UI-Übersetzungen)
- 🆕 Aussprache via Web Speech API
- 🆕 Streak-System
- 🆕 Tagesziel-System
- 🆕 localStorage für Fortschritt
- 🎨 Responsive Design (Mobile-First)
- 🆕 Service Worker (Offline-Fähigkeit)

-----

## 📊 Statistiken

|Kennzahl            |Wert             |
|--------------------|-----------------|
|Builds gesamt       |64               |
|Aktuelle Version    |v6.1             |
|Lernsprachen        |13               |
|App-Sprachen        |13               |
|Vokabelpaare (RU-DE)|5.005            |
|DE Niveau Themen    |30               |
|EN Niveau Themen    |22               |
|Dialoge             |11               |
|Phrasal Verbs       |40 (EN) + 40 (DE)|
|Lückentexte         |27               |
|Automatische Tests  |95+              |
|Dateigröße          |~1.05 MB         |

-----

*Generiert am 31.05.2026 · LINGUA by René Prause*