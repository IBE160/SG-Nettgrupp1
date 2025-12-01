# Refleksjonsrapport - Programmering med KI

## 1. Gruppeinformasjon

**Gruppenavn:**
Nettgrupp1-Dagtid, men fleksibel.

**Gruppemedlemmer:**
- Hajar Al-Mohannah - 231220/haalm1761@himolde.no
- Kim-Ove Reitan Hagerup - 231097/kim-ove.r.hagerup@himolde.no
- Camilla Hagå-Huus - 241665/cahag4982@himolde.no
- Eirik Lyder Bredland - 210667/eirik.l.bredland@himolde.no

**Dato:** 15.11.2025

---

## 2. Utviklingsprosessen

### 2.1 Oversikt over prosjektet
- Prosjektet vårt bestod i å utvikle et fungerende nettsted for Alta Sigar & Grill.

- Målet var å skape en løsning som lar bedriften presentere sine produkter på en oversiktlig måte, samtidig som den skulle gi kundene mulighet til å sende inn en click-and-collect-bestilling som bedriften kunne behandle fortløpende. Løsningen skulle også vise tilgjengelig lagerbeholdning, støtte et enkelt admin-grensesnitt og vise butikkens plassering via Google Maps.

- I tillegg skulle siden være responsiv og fungere godt på både mobil, nettbrett og PC. Prosjektet representerte derfor en helhetlig webapplikasjon, der både brukeropplevelse, teknisk oppsett, backend-funksjonalitet og KI-drevet utvikling inngikk som sentrale komponenter. 

### 2.2 Arbeidsmetodikk
- Arbeidet vårt var i stor grad basert på samarbeid via Teams, der vi gjennomførte workshops og delte skjerm mens vi utførte oppgaver i VS Code. Denne måten å arbeide på gjorde at alle fikk praktisk erfaring med rammeverket på sine egne maskiner, samtidig som vi lærte av hverandres utfordringer. Før prosjektet startet hadde vi flere økter der vi hjalp hverandre med installasjon av Gemini, BMAD-verktøyene og grunnoppsettet i terminal, ettersom det var merkbare forskjeller mellom Windows og macOS. 

- Vi brukte Teams-chat aktivt for å planlegge arbeidsøkter, dele erfaringer og stille spørsmål til gruppen. GitHub ble brukt til å dele kode og sikre at alle kunne hente siste versjon av arbeidet. I praksis brukte vi Git mest til å synkronisere endringer og til å holde prosjektet samlet; store deler av den tekniske forståelsen av Git fikk vi etter hvert gjennom KI-forklaringer. 

- Når det gjelder KI-bruken, var den integrert i hele arbeidsflyten. Gemini-agentene i BMAD var sentrale i både planlegging, dokumentasjon og utvikling. Disse agentene fungerte som rollespesialister som guidet oss gjennom oppgaver vi ellers ikke ville hatt kompetanse til å utføre, som å skrive PRD, utforme epics, analysere brukerreiser eller bygge tekniske workflows. 

### 2.3 Teknologi og verktøy
- Frontend
   * React: The core library for building the user interface.
   * Vite: The build tool and development server for the frontend application.
   * Tailwind CSS: A utility-first CSS framework for styling.
   * Radix UI: A library of unstyled, accessible UI components.
   * React Router: For handling navigation and routing within the application.

- Backend
   * Node.js: The JavaScript runtime environment for the custom server.
   * Express.js: A web application framework for Node.js, used to create the backend API.   
   * Supabase: A Backend-as-a-Service (BaaS) platform that provides database,
     authentication, and storage services.

- Database
   * PostgreSQL: The relational database used for data storage, provided and managed through Supabase.

- KI-verktøy
   * Gemini CLI (3.0 Pro, 2.5 Pro, 2.5 Flash), Claude Code, Chat-GPT

- Andre verktøy
   * Playwright: For end-to-end (E2E) testing.
   * Biome: For code formatting and linting to ensure code quality.
   * npm: The package manager for handling project dependencies.
   * Supabase CLI: The command-line interface for managing the local Supabase development environment.

