# Refleksjonsrapport - Programmering med KI

## 1. Gruppeinformasjon

**Gruppenavn:**
Nettgrupp1-Dagtid, men fleksibel.

**Gruppemedlemmer:**
- Hajar Al-Mohannah - 231220/haalm1761@himolde.no
- Kim-Ove Reitan Hagerup - 231097/kim-ove.r.hagerup@himolde.no
- Camilla Hagå-Huus - 241665/cahag4982@himolde.no
- Eirik Lyder Bredland - 210667/eirik.l.bredland@himolde.no

**Dato:** 15.12.2025

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
   * React: Kjernebiblioteket for å bygge brukergrensesnittet.
   * Vite: Byggeverktøyet og utviklingsserveren for frontend-applikasjonen.
   * Tailwind CSS: Et utility-first CSS-rammeverk for styling.
   * Radix UI: Et bibliotek med ustylede, tilgjengelige UI-komponenter.
   * React Router: For håndtering av navigasjon og routing i applikasjonen.

- Backend
   * Node.js: JavaScript-kjøremiljøet for den egendefinerte serveren.
   * Express.js: Et webapplikasjonsrammeverk for Node.js, brukt til å lage backend-API-et.   
   * Supabase: En Backend-as-a-Service (BaaS)-plattform som tilbyr database-, autentiserings- og lagringstjenester.

- Database
   * PostgreSQL: Relasjonsdatabase som brukes til datalagring, levert og administrert gjennom Supabase.

- KI-verktøy
   * Gemini CLI (3.0 Pro, 2.5 Pro, 2.5 Flash), Claude Code, Chat-GPT

- Andre verktøy
   * Playwright: For ende-til-ende-testing (E2E).
   * Biome: For kodeformatering og linting for å sikre kodekvalitet.
   * npm: Pakkehåndtereren for prosjektavhengigheter.
   * Supabase CLI: Kommandolinjeverktøyet for å administrere det lokale Supabase-utviklingsmiljøet.

### 2.4 Utviklingsfaser

- De forskjellige fasene i utviklingen som er beskrevet i Project plan stemmer ikke overens med BMAD Metod Worflow - Standard Greenfield som er vist i /docs/images/bmad-worflow.svg
- Dette gjør det litt vanskeligere å strukturere denne rapporten. 

**Fase 0: Forarbeid**
- I denne fasen startet vi med å skrive vår Proposal. Vi startet med å spørre ChatGPT om hvordan en slik proposal skal se ut, men etter hvert fikk vi en mal fra faglærer som beskrev hvordan proposal skal utformes. Denne malen ble underveis i prosessen endret av faglærer, slik at vi ble nødt til å gå gjennom denne prosessen flere ganger.
- Etter at vår Proposal var ferdig ble denne lagt til i vårt repository som var blitt opprettet på Github.

**Fase 1: Discovery**
- Nå kunne vi starte med å bruke agentene i BMAD rammeverket til å lose oss gjennom de neste stegene som bestod i en brainstorming session samt en research session. Dette resulterte i to dokumenter utarbeidet av KI "brainstorming session results" og "research user".
- Neste steg var å be Business Analyst å produsere Product Brief. Denne var basert på de tre foregående dokumentene.

Eksempel fra workflow *document-project:

    ✦ Great, we'll proceed in Interactive Mode.
        Let's start with the first section: the Problem Statement.
        The current brief identifies two main problems:
            1. For the Business Owner: Manual, inefficient management of inventory and orders.
            2. For the Customer: No way to know what's in stock without visiting or calling.  

        To make this section more compelling, let's add some specific details. Could you estimate:
            * How much time does the business owner currently spend each week on manual inventory and order tasks?
            * Has the business received feedback from customers who were frustrated they couldn't see the stock online? Are potential sales being lost?

> he would use about 1-2 hors a week for this. yes, some customers have requested an updated online inventory. I would expect that some sales has been lost due to this, but this can not be documentet.

