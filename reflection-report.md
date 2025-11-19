# Refleksjonsrapport - Programmering med KI

## 1. Gruppeinformasjon

**Gruppenavn:**
Nettgrupp1-Dagtid, men fleksibel.

**Gruppemedlemmer:**
- Hajar Al-Mohannah - [Student-ID/E-post@himolde.no]
- Kim-Ove Reitan Hagerup - 231097/kim-ove.r.hagerup@himolde.no
- Camilla Hagå-Huus - 241665/cahag4982@himolde.no
- Eirik Lyder Bredland - 210667/eirik.l.bredland@himolde.no

**Dato:** 15.11.2025

---

## 2. Utviklingsprosessen

### 2.1 Oversikt over prosjektet
[Kort beskrivelse av hva dere har utviklet. Hva var hovedmålet med applikasjonen?]
Vi har utviklet et nettsted for bedriften Alta Sigar & Grill.
Hovedmålet med dette prosjektet er å produsere et fungerende nettstedet der bedriften kan vise frem sine produkter for potensielle kunder. Videre skal kunder kunne sende en bestillling fra nettsiden direkte til bedriften som i neste ledd skal kunne behandle denne ordren. Backend-funksjonalitet skal muliggjøre lagerhåndtering. En kartfunksjon på nettstedet skal kunne vise kunder butikkens beliggenhet.

### 2.2 Arbeidsmetodikk
[Beskriv hvordan dere organiserte arbeidet]
- Hvordan fordelte dere oppgaver? Vi bestemte oss tidlig for å satse på at flest mulig skulle kunne delta i de forskjellige prosessene, og dermed har vi hatt jevnlige workshops der vi har samlet oss på Teams og samarbeidet. Ikke alle har vært med på samtlige workshops, men alle har vært med på deler av arbeidet. Vi har også jobbet vekselvis på hver sin PC mens vedkommende deler skjerm på Teams, slik at alle skulle få erfaring med å bruke verktøyene på sin egen PC, inkludert opplasting til Github. I forkant av arbeidet med selve prosjektoppgaven hadde vi flere workshops for å sørge for at alle i gruppen hadde fått satt opp sin PC/MAC i henhold til forutsetningene gitt av faglærer. 
- Hvilke verktøy brukte dere for samarbeid og hvordan det fungerte? Vi opprettet en egen chat på Teams som vi har brukt innad i gruppen, her har all skriftlig kommunikasjon innad i arbeidsgruppen foregått. I tillegg har vi brukt den felles Teams-kanalen for gruppen vår for å dele dokumenter underveis. Ferdig arbeid har blitt lastet opp til Github og vi har testet ut bruken av pull-request fra Github.
- Hvordan brukte dere KI-verktøy i prosessen? Foruten utstrakt bruk av KI gjennom agentene som utgjør en del av BMAD-rammeverket har vi brukt KI til feilsøking og problemløsing når noe ikke virket slik det var forutsatt. Spesielt nyttig har KI vært i forbindelse med oppsett og installasjon av støtteverktøy på den enkelte sin PC/MAC.

### 2.3 Teknologi og verktøy
[Liste over de viktigste teknologiene og verktøyene dere brukte]
- Frontend: [f.eks. NextJS, HTML/CSS]
- Backend: [f.eks. Python/FastAPI]
- Database: [f.eks. Supabase, MongoDB, PostgreSQL]
- KI-verktøy: [f.eks. Claude Code, Gemini CLI, GPT-5 Codex]
- Andre verktøy: [f.eks. VS Code, BMAD etc]

### 2.4 Utviklingsfaser
[Beskriv de ulike fasene i utviklingen]

**Fase 0: Forarbeid**
- [Hva gjorde dere i denne fasen?]
- I denne fasen startet vi med å skrive vår Proposal. Vi startet med å spørre ChatGPT om hva en slik proposal skal se ut, men etter hvert fikk vi en mal fra faglærer som beskrev hvordan en slik proposal skal utformes. Denne malen ble underveis i prosessen endret av faglærer, slik at vi ble nødt til å gå gjennom denne prosessen flere ganger. Etter at vår Proposal (proposal.md) var ferdig ble denne lagt til i vårt repository og vi kunne starte med å bruke agentene i BMAD rammeverket til å lose oss gjennom de neste stegene som bestod i en brainstorming session samt en research session. Dette resulterte i to dokumenter utarbeidet av KI (brainstorming-session-results.2025-10-24.md og research-user-2025-10-29.md). Neste steg var å be Business Analyst å produsere Product Brief (product-brief-ibe160-2025-11-03.md). Denne var basert på de tre foregående dokumentene.
- [Hvordan brukte dere KI her? Husk å lagre promptene deres! Inkluder ALLE stegene dere gjorde.]

**Fase 1: Planlegging**
- [Hva gjorde dere i denne fasen?]
- //lage PRD //Validere PRD //lage UX-design spec //validere UX-design spec
- [Hvordan brukte dere KI her? Husk å lagre promptene deres! Inkluder ALLE stegene dere gjorde.]

**Fase 2: Utvikling**
- [Hva gjorde dere i denne fasen?]
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

**Utfordring 3: [Overskrift]**
- Problem: [Beskriv problemet]
- Løsning: [Hvordan løste dere det?]
- KI sin rolle: [Hvordan hjalp eller hindret KI dere?]

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

**Ordantall:** 1706

**Forventet lengde:** 3000-5000 ord (avhengig av gruppestørrelse og prosjektets kompleksitet)