### 2.4 Utviklingsfaser

- De forskjellige fasene i utviklingen som er beskrevet i Project plan stemmer ikke overens med BMAD Metod Worflow - Standard Greenfield som er vist i /docs/images/bmad-worflow.svg
- Dette gjør det litt vanskeligere å strukturere denne rapporten. 

**Fase 0: Forarbeid**
- I denne fasen startet vi med å skrive vår Proposal. Vi startet med å spørre ChatGPT om hvordan en slik proposal skal se ut, men etter hvert fikk vi en mal fra faglærer som beskrev hvordan proposal skal utformes. Denne malen ble underveis i prosessen endret av faglærer, slik at vi ble nødt til å gå gjennom denne prosessen flere ganger.
- Etter at vår Proposal var ferdig ble denne lagt til i vårt repository som var blitt opprettet på Github.

**Fase 1: Discovery**
- Nå kunne vi starte med å bruke agentene i BMAD rammeverket til å lose oss gjennom de neste stegene som bestod i en brainstorming session samt en research session. Dette resulterte i to dokumenter utarbeidet av KI "brainstorming session results" og "research user".
- Neste steg var å be Business Analyst å produsere Product Brief. Denne var basert på de tre foregående dokumentene. ***NB sett inn eksempler fra loggfilene***

**Fase 2: Planning**
- I planleggingsfasen ble prosjektet betydelig mer strukturert. Vi benyttet oss av Product Manager i BMAD til å generere Product Requirement Document (PRD). Denne inneholder en beskrivelse av Functional Requirements (FR), User Journeys, UX- og UI-principles og Epics. ***NB sett inn eksempler fra loggfilene***

**Fase 3: Solutioning**
- [Hva gjorde dere i denne fasen?]
Vi startet med å engasjere agenten Architect, som loset oss gjennom prosessen med å lage Architecture Document. Deretter var det Project Manager (PM) som tok over og laget detaljerte stories ut av våre allerede definerte epics.
- Neste steg var Test Engineer Agent som laget test-design. Dette steget viste seg i ettertid å være overføldig, men da var jobben allerede gjort.
***NB sett inn eksempler fra loggfilene***

**Fase 4: Implementation**
- [Hva gjorde dere i denne fasen?]
Implementeringsfasen handlet om å implementere stories som ble generert i fase 3. Den første store storyen etablerte prosjektets tekniske grunnmur: Git-repoet, .gitignore-filen, npm-avhengighetssjekk, GitHub Actions workflow, Playwright-tester og deploy til Vercel. Etter dette fortsatte vi å jobbe med stories som la grunnlag for katalogvisning, ordrebehandling og kartfunksjonalitet. KI styrte hele denne prosessen, men vi måtte selv godkjenne endringer, undersøke filene og løse feil som oppstod underveis. 
- [Hvordan brukte dere KI her? Husk å lagre promptene deres! Inkluder ALLE stegene dere gjorde.]
---

## 3. Utfordringer og løsninger

### 3.1 Tekniske utfordringer
[Beskriv 2-3 konkrete tekniske problemer dere møtte]

**Utfordring 1: API-feil og begrensninger i Gemini free-tier**
- Problem: Gemini har fastsatte begrensninger i gratisversjonen av modellen 2.5 Pro, da denne er begrenset til maksimalt 5 forespørsler daglig, deretter må man gå over til å bruke modellen 2.5 Flash. Enkelte av oss opplevde hyppige API-feil, noe som vanskeliggjorde et kontinuerlig utviklingsarbeid i Gemini.
- Løsning: I starten var det en del frustrasjon med denne begrensingen, og enkelte av oss startet abonnement på Gemini for å utvide muligheten for å bruke Gemini i lengre intervaller. I tillegg fikk vi etter hvert opplæring i hvordan man kan styre selv hvilken modell man ønsker å starte, dermed kan man bruke 2.5 Flash til enklere oppgaver og skifte over til 2.5 Pro for tyngre oppgaver, "gemini --model gemini-2.5-flash" og "gemini --model gemini-2.5-pro". Vi har også brukt andre KI verktøy for å løse problemer, for det meste OpenAI sin ChatGPT, spesielt ved problemer med Git, synkronisering og for å løse diverse installasjonsproblemer. 
- KI sin rolle: [Hvordan hjalp eller hindret KI dere?]