**Fase 2: Planning**
- I planleggingsfasen ble prosjektet betydelig mer strukturert. Vi benyttet oss av Product Manager i BMAD til å generere Product Requirement Document (PRD). Denne inneholder en beskrivelse av Functional Requirements (FR), User Journeys, UX- og UI-principles og Epics. 


Eksempel fra workflow *Create UX-design:

    ✦ Target Users:
        Business Owner: A solo entrepreneur needing to reduce manual effort in inventory and order management.
        General Customer: Enthusiasts seeking convenience to browse products, check stock, and place remote orders for in-store pickup.
        Newcomer: Individuals new to cigars who need guidance and simplified product selection to overcome "choice overload."

        Does this match your understanding? Any corrections or additions? -->

> Delete newcomer, target users are Business owner and general customer

    ✦ Reviewing the Change
        I've registered the user's intent to remove "Newcomer" from the target audience. My immediate action is to adjust my internal representation of the project parameters, specifically the `user_summary`, reflecting this alteration. Subsequently, I'll revise the `ux-design-specification.md` accordingly.


**Fase 3: Solutioning**
- Vi startet med å engasjere agenten Architect, som loset oss gjennom prosessen med å lage Architecture Document. Deretter var det Project Manager (PM) som tok over og laget detaljerte stories ut av våre allerede definerte epics.
- Neste steg var Test Engineer Agent som laget test-design. Dette steget viste seg i ettertid å være overføldig, men da var jobben allerede gjort.

Eksempel fra workflow *create architecture:

    ✦ My suggestion: Railway
        This is good for you because for your project, Railway is a great choice because it simplifies deploying both your React frontend and your Node.js backend, and it integrates well with Supabase. It's designed to be easy for developers to use, so you won't get bogged down in complex infrastructure setup.

        What's your preference? (or 'explain more' for details)

> vercel

**Fase 4: Implementation**
Implementeringsfasen handlet om å implementere stories som ble generert i fase 3. Den første store storyen etablerte prosjektets tekniske grunnmur.
- Etter dette fortsatte vi å jobbe med stories som la grunnlag for katalogvisning, ordrebehandling og kartfunksjonalitet o.s.v.
- KI styrte hele denne prosessen, men vi måtte selv godkjenne endringer, undersøke filene og løse feil som oppstod underveis. 

Eksempel fra workflow *sprint-planning:

    ✦ Next Steps:
        1.  Review the generated `sprint-status.yaml`
        2.  Use this file to track development progress
        3.  Agents will update statuses as they work
        4.  Re-run this workflow to refresh auto-detected statuses

    Workflow complete. What's next?

> Can you explain what you mean by "Epics should be 'contexted' before stories can be 'drafted'"?

    ✦ Of course. It's a key principle for ensuring our development process is smooth and efficient.

---

## 3. Utfordringer og løsninger

### 3.1 Tekniske utfordringer

**Utfordring 1: API-feil og begrensninger i Gemini free-tier**
- Problem: Gemini har fastsatte begrensninger i gratisversjonen av modellen 2.5 Pro, da denne er begrenset til maksimalt 5 forespørsler daglig, deretter må man gå over til å bruke modellen 2.5 Flash. Enkelte av oss opplevde hyppige API-feil, noe som vanskeliggjorde et kontinuerlig utviklingsarbeid i Gemini.
- Løsning: I starten var det en del frustrasjon med denne begrensingen, og enkelte av oss startet abonnement på Gemini for å utvide muligheten for å bruke Gemini i lengre intervaller. I tillegg fikk vi etter hvert opplæring i hvordan man kan styre selv hvilken modell man ønsker å starte, dermed kan man bruke 2.5 Flash til enklere oppgaver og skifte over til 2.5 Pro for tyngre oppgaver. Vi har også brukt andre KI verktøy for å løse problemer, for det meste OpenAI sin ChatGPT, spesielt ved problemer med Git, synkronisering og for å løse diverse installasjonsproblemer. 

**Utfordring 2: Stadige endringer i BMAD-rammeverket**
- Problem: BMAD-rammeverket er relativt nytt rammeverk for agentdrevet utvikling. Dette er under kontinuerlig utvikling, og vi mottok relativt hyppig endringer på dette fra vår faglærer. De fleste endringer til rammeverket ble lagt til i vårt remote repository, men enkelte endringer utførte vi selv underveis som feil ble oppdaget. Disse endringene medførte ofte endringer i arbeidsflyten som vi allerede var godt i gang med.
- Løsning: Hyppige endringer i rammeverket gjorde at vi måtte passe på at vi alltid startet hver arbeidsøkt med å laste ned og merge remote repository inn i vår lokale versjon, i tillegg til å merge dette inn i hver vår egne branch som vi arbeidet i. Dette kunne for eksempel få den effekten at dersom vi var i gang med en prosess mens det kom oppdatering på main-branchen så oppstod det en merge konflikt når vi skulle synkronisere vår arbeid.
- KI sin rolle: KI viste seg å være god på å rydde opp i slike konflikter, spesielt i de tilfellene der vi  klarte å beskrive for KI hva konflikten gikk ut på og hvor feilen var oppstått.

**Utfordring 3 Merge-konfikter**
- Problem: Når vi alle jobber med hver vår story viser det seg at flere av oss tidvis jobber opp mot de samme filene, JavaScript og lignende, og når vi så kjører en merge på disse oppstår det konflikter.
- Løsning: Ingen av oss hadde noe særlig peiling på hvordan vi skulle løse merge-konflikter fra før av, derfor ble løsningen å spørre KI om hjelp.
- KI sin rolle: Det virket som KI hadde en mye bedre forståelse av merge-konfliktene og hva som måtte gjøres for å løse disse, så dette hadde vært omtrent umulig for oss å løse på vårt nivå uten hjelp fra KI.

### 3.2 Samarbeidsutfordringer
- Samarbeidet ble påvirket av at vi jobbet på ulike maskiner og plattformer, og at ikke alle hadde like mye erfaring med verktøyene. Når en person jobbet i BMAD og genererte en hel story med mange filer, måtte de andre vente til endringene var pushet til GitHub før de kunne fortsette. Dette krevde koordinering og tålmodighet. Vi oppdaget også at vi lett mistet oversikt over hvilke filer som kom fra KI og hvilke vi endret selv. Felles gjennomganger og tydeligere branching-rutiner gjorde det lettere å holde orden. 

### 3.3 KI-spesifikke utfordringer
- KI kunne være både presis og misvisende. Noen ganger foreslo den løsninger som ikke passet strukturen vår, eller kommandoer som fungerte på én maskin men ikke på en annen. Enkelte ganger ga KI selvmotsigende svar, eller foreslo å regenerere filer som allerede var riktige. Vi måtte derfor utvikle en kritisk holdning til KI-svarene og alltid teste og validere endringer selv. 

---

## 4. Kritisk vurdering av KI sin påvirkning

### 4.1 Fordeler med KI-assistanse 

**Effektivitet og produktivitet:**
- KI bidro til en dramatisk økning i produktiviteten vår. Gjennom BMAD fikk vi tilgang til en full “utviklingsorganisasjon” i VS Code, med roller som Business Analyst, Product Manager, Developer Agent og Senior Developer Review. Disse agentene tok oss gjennom en profesjonell arbeidsflyt som vi ikke ville vært i stand til å gjennomføre uten hjelp.

**Læring og forståelse:**
- KI gjorde det lettere å forstå kompliserte konsepter. I stedet for å bruke timer på å feilsøke ukjente teknologier, kunne vi få en forklaring og løsning på sekunder. Dette førte til at vi kunne levere et prosjekt med en teknisk kvalitet langt over det vi forventet ved prosjektstart. 

**Kvalitet på koden:**
- For det meste hadde KI en positiv innvirkning på kodekvaliteten, spesielt tatt i betraktning at ingen av oss hadde vært i stand til å skrive så komplisert kode uten bidrag fra KI. For dette prosjektet har KI vært helt avgjørende for å komme i havn.

### 4.2 Begrensninger og ulemper