**Utfordring 2: Stadige endringer i BMAD-rammeverket**
- Problem: BMAD-rammeverket er relativt nytt rammeverk for agentdrevet utvikling. Dette er under kontinuerlig utvikling, og vi mottok relativt hyppig endringer på dette fra vår faglærer. De fleste endringer til rammeverket ble lagt til i vårt remote repository, men enkelte endringer utførte vi selv underveis som feil ble oppdaget. Disse endringene medførte ofte endringer i arbeidsflyten som vi allerede var godt i gang med.
- Løsning: Hyppige endringer i rammeverket gjorde at vi måtte passe på at vi alltid startet hver arbeidsøkt med å laste ned og merge remote repository inn i vår lokale versjon, i tillegg til å merge dette inn i hver vår egne branch som vi arbeidet i. Dette kunne for eksempel få den effekten at dersom vi var i gang med en prosess mens det kom oppdatering på main-branchen så oppstod det en merge konflikt når vi skulle synkronisere vår arbeid.
- KI sin rolle: KI viste seg å være god på å rydde opp i slike konflikter, spesielt i de tilfellene der vi  klarte å beskrive for KI hva konflikten gikk ut på og hvor feilen var oppstått.

**Utfordring 3 Merge-konfikter**
- Problem: Når vi alle jobber med hver vår story viser det seg at flere av oss tidvis jobber opp mot de samme filene, JavaScript og lignende, og når vi så kjører en merge på disse oppstår det konflikter.
- Løsning: Ingen av oss hadde noe særlig peiling på hvordan vi skulle løse merge-konflikter, derfor ble løsningen å spørre KI om hjelp.
- KI sin rolle: Det virket som KI hadde en mye bedre forståelse av merge-konfliktene og hva som måtte gjøres for å løse disse, så dette hadde vært omtrent umulig for oss å løse på vårt nivå uten hjelp fra KI.

### 3.2 Samarbeidsutfordringer
[Utfordringer knyttet til teamarbeid og kommunikasjon]
- [Beskriv utfordringer og hvordan dere løste dem]

### 3.3 KI-spesifikke utfordringer
[Problemer spesifikt knyttet til bruk av KI]
- [f.eks. Feil kode fra KI, misforståelser, inkonsistent kvalitet]
- [Hvordan håndterte dere disse?]

---

## 4. Kritisk vurdering av KI sin påvirkning

### 4.1 Fordeler med KI-assistanse
[Reflekter over de positive aspektene]

**Effektivitet og produktivitet:**
- [Hvordan påvirket KI arbeidshastigheten?]
- [Eksempler på oppgaver som gikk raskere]

**Læring og forståelse:**
- [Hva lærte dere ved å bruke KI?]
- [Bidro KI til bedre forståelse av konsepter?]

**Kvalitet på koden:**
- [Hvordan påvirket KI kodekvaliteten?]
- [Eksempler på forbedringer KI foreslo]

### 4.2 Begrensninger og ulemper
[Reflekter over de negative aspektene]

**Kvalitet og pålitelighet:**
- [Eksempler på feil eller dårlige løsninger fra KI]
- [Hvordan oppdaget og håndterte dere disse?]

**Avhengighet og forståelse:**
- [Ble dere for avhengige av KI?]
- [Var det tilfeller hvor KI hindret læring?]

**Kreativitet og problemløsning:**
- [Påvirket KI deres egen kreativitet?]
- [Eksempler på situasjoner hvor KI begrenset kreativ tenkning]