**Kvalitet og pålitelighet:**
- KI foreslår ryddigere og bedre løsinger enn vi ofte kom på selv, noe som gjør at kvaliteten toalt sett ble bedre. Samtidig måtte vi selv kvalitetssikre alt som KI leverte.
- Vi oppdaget i prosessen at KI tolket en setning fra vår proposal på feil måte, og dermed ville den lage en hel story på brukeropplevelse for nybegynnere. Vi oppdaget dette og måtte be KI om å fjerne dette punktet fra beskrivelsen.

**Avhengighet og forståelse:**
- Vi merket at det var lett å bli avhengig av KI fordi det ga raske løsninger, og vi tok oss ikke alltid tid til å prøve selv først. I enkelte tilfeller gjorde KI det for enkelt å hoppe over de vanskelige delene, noe som kunne hindre læringen hvis vi ikke stoppet opp og undersøkte løsningene selv.

**Kreativitet og problemløsning:**
- KI gjorde at vi ofte valgte de løsningene som ble foreslått, i stedet for å utforske flere muligheter selv.

### 4.3 Sammenligning: Med og uten KI
- Hvis vi hadde jobbet uten KI, ville fremdriften og arbeidsmengden vært helt annerledes. Vi måtte da ha brukt mye tid på å lære oss alle teknologiene manuelt, satt opp CI/CD selv, lest dokumentasjon på egen hånd og håndtert Git-konflikter uten hjelp.
- I praksis ville vi trolig ikke kommet i mål med et like komplett og profesjonelt prosjekt innen fristen.
- På den andre siden ville vi kanskje lært mer gjennom gjentatte forsøk, men det ville vært langt mer tidkrevende og frustrerende. 

### 4.4 Samlet vurdering
- Samlet sett vurderer vi KI som en svært positiv faktor i prosjektet, men kun når den brukes kritisk. KI gjorde det mulig å jobbe på et nivå vi ellers ikke ville hatt kapasitet til.
- Den viktigste lærdommen er at KI-assistanse må kombineres med aktiv forståelse, testing og kvalitetssikring. 

---

## 5. Etiske implikasjoner

### 5.1 Ansvar og eierskap
- Selv om KI har generert flere kodeforslag, er det fortsatt vi som gruppe som står ansvarlige for alt som er tatt inn i prosjektet. KI fungerer som et støttende verktøy, men har ikke ansvar for kvalitet, sikkerhet eller logikk. Derfor måtte vi lese gjennom og teste alle forslag før vi implementerte dem.
- Ved at vi selv forstår hvordan koden virker, i kombinasjon med testing av funksjonaliteten kan vi sikre kvaliteten på KI genererert kode.
- Det etiske spørsmålet om opphavsrett er også aktuelt. KI er trent på store mengder kode fra ulike kilder, og vi kan ikke alltid vite hvor inspirasjonen til et forslag kommer fra. Likevel er det vi som har ansvar for sluttproduktet og må sørge for at koden ikke bryter noen lisensvilkår. 

### 5.2 Transparens
- Vi mener det er viktig å være åpne om at KI har vært en del av prosessen. For akademisk arbeid er det etisk nødvendig å vise hvilke verktøy man har brukt, slik at veileder og sensor forstår hvordan prosjektet ble utviklet.
- Vi har i denne rapporten dokumentert når og hvordan KI-agenten ble brukt, spesielt under feilsøking og refaktorering. Dette gir transparens og gjør prosessen etterprøvbar.
- Hvis man ikke er åpen om KI-bruk, kan det skape et feil inntrykk av kompetansen og arbeidsmengden bak et prosjekt.

### 5.3 Påvirkning på læring og kompetanse
- Hvis man blir for avhengig av KI, kan det gå utover evnen til å skrive kode selvstendig eller forstå hvorfor noe fungerer.
- KI påvirker hvordan man lærer å programmere. Vi opplevde at verktøyet sparte tid, men samtidig gjorde det enkelt å hoppe over viktige steg i læringsprosessen. 
Ferdigheter som feilsøking, debugging og å bygge logikk fra bunnen av er særlig utsatt for å svekkes hvis KI brukes ukritisk.
- For å motvirke dette forsøkte vi å bruke KI som et supplement — ikke som en erstatning. Vi leste gjennom alle forslag og prøvde å forstå hvorfor koden fungerte, slik at vi fortsatt utviklet våre egne ferdigheter.