### 4.3 Sammenligning: Med og uten KI
[Reflekter over hvordan prosjektet ville vært uten KI]
- Hva ville vært annerledes?
- Hvilke deler av prosjektet ville vært vanskeligere/lettere?
- Ville sluttresultatet vært bedre eller dårligere?

### 4.4 Samlet vurdering
[Konklusjon: Hvordan påvirket KI sluttresultatet totalt sett?]
- Var KI en netto positiv eller negativ faktor?
- Hva var den viktigste lærdommen om å bruke KI i utviklingsprosessen?

---

## 5. Etiske implikasjoner
Bruken av KI i utviklingsarbeidet gir både fordeler og etiske utfordringer. Under utviklingen av prosjektet brukte vi en KI-agent i VS Code til å foreslå kode, forklare feil og hjelpe med struktur. Dette påvirker ansvar, læring og sikkerhet, og vi reflekterer over disse aspektene her.
### 5.1 Ansvar og eierskap
- Hvem er ansvarlig for koden når KI har bidratt?
- Hvordan sikrer man kvalitet når KI genererer kode?
- Diskuter spørsmål om opphavsrett og intellektuell eiendom
Selv om KI har generert flere kodeforslag, er det fortsatt vi som gruppe som står ansvarlige for alt som er tatt inn i prosjektet. KI fungerer som et støttende verktøy, men har ikke ansvar for kvalitet, sikkerhet eller logikk. Derfor måtte vi lese gjennom og teste alle forslag før vi implementerte dem.
Det etiske spørsmålet om opphavsrett er også aktuelt. KI er trent på store mengder kode fra ulike kilder, og vi kan ikke alltid vite hvor inspirasjonen til et forslag kommer fra. Likevel er det vi som har ansvar for sluttproduktet og må sørge for at koden ikke bryter noen lisensvilkår. Derfor brukte vi KI mest til mindre kodebiter, feilsøking og struktur – ikke til hele ferdige funksjoner uten gjennomgang.


### 5.2 Transparens
- Bør det være transparent at KI er brukt?
- Hvordan dokumenterer man KI sin bidrag?
- Hva er konsekvensene av å ikke være åpen om KI-bruk?
Vi mener det er viktig å være åpne om at KI har vært en del av prosessen. For akademisk arbeid er det etisk nødvendig å vise hvilke verktøy man har brukt, slik at veileder og sensor forstår hvordan prosjektet ble utviklet. Hvis man ikke er åpen om KI-bruk, kan det skape et feil inntrykk av kompetansen og arbeidsmengden bak koden.
Vi har derfor dokumentert når og hvordan KI-agenten ble brukt, spesielt under feilsøking og refaktorering. Dette gir transparens og gjør prosessen etterprøvbar.


### 5.3 Påvirkning på læring og kompetanse
- Hvordan påvirker KI-avhengighet fremtidig kompetanse?
- Hvilke ferdigheter risikerer man å ikke utvikle?
- Balanse mellom effektivitet og læring
KI påvirker hvordan man lærer å programmere. Vi opplevde at verktøyet sparte tid, men samtidig gjorde det enkelt å hoppe over viktige steg i læringsprosessen. Hvis man blir for avhengig av KI, kan det gå utover evnen til å skrive kode selvstendig eller forstå hvorfor noe fungerer.
Ferdigheter som feilsøking, debugging og å bygge logikk fra bunnen av er særlig utsatt for å svekkes hvis KI brukes ukritisk. For å motvirke dette forsøkte vi å bruke KI som et supplement — ikke som en erstatning. Vi leste gjennom alle forslag og prøvde å forstå hvorfor koden fungerte, slik at vi fortsatt utviklet våre egne ferdigheter.