### 5.4 Arbeidsmarkedet
- KI påvirker allerede IT-bransjen, og det er sannsynlig at dette vil øke. Rutineoppgaver innen koding kan bli mer automatisert, mens roller som handler om arkitektur, problemløsning, kravforståelse og kvalitetssikring vil bli viktigere.
- Vår refleksjon er at fremtidige utviklere må kunne:
•	samarbeide med KI-verktøy
•	validere og kvalitetssikre generert kode
•	forstå systemer på et dypere nivå enn bare syntaks
- Dette vil også påvirke karrierevalg. I en KI-drevet verden må vi bygge kompetanse som ikke lett kan automatiseres, som problemløsning, kreativitet og kritisk vurdering.

### 5.5 Datasikkerhet og personvern
- Underveis var det viktig å være bevisst på hva vi delte med KI-agenten. Selv om vi kun delte kode vi selv hadde skrevet, finnes det likevel potensielle risikoer. 
- Noen KI-tjenester kan lagre eller bruke innholdet for videre trening, noe som gjør at man aldri bør dele sensitiv informasjon, API-nøkler eller brukerdata.
- Vi brukte KI kun til ren kodehjelp og delte ikke personinformasjon eller systemer med sikkerhetskritiske deler. Likevel viser dette hvor viktig det er å ha et bevisst forhold til datasikkerhet når man bruker KI som utviklingsverktøy. Man bør alltid vurdere hva som er trygt å dele og hva som bør holdes lokalt.

--

## 6. Teknologiske implikasjoner

### 6.1 Kodekvalitet og vedlikehold
- KI genererte en profesjonell struktur, men også kode som var mer avansert enn det vi kanskje selv ville laget. Dette gjør at vedlikehold krever god forståelse av hva KI har skrevet.   
- For å avdekke hvordan logikken faktisk oppførte seg, måtte vi enkelte ganger supplere med egne `console.log()`-utskrifter for å følge dataflyten og identifisere hvor logikken brøt sammen.

### 6.2 Standarder og beste praksis
- KI fulgte stort sett moderne standarder, men vi opplevde også forslag som var utdaterte eller ikke helt kompatible med BMAD. Vi måtte derfor alltid kontrollere at KI-forslag var riktig for vårt prosjekt, noe som i seg selv utviklet vår evne til kritisk tenkning. 

### 6.3 Fremtidig utvikling
- Prosjektet vårt viser hvordan KI allerede endrer måten programvare utvikles på. KI kan automatisere store deler av det repetitive arbeidet, generere kodeforslag og bistå i feilsøking, men dette forutsetter at utviklere beholder kontrollen over struktur, kvalitet og arkitektur. Rollen som utvikler blir derfor i større grad en kombinasjon av kurator, kvalitetskontrollør og problemløser. 
- Dette innebærer også nye kompetansekrav. Evnen til å formulere presise prompts, forstå begrensningene i KI-forslag, samt vurdere arkitektur og sikkerhet blir stadig viktigere. Samtidig forblir tradisjonelle ferdigheter som debugging, systemforståelse og sikkerhetstenkning helt nødvendige, fordi KI ikke oppfatter helheten og kan generere feil som kun menneskelig vurdering kan oppdage. 
- KI fungerer derfor best som et strategisk verktøy — et effektivt hjelpemiddel for å generere ideer, strukturere komplekse prosesser og automatisere rutiner. 

---

## 7. Konklusjon og læring

### 7.1 Viktigste lærdommer
1. Gjennom prosjektet har vi erfart at KI kan være en verdifull støtte, men at det krever aktiv innsats å forstå og kontrollere resultatene. KI leverer det den selv oppfatter som det beste alternativet, men det er ikke nødvendigvis det som passer for oss. Derfor er involvering i utviklingsprosessen essensielt.
2. En ryddig bruk av Git er avgjørende for å lykkes med samarbeidsprosjekter. Det er avgjørende å være nøye med å "committe" alle vellykkede endringer, og sørge for at man alltid jobber i en oppdatert kodebase. Dette innbærerer å alltid starte dagen med å hente ned endringer fra Github, samt å laste opp sine endringer etter dagens slutt.
3. Vi fikk innsikt i moderne utviklingsverktøy og teknologier vi ellers ikke ville klart å jobbe med uten KI, spesielt når det gjelder struktur, arbeidsflyt og prosjektoppsett.

### 7.2 Hva ville dere gjort annerledes?
- Hvis vi skulle startet på nytt, ville vi brukt mer tid i oppstarten på å forstå BMAD-strukturen, etablere tydelige samarbeidsrutiner og dokumentere KI-bruk mer systematisk. Dette ville gjort prosessen enda mer effektiv og oversiktlig. 
- Vi ser at Gemini i noen tilfeller ikke har klart å løse problemene vi hadde, og kunne derfor ønsket oss at prosjektet hadde blitt laget med Claude Code istedet.

### 7.3 Anbefalinger
- Vår anbefaling til andre studenter er å bruke KI aktivt, men med kritisk blikk. KI er et kraftfullt verktøy, men ikke en erstatning for forståelse. Det er viktig å lese gjennom filer KI genererer, teste alt, stille spørsmål og være nysgjerrig. 

### 7.4 Personlig refleksjon (individuelt)

**Hajar Al-Mohannah:**
- Her er min personlige refleksjon: Gjennom dette prosjektet har jeg opplevd en læringsreise som har vært både utfordrende og motiverende. Da vi startet, følte jeg at mye av det tekniske virket fremmed, og jeg var usikker på hvordan jeg skulle navigere i verktøy som Git, VS Code og alle dokumentene BMAD genererte. Etter hvert merket jeg at prosjektet ikke bare handlet om kode, men om å forstå arbeidsprosessen, samarbeidet og hvordan KI påvirket måten vi jobbet på. Selv om jeg ikke alltid satt med de mest avanserte tekniske oppgavene, var jeg aktiv i prosessen, og jeg lærte masse gjennom støtte, diskusjoner og praktiske oppgaver.
- På grunn av at jeg jobber på Mac, opplevde jeg flere ganger at ting fungerte annerledes hos meg enn hos resten av gruppen. Verktøy og installeringsprosesser oppførte seg ikke helt likt, og jeg fikk ofte andre typer feilmeldinger enn de andre. Dette gjorde at jeg måtte bruke ekstra tid på å forstå hvordan kommandoer og utviklingsverktøy oppfører seg på Mac, og jeg måtte lære å tilpasse meg løsninger som var spesifikke for mitt system. Selv om det var krevende, gjorde det at jeg ble mer selvstendig i problemløsingen og tryggere på å jobbe i et teknisk miljø hvor ting ikke alltid virker likt for alle.
- Git ble også en viktig del av læringen min. Det tok litt tid før jeg forstod hele flyten med commit–pull–merge, og hvorfor branching er nødvendig når mange jobber samtidig. Jeg lærte etter hvert at små, hyppige commits er mye tryggere enn store endringer på én gang, og at merging ikke bare er en knapp man trykker på – det er en prosess som krever oppmerksomhet. Når jeg møtte merge-konflikter, brukte jeg KI aktivt til å forstå hva som hadde skjedd, og hvordan jeg kunne løse det uten å miste arbeid. Denne erfaringen gjorde Git mindre skummelt og mer logisk etter hvert.
- KI spilte en stor rolle i min utvikling. KI hjalp meg med å forstå konsepter jeg ikke kjente, forklare feilmeldinger og lede meg gjennom oppgaver steg for steg. Likevel merket jeg at jeg lærte mest når jeg kombinerte KI med egen innsats. Hvis jeg først forsøkte å løse noe selv, og deretter brukte KI for å få bekreftelse eller forklaring, satt kunnskapen mye bedre. Prosjektet lærte meg derfor viktigheten av å bruke KI som støtte, ikke som en snarvei.
- Alt i alt har prosjektet gjort meg mye tryggere i tekniske prosesser. Jeg har lært å håndtere utfordringer med mer ro, jeg har fått bedre forståelse for arbeidsflyt i utviklingsprosjekter, og jeg føler at jeg har vokst både faglig og personlig. Det viktigste jeg tar med meg, er at selv om noe virker vanskelig i starten, kan man lære utrolig mye ved å prøve, feile og spørre om hjelp.