### 5.4 Arbeidsmarkedet
- Hvordan kan utbredt KI-bruk påvirke fremtidige jobber i IT?
- Hvilke roller vil bli viktigere/mindre viktige?
- Deres refleksjoner om fremtidig karriere i en KI-drevet verden
KI påvirker allerede IT-bransjen, og det er sannsynlig at dette vil øke. Rutineoppgaver innen koding kan bli mer automatisert, mens roller som handler om arkitektur, problemløsning, kravforståelse og kvalitetssikring vil bli viktigere.
Vår refleksjon er at fremtidige utviklere må kunne:
•	samarbeide med KI-verktøy
•	validere og kvalitetssikre generert kode
•	forstå systemer på et dypere nivå enn bare syntaks
Dette vil også påvirke karrierevalg. I en KI-drevet verden må vi bygge kompetanse som ikke lett kan automatiseres, som problemløsning, kreativitet og kritisk vurdering.


### 5.5 Datasikkerhet og personvern
- Hvilke data delte dere med KI-verktøy?
- Potensielle risikoer ved å dele kode og data med KI
- Hvordan skal man tenke på sikkerhet når man bruker KI?
Underveis var det viktig å være bevisst på hva vi delte med KI-agenten. Selv om vi kun delte kode vi selv hadde skrevet, finnes det likevel potensielle risikoer. Noen KI-tjenester kan lagre eller bruke innholdet for videre trening, noe som gjør at man aldri bør dele sensitiv informasjon, API-nøkler eller brukerdata.
Vi brukte KI kun til ren kodehjelp og delte ikke personinformasjon eller systemer med sikkerhetskritiske deler. Likevel viser dette hvor viktig det er å ha et bevisst forhold til datasikkerhet når man bruker KI som utviklingsverktøy. Man bør alltid vurdere hva som er trygt å dele og hva som bør holdes lokalt.


--

## 6. Teknologiske implikasjoner

### 6.1 Kodekvalitet og vedlikehold
- Hvordan påvirker KI-generert kode langsiktig vedlikehold?
- Er KI-kode like forståelig som menneskeskrevet kode?
- Utfordringer med å debugge KI-generert kode

### 6.2 Standarder og beste praksis
- Følger KI alltid beste praksis og industristandarder?
- Eksempler på hvor KI foreslo utdaterte eller dårlige løsninger
- Viktigheten av å validere KI sine forslag

### 6.3 Fremtidig utvikling
- Hvordan tror dere KI vil påvirke programvareutvikling fremover?
- Hvilke ferdigheter blir viktigere for utviklere?
- Deres anbefalinger for hvordan man bør bruke KI i utviklingsprosesser

---

## 7. Konklusjon og læring

### 7.1 Viktigste lærdommer
[Liste de 3-5 viktigste tingene dere lærte gjennom prosjektet]
1. [Lærdom 1]
2. [Lærdom 2]
3. [Lærdom 3]

### 7.2 Hva ville dere gjort annerledes?
[Reflekter over hva dere ville endret hvis dere skulle startet på nytt]
- [Tekniske valg]
- [Bruk av KI]
- [Samarbeid og organisering]

### 7.3 Anbefalinger
[Deres anbefalinger til andre studenter som skal bruke KI i utvikling]
- [Råd om effektiv bruk av KI]
- [Fallgruver å unngå]
- [Beste praksis dere oppdaget]

### 7.4 Personlig refleksjon (individuelt)

**Hajar Al-Mohannah:**
[Personlig refleksjon over egen læring og utvikling]

**Camilla Hagå-Huus:**
[Personlig refleksjon over egen læring og utvikling]

**Kim-Ove Reitan Hagerup:**
[Personlig refleksjon over egen læring og utvikling]

**Eirik Lyder Bredland:**
[Personlig refleksjon over egen læring og utvikling]

---

## 8. Vedlegg (valgfritt)

- Skjermbilder av applikasjonen
- https://github.com/IBE160/SG-Nettgrupp1
- Annen relevant dokumentasjon

---

**Ordantall:** 2246

**Forventet lengde:** 3000-5000 ord (avhengig av gruppestørrelse og prosjektets kompleksitet)