**Camilla Hagå-Huus:**
[Personlig refleksjon over egen læring og utvikling]

**Kim-Ove Reitan Hagerup:**
- Arbeidet med prosjektet i IBE160 har gitt meg en dypere forståelse av hvordan moderne webapplikasjoner bygges opp, og hvordan ulike tekniske komponenter henger sammen i en helhetlig løsning. Selv om jeg hadde god digital erfaring fra før, var programmering og fullstack‑utvikling områder jeg ønsket å lære mer om. Prosjektet ble derfor en praktisk inngang til både systemlogikk, feilsøking og bruk av KI‑støttede utviklingsverktøy.
- En viktig erfaring for meg var innsikten i kompleksiteten som oppstår når flere deler av et system utvikles samtidig. I teorien skulle arbeidet fordeles i egne branches, men i praksis oppstod det ofte feil som påvirket flere filer på tvers. E2E‑testene gjorde dette ekstra tydelig: én feil i backend kunne slå ut funksjonalitet i frontend, og en oppdatering som løste ett problem kunne samtidig skape nye utfordringer andre steder. Dette gjorde det vanskelig å delegere oppgaver på en effektiv måte, og viste meg hvor avgjørende det er at strukturen i prosjektet er stabil før man forsøker å jobbe mer selvstendig.
- Jeg oppdaget etter hvert at den mest læringsrike arbeidsformen for min del var å følge utviklingen direkte gjennom skjermdeling. Når jeg kunne observere hvordan endringer i kode påvirket systemet i sanntid, fikk jeg bedre forståelse av helheten enn jeg ville hatt ved å sitte alene fast i gjentatte konflikter. Å følge logikken, se feilmeldinger oppstå og bli løst, og kunne stille spørsmål underveis, ga meg et langt klarere bilde av hvordan API, database, autentisering og frontend må spille sammen for at anvendelsen skal fungere som tiltenkt.
- Selv om jeg gjerne skulle jobbet mer i egen branch, innså jeg at dette prosjektet krevde en annen tilnærming. Erfaringen har gjort meg mer bevisst på hvordan man best lærer i praksis: gjennom kombinasjonen av observasjon, egen prøving, diskusjon og gradvis forståelse av systemets struktur. Jeg erfarte samtidig hvor krevende Git kan være i større prosjekter, men også hvor viktig det er. Etter hvert ble jeg tryggere på merging, konflikthåndtering og rutiner rundt synkronisering, noe som har gitt meg et godt fundament å bygge videre på.
- Bruken av KI‑verktøy har også preget læringsprosessen. KI var et effektivt støtteverktøy, men krevde samtidig kritisk vurdering. Noen ganger foreslo KI gode løsninger, andre ganger måtte forslagene tilpasses eller forkastes. Dette gjorde meg mer bevisst på at KI er et hjelpemiddel – ikke en erstatning for forståelse. Å lese, vurdere og teste alle endringer selv var nødvendig for å sikre at prosjektet utviklet seg i riktig retning.
- Den viktigste lærdommen jeg tar med meg fra IBE160, er evnen til å se helheten i en fullstack‑løsning. Jeg forstår nå bedre hvordan krav, arkitektur, databaser, API‑er, autentisering og frontend utgjør deler av én sammenhengende struktur. Prosjektet har motivert meg til å utvikle mer avanserte løsninger fremover, både faglig og i egne kreative teknologiprosjekter. Alt i alt har faget gitt meg både tekniske ferdigheter, bedre systemforståelse og en klarere retning for hvordan jeg ønsker å jobbe videre med digitale løsninger.

**Eirik Lyder Bredland:**
- I dette faget har jeg fått et større læringsutbytte enn jeg så for meg ved starten av semesteret. Jeg tenkte at vi skulle lære hvordan man ber KI om å skrive kode men læringen jeg sitter igjen med er  definitivt mye mer enn selve kodingen. Her har jeg lært om hele prosessen med utvikling, helt fra brainstorming rundt et prosjekt, og  gjennom de ulike utviklingsfasene helt frem til et lansert produkt. Jeg har lært hvordan et softwareprosjekt bygges opp, og hvordan å bruke KI og BMAD rammeverket som en støtte i et slikt prosjekt. En meget viktig lærdom har vært å bruke og styre KI fremfor å la KI ta over hele styringen, for selv om KI har mye kunnskap og gode prosesser er det til syvende og sist vår egen involvering som avgjør sluttproduktet.
- Siden vi jobber med et relativt nytt fagfelt er det selvsagt forventet at det vil komme endringer underveis i undervisningen. Det som jeg derimot ikke var forberedt på, og som til tider opplevdes noe frustrerende var omfanget av endringer i rammeverket som vi jobbet i (BMAD-method). Disse endringene førte til at det til tider ble noe vanskeligere å holde seg oppdatert på hva som til enhver tid var neste steg i prosessen, men med god veiledning fra både faglærer og hjelpelærer, samt en god dose prøv og feil, kom vi i mål til slutt.
- Gruppearbeid som arbeidsform kan være både utfordrende og givende på samme tid. Jeg tok tidlig en slags rolle som «teamleder» i gruppen, og sørget for å samle teamet i felles samarbeidsmøter på Teams, der vi i fellesskap jobbet oss gjennom de ulike oppgavene, slik at alle fikk være delaktige i utviklingsarbeidet. Gjennom å veilede andre har jeg selv følt at jeg har lært enda mer om prosessene vi har gjennomgått. Selv om jeg fra tidligere hadde erfaring med bruken av GIT måtte jeg nå lære meg hvordan dette skulle brukes i teamarbeid.
-Undervisningsformen i dette faget, med både live-streaming og opptak, passer meg midt i blinken siden jeg studerer ved siden av full jobb. Min arbeidssituasjon har gjort at jeg har klart å få med meg de fleste forelesinger live via streaming, og de som jeg ikke har kunnet delta i har jeg sett i etterkant. Ulempen med å se i etterkant er at man da ikke har mulighet til å stille oppklarende spørsmål på direkten. 
- Totalt sett opplevdes IBE160 - Programmering med KI som et spennende fag, og med et definitivt læringsutbytte som vil komme til god anvendelse i forbindelse med mine andre prosjekter. Parallellt med dette kurset har jeg ved hjelp av lærdom fra faget klart å videreutvikle nettsiden som jeg er webmaster for, samt startet et utviklingsprosjekt der jeg allerede har publisert et web-basert spill, med målsetting om å etter hvert lansere dette som en egen app. 

---

## 8. Vedlegg (valgfritt)

- Link til Github repository
    * https://github.com/IBE160/SG-Nettgrupp1

- Skjermbilder av applikasjonen
    1. \screenshots\home_top.JPG
    2. \screenshots\home_bottom.JPG
    3. \screenshots\products.JPG
    4. \screenshots\products_details.JPG
    5. \screenshots\shopping_cart.JPG
    6. \screenshots\checkout.JPG
    7. \screenshots\order_confirmation.JPG
    8. \screenshots\admin_login.JPG
    9. \screenshots\admin_products.JPG
    10. \screenshots\admin_products_edit.JPG
    11. \screenshots\admin_orders.JPG
    12. \screenshots\admin_order_details.JPG
    13. \screenshots\cmd_logging.JPG

-Skjermbilde av epostbekreftelser
    * \screenshots\epost_resend.jpg


---

**Ordantall:** 3504

**Forventet lengde:** 3000-5000 ord (avhengig av gruppestørrelse og prosjektets kompleksitet)