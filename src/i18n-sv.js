'use strict';
// Swedish text for i18n.js: interface strings, static page text, the long page views, and service data.
const LOCALE_SV = {
 "ui": {
  "meta.description": "Utforska tjänster i Windows 11 och användbara verktyg, förstå hur ändringar påverkar integritet och prestanda, och bygg ett PowerShell-skript med instruktioner för säkerhetskopiering och återställning.",
  "title.directory": "Winwise — guide till tjänster i Windows 11",
  "title.builder": "Skriptbyggare för PowerShell — Winwise",
  "title.tools": "Användbara verktyg för Windows 11 — Winwise",
  "title.backup": "Alternativ för säkerhetskopiering i Windows 11 — Winwise",
  "title.repair": "Reparationsalternativ i Windows 11 — Winwise",
  "skip.directory": "Gå till tjänsterna",
  "skip.builder": "Gå till skriptbyggaren",
  "skip.tools": "Gå till användbara verktyg",
  "skip.backup": "Gå till alternativen för säkerhetskopiering",
  "skip.repair": "Gå till reparationsalternativen",
  "category.all.name": "Alla tjänster",
  "category.all.description": "Möjliga kandidater, avvägningarna och det nödvändiga som du bör låta vara.",
  "category.privacy.name": "Integritet och telemetri",
  "category.privacy.description": "Styr datainsamling och anslutna funktioner i inställningarna först.",
  "category.performance.name": "Prestanda",
  "category.performance.description": "Granska indexering, cachelagring, nedladdningar och spelinspelning.",
  "category.optional.name": "Valfria funktioner",
  "category.optional.description": "Inaktivera en funktion bara när du förstår den och inte använder den.",
  "category.essential.name": "Nödvändiga",
  "category.essential.description": "Bevara säkerhet, uppdateringar, anslutning och grundläggande Windows-funktioner.",
  "status.conditional": "Kan inaktiveras om den inte används",
  "status.settings": "Använd Windows-inställningar",
  "status.keep": "Låt vara aktiverad",
  "risk.badge": "Kan förhindra start eller inloggning",
  "risk.defaultCondition": "Ett kritiskt beroende i Windows",
  "risk.excluded": "Ingår inte i skriptbyggaren.",
  "settings.heading": "Ändra funktionen i Windows-inställningar",
  "settings.open": "Öppna Windows-inställningar",
  "settings.note": "Öppna länken på din Windows-dator. Om webbläsaren inte öppnar Inställningar följer du sökvägen ovan; namnen kan variera mellan Windows-versioner.",
  "settings.builderNote": "En ändring på tjänstnivå finns också som ett aktivt val i skriptbyggaren. Granska först de bredare effekterna.",
  "directory.resultCount": "Visar <b>{shown}</b> av {total} tjänster",
  "row.risk": "Kan förhindra start eller inloggning.",
  "row.viewDetails": "Visa detaljer",
  "dialog.serviceDetails": "TJÄNSTDETALJER",
  "details.copyName": "Kopiera tjänstens namn",
  "details.checkBuild": "Kontrollera din Windows-version",
  "details.when": "När du kan överväga en ändring",
  "details.changes": "Vad som ändras",
  "details.recommendation": "Vår rekommendation",
  "details.perUserHeading": "Det här är en tjänst per användare",
  "details.perUserText": "Windows lägger till ett sessionssuffix till tjänstens namn. Sådana tjänster ingår inte i genererade skript; använd funktionens inställningar i stället.",
  "details.configHeading": "Kontrollera datorns nuvarande konfiguration",
  "details.configText": "Standardstarttypen beror på version och installerade funktioner. ”Manuellt” kan betyda att Windows startar tjänsten vid behov. Kontrollera fliken Beroenden innan du ändrar något.",
  "details.selectedOpenBuilder": "Vald — öppna skriptbyggaren",
  "details.addToScript": "Lägg till i mitt skript",
  "details.reference": "Microsofts dokumentation",
  "details.howToChange": "Så ändrar och återställer du",
  "copy.command": "Kopiera kommandot",
  "copy.script": "Kopiera skriptet",
  "copy.done": "Kopierat",
  "restorePoint.prefix": "Skapa en återställningspunkt först →",
  "restorePoint.link": "Så skapar du en återställningspunkt",
  "guide.eyebrow": "GUIDE FÖR ÄNDRINGAR",
  "guide.title": "Gör ändringar som du kan ångra.",
  "guide.lead": "Välj tjänster i skriptbyggaren och ladda ned ett PowerShell-skript som gör ändringarna automatiskt när du kör det. Skriptet sparar de ursprungliga inställningarna och kan återställa dem.",
  "guide.openBuilder": "Öppna skriptbyggaren",
  "guide.runUndo": "Så kör och ångrar du",
  "guide.manualHeading": "Vill du hellre ändra manuellt?",
  "guide.step1.title": "Anteckna utgångsläget",
  "guide.step1.text": "Tryck på Win + R, skriv <code>services.msc</code> och öppna tjänsten. Anteckna starttyp, inställning för fördröjd start och om tjänsten körs. Kontrollera fliken Beroenden. Säkerhetskopiera viktiga filer innan du felsöker.",
  "guide.step2.title": "Använd funktionens egen inställning först",
  "guide.step2.text": "Använd Windows-inställningar för diagnostikdata, plats, indexeringens omfattning och spelinspelningar. En stoppad tjänst använder kanske redan inga nämnvärda resurser.",
  "guide.step3.title": "Inaktivera en oanvänd valfri tjänst",
  "guide.step3.text": "Välj Inaktiverad och stoppa tjänsten. Behåll nödvändiga tjänster med sina nuvarande standardinställningar.",
  "guide.step4.title": "Använd datorn som vanligt",
  "guide.step4.text": "Se om dina vanliga appar och enheter fungerar som de ska. Om en funktion du behöver slutar fungera återställer du starttypen du antecknade, startar tjänsten om den kördes och startar om Windows vid behov.",
  "guide.automatic.title": "Automatiskt",
  "guide.automatic.text": "Startar med Windows, ibland efter en fördröjning.",
  "guide.manual.title": "Manuellt",
  "guide.manual.text": "Kan starta när Windows eller en app behöver den.",
  "guide.disabled.title": "Inaktiverad",
  "guide.disabled.text": "Kan inte starta förrän inställningen ändras.",
  "guide.managedHeading": "På en dator som hanteras av en organisation",
  "guide.managedText": "Följ organisationens regler för enheter. Generatorn är avsedd för ändringar som du har behörighet att göra.",
  "sources.eyebrow": "OMFATTNING OCH KÄLLOR",
  "sources.title": "Omfattningen bakom råden.",
  "sources.lead": "{count} granskade tjänster, bland annat vanliga kandidater för inaktivering och nödvändiga tjänster. Det här är en urvalsguide, inte en fullständig förteckning över alla Windows-installationer.",
  "inventory.eyebrow": "LOKAL TJÄNSTFÖRTECKNING",
  "inventory.title": "Se vad som finns på din dator.",
  "inventory.lead": "Öppna Windows PowerShell och kör det här skrivskyddade kommandot för att lista installerade tjänster och deras nuvarande starttyper.",
  "inventory.matchHeading": "Matcha tjänstens namn",
  "inventory.matchText": "Använd kolumnen Name för att söka i katalogen. Instanser per användare har ett extra suffix. Låt tjänster som inte beskrivs här ha kvar sina nuvarande standardinställningar tills du vet vad de gör och vilka beroenden de har.",
  "inventory.note": "Kommandot visar bara information lokalt. Det ändrar inga inställningar och laddar inte upp något.",
  "run.eyebrow": "INSTRUKTIONER FÖR POWERSHELL",
  "run.title": "Kör, granska och ångra.",
  "run.lead": "Nedladdningen är ett läsbart skript för Windows PowerShell 5.1 eller senare. Granska det och börja med en testkörning på din dator.",
  "run.step1.title": "Spara och granska skriptet",
  "run.step1.text": "Ladda ned <code>Winwise-Services.ps1</code>. Öppna filen i en textredigerare och granska <code>$SelectedServices</code>. Spara filen i en mapp som du hittar igen.",
  "run.step2.title": "Öppna PowerShell som administratör",
  "run.step2.text": "Öppna mappen med det nedladdade skriptet i Utforskaren och kopiera hela sökvägen från adressfältet. Sök efter Windows PowerShell, högerklicka och välj Kör som administratör. Ersätt exempelmappen nedan med sökvägen du kopierade:",
  "run.step2.note": "Använd den faktiska mappen, även om mappen Hämtade filer är omdirigerad eller ligger på en annan plats. Med administratörsskydd aktiverat kan ett fönster med utökad behörighet använda en separat profil, så <code>$env:USERPROFILE</code> pekar kanske inte på dina nedladdade filer.",
  "run.step3.title": "Tillåt den granskade filen i den här sessionen",
  "run.step3.text": "Om Windows blockerar den nedladdade filen avblockerar du den efter granskningen. RemoteSigned nedan gäller bara den aktuella PowerShell-processen. Den kan inte åsidosätta organisationens principer.",
  "run.step3.note": "Om bekräftelsen <strong>Ändring av körningsprincip (Execution Policy Change)</strong> visas skriver du bokstaven för ”Ja” (i svenska Windows oftast <kbd>J</kbd>, i engelska Y) och trycker på <kbd>Retur</kbd>. Ändringen gäller i den aktuella PowerShell-sessionen tills du stänger fönstret. Du kan förhandsgranska, tillämpa och ångra i samma session; i ett nytt fönster kan du behöva köra kommandona igen.",
  "run.step4.title": "Förhandsgranska innan du tillämpar",
  "run.step4.text": "Förhandsgranskningen visar planerade ändringar utan att stoppa tjänster eller skriva någon säkerhetskopia. Tjänster som saknas, är inaktiverade eller blockerade kan hoppas över.",
  "run.step5.title": "Tillämpa och testa",
  "run.step5.text": "Kör skriptet lokalt vid datorn, särskilt om du har valt tjänster för Fjärrskrivbord. Skriptet skriver en ny säkerhetskopia bredvid sig själv innan något ändras. Läs varningarna och spara sökvägen till säkerhetskopian som visas. Starta om och testa dina vanliga appar.",
  "run.step6.title": "Återställ dina tidigare inställningar",
  "run.step6.text": "Använd samma skript och exakt det filnamn för säkerhetskopian som visades när du körde det. Ersätt exemplet nedan. Starttyperna återställs först; därefter försöker skriptet återställa tidigare körnings- eller stoppläge. Läs varningarna och starta om vid behov.",
  "run.backupHeading": "Behåll den första säkerhetskopian",
  "run.backupText": "Varje körning som tillämpar ändringar skriver en separat säkerhetskopia. En senare kopia kan innehålla inställningar som redan ändrats vid en tidigare körning. JSON-filen är en ögonblicksbild av tjänstinställningarna, inte en fullständig säkerhetskopia av systemet. Redigera den inte och använd inte en fil från en annan dator.",
  "run.docs": "PowerShell-dokumentation om tjänster",
  "feature.eyebrow": "TJÄNSTER I DET HÄR VALET",
  "feature.lead": {
   "one": "Det här valet omfattar {n} tjänst. Öppna en tjänst för att se vad den gör och vad du kan förlora.",
   "other": "Det här valet omfattar {n} tjänster. Öppna en tjänst för att se vad den gör och vad du kan förlora."
  },
  "builder.settingsFirst": "Rekommenderas först: Windows-inställningar",
  "builder.sysmain.title": "Prova att inaktivera SysMain",
  "builder.sysmain.text": "För felsökning av ihållande aktivitet från SysMain. Appar kan starta långsammare.",
  "builder.wsearch.title": "Inaktivera Windows Search och Arbetsmappar",
  "builder.wsearch.text": "Jag accepterar långsammare eller ofullständiga sökningar i indexerade filer och i klassiska Outlook. Work Folders väljs också och dess filsynkronisering med organisationen stoppas; välj detta bara om du inte använder funktionen.",
  "builder.diagtrack.title": "Inaktivera DiagTrack i stället",
  "builder.diagtrack.text": "Jag accepterar att den här diagnostikkomponenten inaktiveras. Felrapportering och appar har egna inställningar.",
  "builder.readMore": "Läs mer",
  "builder.alsoSelects": "Väljer också {names}; dess filsynkronisering med organisationen stoppas.",
  "builder.disableInstead": "Inaktivera tjänsten i stället: ",
  "builder.settingsGroup": "Tjänster där Windows-inställningar rekommenderas",
  "builder.label": "DIN DATOR. DINA VAL.",
  "builder.title": "Bygg ditt PowerShell-skript<span>.</span>",
  "builder.lead": "Välj en konfiguration med några klick, granska varje tjänst och ladda sedan ned ett PowerShell-skript som går att ångra.",
  "builder.back": "← Tillbaka till katalogen",
  "builder.presetTitle": "En försiktig startpunkt",
  "builder.presetText": "Remote Registry, Fax och Retail Demo. Granska först de här antagandena; tjänsterna kan redan vara avstängda.",
  "builder.usePreset": "Använd förval",
  "builder.step1.title": "Vad använder du inte?",
  "builder.step1.text": "Klicka på alternativen som passar den här datorn. Winwise väljer de tillhörande tjänsterna till ditt skript.",
  "builder.serviceCount": {
   "one": "{n} tjänst",
   "other": "{n} tjänster"
  },
  "builder.serviceCountView": {
   "one": "{n} tjänst · Visa",
   "other": "{n} tjänster · Visa"
  },
  "builder.serviceCountLabel": {
   "one": "Visa {n} tjänst som ingår i {title}",
   "other": "Visa {n} tjänster som ingår i {title}"
  },
  "builder.step2.title": "Överväg avvägningarna",
  "builder.step2.text": "Prova den rekommenderade vägen via Inställningar först. Att inaktivera en tjänst är ett aktivt val utanför det försiktiga förvalet.",
  "builder.pickerSummary": "Välj enskilda tjänster",
  "builder.pickerCount": "{n} tillgängliga",
  "builder.pickerText": "Finjustera urvalet. Klicka på Läs mer för att se samma avvägningar och rekommendationer som i tjänstkatalogen.",
  "builder.boundary": "Tjänster märkta ”Kan förhindra start eller inloggning” ingår inte i skriptbyggaren. Säkerhet, uppdateringar, andra centrala Windows-tjänster och mallar för tjänster per användare är också undantagna.",
  "builder.summaryTitle": "03 · GRANSKA OCH LADDA NED",
  "builder.selection": "Ditt urval",
  "builder.clear": "Rensa",
  "builder.dryRun": "Testkörning med <code>-WhatIf</code>",
  "builder.savedFirst": "Ursprungliga inställningar sparas först",
  "builder.restore": "Återställ från din säkerhetskopia",
  "builder.download": "Ladda ned PowerShell-skript",
  "builder.preview": "Förhandsgranska skriptet",
  "builder.runUndo": "Så kör och ångrar du",
  "builder.expectation": "Skriptet hoppar över tjänster som saknas eller redan är inaktiverade och undviker att tvångsstoppa beroende tjänster.",
  "builder.featuresIntro": "Varje genererat skript har de här skydden inbyggda:",
  "builder.includedWithKeep": "Ingår tillsammans med {names}. Ta bort det valet först om du vill behålla den här tjänsten.",
  "builder.includedWith": "Ingår tillsammans med {names}",
  "builder.selectedCount": {
   "one": "<strong>{n}</strong> tjänst vald",
   "other": "<strong>{n}</strong> tjänster valda"
  },
  "builder.removeFirst": "Ta bort {parents} först för att behålla {name}",
  "builder.remove": "Ta bort {name}",
  "builder.empty": "Börja med funktionerna du inte använder, eller välj det försiktiga förvalet.",
  "builder.templateError": "Skriptet kunde inte läsas in. Läs in sidan igen och försök på nytt.",
  "builder.templateLoading": "Läser in PowerShell-mallen…",
  "builder.templateReady": "Windows PowerShell 5.1+ · .ps1-fil",
  "preview.eyebrow": "FÖRHANDSGRANSKNING AV SKRIPTET",
  "preview.title": "Ditt PowerShell-skript.",
  "preview.lead": {
   "one": "{n} vald tjänst. Granska namnen och beteendet innan du kör skriptet. Inget körs från den här webbplatsen.",
   "other": "{n} valda tjänster. Granska namnen och beteendet innan du kör skriptet. Inget körs från den här webbplatsen."
  },
  "preview.download": "Ladda ned .ps1",
  "preview.runUndo": "Instruktioner för att köra och ångra",
  "toast.downloaded": "Skriptet har laddats ned. Läs instruktionerna för att köra och ångra.",
  "toast.copied": "Kopierat till Urklipp.",
  "toast.copyUnavailable": "Kopiering är inte tillgänglig här. Markera texten och kopiera den manuellt.",
  "toast.preset": "Förval valt: Remote Registry, Fax och Retail Demo.",
  "toast.scriptError": "Skriptet kunde inte skapas. Läs in sidan igen och försök på nytt.",
  "theme.switchToLight": "Byt till ljust läge",
  "theme.switchToDark": "Byt till mörkt läge",
  "theme.light": "Ljust läge",
  "theme.dark": "Mörkt läge",
  "motion.pause": "Pausa bakgrundsanimationen",
  "motion.resume": "Återuppta bakgrundsanimationen",
  "motion.reduced": "Bakgrunden är pausad på grund av din inställning för minskade rörelser",
  "language.label": "Språk",
  "count.total": {
   "one": "tjänst förklarad",
   "other": "tjänster förklarade"
  },
  "count.launch": {
   "one": "tjänst, förklarad",
   "other": "tjänster, förklarade"
  }
 },
 "static": {
  "nav.directory": "Tjänstkatalog",
  "nav.builder": "Skriptbyggare <span class=\"nav-pill\">PS</span>",
  "nav.guide": "Så gör du ändringar <span aria-hidden=\"true\">↗</span>",
  "nav.tools": "Användbara verktyg",
  "nav.backup": "<span><span class=\"nav-backup\">Säkerhetskopiering</span></span>",
  "nav.repair": "<span><span class=\"nav-repair\">Reparation</span></span>",
  "intro.eyebrow": "<span class=\"tiny-line\"></span>LITE MINDRE I BAKGRUNDEN",
  "intro.title": "Tjänster i Windows 11<span>.</span>",
  "intro.copy": "Ta reda på vad du kan stänga av. Förstå vad som i onödan kan göra datorn långsammare.",
  "intro.build": "<span data-icon=\"terminal\"></span>Bygg ett PowerShell-skript <span aria-hidden=\"true\">↗</span>",
  "intro.buildNote": "Välj tjänster i skriptbyggaren och ladda sedan ned skriptet.",
  "intro.updated": "Uppdaterad",
  "launch.eyebrow": "<span></span>GUIDEN TILL TJÄNSTER I WINDOWS 11",
  "launch.title": "Vet vad som körs.<br><span>Välj vad som stannar.</span>",
  "launch.description": "Ta kontroll över bakgrundstjänster. Se vad de gör, vilka du kan inaktivera om du inte använder dem och vilka funktioner som är beroende av dem.",
  "launch.settings": "Använd genvägar till Windows-inställningar där de finns, med tydliga steg för att aktivera eller inaktivera tjänster.",
  "launch.note": "Utforska tjänstkatalogen",
  "launch.tagline": "FÖRSTÅ · VÄLJ · STYR",
  "overview.annotation": "Ett ställe för att förstå<br>vad som körs.",
  "overview.privacy": "<strong>Integritet</strong><span>Begränsa data och anslutna funktioner</span>",
  "overview.performance": "<strong>Prestanda</strong><span>Granska aktivitet i bakgrunden</span>",
  "sidebar.browse": "BLÄDDRA BLAND TJÄNSTER",
  "sidebar.noteTitle": "Små ändringar.<br>En i taget.",
  "sidebar.noteText": "Många tjänster startar bara när de behövs. Färre tjänster som körs betyder inte automatiskt en snabbare dator.",
  "sidebar.guide": "Läs guiden för ändringar <span aria-hidden=\"true\">↗</span>",
  "sidebar.about": "<span data-icon=\"book\"></span>Om den här guiden",
  "directory.sortLabel": "Sortera tjänster",
  "directory.sortRecommended": "Föreslagen ordning",
  "directory.sortAz": "Namn: A–Ö",
  "directory.sortZa": "Namn: Ö–A",
  "filter.all": "Alla rekommendationer",
  "filter.conditional": "<span class=\"key-mark amber\"></span>Kan inaktiveras om den inte används",
  "filter.settings": "<span class=\"key-mark purple\"></span>Använd reglaget i Inställningar i stället",
  "filter.settingsTooltip": "Stäng av funktionen i Windows-inställningar i stället för att inaktivera tjänsten.",
  "filter.keep": "<span class=\"key-mark gray\"></span>Låt vara aktiverad",
  "directory.contextNote": "<strong>Det finns ingen universell lista över tjänster att inaktivera.</strong> Tillgängligheten beror på utgåva, version och maskinvara. Det här är villkorade rekommendationer, inte en genomsökning av din dator.",
  "directory.selectHint": "VÄLJ EN TJÄNST FÖR ATT SE AVVÄGNINGARNA",
  "table.service": "TJÄNST",
  "table.recommendation": "REKOMMENDATION",
  "table.description": "VAD DEN GÖR",
  "empty.title": "Inga tjänster hittades",
  "empty.text": "Prova ett annat namn eller rensa filtren.",
  "empty.reset": "Rensa filter",
  "directory.inventory": "Letar du efter alla tjänster som är installerade på datorn? <button data-dialog=\"inventory\">Visa din lokala tjänstlista <span aria-hidden=\"true\">↗</span></button>",
  "footer.note": "Oberoende guide. Inte kopplad till Microsoft.",
  "footer.sources": "Omfattning och källor <span aria-hidden=\"true\">↗</span>",
  "header.home": "Winwise startsida",
  "header.mainNav": "Huvudnavigering",
  "header.resources": "Verktyg och återställning",
  "language.label": "Språk",
  "overview.label": "Översikt över guiden",
  "overview.allLabel": "Visa alla tjänster",
  "sidebar.label": "Katalogfilter",
  "sidebar.categories": "Tjänstkategorier",
  "directory.searchPlaceholder": "Sök på tjänstens namn eller syfte…",
  "directory.searchLabel": "Sök tjänster",
  "directory.filterLabel": "Filtrera efter rekommendation",
  "dialog.close": "Stäng detaljer"
 },
 "pages": {
  "tools": "\n      <div class=\"tools-heading\"><div><h1 id=\"tools-title\" tabindex=\"-1\">Användbara verktyg för Windows 11<span>.</span></h1><p>Gör vardagliga uppgifter enklare, hitta filer snabbare och förstå vad som körs på datorn.</p></div><a class=\"tools-directory-link\" href=\"#directory\" data-view=\"directory\"><span aria-hidden=\"true\">←</span> Tillbaka till tjänsterna</a></div>\n      <div class=\"tools-grid\">\n        <article class=\"tool-card tool-card-featured\" aria-labelledby=\"tool-powertoys\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"sliders\"></span><span class=\"tool-category\">Vardaglig produktivitet</span><span class=\"tool-pick\">Börja här</span></div>\n          <h3 id=\"tool-powertoys\">Microsoft PowerToys</h3><p class=\"tool-publisher\">Microsoft Corporation · Gratis och öppen källkod</p>\n          <p>Ordna fönster med FancyZones, byt namn på många filer samtidigt med PowerRename och förhandsgranska filer med Peek. En samling användbara tillägg till Windows.</p>\n          <p class=\"tool-detail\">Välj vilka verktyg som ska vara aktiverade i inställningarna för PowerToys.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://apps.microsoft.com/detail/xp89dcgq3k6vld\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta PowerToys <span data-icon=\"external\"></span></a><a href=\"https://learn.microsoft.com/en-us/windows/powertoys/\" target=\"_blank\" rel=\"noopener noreferrer\">Microsofts guide</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-everything\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"search\"></span><span class=\"tool-category\">Hitta filer</span></div>\n          <h3 id=\"tool-everything\">Everything</h3><p class=\"tool-publisher\">voidtools</p>\n          <p>Hitta filer och mappar efter namn medan du skriver. Praktiskt när du minns ett filnamn men inte var du sparade filen.</p>\n          <p class=\"tool-detail\">Inriktat på filnamn. Behåll Windows Search för Outlook och andra funktioner som är beroende av dess index.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://www.voidtools.com/downloads/\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta Everything <span data-icon=\"external\"></span></a><a href=\"https://www.voidtools.com/support/everything/\" target=\"_blank\" rel=\"noopener noreferrer\">Officiell guide</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-sharex\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"monitor\"></span><span class=\"tool-category\">Fånga och förklara</span></div>\n          <h3 id=\"tool-sharex\">ShareX</h3><p class=\"tool-publisher\">ShareX-teamet · Gratis och öppen källkod</p>\n          <p>Ta skärmbilder och lägg till anteckningar, spela in skärmen eller en GIF och skapa genvägar för inspelningar som du gör ofta.</p>\n          <p class=\"tool-detail\">Gå igenom aktiviteterna efter inspelning för att välja om bilderna och inspelningarna ska stanna lokalt eller laddas upp.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://getsharex.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta ShareX <span data-icon=\"external\"></span></a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-nanazip\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"cube\"></span><span class=\"tool-category\">Arbeta med arkiv</span></div>\n          <h3 id=\"tool-nanazip\">NanaZip</h3><p class=\"tool-publisher\">M2-Team · Öppen källkod</p>\n          <p>Ett arkivprogram baserat på 7-Zip, med integrering i högerklicksmenyn i Windows 11 och stöd för många arkivformat.</p>\n          <p class=\"tool-detail\">Välj den stabila versionen av NanaZip för vardagligt bruk.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://apps.microsoft.com/detail/9n8g7tscl18r\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta NanaZip <span data-icon=\"external\"></span></a><a href=\"https://github.com/M2Team/NanaZip\" target=\"_blank\" rel=\"noopener noreferrer\">Officiellt projekt</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-process-explorer\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"gauge\"></span><span class=\"tool-category\">Förstå processer</span></div>\n          <h3 id=\"tool-process-explorer\">Process Explorer</h3><p class=\"tool-publisher\">Microsoft Sysinternals</p>\n          <p>Titta närmare på processer som körs och de filer som de har läst in. Ta reda på vilket program som håller en fil öppen när Windows inte låter dig flytta eller ta bort den.</p>\n          <p class=\"tool-detail\">Praktiskt för att undersöka en okänd bakgrundsprocess innan du bestämmer vad du ska ändra.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta Process Explorer <span data-icon=\"external\"></span></a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-autoruns\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"terminal\"></span><span class=\"tool-category\">Granska autostart · Avancerat</span></div>\n          <h3 id=\"tool-autoruns\">Autoruns</h3><p class=\"tool-publisher\">Microsoft Sysinternals</p>\n          <p>Se vad som startar automatiskt, bland annat poster vid inloggning, schemalagda aktiviteter, tjänster och tillägg för Utforskaren.</p>\n          <p class=\"tool-detail\">Använd Hide Signed Microsoft Entries för att fokusera på poster från tredje part. Granska varje post innan du inaktiverar den.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta Autoruns <span data-icon=\"external\"></span></a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-warp\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"terminal\"></span><span class=\"tool-category\">Arbeta i terminalen</span></div>\n          <h3 id=\"tool-warp\">Warp</h3><p class=\"tool-publisher\">Warp</p>\n          <p>Kör PowerShell-kommandon i en modern terminal med flikar, delade fönsterrutor och kommandoutdata grupperade i block. Inbyggd AI kan hjälpa till med uppgifter på kommandoraden.</p>\n          <p class=\"tool-detail\">Stöder både Windows PowerShell och PowerShell 7. Välj det skal du föredrar i Warps inställningar.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://www.warp.dev/download\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta Warp <span data-icon=\"external\"></span></a><a href=\"https://docs.warp.dev/getting-started/migrate-to-warp/migrate-to-warp-from-windows-terminal\" target=\"_blank\" rel=\"noopener noreferrer\">Guide för Windows</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-zed\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"keyboard\"></span><span class=\"tool-category\">Redigera kod</span></div>\n          <h3 id=\"tool-zed\">Zed</h3><p class=\"tool-publisher\">Zed Industries</p>\n          <p>En inbyggd kodredigerare som är gjord för snabb redigering och samarbete. Använd språktillägg, navigera i projekt och använd kodagenter i redigeraren.</p>\n          <p class=\"tool-detail\">Med det inbyggda stödet för WSL kan du redigera projekt i en Linux-miljö från Windows.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://zed.dev/download\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta Zed <span data-icon=\"external\"></span></a><a href=\"https://zed.dev/windows\" target=\"_blank\" rel=\"noopener noreferrer\">Zed i Windows</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-localsend\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"network\"></span><span class=\"tool-category\">Dela mellan enheter</span></div>\n          <h3 id=\"tool-localsend\">LocalSend</h3><p class=\"tool-publisher\">LocalSend · Gratis och öppen källkod</p>\n          <p>Skicka foton, filer och text mellan datorn och telefoner eller datorer i närheten via ditt lokala nätverk. Ingen uppladdning till molnet och inget konto behövs.</p>\n          <p class=\"tool-detail\">Installera appen på båda enheterna och anslut dem till samma lokala nätverk. Fungerar i Windows, macOS, Linux, Android och iOS.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://localsend.org/download\" target=\"_blank\" rel=\"noopener noreferrer\">Hämta LocalSend <span data-icon=\"external\"></span></a><a href=\"https://localsend.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Så fungerar det</a></div>\n        </article>\n      </div>\n      <p class=\"tools-reviewed\">Det ursprungliga urvalet kontrollerades <time datetime=\"2026-09-25\">25 september 2026</time>. Warp, Zed och LocalSend kontrollerades mot officiella källor <time datetime=\"2026-10-04\">4 oktober 2026</time>.</p>\n    ",
  "backup": "\n      <div class=\"backup-heading\"><p class=\"eyebrow\"><span class=\"tiny-line\"></span>SPARA EN KOPIA</p><h1 id=\"backup-title\" tabindex=\"-1\">Alternativ för <span>säkerhetskopiering</span> i Windows 11<span>.</span></h1><p class=\"backup-lead\">En enhet kan gå sönder, en bärbar dator kan försvinna och filer kan tas bort av misstag. En säkerhetskopia är en separat kopia som du kan hämta tillbaka dina filer från. Den här sidan gäller bara Windows 11.</p></div>\n      <div class=\"backup-panel\">\n        <section class=\"backup-section\" aria-labelledby=\"backup-overview-title\">\n          <div class=\"backup-section-heading\"><h2 id=\"backup-overview-title\">Vad letar du efter?</h2></div>\n          <div class=\"backup-comparison backup-entry\">\n            <div>\n              <span class=\"backup-type backup-type-files\">Filer</span>\n              <h3>Säkerhetskopiera bara mina personliga filer</h3>\n              <p>Dokument, foton och andra personliga filer, sparade någon annanstans än på datorn.</p>\n              <ul class=\"backup-entry-links\">\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"windows-backup-title\">Windows-säkerhetskopiering och OneDrive <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Inbyggd i Windows. Synkroniserar mapparna du väljer till OneDrive och sparar inställningarna och applistan med ditt Microsoft-konto.</span></li>\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"file-history-title\">Filhistorik <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Inbyggd i Windows. Kopierar dina filer till en extern enhet och sparar tidigare versioner.</span></li>\n              </ul>\n            </div>\n            <div>\n              <span class=\"backup-type backup-type-points\">Hela datorn</span>\n              <h3>Säkerhetskopiera hela enheten</h3>\n              <p>Windows, appar, inställningar och filer i en enda diskavbild, så att du kan få tillbaka datorn efter ett enhetsfel eller ett virus.</p>\n              <ul class=\"backup-entry-links\">\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"disk-image-title\">Diskavbild med Rescuezilla <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Gratis program med öppen källkod som körs från ett USB-minne. Sparar hela enheten som en avbildning på en annan enhet.</span></li>\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"veeam-title\">Automatisk diskavbild med Veeam Agent FREE <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Gratis program från Veeam som körs i Windows. Säkerhetskopierar hela enheten enligt ett schema och kopierar bara ändringar efter den första gången.</span></li>\n              </ul>\n            </div>\n          </div>\n          <p>Återställningspunkter är inte säkerhetskopior. De sparar ingen separat kopia av dina filer, och de hjälper inte om enheten går sönder. <a href=\"#repair\" data-view=\"repair\" data-backup-jump=\"system-restore-title\">Återställningspunkter finns på sidan om reparation</a>.</p>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"backup-compare-title\">\n          <div class=\"backup-section-heading\"><h2 id=\"backup-compare-title\">Jämför alternativen</h2></div>\n          <div class=\"backup-table-wrap\">\n            <table class=\"backup-table\" role=\"table\">\n              <thead role=\"rowgroup\"><tr role=\"row\"><th scope=\"col\" role=\"columnheader\">Alternativ</th><th scope=\"col\" role=\"columnheader\">Skyddar</th><th scope=\"col\" role=\"columnheader\">Var kopian finns</th><th scope=\"col\" role=\"columnheader\">När du ska välja det</th></tr></thead>\n              <tbody role=\"rowgroup\">\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"windows-backup-title\">Windows-säkerhetskopiering och OneDrive</a></th><td role=\"cell\" data-label=\"Skyddar\">Mappar som du väljer (Skrivbord, Dokument, Bilder, Filmer, Musik), listan över installerade appar, Wi-Fi-nätverk och inställningar</td><td role=\"cell\" data-label=\"Var kopian finns\">OneDrive och ditt Microsoft-konto (5 GB gratis)</td><td role=\"cell\" data-label=\"När du ska välja det\">Du använder ett personligt Microsoft-konto och vill ha dina filer på mer än en enhet</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"file-history-title\">Filhistorik</a></th><td role=\"cell\" data-label=\"Skyddar\">Dina bibliotek, Skrivbord och mappar som du lägger till, med tidigare versioner</td><td role=\"cell\" data-label=\"Var kopian finns\">En extern enhet eller en nätverksplats</td><td role=\"cell\" data-label=\"När du ska välja det\">Du vill ha kopior av dina filer, med tidigare versioner, på en egen enhet</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"disk-image-title\">Diskavbild med Rescuezilla</a></th><td role=\"cell\" data-label=\"Skyddar\">Hela enheten: Windows, appar, inställningar och filer</td><td role=\"cell\" data-label=\"Var kopian finns\">Avbildningsfiler på en extern enhet eller en delad nätverksresurs</td><td role=\"cell\" data-label=\"När du ska välja det\">Du vill snabbt få tillbaka hela datorn efter ett enhetsfel eller ett virus</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"veeam-title\">Automatisk diskavbild med Veeam Agent FREE</a></th><td role=\"cell\" data-label=\"Skyddar\">Hela enheten: Windows, appar, inställningar och filer</td><td role=\"cell\" data-label=\"Var kopian finns\">Säkerhetskopior på en extern enhet eller en delad nätverksresurs</td><td role=\"cell\" data-label=\"När du ska välja det\">Du vill att säkerhetskopior av hela datorn ska köras av sig själva, inifrån Windows</td></tr>\n              </tbody>\n            </table>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"windows-backup-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">01</span><h2 id=\"windows-backup-title\" tabindex=\"-1\">Windows-säkerhetskopiering och OneDrive</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Windows-säkerhetskopiering synkroniserar mapparna som du väljer till OneDrive och sparar inställningar som stöds och listan över installerade appar i ditt Microsoft-konto. På en ny eller ominstallerad dator loggar du in och får tillbaka dem.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Ett personligt Microsoft-konto, till exempel en outlook.com-adress. Appen fungerar inte med arbets- eller skolkonton.</li>\n                <li>En internetanslutning.</li>\n                <li>Tillräckligt med lagringsutrymme i OneDrive. Ett gratiskonto har 5 GB, och foton och videor fyller det snabbt.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/back-up-and-restore-with-windows-backup\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Windows-säkerhetskopiering <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/onedrive/restore-your-onedrive-files\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: återställ borttagna filer i OneDrive <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Ändringar och borttagningar synkroniseras också.</strong> Om du tar bort eller ändrar en fil på datorn får OneDrive ändringen. Borttagna filer ligger bara kvar i Papperskorgen i OneDrive under en begränsad tid, så OneDrive ersätter inte en extern enhet.</p></div>\n              <ul class=\"backup-list\">\n                <li>När OneDrive är fullt stoppas säkerhetskopieringen. Kontrollera statusen då och då.</li>\n                <li>Det är inte en kopia av hela datorn. Vissa appar och licenser måste installeras igen.</li>\n                <li>På en jobb- eller skoldator är säkerhetskopiering av inställningar en separat funktion som styrs av din organisation.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg</h3>\n              <ol class=\"backup-steps\">\n                <li>Logga in i Windows med ditt personliga Microsoft-konto.</li>\n                <li>Öppna <strong>Windows-säkerhetskopiering</strong> från Start eller gå till <strong>Inställningar → Konton → Windows-säkerhetskopiering</strong>.</li>\n                <li>Under <strong>Mappar</strong> aktiverar du de mappar som du vill synkronisera till OneDrive.</li>\n                <li>Aktivera de appar och inställningar som du vill att Windows ska komma ihåg och välj sedan <strong>Säkerhetskopiera</strong>.</li>\n                <li>Kontrollera statusen för säkerhetskopieringen i Windows-säkerhetskopiering. Om OneDrive rapporterar ett problem kontrollerar du att du är inloggad och har tillräckligt med lagringsutrymme.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Så får du tillbaka det</h3>\n              <ul class=\"backup-list\">\n                <li><strong>Filer:</strong> logga in i OneDrive med samma Microsoft-konto.</li>\n                <li><strong>Borttagna eller ändrade filer:</strong> <strong>Papperskorgen</strong> och <strong>Versionshistorik</strong> i OneDrive sparar dem under en begränsad tid, som beror på ditt konto och dina inställningar.</li>\n                <li><strong>Ny eller ominstallerad dator:</strong> logga in med samma konto under installationen. Om Windows hittar en kompatibel säkerhetskopia erbjuder Windows att återställa den.</li>\n                <li><strong>Appar:</strong> dina fästa appar kommer tillbaka som fästa ikoner. Välj ikonen för en app från Microsoft Store för att installera den igen. För andra appar hänvisar Windows dig till installationsprogrammet.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"file-history-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">02</span><h2 id=\"file-history-title\" tabindex=\"-1\">Filhistorik</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Filhistorik kopierar filerna i dina bibliotek, till exempel Dokument, Bilder, Filmer och Musik, och på ditt Skrivbord till en annan enhet. Den sparar tidigare versioner, så att du kan få tillbaka en fil som den var före en ändring eller borttagning.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>En extern enhet eller en nätverksplats med tillräckligt med ledigt utrymme.</li>\n                <li>Att enheten ansluts regelbundet, så att nya kopior skapas.</li>\n              </ul>\n              <p class=\"backup-limits\">Du kan också själv kopiera viktiga mappar till en separat enhet. De kopiorna uppdateras inte, så upprepa kopieringen efter viktiga ändringar.</p>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Filhistorik <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>En återställning kan ersätta den aktuella versionen.</strong> Microsoft påpekar att det inte går att ångra ersättningen. Använd <strong>Återställ till</strong> och välj en annan mapp för att behålla båda versionerna.</p></div>\n              <ul class=\"backup-list\">\n                <li>Filhistorik kopierar bara filer. Den kopierar inte Windows, installerade appar eller deras inställningar.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg: aktivera Filhistorik</h3>\n              <ol class=\"backup-steps\">\n                <li>Anslut en extern enhet eller kontrollera att nätverksplatsen är tillgänglig.</li>\n                <li>Öppna <strong>Kontrollpanelen → System och säkerhet → Filhistorik</strong>.</li>\n                <li>Om enheten som du vill använda inte är vald väljer du <strong>Välj enhet</strong>, väljer enheten och väljer <strong>OK</strong>.</li>\n                <li>Välj <strong>Aktivera</strong>.</li>\n                <li>Om du vill lägga till en mapp utanför dina bibliotek högerklickar du på den i Utforskaren, väljer <strong>Visa fler alternativ → Inkludera i bibliotek</strong> och väljer ett bibliotek.</li>\n                <li>Låt enheten vara ansluten tills den första säkerhetskopieringen är klar. Öppna sedan Filhistorik igen och kontrollera att en säkerhetskopiering har slutförts.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Steg: återställ en tidigare version</h3>\n              <ol class=\"backup-steps\">\n                <li>Öppna mappen som innehåller, eller innehöll, filen i Utforskaren.</li>\n                <li>Högerklicka på mappen och välj <strong>Återställ tidigare versioner</strong>. Om du inte ser alternativet väljer du först <strong>Visa fler alternativ</strong>.</li>\n                <li>Välj en version på fliken <strong>Tidigare versioner</strong>. Om du vill titta på den först väljer du pilen bredvid <strong>Öppna</strong> och sedan <strong>Öppna i Filhistorik</strong>.</li>\n                <li>Välj pilen bredvid <strong>Återställ</strong> och välj <strong>Återställ till</strong>. Välj en annan mapp, så att den aktuella versionen finns kvar.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"disk-image-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">03</span><h2 id=\"disk-image-title\" tabindex=\"-1\">Diskavbild med Rescuezilla</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>En diskavbild är en kopia av hela enheten, med Windows, appar, inställningar och filer, sparad som filer på en annan enhet. Du kan spara flera avbildningar från olika dagar. Om enheten går sönder eller du får ett virus återställer du en avbildning till samma enhet eller en ny, och datorn blir som den var den dagen.</p>\n              <p>Rescuezilla är gratis programvara med öppen källkod. Den körs från ett USB-minne, så inget installeras i Windows.</p>\n              <h3 class=\"backup-subheading\">När du ska välja det i stället för Veeam</h3>\n              <ul class=\"backup-list\">\n                <li>Du vill ha programvara med öppen källkod som du laddar ned utan att fylla i något formulär.</li>\n                <li>Du vill inte ha ett program för säkerhetskopiering installerat i Windows eller igång i bakgrunden.</li>\n                <li>Du vill att varje avbildning ska vara en fullständig kopia som klarar sig själv. Säkerhetskopior i Veeam efter den första innehåller bara ändringar och behöver de tidigare filerna vid en återställning.</li>\n                <li>Du vill också klona Windows till en ny enhet.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Rescuezilla 2.6.2 eller senare: <a href=\"https://github.com/rescuezilla/rescuezilla\" target=\"_blank\" rel=\"noopener noreferrer\">Rescuezilla på GitHub</a> (2,8 tusen stjärnor, november 2026). Ladda ned ISO-filen från <a href=\"https://github.com/rescuezilla/rescuezilla/releases/latest\" target=\"_blank\" rel=\"noopener noreferrer\">Releases</a>. Äldre versioner kanske inte startar på datorer där Säker start är aktiverat.</li>\n                <li><a href=\"https://etcher.balena.io/\" target=\"_blank\" rel=\"noopener noreferrer\">balenaEtcher</a>, för att skriva ISO-filen till ett USB-minne.</li>\n                <li>Ett USB-minne som kan raderas. Märk det ”Rescuezilla” och förvara det tillsammans med enheten för säkerhetskopior.</li>\n                <li>En enhet för säkerhetskopior med tillräckligt med ledigt utrymme. Avbildningar komprimeras och omfattar bara använt utrymme, men en avbildning av en krypterad enhet kan bli lika stor som hela enheten.</li>\n                <li>Din <a href=\"https://support.microsoft.com/en-us/windows/security/encryption/find-your-bitlocker-recovery-key\" target=\"_blank\" rel=\"noopener noreferrer\">BitLocker-återställningsnyckel</a>, om Windows är krypterat. Windows kan fråga efter den efter en återställning.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://rescuezilla.com/download\" target=\"_blank\" rel=\"noopener noreferrer\">Rescuezilla: nedladdning och instruktioner <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>En återställning raderar enheten som du återställer till.</strong> Kontrollera enhetens storlek och namn innan du bekräftar. Att välja fel enhet är det allvarligaste misstaget.</p></div>\n              <ul class=\"backup-list\">\n                <li>En avbildning hjälper efter ett virus bara om du skapade den före infektionen. Spara några avbildningar från olika datum.</li>\n                <li>Starta datorn från USB-minnet med datorns startmeny för engångsstart, ofta <strong>F8</strong>, <strong>F11</strong> eller <strong>F12</strong>. Tangenten beror på tillverkaren.</li>\n                <li>Om skärmen är svår att läsa väljer du <strong>Graphical fallback mode</strong> i den första menyn.</li>\n                <li>Om enheten börjar gå sönder aktiverar du alternativet att ignorera dåliga sektorer på sammanfattningsskärmen.</li>\n                <li>En avbildning kan ta från tiotals minuter till några timmar, beroende på enheten och hur mycket data du har. Använd en USB 3-port.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg: skapa en avbildning</h3>\n              <ol class=\"backup-steps\">\n                <li>Skriv ISO-filen för Rescuezilla till USB-minnet med balenaEtcher. Det raderar USB-minnet.</li>\n                <li>Anslut enheten för säkerhetskopior. Starta datorn från USB-minnet.</li>\n                <li>Välj <strong>Start Rescuezilla</strong> och välj sedan <strong>Backup</strong>.</li>\n                <li>Välj enheten med Windows och låt alla dess partitioner vara markerade.</li>\n                <li>Välj enheten för säkerhetskopior och en mapp. Standardnamnet för avbildningen innehåller datumet.</li>\n                <li>Behåll standardkomprimeringen, bekräfta och vänta tills säkerhetskopieringen är klar.</li>\n                <li>Välj <strong>Verify Image</strong> för att kontrollera den nya avbildningen. Öppna sedan några filer i <strong>Image Explorer (beta)</strong>.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Steg: återställ en avbildning</h3>\n              <ol class=\"backup-steps\">\n                <li>Starta datorn från USB-minnet med Rescuezilla. Välj <strong>Start Rescuezilla</strong> och välj sedan <strong>Restore</strong>.</li>\n                <li>Välj enheten för säkerhetskopior och mappen och sedan avbildningen med det datum som du vill ha.</li>\n                <li>Välj enheten som du vill återställa till. Kontrollera dess storlek och namn, eftersom den kommer att raderas.</li>\n                <li>Bekräfta och vänta tills återställningen är klar.</li>\n                <li>Stäng av datorn, ta bort USB-minnet och enheten för säkerhetskopior och starta sedan Windows.</li>\n              </ol>\n              <p class=\"backup-limits\">Om du återställer till en större enhet blir det extra oallokerat utrymme kvar. Du kan låta det vara eller skapa en ny partition på det i Diskhantering. <strong>Clone</strong> i Rescuezilla kopierar en enhet direkt till en annan. Det är praktiskt för att flytta Windows till en ny enhet, men inte som säkerhetskopia: det ger bara en kopia, raderar den andra enheten, och sedan måste du byta enheterna i datorn.</p>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"veeam-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">04</span><h2 id=\"veeam-title\" tabindex=\"-1\">Automatisk diskavbild med Veeam Agent FREE</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Veeam Agent for Microsoft Windows FREE skapar en diskavbild av hela enheten inifrån Windows, enligt ett schema eller när du ansluter enheten för säkerhetskopior. Den första säkerhetskopian kopierar allt. Senare säkerhetskopior kopierar bara det som har ändrats, så de går mycket snabbare. Du kan få tillbaka enskilda filer i Windows eller återställa hela datorn från ett USB-minne för återställning.</p>\n              <p>Den är gratis men har inte öppen källkod. Veeam gör programvara för säkerhetskopiering till företag, och gratisversionen tillåter bara ett säkerhetskopieringsjobb.</p>\n              <h3 class=\"backup-subheading\">När du ska välja det i stället för Rescuezilla</h3>\n              <ul class=\"backup-list\">\n                <li>Du vill att säkerhetskopiorna ska skapas av sig själva, utan att du startar datorn från ett USB-minne.</li>\n                <li>Du vill kunna fortsätta arbeta medan säkerhetskopieringen pågår.</li>\n                <li>Du vill ha snabba dagliga säkerhetskopior. Efter den första kopieras bara ändringar.</li>\n                <li>Du behöver ofta tillbaka en enskild fil. Du kan kopiera den från en säkerhetskopia utan att lämna Windows.</li>\n                <li>Du vill att gamla säkerhetskopior tas bort automatiskt och att de från de senaste dagarna sparas.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li><a href=\"https://www.veeam.com/products/free/microsoft-windows.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam Agent for Microsoft Windows FREE</a>. Nedladdningssidan ber dig fylla i ett formulär med dina kontaktuppgifter.</li>\n                <li>Windows 11 version 22H2 eller senare på en dator med x64-processor. Datorer med Arm-processor stöds inte.</li>\n                <li>En extern enhet för säkerhetskopiorna, med mer ledigt utrymme än datan på datorn. Använd inte en enhet som är formaterad med FAT32, eftersom den inte kan lagra filer som är större än 4 GB.</li>\n                <li>Ett USB-minne som kan raderas, för återställningsmediet. Märk det ”Veeam” och förvara det tillsammans med enheten för säkerhetskopior.</li>\n                <li>Din <a href=\"https://support.microsoft.com/en-us/windows/security/encryption/find-your-bitlocker-recovery-key\" target=\"_blank\" rel=\"noopener noreferrer\">BitLocker-återställningsnyckel</a>, om Windows eller enheten för säkerhetskopior är krypterad. Du kan behöva den för att låsa upp en enhet vid en återställning.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://helpcenter.veeam.com/docs/agentforwindows/userguide/howto_protect_computer.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam: skydda en Windows-dator <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://helpcenter.veeam.com/docs/agentforwindows/userguide/howto_restore_files.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam: återställ filer <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://helpcenter.veeam.com/docs/agentforwindows/userguide/howto_baremetal_recovery.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam: återställ hela datorn <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>När du återställer hela datorn skrivs enheten som du återställer till över.</strong> Kontrollera sammanfattningen innan du klickar på <strong>Restore</strong>.</p></div>\n              <ul class=\"backup-list\">\n                <li>Säkerhetskopior körs bara när enheten för säkerhetskopior är ansluten. Om du kopplar bort den mellan gångerna, vilket skyddar den mot utpressningsprogram, väljer du <strong>When backup target is connected</strong> så att en säkerhetskopia startar varje gång du ansluter den.</li>\n                <li>En dator som är avstängd eller i viloläge missar sin schemalagda säkerhetskopia. Välj <strong>Backup once powered on</strong> så körs den senare.</li>\n                <li>Som standard sparar Veeam säkerhetskopior i 7 dagar. Om du vill kunna gå längre tillbaka ökar du antalet dagar i <strong>Keep backups for</strong> när du konfigurerar säkerhetskopieringen.</li>\n                <li>Starta datorn från USB-minnet med datorns startmeny för engångsstart, ofta <strong>F8</strong>, <strong>F11</strong> eller <strong>F12</strong>.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg: konfigurera automatiska säkerhetskopior</h3>\n              <ol class=\"backup-steps\">\n                <li>Ladda ned Veeam Agent for Microsoft Windows FREE, öppna arkivet och kör installationsfilen.</li>\n                <li>Klicka på <strong>Next</strong> och sedan på <strong>I Accept</strong>. Starta om datorn om Windows ber om det.</li>\n                <li>På den sista skärmen låter du <strong>Run Veeam Recovery Media creation wizard</strong> vara markerat och klickar på <strong>Finish</strong>.</li>\n                <li>Sätt i USB-minnet. Klicka på uppdateringsikonen, välj USB-minnet och klicka på <strong>Next</strong>. Klicka på <strong>Yes</strong> för att formatera det och sedan på <strong>Create</strong>. När det är klart, efter ungefär 2–5 minuter, klickar du på <strong>Finish</strong>.</li>\n                <li>Anslut enheten för säkerhetskopior. Högerklicka på Veeam-ikonen i systemfältet bredvid klockan och välj <strong>Backup</strong> → <strong>Configure backup</strong>.</li>\n                <li>Ange ett namn, välj <strong>Entire computer</strong> och sedan <strong>Local storage</strong>.</li>\n                <li>Välj enheten för säkerhetskopior och hur många dagars säkerhetskopior som ska sparas.</li>\n                <li>Under <strong>Schedule</strong> väljer du <strong>Daily at</strong> och en tid samt <strong>Backup once powered on</strong>. Klicka på <strong>Apply</strong>.</li>\n                <li>Välj <strong>Run the job when I click Finish</strong> och klicka på <strong>Finish</strong>. Vänta tills den första säkerhetskopian är klar, eftersom den tar längst tid.</li>\n                <li>Kontrollera att du kan få tillbaka en fil, enligt beskrivningen nedan.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Steg: få tillbaka filer</h3>\n              <ol class=\"backup-steps\">\n                <li>Dubbelklicka på Veeam-ikonen i systemfältet. Peka på säkerhetskopieringsjobbet och välj <strong>Restore file</strong>.</li>\n                <li>Välj säkerhetskopian med det datum som du vill ha och klicka på <strong>Next</strong> och sedan på <strong>Open</strong>.</li>\n                <li>I Veeam Backup browser högerklickar du på en fil eller mapp och väljer <strong>Restore</strong> → <strong>Keep</strong>. Veeam sparar den bredvid originalet, med <code>RESTORED-</code> först i namnet. Om du vill spara den någon annanstans väljer du <strong>Copy To</strong>.</li>\n                <li>Stäng Veeam Backup browser när du är klar.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Steg: återställ hela datorn</h3>\n              <ol class=\"backup-steps\">\n                <li>Anslut enheten för säkerhetskopior och USB-minnet med Veeam. Starta datorn från USB-minnet och tryck på valfri tangent om du blir ombedd.</li>\n                <li>Klicka på <strong>Bare Metal Recovery</strong>.</li>\n                <li>Veeam hittar oftast den senaste säkerhetskopian på den anslutna enheten. Om inte väljer du <strong>Local storage</strong>, klickar på <strong>Browse</strong> och väljer säkerhetskopians <code>.vbm</code>-fil.</li>\n                <li>Välj säkerhetskopian med det datum som du vill ha och sedan <strong>Entire computer</strong>.</li>\n                <li>Kontrollera sammanfattningen och klicka på <strong>Restore</strong>. Veeam skriver över enheten med säkerhetskopian.</li>\n                <li>När det är klart stänger du guiden, tar bort USB-minnet och startar om datorn.</li>\n              </ol>\n              <p class=\"backup-limits\">Om Veeam-ikonen saknas i systemfältet öppnar du programmet från Start: sök efter <strong>Configure Backup</strong>, eller efter <strong>Create Recovery Media</strong> för att skapa ett nytt USB-minne.</p>\n            </div>\n          </div>\n        </section>\n        <div class=\"backup-bottom\"><p><strong>Sista steget: kontrollera att du kan få tillbaka filer från din säkerhetskopia.</strong> Baserat på dokumentation från Microsoft, Rescuezilla och Veeam, kontrollerad i oktober och november 2026.</p><a class=\"tools-directory-link\" href=\"#directory\" data-view=\"directory\"><span aria-hidden=\"true\">←</span> Tillbaka till tjänsterna</a></div>\n      </div>\n    ",
  "repair": "\n      <div class=\"backup-heading\"><p class=\"eyebrow\"><span class=\"tiny-line\"></span>ÅTGÄRDA ETT PROBLEM</p><h1 id=\"repair-title\" tabindex=\"-1\">Alternativ för <span>reparation</span> i Windows 11<span>.</span></h1><p class=\"backup-lead\">När Windows inte fungerar som det ska börjar du med det alternativ som ändrar minst. Vissa alternativ tar bort appar eller filer, så läs varningen före varje alternativ. Den här sidan gäller bara Windows 11.</p></div>\n      <div class=\"backup-panel\">\n        <section class=\"backup-section\" aria-labelledby=\"repair-overview-title\">\n          <div class=\"backup-section-heading\"><h2 id=\"repair-overview-title\">Vilket alternativ ska jag prova?</h2></div>\n          <div class=\"backup-warning\" role=\"note\"><p><strong>Innan du reparerar: säkerhetskopiera dina filer.</strong> En reparation kan misslyckas, och vissa alternativ tar bort filer. <a href=\"#backup\" data-view=\"backup\">Se alternativen för säkerhetskopiering</a>.</p></div>\n          <h3 class=\"backup-subheading\">Windows startar</h3>\n          <div class=\"backup-table-wrap\">\n            <table class=\"backup-table\" role=\"table\">\n              <thead role=\"rowgroup\"><tr role=\"row\"><th scope=\"col\" role=\"columnheader\">Prova i den här ordningen</th><th scope=\"col\" role=\"columnheader\">Personliga filer</th><th scope=\"col\" role=\"columnheader\">Appar och inställningar</th></tr></thead>\n              <tbody role=\"rowgroup\">\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">1. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"windows-update-repair-title\">Åtgärda problem med Windows Update</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span></td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-files\">Behålls</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">2. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"uninstall-updates-title\">Avinstallera uppdateringar</a>, om problemet började efter en uppdatering</th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span></td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-files\">Behålls</span> Bara uppdateringen tas bort.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">3. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"system-restore-title\">Systemåterställning</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span></td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-points\">Återställs</span> Ändringar efter återställningspunkten ångras.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">4. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"pitr-title\">Återställning till tidpunkt</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-points\">Återställs</span> Nyare filer och ändringar går förlorade.</td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-points\">Återställs</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">5. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"reset-title\">Återställ den här datorn</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span> med Behåll mina filer. <span class=\"backup-type backup-type-removed\">Tas bort</span> med Ta bort allt.</td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-removed\">Tas bort</span></td></tr>\n              </tbody>\n            </table>\n          </div>\n          <h3 class=\"backup-subheading\">Windows startar inte</h3>\n          <div class=\"backup-table-wrap\">\n            <table class=\"backup-table\" role=\"table\">\n              <thead role=\"rowgroup\"><tr role=\"row\"><th scope=\"col\" role=\"columnheader\">Prova i den här ordningen</th><th scope=\"col\" role=\"columnheader\">Personliga filer</th><th scope=\"col\" role=\"columnheader\">Appar och inställningar</th></tr></thead>\n              <tbody role=\"rowgroup\">\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">1. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"startup-repair-title\">Startreparation</a></th><td role=\"cell\" data-label=\"Personliga filer\">Microsoft beskriver inga ändringar av dina filer.</td><td role=\"cell\" data-label=\"Appar och inställningar\">Reparerar system- och startfiler.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">2. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"uninstall-updates-title\">Avinstallera uppdateringar</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span></td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-files\">Behålls</span> Bara uppdateringen tas bort.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">3. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"system-restore-title\">Systemåterställning</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span></td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-points\">Återställs</span> Ändringar efter återställningspunkten ångras.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">4. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"pitr-title\">Återställning till tidpunkt</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-points\">Återställs</span> Nyare filer och ändringar går förlorade.</td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-points\">Återställs</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">5. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"reset-title\">Återställ den här datorn</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-files\">Behålls</span> med Behåll mina filer. <span class=\"backup-type backup-type-removed\">Tas bort</span> med Ta bort allt.</td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-removed\">Tas bort</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">6. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"install-usb-title\">USB-installationsmedium</a>: Reparera min dator, sedan en ren installation</th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-media\">Beror på</span> Reparera min dator öppnar bara verktygen. <span class=\"backup-type backup-type-removed\">Tas bort</span> vid en ren installation.</td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-removed\">Tas bort</span> vid en ren installation.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">7. Enheten har gått sönder: byt ut den och <a class=\"backup-inline-jump\" href=\"#backup\" data-view=\"backup\" data-backup-jump=\"disk-image-title\">återställ en diskavbild</a></th><td role=\"cell\" data-label=\"Personliga filer\"><span class=\"backup-type backup-type-points\">Återställs</span> Till avbildningens datum.</td><td role=\"cell\" data-label=\"Appar och inställningar\"><span class=\"backup-type backup-type-points\">Återställs</span> Till avbildningens datum.</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <p class=\"backup-limits\">Tillgängligheten beror på din version och utgåva av Windows 11, installerade uppdateringar, administratörsåtkomst och organisationens principer. Menynamnen kan skilja sig något mellan versioner. Ingen reparation fungerar med säkerhet.</p>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"recovery-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">01</span><h2 id=\"recovery-title\" tabindex=\"-1\">Öppna Windows Återställningsmiljö</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Windows Återställningsmiljö (Windows RE) är en uppsättning reparationsverktyg som körs utanför det vanliga Windows. Startreparation, Avinstallera uppdateringar, Systemåterställning, Återställning till tidpunkt och Återställ den här datorn kan alla köras därifrån. Om Windows inte startar flera gånger öppnas Windows RE automatiskt.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <div class=\"backup-note\"><p><strong>Om datorn använder Enhetskryptering eller BitLocker behöver du veta var du hittar återställningsnyckeln.</strong> Windows RE kan fråga efter den. Kontrollera nu att du kan öppna den från en annan enhet: <a href=\"https://support.microsoft.com/en-us/windows/security/encryption/find-your-bitlocker-recovery-key\" target=\"_blank\" rel=\"noopener noreferrer\">den finns oftast i ditt Microsoft-konto eller i ditt arbets- eller skolkonto</a>, eller så kan organisationens IT-avdelning hjälpa dig. Håll alla kopior privata och förvara dem säkert, skilda från datorn. Enhetskryptering finns även på datorer med Windows 11 Home som stöds.</p></div>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/windows-recovery-environment\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Windows Återställningsmiljö <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/security/encryption/device-encryption-in-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Enhetskryptering <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <ul class=\"backup-list\">\n                <li>Tvinga fram en avstängning bara när den vanliga starten redan misslyckas.</li>\n                <li>Avbryt inte datorn medan den installerar en uppdatering eller kör en reparation eller återställning.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Så öppnar du den</h3>\n              <ul class=\"backup-list\">\n                <li><strong>Från Windows:</strong> gå till <strong>Inställningar → System → Återställning</strong>, och bredvid <strong>Avancerad start</strong> väljer du <strong>Starta om nu</strong>. Eller håll ned <strong>Shift</strong> medan du väljer <strong>Av/på → Starta om</strong>. Det fungerar även från inloggningsskärmen.</li>\n                <li><strong>Från ett USB-minne:</strong> starta från ditt <a href=\"#repair\" data-backup-jump=\"install-usb-title\">USB-installationsmedium</a> och välj <strong>Nästa → Reparera min dator</strong>.</li>\n                <li><strong>När den vanliga starten redan misslyckas:</strong> slå på datorn, och när logotypen visas håller du ned strömknappen tills datorn stängs av. Upprepa en gång. Vid den tredje starten låter du datorn fortsätta till <strong>Automatisk reparation</strong> och väljer sedan <strong>Avancerade alternativ</strong>.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"windows-update-repair-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">02</span><h2 id=\"windows-update-repair-title\" tabindex=\"-1\">Åtgärda problem med Windows Update</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Om Windows startar men inte fungerar som det ska installerar det här alternativet om den aktuella versionen av Windows för att reparera systemfiler och komponenter. Dina <strong>filer, appar och inställningar</strong> finns kvar, så det är det första du ska prova.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Windows 11, version 22H2 eller senare, med den valfria uppdateringen från februari 2024 eller en senare uppdatering.</li>\n                <li>Ett Windows som startar och en internetanslutning.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/install-upgrade/fix-issues-by-reinstalling-the-current-version-of-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: installera om via Windows Update <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <ul class=\"backup-list\">\n                <li>Låt datorn vara ansluten till ström och internet tills det är klart.</li>\n                <li>Alternativet kanske inte visas på datorer som hanteras av en organisation.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg</h3>\n              <ol class=\"backup-steps\">\n                <li>Gå till <strong>Inställningar → System → Återställning</strong>.</li>\n                <li>Bredvid <strong>Åtgärda problem med Windows Update</strong> väljer du <strong>Installera om nu</strong>.</li>\n                <li>Följ anvisningarna. Windows laddar ned och installerar filerna och startar sedan om.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"uninstall-updates-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">03</span><h2 id=\"uninstall-updates-title\" tabindex=\"-1\">Avinstallera uppdateringar</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Tar bort en nyligen installerad Windows-uppdatering. Enligt Microsoft påverkas inte dina filer och appar. Använd det när ett problem började direkt efter en uppdatering.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Namnet eller datumet för uppdateringen som orsakade problemet. Vissa uppdateringar går inte att avinstallera.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/how-to-uninstall-a-windows-update\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: avinstallera en Windows-uppdatering <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <ul class=\"backup-list\">\n                <li>Microsoft föreslår att du först provar <a href=\"#repair\" data-backup-jump=\"windows-update-repair-title\">Åtgärda problem med Windows Update</a>.</li>\n                <li>Om du tar bort en säkerhetsuppdatering kan datorn bli mindre skyddad. Microsoft rekommenderar att du först sätter dig in i riskerna.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg</h3>\n              <ul class=\"backup-list\">\n                <li><strong>Windows startar:</strong> gå till <strong>Inställningar → Windows Update → Uppdateringshistorik → Avinstallera uppdateringar</strong>. Välj <strong>Avinstallera</strong> bredvid uppdateringen.</li>\n                <li><strong>Windows startar inte:</strong> <a href=\"#repair\" data-backup-jump=\"recovery-title\">öppna Windows RE</a> och välj <strong>Felsök → Avancerade alternativ → Avinstallera uppdateringar</strong>.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"startup-repair-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">04</span><h2 id=\"startup-repair-title\" tabindex=\"-1\">Startreparation</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Startreparation försöker åtgärda problem som hindrar Windows från att starta, till exempel skadade systemfiler eller startinställningar. Om den inte kan åtgärda problemet visar den en rapport över vad den hittade.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Åtkomst till Windows RE.</li>\n                <li>Din BitLocker-återställningsnyckel, om enheten är krypterad.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/startup-boot/startup-repair\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Startreparation <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <ul class=\"backup-list\">\n                <li>Om Startreparation inte hjälper föreslår Microsoft <a href=\"#repair\" data-backup-jump=\"system-restore-title\">Systemåterställning</a>.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg</h3>\n              <ol class=\"backup-steps\">\n                <li><a href=\"#repair\" data-backup-jump=\"recovery-title\">Öppna Windows RE</a>.</li>\n                <li>Välj <strong>Felsök → Avancerade alternativ → Startreparation</strong>.</li>\n                <li>Följ anvisningarna och låt den slutföras.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"system-restore-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">05</span><h2 id=\"system-restore-title\" tabindex=\"-1\">Systemåterställning</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Systemåterställning återställer systemfiler, registerinställningar och installerade program till en tidigare återställningspunkt. Enligt Microsoft påverkas inte dina personliga filer, vilket också betyder att de inte säkerhetskopieras.</p>\n              <p>Windows skapar också återställningspunkter automatiskt. Äldre punkter kan tas bort när Windows hanterar det utrymme som du har tillåtit, så en namngiven punkt kanske inte finns kvar senare.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Systemskydd aktiverat för Windows-enheten.</li>\n                <li>En återställningspunkt som skapades innan problemet började.</li>\n                <li>Administratörsåtkomst, som kan behövas.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/system-protection\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: skapa en återställningspunkt <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/system-restore\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Systemåterställning <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <ul class=\"backup-list\">\n                <li>Appar, drivrutiner och uppdateringar som installerats efter återställningspunkten kan tas bort.</li>\n                <li>Det är ingen säkerhetskopia. Återställningspunkter finns på samma enhet och omfattar inte dina personliga filer.</li>\n                <li>Om enheten är krypterad kan Windows RE fråga efter din BitLocker-återställningsnyckel.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg: skapa en återställningspunkt</h3>\n              <ol class=\"backup-steps\">\n                <li>Öppna <strong>Start</strong>, sök efter <strong>Skapa en återställningspunkt</strong> och öppna resultatet som matchar.</li>\n                <li>På fliken <strong>Systemskydd</strong> väljer du Windows-enheten, oftast <strong>C:</strong>.</li>\n                <li>Om skyddet är avstängt för enheten väljer du <strong>Konfigurera</strong>, väljer <strong>Aktivera systemskydd</strong>, använder skjutreglaget för att tillåta diskutrymme och väljer sedan <strong>Verkställ (Apply) → OK</strong>.</li>\n                <li>Välj <strong>Skapa</strong>, ange ett namn som du känner igen, till exempel <strong>Före uppdatering av grafikdrivrutin</strong>, och välj <strong>Skapa</strong>.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Steg: återställ</h3>\n              <ul class=\"backup-list\">\n                <li><strong>Windows startar:</strong> tryck på <strong>Windows-tangenten + R</strong>, skriv <strong>rstrui.exe</strong> och tryck på <strong>Enter</strong>. Välj en återställningspunkt, välj eventuellt <strong>Sök efter program som påverkas</strong> och sedan <strong>Nästa → Slutför</strong>.</li>\n                <li><strong>Windows startar inte:</strong> <a href=\"#repair\" data-backup-jump=\"recovery-title\">öppna Windows RE</a> och välj <strong>Felsök → Avancerade alternativ → Systemåterställning</strong>.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"pitr-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">06</span><h2 id=\"pitr-title\" tabindex=\"-1\">Återställning till tidpunkt</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>När funktionen är aktiverad skapar Windows återställningspunkter automatiskt, som standard ungefär var 24:e timme, och sparar varje punkt i upp till 72 timmar. När du återställer en punkt återgår <strong>hela Windows-enheten</strong> till den tidpunkten, inklusive dina lokala filer.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Windows 11, version 24H2 eller senare, på en enhet som stöds.</li>\n                <li>Att funktionen är aktiverad. Microsoft aktiverar den som standard på Home-enheter, och på Pro-enheter som inte hanteras av en organisation, när Windows-volymen är 200 GB eller större (dess storlek, inte dess lediga utrymme). På en mindre volym aktiverar du den själv. På en enhet som hanteras av en organisation kontrollerar du inställningen och följer organisationens principer.</li>\n                <li>Tillräckligt med ledigt diskutrymme.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/point-time-restore-for-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Återställning till tidpunkt <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://learn.microsoft.com/en-us/windows/configuration/point-in-time-restore\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: tekniska detaljer om Återställning till tidpunkt <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Allt på Windows-enheten återgår till den valda punkten.</strong> Filer, appar, inställningar och lösenord som ändrats efter den går förlorade. Om du fortfarande kommer åt viktiga nyare filer kopierar du dem först till en annan enhet eller till molnlagring.</p></div>\n              <ul class=\"backup-list\">\n                <li>Återställningspunkterna finns på samma enhet, så de hjälper inte om enheten går sönder.</li>\n                <li>Windows tar bort punkter när de går ut, när de når sin lagringsgräns eller när det lediga utrymmet sjunker till 20 GB eller mindre.</li>\n                <li>Installera Windows-uppdateringar igen efter återställningen. En återställning kan ångra nyligen installerade säkerhetsuppdateringar.</li>\n                <li>Om du vill gå tillbaka längre än ungefär tre dagar använder du <a href=\"#repair\" data-backup-jump=\"system-restore-title\">Systemåterställning</a>.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg: kontrollera att funktionen är aktiverad</h3>\n              <ol class=\"backup-steps\">\n                <li>Gå till <strong>Inställningar → System → Återställning → Återställning till tidpunkt → Visa eller redigera</strong> och godkänn administratörsfrågan.</li>\n                <li>Kontrollera att funktionen är aktiverad och titta på de tillgängliga återställningspunkterna. Om du nyss aktiverade den kontrollerar du igen senare att en punkt har skapats.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Steg: återställ en punkt</h3>\n              <ol class=\"backup-steps\">\n                <li><a href=\"#repair\" data-backup-jump=\"recovery-title\">Öppna Windows RE</a> och välj <strong>Felsök → Återställning till tidpunkt</strong>.</li>\n                <li>Ange din BitLocker-återställningsnyckel om du blir ombedd, välj en återställningspunkt och välj <strong>Fortsätt</strong>.</li>\n                <li>Granska punkten, Windows-versionen och varningen om dataförlust och välj sedan <strong>Återställ</strong>. Låt datorn vara ansluten till ström tills den har startat om i Windows.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"reset-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">07</span><h2 id=\"reset-title\" tabindex=\"-1\">Återställ den här datorn</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>Återställ den här datorn installerar om Windows med datorns egna återställningsverktyg. Du väljer om du vill behålla dina personliga filer. Oavsett vilket tas dina installerade appar och inställningar bort.</p>\n              <div class=\"backup-comparison\">\n                <div>\n                  <h4>Behåll mina filer</h4>\n                  <p><strong>Personliga filer:</strong> behålls.<br><strong>Appar och inställningar:</strong> tas bort. Vissa appar eller anpassningar från tillverkaren kan återställas, beroende på vilka alternativ du väljer.</p>\n                </div>\n                <div>\n                  <h4>Ta bort allt</h4>\n                  <p><strong>Personliga filer:</strong> tas bort.<br><strong>Appar och inställningar:</strong> tas bort. Använd det här för en nystart. Innan du ger bort datorn aktiverar du även <strong>Rensa data</strong>, som gör borttagna filer svårare att återskapa.</p>\n                </div>\n              </div>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>En lista över de appar som du behöver installera om, med installationsprogram och licenser.</li>\n                <li>En internetanslutning, om du väljer Molnnedladdning.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/reset-your-pc\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: återställ datorn <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/recovery-options-in-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: återställningsalternativ <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Ta bort allt raderar dina personliga filer.</strong> Säkerhetskopiera först: <a href=\"#backup\" data-view=\"backup\">se alternativen för säkerhetskopiering</a>.</p></div>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Starta inte om datorn under en återställning.</strong> Microsoft påpekar att skärmen kan vara svart länge, ibland mer än 15 minuter, och att datorn kan starta om av sig själv. Om du själv startar om den kan återställningen misslyckas.</p></div>\n              <h3 class=\"backup-subheading\">Steg</h3>\n              <ol class=\"backup-steps\">\n                <li><strong>Om Windows startar:</strong> gå till <strong>Inställningar → System → Återställning</strong>, och bredvid <strong>Återställ den här datorn</strong> väljer du <strong>Återställ dator</strong>.<br><strong>Om Windows inte startar:</strong> <a href=\"#repair\" data-backup-jump=\"recovery-title\">öppna Windows RE</a> och välj <strong>Felsök → Återställ den här datorn</strong>.</li>\n                <li>Välj <strong>Behåll mina filer</strong> eller <strong>Ta bort allt</strong>.</li>\n                <li>Välj <strong>Molnnedladdning</strong> eller <strong>Lokal ominstallation</strong>.</li>\n                <li>Granska sammanfattningen av vad som kommer att hända och välj sedan <strong>Återställ</strong>. Låt datorn vara ansluten till ström.</li>\n              </ol>\n              <p><strong>Molnnedladdning</strong> laddar ned nya installationsfiler för Windows från Microsoft. Det är ingen molnsäkerhetskopia av dina filer. <strong>Lokal ominstallation</strong> använder filer som redan finns på datorn. Om det misslyckas provar du Molnnedladdning.</p>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"install-usb-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">08</span><h2 id=\"install-usb-title\" tabindex=\"-1\">USB-installationsmedium för Windows 11</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad det gör</h3>\n              <p>Med ett USB-installationsmedium kan du öppna återställningsverktygen, installera om Windows och behålla dina filer och appar, eller installera en ny kopia. Du kan skapa det i förväg, eller på en annan fungerande dator när du behöver det.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Ett tomt USB-minne på minst 8 GB. Det kommer att raderas.</li>\n                <li>En fungerande Windows-dator att skapa det på.</li>\n                <li>För de flesta datorer: Microsofts verktyg för att skapa media, som skapar media för x64-datorer. För Windows på Arm använder du Microsofts <a href=\"https://www.microsoft.com/software-download/windows11arm64\" target=\"_blank\" rel=\"noopener noreferrer\">nedladdning av Windows 11 för Arm64</a>, som kan behöva drivrutiner från datorns tillverkare för att starta, eller tillverkarens återställningsmedia.</li>\n              </ul>\n              <p class=\"backup-limits\">För bästa drivrutinskompatibilitet på alla datorer föreslår Microsoft att du kontrollerar om tillverkaren erbjuder egna återställningsmedia.</p>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/install-upgrade/create-installation-media-for-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: skapa installationsmedia <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/install-upgrade/reinstall-windows-with-the-installation-media\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: installera om med installationsmedia <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>När du skapar USB-mediet raderas allt på det.</strong> Kopiera först allt du behöver från USB-minnet.</p></div>\n              <h3 class=\"backup-subheading\">Steg: skapa USB-mediet</h3>\n              <ol class=\"backup-steps\">\n                <li>På en fungerande Windows-dator går du till Microsofts sida <a href=\"https://www.microsoft.com/software-download/windows11\" target=\"_blank\" rel=\"noopener noreferrer\">Ladda ner Windows 11</a>. Under <strong>Skapa ett installationsmedium för Windows 11</strong> väljer du <strong>Ladda ner nu</strong>.</li>\n                <li>Kör verktyget för att skapa media, godkänn administratörsfrågan och acceptera licensvillkoren.</li>\n                <li>Välj språk och utgåva, välj <strong>USB-flashminne</strong>, välj ditt USB-minne och låt verktyget slutföra.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Tre sätt att använda det</h3>\n              <div class=\"backup-usb-uses\">\n                <div>\n                  <h4>1. Reparera utan att installera om</h4>\n                  <p class=\"backup-usb-result\"><strong>Filer, appar, inställningar:</strong> beror på verktyget som du väljer</p>\n                  <p>Starta datorn från USB-minnet. På den första skärmen i Installationsprogrammet för Windows väljer du <strong>Nästa</strong> och sedan <strong>Reparera min dator</strong>. Det öppnar återställningsverktyg som Startreparation och Systemåterställning. Att öppna dem ändrar ingenting i sig.</p>\n                </div>\n                <div>\n                  <h4>2. Installera om och behåll allt</h4>\n                  <p class=\"backup-usb-result\"><strong>Filer, appar, inställningar:</strong> behålls</p>\n                  <p>Bara om Windows fortfarande startar. Öppna USB-minnet i Utforskaren och kör <strong>setup.exe</strong>. Välj <strong>Ändra vad du vill behålla</strong>, välj <strong>Behåll personliga filer och appar</strong> och välj sedan <strong>Nästa</strong> och <strong>Installera</strong>. Använd media för samma utgåva som ditt installerade Windows. Om <strong>Behåll personliga filer och appar</strong> inte erbjuds avbryter du, om du inte är beredd att installera om dina appar.</p>\n                </div>\n                <div>\n                  <h4>3. Ren installation</h4>\n                  <p class=\"backup-usb-result\"><strong>Filer, appar, inställningar:</strong> tas bort</p>\n                  <div class=\"backup-warning\" role=\"note\"><p><strong>En ren installation tar bort dina personliga filer, appar, inställningar och tillverkarens anpassningar.</strong> <a href=\"#backup\" data-view=\"backup\">Säkerhetskopiera dina filer först</a> och koppla sedan från enheterna med dina säkerhetskopior.</p></div>\n                  <p>Starta datorn från USB-minnet, välj <strong>Installera Windows 11</strong> och bekräfta att allt kommer att tas bort. Välj den utgåva som matchar din licens. Där installationsprogrammet visar partitioner tar du bara bort dem på <strong>Disk 0</strong> och installerar sedan på <strong>Disk 0 oallokerat utrymme</strong>.</p>\n                  <div class=\"backup-warning\" role=\"note\"><p><strong>Ändra inte partitioner på någon annan disk,</strong> till exempel Disk 1. På en dator med mer än en enhet kan det radera en dataenhet.</p></div>\n                </div>\n              </div>\n              <p class=\"backup-limits\"><strong>Starta från USB-minnet:</strong> om Windows körs går du till <strong>Inställningar → System → Återställning → Avancerad start → Starta om nu</strong> och väljer sedan <strong>Använd en enhet</strong>. Annars använder du datorns tangent för startmenyn medan den startar. Tangenten varierar mellan tillverkare. En dator som har aktiverats tidigare aktiveras normalt igen efter en ominstallation av samma utgåva.</p>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"recovery-drive-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">09</span><h2 id=\"recovery-drive-title\" tabindex=\"-1\">Återställningsenhet</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Vad den gör</h3>\n              <p>En återställningsenhet är ett USB-minne som du skapar på datorn medan den fungerar. Den kan öppna Windows RE och installera om Windows. Den innehåller de inbyggda Windows-filerna, de uppdateringar som var installerade när du skapade den och eventuella anpassningar från datorns tillverkare, och den är avsedd för just den datorn.</p>\n              <h3 class=\"backup-subheading\">Det här behöver du</h3>\n              <ul class=\"backup-list\">\n                <li>Ett USB-minne som kan raderas.</li>\n                <li>En dator som fortfarande fungerar. Microsoft rekommenderar att du skapar en i förväg, som en sista utväg.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/recovery-drive\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Återställningsenhet <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Tänk på</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>När du skapar en återställningsenhet raderas befintliga data på den valda USB-enheten.</strong> Kopiera först allt du behöver från den.</p></div>\n              <ul class=\"backup-list\">\n                <li>Den innehåller <strong>ingen säkerhetskopia av dina personliga filer</strong>. En ominstallation med <strong>Återställ från en enhet</strong> tar bort filer, appar och inställningar.</li>\n                <li>Skapa den på nytt en gång om året, så att den innehåller nya uppdateringar.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Steg</h3>\n              <ol class=\"backup-steps\">\n                <li>Sök efter <strong>Återställningsenhet</strong> på Start och öppna den. Godkänn administratörsfrågan om Windows frågar.</li>\n                <li>Låt <strong>Säkerhetskopiera systemfiler till återställningsenheten</strong> vara markerat och välj sedan <strong>Nästa</strong>.</li>\n                <li>Anslut USB-minnet, välj det och välj sedan <strong>Nästa</strong> och <strong>Skapa</strong>. Kopieringen kan ta en stund.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <div class=\"backup-bottom\"><p>Baserat på Microsofts dokumentation, kontrollerad i oktober och november 2026. Menynamn och tillgänglighet kan ändras med uppdateringar av Windows 11.</p><a class=\"tools-directory-link\" href=\"#directory\" data-view=\"directory\"><span aria-hidden=\"true\">←</span> Tillbaka till tjänsterna</a></div>\n      </div>\n    "
 },
 "data": {
  "services": {
   "DiagTrack": {
    "summary": "Börja med att begränsa valfria diagnostikdata.",
    "tradeoff": "Den diagnostikinsamling som tjänsten hanterar stoppas. Windows Error Reporting och enskilda appar har egna inställningar.",
    "advice": "Stäng först av valfria diagnostikdata i Inställningar → Sekretess och säkerhet → Diagnostik och feedback. Du kan också välja att inaktivera tjänsten i skriptbyggaren.",
    "description": "Samlar in och skickar diagnostikhändelser och loggar från Windows enligt dina inställningar för diagnostikdata."
   },
   "dmwappushservice": {
    "summary": "Låt den vara tillgänglig för Intune och enhetshantering.",
    "tradeoff": "Om du inaktiverar den kan en registrerad dator sluta synkronisera med Microsoft Intune och sluta ta emot åtgärder från enhetshanteringen.",
    "advice": "Låt den ha kvar sin nuvarande standardinställning, särskilt på en dator som är registrerad i Microsoft Intune eller ett annat system för enhetshantering.",
    "description": "Vidarebefordrar push-meddelanden från enhetshanteringen. Microsoft Intune använder tjänsten för att synkronisera enheter.",
    "availability": "Det fullständiga visningsnamnet kan innehålla ”Device Management Wireless Application Protocol”. Tillgänglighet och konfiguration varierar mellan versioner och hanteringsuppsättningar."
   },
   "WerSvc": {
    "summary": "Gå igenom rapportinställningarna innan du inaktiverar diagnostik.",
    "tradeoff": "Kraschrapporter, diagnostikloggar och föreslagna lösningar kan bli otillgängliga. Då blir det svårare att undersöka återkommande fel.",
    "advice": "Använd principer för Windows Error Reporting där det stöds för att styra hur rapporter skickas. Rapporterna följer de inställningar för samtycke och principer som gäller.",
    "description": "Samlar in information om krascher och appar som slutat svara, för felsökning och felrapporter.",
    "recommendation": "Använd rapporteringsprinciper"
   },
   "RemoteRegistry": {
    "summary": "Kan inaktiveras om du inte administrerar registret på distans.",
    "tradeoff": "Verktyg för fjärrhantering av registret slutar fungera mot den här datorn. Registereditorn fungerar fortfarande lokalt.",
    "advice": "På din egen dator kan du inaktivera den om inget verktyg för fjärradministration behöver den. Behåll den om din IT-avdelning eller ditt hanteringsprogram kräver den. Om den redan är inaktiverad låter du den vara.",
    "description": "Låter behöriga verktyg för fjärradministration läsa och ändra Windows-registret, beroende på kontobehörigheter och enhetens konfiguration."
   },
   "SysMain": {
    "summary": "Överväg en ändring om SysMain orsakar ihållande disk- eller processoraktivitet.",
    "tradeoff": "Förinläsningen stoppas, så appar som du använder ofta kan ta längre tid att öppna.",
    "advice": "Behåll standardinställningen om du inte har spårat ihållande bakgrundsaktivitet till den här tjänsten. Om du inaktiverar den och appar startar långsammare återställer du den tidigare inställningen.",
    "description": "Lär sig användningsmönster och läser in appdata i minnet i förväg, så att appar som du använder ofta startar snabbare.",
    "recommendation": "Endast vid felsökning"
   },
   "WSearch": {
    "summary": "Prova färre indexerade platser innan du stänger av den.",
    "tradeoff": "Utforskaren och appar som använder Windows-indexet, bland annat klassiska Outlook, kan ge långsammare eller ofullständiga sökresultat. Skriptbyggaren inaktiverar även Arbetsmappar, så organisationens filsynkronisering stoppas.",
    "advice": "Välj alternativet Klassisk eller undanta mappar med mycket aktivitet i Inställningar → Sekretess och säkerhet → Sök eller Söka i Windows. I versioner med automatisk indexering av mappar som du använder ofta går du igenom även det alternativet. Välj att inaktivera tjänsten bara om du godtar nackdelarna för sökningen och inte använder Arbetsmappar. Dess tjänst kan vara beroende av Windows Search.",
    "description": "Skapar och uppdaterar ett lokalt index så att Windows och kompatibla appar snabbt kan hitta filer, egenskaper och filinnehåll."
   },
   "workfolderssvc": {
    "summary": "Kan inaktiveras om du inte använder Arbetsmappar.",
    "tradeoff": "Filer slutar synkroniseras med organisationens server för Arbetsmappar. Ändringar som görs på olika enheter synkroniseras inte längre via den här funktionen.",
    "advice": "Behåll den om du eller din organisation använder Arbetsmappar. Kontrollera Kontrollpanelen → System och säkerhet → Arbetsmappar. Skriptbyggaren tar med den här tjänsten när du väljer Windows Search, och skriptet hanterar valda beroende tjänster först.",
    "description": "Synkroniserar filer mellan den här datorn och en server för Arbetsmappar i en organisation."
   },
   "Spooler": {
    "summary": "Kan inaktiveras om du aldrig skriver ut, inte heller till PDF.",
    "tradeoff": "Lokala skrivare, delade skrivare och virtuell utskrift som Microsoft Print to PDF kan sluta fungera.",
    "advice": "Behåll den för all form av utskrift, även utan en fysisk skrivare. Om du aldrig skriver ut går du igenom dess beroenden och inaktiverar den med en säkerhetskopia av de ursprungliga inställningarna.",
    "description": "Placerar utskriftsjobb i kö och kopplar appar till lokala, nätverksanslutna och virtuella skrivare."
   },
   "PrintDeviceConfigurationService": {
    "summary": "Kan inaktiveras bara om du aldrig skriver ut eller lägger till en skrivare.",
    "tradeoff": "Det kan misslyckas att lägga till eller konfigurera skrivare.",
    "advice": "Behåll den om du skriver ut eller lägger till skrivare. Kontrollera den lokala beskrivningen och beroendena, eftersom utskriftskomponenterna skiljer sig mellan versioner. Skriptet hoppar över den om den saknas.",
    "description": "Hanterar konfigurationen av utskriftsenheter.",
    "availability": "En utskriftskomponent som beror på versionen. Den länkade referensen förklarar utskriftsstacken. Kontrollera komponentens lokala beskrivning och beroenden i services.msc."
   },
   "Fax": {
    "summary": "Kan inaktiveras om du inte använder faxfunktionerna i Windows.",
    "tradeoff": "Det går inte längre att skicka eller ta emot fax via Windows. Andra faxprogram kan ha andra krav.",
    "advice": "Inaktivera den om du inte faxar via Windows. Om tjänsten saknas eller redan är inaktiverad behöver du inte göra något. Skriptet hoppar då över den.",
    "description": "Gör det möjligt att skicka och ta emot fax i Windows när de valfria faxkomponenterna är installerade.",
    "availability": "Valfri funktion. Tjänsten Fax finns kanske inte i din Windows 11-installation."
   },
   "TabletInputService": {
    "summary": "Låt inmatningstjänsterna vara tillgängliga, även utan pekskärm.",
    "tradeoff": "Skärmtangentbord, handskrift och funktioner för inmatningsmetoder kan sluta fungera.",
    "advice": "Låt inmatningstjänsterna ha kvar sina nuvarande standardinställningar, även på datorer med fysiskt tangentbord.",
    "description": "Ger stöd för pektangentbordet och handskriftspanelen i versioner som har den här tjänsten.",
    "availability": "Ett äldre tjänstnamn. Nyare versioner kan i stället visa TextInputManagementService, som har en egen post i den här guiden. Utgå från tjänstnamnet på din dator."
   },
   "wisvc": {
    "summary": "Kan inaktiveras om datorn inte är med i Windows Insider Program.",
    "tradeoff": "Funktioner i Windows Insider Program kan sluta fungera. Att inaktivera tjänsten gör inte en installerad förhandsversion till en stabil version.",
    "advice": "Överväg att inaktivera den bara på en dator med en stabil version som inte är registrerad. Om du redan får förhandsversioner använder du Inställningar → Windows Update → Windows Insider Program för att lämna programmet på det sätt som stöds.",
    "description": "Tillhandahåller stödfunktioner för Windows Insider Program och förhandsversionerna."
   },
   "TermService": {
    "summary": "Om datorn aldrig tar emot anslutningar via Fjärrskrivbord.",
    "tradeoff": "Inkommande sessioner via Fjärrskrivbord och relaterade funktioner för fjärrsessioner blir otillgängliga. Det kan koppla från din nuvarande session.",
    "advice": "Stäng hellre av Fjärrskrivbord i Inställningar → System. Om du inaktiverar tjänster gör du det lokalt vid datorn, och du behåller dem om du behöver någon funktion för fjärrsessioner. Om datorn kan ta emot anslutningar beror på utgåvan.",
    "description": "Gör att den här datorn kan ta emot sessioner via Fjärrskrivbord, så att en annan dator kan ansluta till den."
   },
   "lfsvc": {
    "summary": "Gå först igenom platsbehörigheterna.",
    "tradeoff": "Platsberoende appar, automatiska platsfunktioner och Hitta min enhet kan förlora funktioner. Appar kan fortfarande uppskatta platsen utifrån en IP-adress.",
    "advice": "Använd Inställningar → Sekretess och säkerhet → Plats för att hantera tjänsten och appbehörigheterna. Kontrollera Hitta min enhet innan du stänger av platsen.",
    "description": "Ger platsinformation till Windows-funktioner och appar som har behörighet att använda den."
   },
   "DoSvc": {
    "summary": "Begränsa nedladdningar mellan datorer i Inställningar.",
    "tradeoff": "Om du inaktiverar tjänsten kan leveransen av innehåll och uppdateringar störas. Om du stänger av delningen mellan datorer fungerar direkta nedladdningar fortfarande.",
    "advice": "I Inställningar → Windows Update → Avancerade alternativ → Leveransoptimering stänger du av nedladdningar från andra enheter eller begränsar deras omfattning. Låt tjänsten vara tillgänglig.",
    "description": "Laddar ned Windows-uppdateringar och annat innehåll från Microsoft, med valfri delning mellan datorer."
   },
   "bthserv": {
    "summary": "Om du inte använder några Bluetooth-enheter.",
    "tradeoff": "Bluetooth-parkoppling och ansluten kringutrustning kan sluta fungera. Det gäller tangentbord, möss, handkontroller, headset och vissa hjälpmedelsenheter.",
    "advice": "Använd ett tangentbord och en mus med sladd innan du ändrar den här tjänsten. Behåll den om du kanske ansluter en Bluetooth-enhet igen. Att stänga av Bluetooth i Inställningar är ett enklare alternativ.",
    "description": "Ger stöd för att hitta och parkoppla Bluetooth-enheter."
   },
   "BTAGService": {
    "summary": "Om du inte ringer samtal med ett Bluetooth-headset.",
    "tradeoff": "Ljud via handsfree-headset, bland annat mikrofonen som används för samtal, kan sluta fungera.",
    "advice": "Behåll den om du använder ett Bluetooth-headset för röst- eller videosamtal.",
    "description": "Ger stöd för den handsfree-ljudanslutning via Bluetooth som används för samtal med headset."
   },
   "BthAvctpSvc": {
    "summary": "Om du inte använder medieknappar på Bluetooth-enheter.",
    "tradeoff": "Uppspelningsknappar på Bluetooth-ljudenheter kan sluta fungera.",
    "advice": "Behåll den för Bluetooth-ljudenheter som har fjärrkontroll för uppspelning.",
    "description": "Hanterar fjärrkommandon för ljud och video via Bluetooth, till exempel uppspelningsknappar."
   },
   "RetailDemo": {
    "summary": "Om det här inte är en demonstrationsdator i en butik.",
    "tradeoff": "Butiksdemonstrationer blir otillgängliga.",
    "advice": "Låt den vara inaktiverad om den redan är avstängd.",
    "description": "Ger stöd för det demonstrationsläge som används på visningsdatorer i butiker."
   },
   "UmRdpService": {
    "summary": "Om du inte använder omdirigerade enheter i Fjärrskrivbord.",
    "tradeoff": "Omdirigering av diskenheter, skrivare och andra enheter i fjärrsessioner kan sluta fungera.",
    "advice": "Gå igenom den tillsammans med Remote Desktop Services. Inaktivera den bara från en lokal session, när du inte tar emot fjärrsessioner och inte behöver de här funktionerna.",
    "description": "Omdirigerar klientens skrivare, diskenheter och enheter som stöds till en session i Fjärrskrivbord."
   },
   "SessionEnv": {
    "summary": "Om du inte använder konfiguration av sessioner i Fjärrskrivbord.",
    "tradeoff": "Sessioner i Fjärrskrivbord kan misslyckas att starta eller att använda sina konfigurerade inställningar.",
    "advice": "Gå igenom den tillsammans med Remote Desktop Services. Behåll den om du arbetar med fjärrsessioner.",
    "description": "Konfigurerar och underhåller de inställningar som behövs för sessioner i Fjärrskrivbord."
   },
   "SSDPSRV": {
    "summary": "Om du inte använder identifiering av medieenheter i nätverket.",
    "tradeoff": "UPnP-identifiering kan sluta hitta nätverksenheter, till exempel mediemottagare.",
    "advice": "Behåll den för enheter eller medieappar som använder UPnP-identifiering. Gå igenom UPnP Device Host samtidigt.",
    "description": "Hittar nätverksenheter som annonserar sig via SSDP, bland annat UPnP-medieenheter."
   },
   "upnphost": {
    "summary": "Om du inte är värd för UPnP-enheter.",
    "tradeoff": "UPnP-enheter som den här datorn är värd för blir otillgängliga för andra enheter.",
    "advice": "Behåll den om ditt program för mediedelning eller enheter använder UPnP-värdtjänster.",
    "description": "Gör att den här datorn kan vara värd för UPnP-enheter."
   },
   "fdPHost": {
    "summary": "Om du inte använder automatisk nätverksidentifiering.",
    "tradeoff": "Appar som använder de här providrarna kan sluta hitta nätverksenheter och delade resurser.",
    "advice": "Behåll den om du använder automatisk identifiering av nätverksskrivare, medieenheter eller delade resurser.",
    "description": "Kör de SSDP- och WS-Discovery-providrar som appar använder för att hitta nätverksenheter och resurser."
   },
   "FDResPub": {
    "summary": "Om andra datorer inte behöver hitta den här datorn.",
    "tradeoff": "Andra datorer kanske inte längre hittar den här datorn eller dess delade resurser via nätverksidentifiering.",
    "advice": "Behåll den om du vill att den här datorn och dess delade resurser ska visas när någon bläddrar i nätverket.",
    "description": "Annonserar den här datorn och dess delade resurser så att andra datorer kan hitta dem i nätverket."
   },
   "WMPNetworkSvc": {
    "summary": "Om du inte delar ett mediebibliotek med den äldre funktionen.",
    "tradeoff": "Andra enheter förlorar åtkomsten till det delade mediebiblioteket. Tjänsten beror på vilka mediefunktioner som är installerade.",
    "advice": "Inaktivera den bara om ingen enhet strömmar från den här datorn via delningsfunktionen i äldre Windows Media Player.",
    "description": "Delar biblioteket i äldre Windows Media Player med kompatibla nätverksenheter."
   },
   "CDPSvc": {
    "summary": "Gå först igenom funktionerna för anslutna enheter.",
    "tradeoff": "Windows-funktioner som bygger på Connected Devices Platform kan sluta ansluta till andra enheter.",
    "advice": "Stäng av funktioner som du inte använder, till exempel Delning i närheten, i deras egna inställningar. Låt tjänsten vara tillgänglig för de funktioner för anslutna enheter som du fortfarande använder.",
    "description": "Ger stöd för Windows-funktioner som ansluter till och kommunicerar med andra enheter."
   },
   "CDPUserSvc": {
    "summary": "Om du inte använder funktioner för enheter i närheten eller mellan enheter.",
    "tradeoff": "Funktioner för anslutna enheter i din användarsession kan sluta fungera.",
    "advice": "Stäng av delningsfunktioner som du inte använder i Inställningar i stället för att inaktivera mallen för tjänsten per användare. Microsoft anger Network Connection Broker (NcbService), RPC och TCP/IP-drivrutinen bland dess beroenden. Låt den infrastrukturen vara tillgänglig för de funktioner som du behåller.",
    "description": "Ger stöd för anslutna enheter i den inloggade användarens session."
   },
   "cbdhsvc": {
    "summary": "Gå igenom Urklippshistorik och molnsynkronisering.",
    "tradeoff": "Urklippshistorik eller synkronisering kan sluta fungera.",
    "advice": "Använd Inställningar → System → Urklipp.",
    "description": "Ger stöd för Urklippshistorik och synkronisering av Urklipp mellan enheter."
   },
   "OneSyncSvc": {
    "summary": "Gå igenom kontosynkroniseringen.",
    "tradeoff": "Appar som använder den här tjänsten kan sluta synkronisera e-post, kalendrar och kontakter.",
    "advice": "Använd inställningarna för konto eller synkronisering i den berörda appen.",
    "description": "Synkroniserar e-post, kalendrar, kontakter och andra användardata för appar som använder den här Windows-tjänsten.",
    "recommendation": "Använd kontots synkinställningar"
   },
   "BcastDVRUserService": {
    "summary": "Om du inte spelar in spel i bakgrunden.",
    "tradeoff": "Spelinspelning blir otillgänglig.",
    "advice": "Använd Inställningar → Spel → Inspelningar (Captures).",
    "description": "Ger stöd för funktionerna för spelinspelning och sändning i Windows."
   },
   "CaptureService": {
    "summary": "Låt den vara tillgänglig för skärmbilder och skärminspelning.",
    "tradeoff": "Skärminspelning kan misslyckas i appar som använder detta Windows-API.",
    "advice": "Låt den vara tillgänglig för appar för skärminspelning och skärmdelning.",
    "description": "Ger stöd för skärminspelning i appar som använder API:t Windows.Graphics.Capture."
   },
   "BluetoothUserService": {
    "summary": "Gå igenom den tillsammans med dina Bluetooth-enheter.",
    "tradeoff": "Bluetooth-funktioner per användare kan sluta fungera.",
    "advice": "Använd Bluetooth-inställningarna först.",
    "description": "Ger stöd för Bluetooth-funktioner som gäller den inloggade användarens session."
   },
   "PimIndexMaintenanceSvc": {
    "summary": "Låt den vara tillgänglig för kontaktsökning.",
    "tradeoff": "Kontakter kan försvinna från sökresultaten.",
    "advice": "Behåll standardkonfigurationen.",
    "description": "Indexerar kontaktdata så att appar som stöds kan söka i dem snabbt."
   },
   "UserDataSvc": {
    "summary": "Låt den vara tillgänglig för appar som är beroende av den.",
    "tradeoff": "Appar som använder den här tjänsten kan förlora åtkomsten till kontakter, kalendrar och andra delade användardata.",
    "advice": "Behåll standardkonfigurationen.",
    "description": "Ger appar som stöds åtkomst till strukturerade användardata, bland annat kontakter och kalendrar."
   },
   "UnistoreSvc": {
    "summary": "Låt den vara tillgänglig för appar som är beroende av den.",
    "tradeoff": "Appar som använder det här lagret kanske inte kan läsa eller spara kontakter, kalendrar och relaterade data.",
    "advice": "Behåll standardkonfigurationen.",
    "description": "Lagrar strukturerade användardata, bland annat kontakter och kalendrar, för appar som stöds."
   },
   "PrintWorkflowUserSvc": {
    "summary": "Låt den vara tillgänglig för utskriftsappar.",
    "tradeoff": "Appar för utskriftsarbetsflöden kanske inte kan förbereda eller anpassa utskriftsjobb.",
    "advice": "Låt den vara tillgänglig om du skriver ut.",
    "description": "Ger stöd för appar för utskriftsarbetsflöden i den inloggade användarens session."
   },
   "WpnUserService": {
    "summary": "Låt aviseringarna vara tillgängliga.",
    "tradeoff": "Lokala aviseringar och push-aviseringar kan sluta fungera.",
    "advice": "Stäng av oönskade appaviseringar i Inställningar.",
    "description": "Levererar lokala aviseringar och push-aviseringar till den inloggade användaren."
   },
   "vmicheartbeat": {
    "summary": "Behåll den om Windows körs i en virtuell dator.",
    "tradeoff": "Värden får inte längre rapporter om gästens hälsa.",
    "advice": "På fysiska datorer låter du vilande integrationstjänster vara.",
    "description": "Rapporterar till Hyper-V-värden att gästoperativsystemet körs."
   },
   "vmicshutdown": {
    "summary": "Behåll den om Windows körs i en virtuell dator.",
    "tradeoff": "Värden kan inte längre starta en kontrollerad avstängning.",
    "advice": "Undvik att ersätta en kontrollerad avstängning med en tvingad avstängning av strömmen.",
    "description": "Låter Hyper-V-värden begära en normal avstängning av det här gästoperativsystemet."
   },
   "vmictimesync": {
    "summary": "Behåll den om Windows körs i en virtuell dator.",
    "tradeoff": "Tidssynkroniseringen från värden till gästen stoppas.",
    "advice": "Hantera eventuella särskilda tidskrav tillsammans med administratören för den virtuella datorn.",
    "description": "Synkroniserar gästens klocka med dess Hyper-V-värd."
   },
   "vmickvpexchange": {
    "summary": "Behåll den om Windows körs i en virtuell dator.",
    "tradeoff": "Utbytet av metadata mellan gäst och värd stoppas.",
    "advice": "Låt gästens integrationskonfiguration vara oförändrad.",
    "description": "Utbyter grundläggande konfigurationsinformation mellan en Hyper-V-gäst och dess värd."
   },
   "vmicvss": {
    "summary": "Behåll den för säkerhetskopiering av virtuella datorer medan de körs.",
    "tradeoff": "Säkerhetskopiering som värden samordnar medan datorn körs kan misslyckas.",
    "advice": "Gå igenom den tillsammans med din administratör för säkerhetskopiering.",
    "description": "Samordnar ögonblicksbilder av gästen för säkerhetskopiering som Hyper-V-värden startar medan den virtuella datorn körs."
   },
   "vmicguestinterface": {
    "summary": "Låt den ha kvar den virtuella datorns konfigurerade standardinställning.",
    "tradeoff": "Värdens integration för filkopiering kan sluta fungera.",
    "advice": "Om den redan är inaktiverad behöver du inte ändra något.",
    "description": "Låter Hyper-V-värden kopiera filer till en gäst via integrationstjänsterna."
   },
   "vmicvmsession": {
    "summary": "Behåll den för PowerShell från värden till gästen.",
    "tradeoff": "Administration med PowerShell Direct blir otillgänglig.",
    "advice": "Låt den ha kvar den virtuella datorns konfigurerade standardinställning.",
    "description": "Möjliggör PowerShell Direct-anslutningar från Hyper-V-värden till en Windows-gäst utan nätverksanslutning."
   },
   "WinDefend": {
    "summary": "Låt skyddet mot skadlig kod vara tillgängligt.",
    "tradeoff": "Microsoft Defender Antivirus kan inte utföra sin vanliga genomsökning och sitt skydd mot skadlig kod.",
    "advice": "Låt Windows hantera registreringen av antivirusprogram. Inaktivera inte skyddet för att förbättra prestandan, och tvinga inte på tjänsten när en kompatibel säkerhetsprodukt hanterar skyddet.",
    "description": "Kör genomsökning och skydd mot skadlig kod i Microsoft Defender Antivirus.",
    "availability": "Windows kan ändra Defenders driftläge när ett annat antivirusprogram är installerat. Rätt läge beror på säkerhetskonfigurationen."
   },
   "WdNisSvc": {
    "summary": "Låt Defenders nätverksinspektion vara tillgänglig.",
    "tradeoff": "Microsoft Defenders inspektion av nätverkstrafik för angrepp störs.",
    "advice": "Inaktivera den inte.",
    "description": "Inspekterar nätverkstrafik efter angrepp som en del av Microsoft Defender Antivirus."
   },
   "MpsSvc": {
    "summary": "Använd brandväggsinställningarna, inte en tjänständring.",
    "tradeoff": "Om du stoppar brandväggstjänsten kan säkerheten och Windows-funktioner störas.",
    "advice": "Konfigurera regler eller profiler med de brandväggsinställningar som stöds. Lägg inte till den här tjänsten i ett prestandaskript.",
    "description": "Tillämpar regler i Windows-brandväggen för inkommande och utgående nätverkstrafik."
   },
   "BFE": {
    "summary": "Låt nätverksfiltreringen vara tillgänglig.",
    "tradeoff": "Brandväggen och IPsec är beroende av filtreringsinfrastrukturen.",
    "advice": "Låt den vara tillgänglig och felsök oönskat nätverksbeteende med de inställningar som stöds.",
    "description": "Hanterar den filtreringsinfrastruktur som Windows-brandväggen och IPsec använder."
   },
   "wuauserv": {
    "summary": "Låt uppdateringstjänsten vara tillgänglig.",
    "tradeoff": "Windows kanske inte kan söka efter, ladda ned eller installera uppdateringar.",
    "advice": "Använd uppdateringsinställningarna.",
    "description": "Gör det möjligt att hitta, ladda ned och installera Windows-uppdateringar."
   },
   "BITS": {
    "summary": "Låt bakgrundsöverföringar vara tillgängliga.",
    "tradeoff": "Nedladdningar eller uppladdningar i bakgrunden som Windows och beroende appar använder kan stoppas eller misslyckas.",
    "advice": "Behåll standardkonfigurationen.",
    "description": "Överför filer i bakgrunden för Windows och appar med den nätverksbandbredd som är ledig."
   },
   "RpcSs": {
    "summary": "Grundläggande kommunikation mellan appar och tjänster.",
    "tradeoff": "Många Windows-komponenter är beroende av RPC.",
    "advice": "Låt den vara aktiverad. ”Remote” i namnet betyder inte att det är valfri fjärråtkomst.",
    "description": "Tillhandahåller RPC-stöd och hanterar den COM/DCOM-kommunikation som Windows och appar använder.",
    "bootRisk": {
     "reason": "Grundläggande Windows-komponenter är beroende av RPC. Om du inaktiverar den kan de komponenterna inte starta, och start eller inloggning kan störas."
    }
   },
   "RpcEptMapper": {
    "summary": "Grundläggande infrastruktur för RPC-anslutningar.",
    "tradeoff": "Program och tjänster kanske inte kan upprätta RPC-anslutningar.",
    "advice": "Behåll standardkonfigurationen.",
    "description": "Kopplar RPC-klienter till de slutpunkter som de behöver.",
    "bootRisk": {
     "reason": "Grundläggande Windows-komponenter använder den här tjänsten för att upprätta RPC-anslutningar. Om du inaktiverar den kan start eller inloggning störas."
    }
   },
   "Dhcp": {
    "summary": "Låt konfigurationen av nätverksadresser vara tillgänglig.",
    "tradeoff": "Att hämta adresser och relaterad nätverksregistrering kan misslyckas.",
    "advice": "Inaktivera den inte som optimering, inte heller i ett nätverk som brukar vara stabilt.",
    "description": "Hämtar IP-adressinställningar från en DHCP-server och ger stöd för registrering av nätverksadresser."
   },
   "Dnscache": {
    "summary": "Låt DNS-cachelagring och registrering vara tillgängliga.",
    "tradeoff": "Namnmatchningen och beroende tjänster kan påverkas.",
    "advice": "Behåll standardkonfigurationen.",
    "description": "Cachelagrar DNS-uppslag och registrerar datorns namn i DNS."
   },
   "DcomLaunch": {
    "summary": "Grundläggande aktivering av Windows-komponenter.",
    "tradeoff": "Windows-komponenter och appar som behöver COM/DCOM-aktivering kanske inte startar.",
    "advice": "Inaktivera den inte.",
    "description": "Startar COM- och DCOM-komponenter som Windows och appar använder.",
    "bootRisk": {
     "reason": "Start och inloggning är beroende av Windows-komponenter som använder COM/DCOM-aktivering. Om du inaktiverar tjänsten kan de komponenterna inte starta."
    }
   },
   "EventLog": {
    "summary": "Låt diagnostik- och granskningsloggar vara tillgängliga.",
    "tradeoff": "Felsökning och administration som är beroende av loggar kan misslyckas.",
    "advice": "Styr hur länge loggar sparas i stället för att inaktivera tjänsten.",
    "description": "Registrerar Windows-händelser som används för diagnostik, säkerhetsgranskning och administration.",
    "bootRisk": {
     "reason": "Windows kan stanna om det inte går att registrera säkerhetsgranskningar när principen för avstängning vid granskningsfel är aktiverad. Den principen är normalt inaktiverad.",
     "condition": "När principen för avstängning vid granskningsfel är aktiverad"
    }
   },
   "Schedule": {
    "summary": "Låt schemalagt Windows-arbete vara tillgängligt.",
    "tradeoff": "Schemalagt underhåll av Windows och aktiviteter som skapats av appar eller användare slutar köras.",
    "advice": "Inaktivera den inte.",
    "description": "Kör schemalagda aktiviteter för Windows, installerade program och användaren."
   },
   "Winmgmt": {
    "summary": "Låt systemhanteringsinformationen vara tillgänglig.",
    "tradeoff": "Hanteringsverktyg och program som är beroende av WMI kan sluta fungera.",
    "advice": "Låt den vara aktiverad för lokala verktyg och fjärrverktyg för hantering. Att det äldre kommandoradsverktyget WMIC tas bort tar inte bort WMI och gör inte den här tjänsten onödig.",
    "description": "Tillhandahåller WMI-gränssnittet som hanteringsverktyg och appar använder för att hämta information från och hantera Windows."
   },
   "CryptSvc": {
    "summary": "Låt certifikat- och signaturfunktionerna vara tillgängliga.",
    "tradeoff": "Signaturkontroller, certifikatuppdateringar och installationer som är beroende av dem kan misslyckas.",
    "advice": "Inaktivera den inte.",
    "description": "Ger stöd för verifiering av filsignaturer och hanterar betrodda rotcertifikat."
   },
   "BDESVC": {
    "summary": "Låt hanteringen av enhetskryptering vara tillgänglig.",
    "tradeoff": "BitLocker-hantering och automatisk upplåsning av enheter kan sluta fungera. Att inaktivera tjänsten dekrypterar inte en krypterad enhet.",
    "advice": "Inaktivera den inte.",
    "description": "Ger stöd för hantering av BitLocker-enhetskryptering, uppmaningar om upplåsning och automatisk upplåsning."
   },
   "VSS": {
    "summary": "Låt infrastrukturen för ögonblicksbilder vara tillgänglig.",
    "tradeoff": "Systemåterställning och Återställning till tidpunkt är beroende av den för sina återställningspunkter, så de kan sluta fungera. Program för säkerhetskopiering som använder ögonblicksbilder från VSS kan också misslyckas. Alla filsäkerhetskopior är inte beroende av VSS. Att kopiera filer manuellt eller synkronisera dem till molnet brukar inte vara det.",
    "advice": "Låt den vara tillgänglig, även när den är stoppad just nu.",
    "description": "Samordnar ögonblicksbilder av volymer, även kallade skuggkopior, som Windows återställningsfunktioner använder, bland annat Systemåterställning och Återställning till tidpunkt. Program för säkerhetskopiering kan också använda den för att kopiera filer som används."
   },
   "WlanSvc": {
    "summary": "Låt Wi-Fi-konfigurationen vara tillgänglig.",
    "tradeoff": "Windows kanske inte kan hitta eller ansluta till Wi-Fi-nätverk.",
    "advice": "Behåll den för Wi-Fi.",
    "description": "Hittar Wi-Fi-nätverk och hanterar trådlösa anslutningar och profiler."
   },
   "Audiosrv": {
    "summary": "Låt ljudet vara tillgängligt.",
    "tradeoff": "Uppspelning och inspelning av ljud via Windows slutar fungera.",
    "advice": "Inaktivera den inte.",
    "description": "Hanterar uppspelning och inspelning av ljud i Windows."
   },
   "AudioEndpointBuilder": {
    "summary": "Låt stödet för ljudenheter vara tillgängligt.",
    "tradeoff": "Windows kanske inte kan använda högtalare, mikrofoner och andra ljudslutpunkter.",
    "advice": "Inaktivera den inte.",
    "description": "Hanterar de ljudslutpunkter som Windows använder för uppspelnings- och inspelningsenheter."
   },
   "PlugPlay": {
    "summary": "Låt maskinvaruidentifieringen vara tillgänglig.",
    "tradeoff": "Identifiering av maskinvara och reaktioner på enhetsändringar kan misslyckas eller bli instabila.",
    "advice": "Inaktivera den inte.",
    "description": "Hjälper Windows att identifiera maskinvara och reagera på enhetsändringar."
   },
   "AppXSvc": {
    "summary": "Låt distributionen av paketerade appar vara tillgänglig.",
    "tradeoff": "Installation, uppdatering och borttagning av paketerade appar kan misslyckas.",
    "advice": "Låt den ha kvar standardinställningen.",
    "description": "Installerar, uppdaterar och tar bort paketerade Windows-appar, bland annat appar från Microsoft Store."
   },
   "VaultSvc": {
    "summary": "Låt lagringen av autentiseringsuppgifter vara tillgänglig.",
    "tradeoff": "Appar och Windows-komponenter kanske inte kan hämta sparade autentiseringsuppgifter.",
    "advice": "Inaktivera den inte.",
    "description": "Lagrar och hämtar sparade autentiseringsuppgifter för appar och Windows-komponenter."
   },
   "ProfSvc": {
    "summary": "Krävs för att läsa in och stänga användarprofiler.",
    "tradeoff": "Om du inaktiverar den kan inloggning och utloggning förhindras.",
    "advice": "Låt den vara aktiverad så att Windows kan läsa in och stänga användarprofiler.",
    "description": "Läser in den användarprofil som Windows behöver för en användbar session.",
    "bootRisk": {
     "reason": "Microsoft varnar uttryckligen för att om du stoppar eller inaktiverar den här tjänsten kan användare förhindras att logga in eller ut."
    }
   },
   "nsi": {
    "summary": "Låt nätverksfunktionerna i Windows och deras beroenden vara tillgängliga.",
    "tradeoff": "Om du stoppar den förlorar datorn nätverksanslutningen, och beroende tjänster kan sluta fungera.",
    "advice": "Låt den vara aktiverad. Lokal inloggning och inloggning med cachelagrade uppgifter kan fortfarande fungera, men inloggning som behöver en domänkontrollant kan misslyckas utan ett fungerande nätverk.",
    "description": "Skickar aviseringar om nätverksändringar till Windows-komponenter.",
    "bootRisk": {
     "reason": "Utan nätverk kan domäninloggning blockeras när cachelagrade autentiseringsuppgifter inte är tillgängliga.",
     "condition": "Vid inloggning som kräver en fungerande nätverksanslutning"
    }
   },
   "gpsvc": {
    "summary": "Låt bearbetningen av principer vara tillgänglig.",
    "tradeoff": "Tillämpningen av principer och beroende hanteringsflöden kan misslyckas.",
    "advice": "Följ principerna för enhetshantering. Inaktivera den inte.",
    "description": "Tillämpar inställningar för grupprinciper på datorn och dess användare."
   },
   "TextInputManagementService": {
    "summary": "Låt textinmatningen vara tillgänglig, oavsett tangentbord.",
    "tradeoff": "Inmatningsmetoder och växling mellan skrivspråk kan sluta fungera.",
    "advice": "Behåll den nuvarande konfigurationen, även på en stationär dator utan pekskärm. Använd inställningarna för skrivning och språk för inmatningsfunktioner som du inte vill ha.",
    "description": "Ger stöd för textinmatning i Windows, bland annat redigeringsprogram för inmatningsmetoder (IME).",
    "availability": "Leta efter det här namnet i nyare versioner. TabletInputService visas separat för installationer som använder det äldre tjänstnamnet."
   },
   "NgcSvc": {
    "summary": "Låt inloggning med PIN-kod och nycklar vara tillgänglig.",
    "tradeoff": "Windows Hello och appar som använder de här nycklarna kanske inte kan logga in dig.",
    "advice": "Låt den vara aktiverad. Ändra inloggningsmetoder i Inställningar → Konton → Inloggningsalternativ.",
    "description": "Isolerar autentiseringsnycklar som används av Windows Hello och anslutna identiteter.",
    "bootRisk": {
     "reason": "Om du inaktiverar stödet för nycklar kan en inloggningsmetod med Hello bli otillgänglig. En annan inloggningsmetod måste redan vara konfigurerad för att du ska kunna använda den.",
     "condition": "När inloggningen bygger på Windows Hello"
    }
   },
   "NgcCtnrSvc": {
    "summary": "Behåll åtkomsten till dina inloggningsnycklar.",
    "tradeoff": "Nycklar för Windows Hello och autentiseringsuppgifter för virtuella TPM-smartkort kan bli otillgängliga.",
    "advice": "Låt tjänstens konfiguration vara oförändrad. Hantera din PIN-kod och andra inloggningsmetoder i Inställningar.",
    "description": "Hanterar lokala identitetsnycklar som används för autentisering med Windows Hello.",
    "bootRisk": {
     "reason": "Om du inaktiverar åtkomsten till identitetsnycklar kan den inloggningsmetod som är beroende av dem blockeras.",
     "condition": "När inloggningen använder Hello eller ett virtuellt TPM-smartkort"
    }
   },
   "WbioSrvc": {
    "summary": "Låt biometrisk inloggning vara tillgänglig.",
    "tradeoff": "Inloggning med fingeravtryck eller ansikte kan sluta fungera. Då behövs en annan konfigurerad inloggningsmetod.",
    "advice": "Ta bort en biometrisk inloggningsmetod som du inte vill ha i Inställningar → Konton → Inloggningsalternativ. Låt tjänsten vara tillgänglig.",
    "description": "Ger stöd för fingeravtryck och ansiktsigenkänning till Windows och kompatibla appar."
   },
   "wlidsvc": {
    "summary": "Låt åtkomsten till Microsoft-kontot vara tillgänglig.",
    "tradeoff": "Inloggning med Microsoft-konto och anslutna appar kan sluta fungera.",
    "advice": "Använd kontoinställningarna i Windows för att välja hur du loggar in. Inaktivera inte en autentiseringstjänst för att minska bakgrundsaktiviteten.",
    "description": "Ger stöd för autentisering med Microsoft-konto för Windows och appar.",
    "bootRisk": {
     "reason": "Om du inaktiverar den här tjänsten kan den autentisering med Microsoft-konto som flödet kräver förhindras. Lokala konton autentiseras på ett annat sätt.",
     "condition": "När ett inloggningsflöde kräver ett Microsoft-konto"
    }
   },
   "TokenBroker": {
    "summary": "Låt inloggningen med konton i appar fungera.",
    "tradeoff": "Appar kan misslyckas med att logga in eller fråga efter autentiseringsuppgifter upprepade gånger.",
    "advice": "Hantera konton som du inte vill ha i Inställningar → Konton. Låt tokenhanteraren vara tillgänglig.",
    "description": "Förmedlar kontotoken för enkel inloggning i Windows-appar."
   },
   "ClipSVC": {
    "summary": "Låt licenskontrollerna för Store-appar vara tillgängliga.",
    "tradeoff": "Licensierade Store-appar kanske inte körs korrekt.",
    "advice": "Behåll den nuvarande starttypen. En tjänst som bara startar på begäran behöver inte köras hela tiden.",
    "description": "Ger stöd för licensiering av appar från Microsoft Store."
   },
   "LicenseManager": {
    "summary": "Behåll åtkomsten till innehåll från Store.",
    "tradeoff": "Appar eller innehåll från Microsoft Store kan sluta fungera.",
    "advice": "Låt tjänsten vara tillgänglig, även om du sällan öppnar Store.",
    "description": "Tillhandahåller den licensinfrastruktur som innehåll från Microsoft Store använder."
   },
   "InstallService": {
    "summary": "Låt installation och uppdatering av Store-appar vara tillgängliga.",
    "tradeoff": "Installation eller uppdatering av Store-appar kan misslyckas.",
    "advice": "Hantera appar som du inte vill ha i Installerade appar. Behåll de nuvarande inställningarna för Store-infrastrukturen.",
    "description": "Ger stöd för installation av appar från Microsoft Store."
   },
   "msiserver": {
    "summary": "Låt installation och reparation av skrivbordsappar vara tillgängliga.",
    "tradeoff": "Installationer, reparationer, uppdateringar och borttagningar som använder Windows Installer kan misslyckas.",
    "advice": "Låt den här tjänsten vara tillgänglig för att starta på begäran.",
    "description": "Installerar och underhåller program som distribueras som MSI- och MSP-paket."
   },
   "sppsvc": {
    "summary": "Låt aktivering och licensiering av Windows vara tillgängliga.",
    "tradeoff": "Windows eller licensierade appar kan rapportera aktiveringsproblem.",
    "advice": "Inaktivera den inte. Felsök aktiveringen i Inställningar → System → Aktivering.",
    "description": "Hanterar digitala licenser för Windows och appar som stöds."
   },
   "Appinfo": {
    "summary": "Låt Kör som administratör fungera.",
    "tradeoff": "Det kan misslyckas att köra appar och administrativa verktyg med utökade behörigheter.",
    "advice": "Låt tjänsten vara tillgänglig. Den ingår i det vanliga flödet för utökade behörigheter i Windows.",
    "description": "Gör att appar kan starta med godkända administratörsbehörigheter."
   },
   "StateRepository": {
    "summary": "Låt infrastrukturen för Windows-appar vara intakt.",
    "tradeoff": "Paketerade appar och Windows-komponenter kan fungera felaktigt.",
    "advice": "Låt den ha kvar den nuvarande standardinställningen. Felsök en app som inte fungerar som den ska direkt.",
    "description": "Underhåller tillstånd som används av Windows appmodell."
   },
   "UserManager": {
    "summary": "Låt stödet för användarsessioner vara tillgängligt.",
    "tradeoff": "Appar och funktioner i användarsessionen kan sluta fungera korrekt.",
    "advice": "Inaktivera inte den här centrala tjänsten.",
    "description": "Tillhandahåller körningsstöd för användarinteraktioner i Windows."
   },
   "LSM": {
    "summary": "Låt skrivbordssessionerna fungera.",
    "tradeoff": "Det kan misslyckas att skapa eller hantera användarsessioner.",
    "advice": "Inaktivera den inte, inte heller på en dator som aldrig använder Fjärrskrivbord.",
    "description": "Hanterar lokala användarsessioner i Windows.",
    "bootRisk": {
     "reason": "Lokal inloggning i Windows kräver en användbar användarsession. Om du inaktiverar sessionshanteraren kan inloggningen och skapandet av sessioner störas."
    }
   },
   "SamSs": {
    "summary": "Låt kontoinfrastrukturen vara tillgänglig.",
    "tradeoff": "Tjänster som är beroende av konton kanske inte startar.",
    "advice": "Inaktivera inte den här centrala kontotjänsten.",
    "description": "Gör säkerhetsinformation för lokala konton tillgänglig för Windows-tjänster.",
    "bootRisk": {
     "reason": "Autentiseringen i Windows och beroende tjänster bygger på infrastrukturen för lokala konton. Om du inaktiverar den kan start eller inloggning störas."
    }
   },
   "UsoSvc": {
    "summary": "Hantera när uppdateringar installeras i Inställningar.",
    "tradeoff": "Uppdateringar kanske inte längre schemaläggs eller installeras korrekt.",
    "advice": "Använd aktiva timmar eller pausa uppdateringar tillfälligt på det sätt som stöds. Låt tjänsten vara tillgänglig.",
    "description": "Samordnar sökning, nedladdning, installation och omstarter för Windows Update."
   },
   "TrustedInstaller": {
    "summary": "Låt underhållet av Windows vara tillgängligt.",
    "tradeoff": "Windows-uppdateringar och ändringar av valfria funktioner kan misslyckas.",
    "advice": "Låt konfigurationen vara oförändrad. Låt underhållet slutföras innan du startar om eller stänger av datorn.",
    "description": "Installerar och tar bort Windows-uppdateringar och valfria komponenter."
   },
   "WaaSMedicSvc": {
    "summary": "Låt reparationen av uppdateringar vara tillgänglig.",
    "tradeoff": "Windows kanske inte kan reparera delar av sin uppdateringsinfrastruktur.",
    "advice": "Ändra inte behörigheter eller registerposter för att tvinga bort den här tjänsten. Använd felsökning för Windows Update.",
    "description": "Ger stöd för återställning av komponenter i Windows Update.",
    "availability": "Om den finns och hur den är konfigurerad beror på Windows-versionen och underhållskomponenterna."
   },
   "SecurityHealthService": {
    "summary": "Håll säkerhetsstatus och varningar korrekta.",
    "tradeoff": "Windows-säkerhet kan visa ofullständig eller inaktuell information.",
    "advice": "Låt den vara tillgänglig, även om du använder ett annat antivirusprogram. Tjänsten är skild från antivirusmotorn.",
    "description": "Skickar status för skydd och enhetens hälsa till appen Windows-säkerhet."
   },
   "wscsvc": {
    "summary": "Låt övervakningen av säkerhetsprovidrar vara tillgänglig.",
    "tradeoff": "Säkerhetsstatusen kan bli felaktig, även efter byte av antivirusprogram.",
    "advice": "Låt den vara aktiverad. Att ta bort den här tjänsten är inte ett sätt som stöds för att byta antivirusprogram.",
    "description": "Håller reda på registrerade antivirusprogram, brandväggar och andra säkerhetsprovidrar."
   },
   "DPS": {
    "summary": "Låt diagnostiken i Windows vara tillgänglig.",
    "tradeoff": "Diagnostik som är beroende av den här tjänsten kan sluta fungera.",
    "advice": "Behandla inte alla tjänster med ”diagnostic” i namnet som DiagTrack. Låt den här felsökningstjänsten vara tillgänglig.",
    "description": "Samordnar identifiering av problem och felsökning för Windows-komponenter."
   },
   "WdiServiceHost": {
    "summary": "Låt felsökningsaktiviteterna vara tillgängliga.",
    "tradeoff": "Diagnostik som kräver den här värden kan misslyckas.",
    "advice": "Behåll den nuvarande starttypen. Den kan köras bara när en diagnostikaktivitet behöver den.",
    "description": "Kör diagnostikaktiviteter med kontot Local Service."
   },
   "WdiSystemHost": {
    "summary": "Låt systemdiagnostiken vara tillgänglig.",
    "tradeoff": "Diagnostik som kräver åtkomst på systemnivå kan misslyckas.",
    "advice": "Behåll den nuvarande konfigurationen. Den är skild från valfri delning av diagnostikdata.",
    "description": "Kör diagnostikaktiviteter som behöver kontot Local System."
   },
   "W32Time": {
    "summary": "Håll systemklockan synkroniserad.",
    "tradeoff": "En klocka som går fel kan störa autentisering och tidskänsliga appar.",
    "advice": "Använd Inställningar → Tid och språk → Datum och tid. Låt tidstjänsten vara tillgänglig.",
    "description": "Synkroniserar datorns klocka med en konfigurerad tidskälla."
   },
   "Power": {
    "summary": "Låt energihanteringen fungera.",
    "tradeoff": "Energihanteringen i Windows kan fungera felaktigt.",
    "advice": "Ändra energiläge och inställningar för strömsparläge i Inställningar → System → Ström och batteri.",
    "description": "Tillämpar energiprinciper och meddelar komponenter om ändringar i strömförsörjningen."
   },
   "WinHttpAutoProxySvc": {
    "summary": "Låt systemets webbförfrågningar fungera i hanterade nätverk.",
    "tradeoff": "Windows eller appar som är beroende av automatisk proxykonfiguration kan förlora anslutningen.",
    "advice": "Hantera proxykonfigurationen i Inställningar → Nätverk och Internet → Proxy. Låt tjänsten vara tillgänglig.",
    "description": "Hittar proxyinställningar för appar som använder WinHTTP."
   },
   "iphlpsvc": {
    "summary": "Låt beroende nätverksfunktioner vara tillgängliga.",
    "tradeoff": "Funktioner som Teredo, IP-HTTPS eller konfigurerad portvidarebefordran kan sluta fungera.",
    "advice": "Behåll den nuvarande konfigurationen om du inte felsöker en viss nätverksfunktion.",
    "description": "Ger stöd för IP-nätverksfunktioner, bland annat övergångstunnlar och portvidarebefordran."
   },
   "LanmanWorkstation": {
    "summary": "Behåll åtkomsten till delade mappar och NAS-enheter.",
    "tradeoff": "Anslutningar till SMB-resurser och beroende appar kan sluta fungera.",
    "advice": "Låt den vara aktiverad. Namnet betyder inte att den bara behövs på en företagsdator.",
    "description": "Ansluter den här datorn till SMB-filresurser och andra SMB-resurser."
   },
   "LanmanServer": {
    "summary": "Hantera delning i delningsinställningarna.",
    "tradeoff": "Andra datorer kan förlora åtkomsten till den här datorns delade resurser. Appar som använder namngivna pipes kan också påverkas.",
    "advice": "Använd Avancerade delningsinställningar för att styra delningen. Utgå inte från att en stationär dator aldrig behöver en tjänst som heter Server.",
    "description": "Delar filer, skrivare och namngivna pipes från den här datorn."
   },
   "Netlogon": {
    "summary": "Låt domänautentiseringen vara tillgänglig.",
    "tradeoff": "Domänautentisering och åtkomst till domänresurser kan misslyckas.",
    "advice": "Behåll det konfigurerade läget på en jobbdator. På en hemdator som inte är ansluten till en domän låter du den vilande konfigurationen vara.",
    "description": "Upprätthåller kommunikationen för autentisering med en Active Directory-domän.",
    "bootRisk": {
     "reason": "Om du inaktiverar domänautentiseringen kan inloggningen blockeras när cachelagrade autentiseringsuppgifter inte kan användas.",
     "condition": "Vid domäninloggning som kräver en domänkontrollant"
    }
   },
   "RasMan": {
    "summary": "Låt stödet för VPN-anslutningar vara tillgängligt.",
    "tradeoff": "VPN-anslutningar som använder fjärråtkomststacken i Windows kan misslyckas.",
    "advice": "Ta bort en VPN-profil som du inte vill ha i Inställningar. Behåll tjänsten om något VPN eller någon jobbanslutning kan behöva den.",
    "description": "Hanterar VPN- och uppringda anslutningar i Windows."
   },
   "EapHost": {
    "summary": "Låt nätverksautentiseringen fungera.",
    "tradeoff": "Inloggning i Wi-Fi för företag, autentiserat Ethernet eller VPN kan misslyckas.",
    "advice": "Låt den vara tillgänglig, särskilt i nätverk på jobbet eller i skolan. Ett sparat nätverk kan fortfarande kräva den här tjänsten.",
    "description": "Tillhandahåller autentiseringsmetoder som används av skyddade nätverk och VPN."
   },
   "Wcmsvc": {
    "summary": "Behåll de automatiska nätverksanslutningarna.",
    "tradeoff": "Automatiska anslutningar och hanteringen av nätverksprinciper kan störas.",
    "advice": "Hantera Wi-Fi och nätverksinställningar i Inställningar. Låt tjänsten vara tillgänglig.",
    "description": "Hanterar valet av anslutning bland tillgängliga nätverk."
   },
   "netprofm": {
    "summary": "Låt nätverksidentifieringen fungera.",
    "tradeoff": "Appar kan få felaktig nätverksstatus eller missa ändringar i anslutningen.",
    "advice": "Låt den här tjänsten vara aktiverad. Felsök anslutningen i stället för att inaktivera identifieringen av anslutningen.",
    "description": "Håller reda på anslutna nätverksprofiler och kör identifieringen av anslutningsstatus i Windows 11."
   },
   "NlaSvc": {
    "summary": "Låt stödet för nätverksmedvetenhet vara tillgängligt.",
    "tradeoff": "Beroende komponenter kan förlora information om nätverksändringar.",
    "advice": "Behåll den konfiguration som följer med din Windows-version.",
    "description": "Ger information om nätverkskonfigurationen till Windows-komponenter och appar.",
    "availability": "I Windows 11 körs Network Connectivity Status Indicator (NCSI) av Network List Manager, inte av den här tjänsten. Kopiera inte äldre instruktioner för att justera Windows utan att kontrollera versionen."
   },
   "swprv": {
    "summary": "Låt säkerhetskopiering med ögonblicksbilder vara tillgänglig.",
    "tradeoff": "Säkerhetskopiering eller återställning som behöver den här providern för ögonblicksbilder kan misslyckas.",
    "advice": "Låt både den här tjänsten och VSS vara tillgängliga. Att en provider som startar på begäran är stoppad betyder inte att den inte används.",
    "description": "Tillhandahåller ögonblicksbilder i programvara från Windows som används via Volume Shadow Copy."
   },
   "fhsvc": {
    "summary": "Låt säkerhetskopiorna av filversioner vara tillgängliga.",
    "tradeoff": "Säkerhetskopiering med Filhistorik kan sluta köras.",
    "advice": "Hantera Filhistorik i Kontrollpanelen → System och säkerhet → Filhistorik. Låt tjänsten vara tillgänglig för befintliga säkerhetskopior.",
    "description": "Ger stöd för säkerhetskopiering av personliga filer med Filhistorik."
   },
   "SDRSVC": {
    "summary": "Låt befintliga flöden för säkerhetskopiering och återställning fungera.",
    "tradeoff": "Säkerhetskopiering eller återställning med den här funktionen kan misslyckas.",
    "advice": "Låt den vara tillgänglig om du använder Säkerhetskopiera och återställ. Den är skild från den nyare appen Windows-säkerhetskopiering och säkerhetskopieringen av inställningar i molnet.",
    "description": "Ger stöd för den äldre funktionen Säkerhetskopiera och återställ i Kontrollpanelen.",
    "availability": "En äldre komponent för säkerhetskopiering. Utgå inte från att den styr alla säkerhetskopieringsmetoder i Windows."
   },
   "wbengine": {
    "summary": "Låt befintliga avbildningssäkerhetskopior vara användbara.",
    "tradeoff": "Säkerhetskopiering eller återställning av en avbildning som är beroende av den här motorn kan misslyckas.",
    "advice": "Låt den vara tillgänglig för flöden med Säkerhetskopiera och återställ. Hantera scheman för säkerhetskopiering i verktyget för säkerhetskopiering i stället för att inaktivera motorn.",
    "description": "Kör säkerhetskopiering och återställning på blocknivå för Windows-säkerhetskopiering."
   },
   "PrintNotify": {
    "summary": "Kan inaktiveras om du aldrig använder utskriftsfunktioner.",
    "tradeoff": "Skrivartillägg, anpassade dialogrutor och utskriftsaviseringar kan sluta fungera.",
    "advice": "Behåll den för fysisk eller virtuell utskrift. Gå igenom den tillsammans med Print Spooler om du inte använder någon utskrift alls.",
    "description": "Tillhandahåller skrivarspecifika dialogrutor och utskriftsaviseringar."
   },
   "XboxGipSvc": {
    "summary": "Överväg att inaktivera den bara om du inte använder Xbox-tillbehör.",
    "tradeoff": "Funktioner eller hantering för Xbox-tillbehör kan sluta fungera.",
    "advice": "Behåll den för Xbox-handkontroller eller tillbehör som du använder med valfritt startprogram, även Steam. Tjänsten kan behövas även om du inte har någon Xbox-konsol.",
    "description": "Hanterar anslutna Xbox-tillbehör."
   },
   "XblAuthManager": {
    "summary": "Överväg att inaktivera den bara om inga appar använder Xbox-inloggning.",
    "tradeoff": "Spel och appar med Xbox-funktioner kanske inte kan autentisera sig.",
    "advice": "Behåll den för Game Pass och alla spel som använder Xbox-inloggning, även spel som installerats utanför Xbox-appen.",
    "description": "Autentiserar appar och spel som använder inloggning i Xbox-nätverket.",
    "availability": "Installerade komponenter varierar. En tjänst som saknas på din dator hoppas över av skriptet från skriptbyggaren."
   },
   "XblGameSave": {
    "summary": "Överväg att inaktivera den bara om du inte använder molnsparningar i Xbox.",
    "tradeoff": "Berörda spel slutar ladda upp eller ladda ned sparade spel via den här tjänsten.",
    "advice": "Behåll den om du använder molnsparningar eller växlar mellan spelenheter. Att inaktivera den är ingen säkerhetskopia av dina sparade spel.",
    "description": "Synkroniserar molnsparningar för spel som använder den här sparningstjänsten i Xbox."
   },
   "XboxNetApiSvc": {
    "summary": "Överväg att inaktivera den bara om du inte använder nätverksfunktioner i Xbox.",
    "tradeoff": "Nätverks- eller flerspelarfunktioner i berörda spel kan sluta fungera.",
    "advice": "Behåll den för spel som använder Xbox-nätverksfunktioner, oavsett var de köptes.",
    "description": "Ger stöd för appar som använder Xbox-nätverks-API:erna i Windows."
   },
   "FontCache": {
    "summary": "Behåll cachen som hjälper appar med mycket text.",
    "tradeoff": "Appar kan behöva bygga upp teckensnittsdata oftare och bli långsammare.",
    "advice": "Låt den vara aktiverad. Att ta bort en cachetjänst förbättrar inte automatiskt prestandan.",
    "description": "Cachelagrar teckensnittsdata som appar använder ofta."
   },
   "PcaSvc": {
    "summary": "Låt hjälpen för äldre appar vara tillgänglig.",
    "tradeoff": "Identifiering av kompatibilitetsproblem och tillhörande uppmaningar kan sluta fungera.",
    "advice": "Ändra kompatibilitetsinställningarna för den app det gäller i stället för att inaktivera tjänsten för hela systemet.",
    "description": "Identifierar kända kompatibilitetsproblem när skrivbordsprogram körs."
   },
   "camsvc": {
    "summary": "Styr behörigheterna för varje app.",
    "tradeoff": "Att inaktivera förmedlingstjänsten kan göra att appars åtkomst slutar fungera, i stället för att ge en tillförlitlig sekretessinställning.",
    "advice": "Gå igenom Appbehörigheter under Inställningar → Sekretess och säkerhet. Behåll tjänsten som utför de här åtkomstkontrollerna.",
    "description": "Kontrollerar appars åtkomst till funktioner som kameran och mikrofonen."
   },
   "FrameServer": {
    "summary": "Begränsa kameraåtkomsten med sekretessinställningarna.",
    "tradeoff": "Kameraappar, videosamtal eller delad kameraåtkomst kan sluta fungera om tjänsten inaktiveras.",
    "advice": "Stäng av kameraåtkomsten för appar som du inte vill ge åtkomst i Inställningar → Sekretess och säkerhet → Kamera. Behåll tjänsten för de appar som du tillåter.",
    "description": "Gör kamerabilder tillgängliga för kompatibla appar."
   },
   "hidserv": {
    "summary": "Låt maskinvarugenvägarna vara tillgängliga.",
    "tradeoff": "Volymknappar, medieknappar eller andra genvägar på enheter kan sluta fungera.",
    "advice": "Låt den vara tillgänglig, även om vanlig skrivning och musrörelser fortfarande fungerar utan den.",
    "description": "Ger stöd för specialknappar på tangentbord, fjärrkontroller och andra inmatningsenheter."
   },
   "DeviceAssociationService": {
    "summary": "Låt parkopplingen av enheter vara tillgänglig.",
    "tradeoff": "Parkoppling eller konfiguration av enheter kan misslyckas.",
    "advice": "Ta bort enheter som du inte vill ha i Inställningar → Bluetooth och enheter. Låt stödet för enhetskoppling vara intakt.",
    "description": "Kopplar trådbundna och trådlösa enheter till Windows."
   },
   "DeviceInstall": {
    "summary": "Låt installationen av enheter fungera.",
    "tradeoff": "Ny maskinvara eller ändrade enheter kanske inte installeras korrekt.",
    "advice": "Låt den vara tillgänglig. Att maskinvaran är oförändrad gör inte installationen av enheter onödig.",
    "description": "Hjälper Windows att känna igen och installera ändringar av enheter."
   },
   "WpnService": {
    "summary": "Styr oönskade aviseringar för varje app.",
    "tradeoff": "Appar kan sluta ta emot push-aviseringar.",
    "advice": "Använd Inställningar → System → Aviseringar. Låt den här tjänsten och aviseringstjänsten per användare vara tillgängliga.",
    "description": "Upprätthåller den systemanslutning som används för push-aviseringar i Windows."
   },
   "SCardSvr": {
    "summary": "Låt autentisering med smartkort vara tillgänglig.",
    "tradeoff": "Inloggning med smartkort, certifikat eller appar kan sluta fungera.",
    "advice": "Låt den vara tillgänglig på hanterade datorer och system som använder smartkort. Inaktivera den inte bara utifrån om ett kort sitter i just nu.",
    "description": "Hanterar kommunikationen med smartkortsläsare och smartkort.",
    "bootRisk": {
     "reason": "Ett smartkort som krävs kan inte användas om Windows inte kan kommunicera med det.",
     "condition": "När inloggningen kräver ett smartkort"
    }
   },
   "ScDeviceEnum": {
    "summary": "Låt identifieringen av smartkortsläsare vara tillgänglig.",
    "tradeoff": "Appar som använder den här identifieringen kanske inte längre hittar läsare.",
    "advice": "Låt den ha kvar den konfigurerade standardinställningen, särskilt där en organisation kräver smartkort.",
    "description": "Gör smartkortsläsare tillgängliga för Windows-appar som stöds."
   },
   "SCPolicySvc": {
    "summary": "Behåll organisationens princip för att låsa sessionen.",
    "tradeoff": "Skrivbordet kanske inte längre låses eller loggas ut som det ska när ett kort tas bort.",
    "advice": "Följ den konfigurerade smartkortsprincipen. Inaktivera inte en inställning som skyddar sessionen.",
    "description": "Utför den konfigurerade åtgärden när ett smartkort tas bort."
   },
   "EFS": {
    "summary": "Behåll åtkomsten till krypterade filer.",
    "tradeoff": "Appar kanske inte kan komma åt filer som krypterats med EFS.",
    "advice": "Behåll tjänsten och spara säkerhetskopian av ditt krypteringscertifikat och din privata nyckel. EFS är skilt från BitLocker-enhetskryptering.",
    "description": "Ger stöd för certifikatbaserad kryptering av enskilda NTFS-filer."
   },
   "StorSvc": {
    "summary": "Låt lagringsinställningarna vara tillgängliga.",
    "tradeoff": "Lagringsinställningar och beroende funktioner kanske inte fungerar korrekt.",
    "advice": "Hantera rensningen i Inställningar → System → Lagring. Låt tjänsten vara tillgänglig.",
    "description": "Ger stöd för lagringsinställningar och funktioner för lagringshantering i Windows."
   },
   "DusmSvc": {
    "summary": "Låt inställningarna för nätverksdata fungera.",
    "tradeoff": "Rapporteringen av dataanvändning och beroende funktioner för datahantering kan sluta fungera.",
    "advice": "Använd Inställningar → Nätverk och Internet för att konfigurera en anslutning med datapriser eller en databegränsning. Låt tjänsten vara tillgänglig.",
    "description": "Håller reda på dataanvändningen i nätverket och ger stöd för databegränsningar och anslutningar med datapriser."
   },
   "icssvc": {
    "summary": "Stäng av en hotspot som du inte använder i Inställningar.",
    "tradeoff": "Andra enheter kan inte använda datorns hotspot när den är avstängd.",
    "advice": "Använd Inställningar → Nätverk och Internet → Mobil hotspot. Låt tjänsten vara tillgänglig så att du kan aktivera funktionen senare.",
    "description": "Ger stöd för att dela datorns internetanslutning via Mobil hotspot."
   },
   "AarSvc": {
    "summary": "Låt den vara tillgänglig för appar som begär den.",
    "tradeoff": "Beroende agentappar kan sluta aktiveras.",
    "advice": "Hantera behörigheterna för en app som du inte vill ha, eller avinstallera den, i stället för att ändra en mall för tjänst per användare.",
    "description": "Aktiverar appar för konversationsagenter som stöds."
   },
   "CloudBackupRestoreSvc": {
    "summary": "Välj vad Windows ska komma ihåg.",
    "tradeoff": "Valda inställningar eller apptillstånd kanske inte längre säkerhetskopieras.",
    "advice": "Gå igenom Windows-säkerhetskopiering under Inställningar → Konton. Låt mallen för tjänsten vara tillgänglig för de säkerhetskopieringsval som du behåller.",
    "description": "Ger stöd för säkerhetskopiering av app- och inställningstillstånd i molnet."
   },
   "ConsentUxUserSvc": {
    "summary": "Låt behörighetsfrågorna fungera.",
    "tradeoff": "Appars begäranden om samtycke kan misslyckas.",
    "advice": "Använd behörigheterna för varje app. Att inaktivera gränssnittet för samtycke är ingen sekretessinställning.",
    "description": "Visar begäranden om samtycke för känsliga appresurser."
   },
   "CredentialEnrollmentManagerUserSvc": {
    "summary": "Låt registreringen av autentiseringsuppgifter vara tillgänglig.",
    "tradeoff": "Beroende autentiseringsflöden kan misslyckas.",
    "advice": "Låt mallen för tjänst per användare vara intakt.",
    "description": "Ger stöd för säker lagring och hämtning av autentiseringsuppgifter och token."
   },
   "DeviceAssociationBrokerSvc": {
    "summary": "Låt parkoppling i appar vara tillgänglig.",
    "tradeoff": "Appar kan misslyckas med att parkoppla enheter.",
    "advice": "Hantera parkopplade enheter via Bluetooth och enheter i stället för att inaktivera den här förmedlingstjänsten.",
    "description": "Hanterar appars begäranden om att parkoppla enheter och kontrollera åtkomst."
   },
   "DevicePickerUserSvc": {
    "summary": "Låt valet av enheter fungera.",
    "tradeoff": "Det kan misslyckas att välja en trådlös skärm eller medieenhet.",
    "advice": "Låt mallen för tjänst per användare vara tillgänglig för casting och val av enheter.",
    "description": "Ger stöd för att välja trådlösa skärmar och medieenheter."
   },
   "DevicesFlowUserSvc": {
    "summary": "Låt anslutningsgränssnittet vara tillgängligt.",
    "tradeoff": "Det kan misslyckas att konfigurera Bluetooth eller trådlösa skärmar.",
    "advice": "Stäng av maskinvarufunktioner som du inte använder i Inställningar.",
    "description": "Ger stöd för gränssnittet för att ansluta Bluetooth-enheter och trådlösa skärmar."
   },
   "MessagingService": {
    "summary": "Låt den vara tillgänglig för appar som använder meddelanden.",
    "tradeoff": "Beroende meddelandefunktioner kan sluta fungera.",
    "advice": "Hantera behörigheter eller ta bort meddelandeappar som du inte använder i stället för att ändra en mall för användartjänst.",
    "description": "Ger stöd för textmeddelanden i kompatibla appar."
   },
   "NPSMSvc": {
    "summary": "Låt integrationen av mediesessioner fungera.",
    "tradeoff": "Kontrollerna för uppspelningssessioner kan fungera felaktigt.",
    "advice": "Låt den vara tillgänglig för musik, video och andra medieappar.",
    "description": "Hanterar aktiva mediesessioner."
   },
   "P9RdrService": {
    "summary": "Låt filåtkomsten i WSL fungera.",
    "tradeoff": "Fildelning i WSL kan misslyckas.",
    "advice": "Låt mallen vara tillgänglig om WSL är installerat. Ta bort WSL-komponenter som du inte använder via funktionsinställningar som stöds.",
    "description": "Startar Plan 9-filservrar för Windows Subsystem for Linux."
   },
   "PenService": {
    "summary": "Låt pennans genvägar vara tillgängliga.",
    "tradeoff": "Konfigurerade åtgärder för pennknappar slutar fungera.",
    "advice": "Ändra genvägar i Inställningar → Bluetooth och enheter → Penna och Windows Ink.",
    "description": "Hanterar åtgärderna för en pennas genvägsknappar."
   },
   "UdkUserSvc": {
    "summary": "Låt skalintegrationen vara tillgänglig.",
    "tradeoff": "Beroende Windows-gränssnitt kan fungera felaktigt.",
    "advice": "Låt mallen för tjänst per användare ha kvar sin nuvarande konfiguration.",
    "description": "Samordnar funktionerna i Windows-skalet."
   },
   "webthreatdefusersvc": {
    "summary": "Låt varningarna om stöld av autentiseringsuppgifter vara tillgängliga.",
    "tradeoff": "Varningar som skyddar autentiseringsuppgifter kan försvinna.",
    "advice": "Låt den här säkerhetstjänsten vara tillgänglig.",
    "description": "Varnar för försök att komma åt dina autentiseringsuppgifter."
   },
   "stisvc": {
    "summary": "Kan inaktiveras om du aldrig skannar eller importerar bilder via WIA.",
    "tradeoff": "WIA-kompatibla skannrar och appar för bildimport kanske inte längre kan hämta bilder eller identifiera sina enheter.",
    "advice": "Behåll den för skannrar, skanning på multifunktionsskrivare och kameraimport som använder WIA. Välj skanneralternativet bara om du inte använder något av de här flödena.",
    "description": "Kopplar bildappar till WIA-kompatibla skannrar och kameror."
   },
   "WiaRpc": {
    "summary": "Kan inaktiveras om du inte använder händelser från stillbildsenheter.",
    "tradeoff": "Appar som är kopplade till händelser från skannrar eller kameror kanske inte längre öppnas automatiskt.",
    "advice": "Behåll den för bildflöden som startar appar från enhetshändelser. Gå igenom den tillsammans med Windows Image Acquisition om du aldrig skannar eller importerar bilder.",
    "description": "Startar appar som är registrerade för att hantera händelser vid hämtning av stillbilder."
   },
   "Sysmon": {
    "summary": "Behåll en befintlig konfiguration för säkerhetsövervakning.",
    "tradeoff": "Om du stoppar en installerad Sysmon-tjänst avbryts insamlingen av säkerhetshändelser, och övervakningsverktyg kan sakna förväntade poster.",
    "advice": "Om den inte är installerad eller aktiverad låter du det vara så, om du inte behöver dess loggning. Om du eller din organisation har konfigurerat den hanterar du händelsefiltren via Sysmons konfiguration som stöds. Låt Windows Event Log vara tillgänglig. Inbyggd och fristående Sysmon kan inte vara aktiverade samtidigt.",
    "description": "Registrerar detaljerade händelser för processer, nätverk och annat som konfigurerats i Windows Event Log, för säkerhetsutredningar.",
    "availability": "Inbyggd valfri funktion i Windows 11-versioner som stöds, avstängd som standard. Att aktivera funktionen och att installera tjänsten är separata steg. Fristående Sysinternals-installationer kan använda ett annat tjänstnamn.",
    "recommendation": "Behåll om den är konfigurerad"
   },
   "MidiSrv": {
    "summary": "Låt MIDI-appar och MIDI-enheter fungera.",
    "tradeoff": "Musikprogram, MIDI-kontroller och virtuella MIDI-anslutningar som använder den här tjänsten kan sluta kommunicera.",
    "advice": "Behåll den nuvarande konfigurationen, även när musikprogram använder virtuella MIDI-portar utan ett fysiskt instrument. Tjänsten ger stöd för MIDI 1.0 och för nyare MIDI-funktioner. Den ersätter inte tjänsten Windows Audio.",
    "description": "Kopplar kompatibla musikappar och MIDI-enheter och vidarebefordrar MIDI-meddelanden mellan dem.",
    "availability": "Windows MIDI Services började lanseras för Windows 11-versioner som stöds under 2026. Tillgängligheten och vilka överföringar som stöds beror på installerade uppdateringar."
   },
   "AppReadiness": {
    "summary": "Låt förberedelsen av appar vara tillgänglig.",
    "tradeoff": "Appar kanske inte blir klara för första användning efter inloggning eller installation.",
    "advice": "Låt den ha kvar sin nuvarande konfiguration. En tjänst som bara startar vid behov behöver inte inaktiveras för att vara inaktiv.",
    "description": "Förbereder appar för första användning när en användare loggar in eller när nya appar installeras."
   },
   "AppIDSvc": {
    "summary": "Behåll tillämpningen av programkontroll.",
    "tradeoff": "AppLocker-regler kanske inte längre tillämpas.",
    "advice": "Behåll tjänstens nuvarande konfiguration, särskilt på datorer som använder AppLocker. Ändra regler för programkontroll via den princip som gäller i stället för att inaktivera tjänsten.",
    "description": "Fastställer och verifierar de appidentiteter som AppLocker använder."
   },
   "BrokerInfrastructure": {
    "summary": "Låt infrastrukturen för bakgrundsaktiviteter i Windows vara tillgänglig.",
    "tradeoff": "Bakgrundsaktiviteter i Windows och appar kan sluta köras korrekt.",
    "advice": "Låt den här infrastrukturtjänsten vara aktiverad. Styr enskilda appar och deras funktioner i stället.",
    "description": "Styr vilka bakgrundsaktiviteter som får köras i systemet."
   },
   "CoreMessagingRegistrar": {
    "summary": "Låt kommunikationen mellan Windows-komponenter fungera.",
    "tradeoff": "Windows-komponenter och gränssnitt som är beroende av de här meddelandena kan fungera felaktigt.",
    "advice": "Behåll den nuvarande konfigurationen. Det här är delad Windows-infrastruktur, inte en inställning för en valfri app.",
    "description": "Hanterar kommunikationen mellan systemkomponenter."
   },
   "SystemEventsBroker": {
    "summary": "Låt appars bakgrundsarbete vara tillgängligt.",
    "tradeoff": "Bakgrundsarbete för appar som använder Windows Runtime kanske inte längre startar.",
    "advice": "Behåll den här delade tjänsten. Gå igenom inställningarna i den berörda appen om du vill begränsa dess aktivitet.",
    "description": "Samordnar bakgrundsarbete för Windows Runtime-appar."
   },
   "TimeBrokerSvc": {
    "summary": "Låt appars bakgrundsarbete vara tillgängligt.",
    "tradeoff": "Bakgrundsaktiviteter i appar som använder Windows Runtime kanske inte utlöses.",
    "advice": "Behåll den nuvarande konfigurationen. Styr enskilda appfunktioner i stället för att inaktivera delad infrastruktur för aktiviteter.",
    "description": "Samordnar körningen av bakgrundsarbete för Windows Runtime-appar."
   },
   "KeyIso": {
    "summary": "Låt skyddade åtgärder med privata nycklar vara tillgängliga.",
    "tradeoff": "Autentisering, certifikat eller appar som är beroende av isolerade åtgärder med privata nycklar kan misslyckas.",
    "advice": "Behåll den nuvarande konfigurationen. Hantera certifikat och autentisering med de inställningar som stöds för dem.",
    "description": "Isolerar privata nycklar och relaterade kryptografiska åtgärder i en skyddad process."
   },
   "NcbService": {
    "summary": "Låt appanslutningar och stödet för anslutna enheter vara tillgängliga.",
    "tradeoff": "Berörda appar kan förlora nätverksaviseringar, och funktioner för anslutna enheter kan sluta fungera.",
    "advice": "Låt tjänsten vara tillgänglig. Microsoft anger den som ett beroende för Connected Devices Platform User Service (CDPUserSvc). Stäng av delnings- eller aviseringsfunktioner som du inte använder i deras inställningar.",
    "description": "Förmedlar nätverksanslutningar som appar från Microsoft Store använder för att ta emot aviseringar."
   },
   "Wecsvc": {
    "summary": "Behåll konfigurerad händelseinsamling.",
    "tradeoff": "Prenumerationer på fjärranslutna händelsekällor slutar samla in vidarebefordrade händelser på den här datorn.",
    "advice": "Låt den vara tillgänglig när den här datorn samlar in händelser från andra enheter. Låt en insamlare som inte används ha kvar sin nuvarande konfiguration. Den är skild från Windows Event Log, som lagrar lokala händelser.",
    "description": "Hanterar prenumerationer på fjärranslutna händelsekällor och sparar vidarebefordrade händelser i en lokal händelselogg."
   }
  },
  "sources": {
   "sysmon": {
    "title": "Microsoft: Inbyggd Sysmon",
    "note": "Valfri loggning av säkerhetshändelser i Windows. Inbyggd Sysmon är avstängd som standard och kan inte användas samtidigt med fristående Sysmon."
   },
   "midi": {
    "title": "Microsoft: Windows MIDI Services",
    "note": "MIDI-tjänsten kopplar ihop kompatibla musikappar och enheter, även befintliga MIDI 1.0-appar."
   },
   "windows26h2": {
    "title": "Microsoft: Nyheter i Windows 11, version 26H2",
    "note": "Information om versionen, bland annat automatisk indexering av mappar som används ofta. Funktioner kan också komma via månatliga uppdateringar."
   },
   "administratorProtection": {
    "title": "Microsoft: Administratörsskydd och separata profiler",
    "note": "Appar med utökade behörigheter kan använda en separat administratörsprofil, så mappen för ett nedladdat skript bör väljas med sin faktiska sökväg."
   },
   "appIdentity": {
    "title": "Microsoft: Application Identity och AppLocker",
    "note": "AppLocker använder Application Identity för att identifiera appar och tillämpa regler."
   },
   "keyIsolation": {
    "title": "Microsoft: Lagring och isolering av CNG-nycklar",
    "note": "Isolering av privata nycklar och de åtgärder som använder dem."
   },
   "eventCollector": {
    "title": "Microsoft: Windows Event Collector",
    "note": "Prenumerationer som samlar in händelser från fjärrdatorer. Skilt från den lokala tjänsten Windows Event Log."
   },
   "workFolders": {
    "title": "Microsoft: Översikt över Arbetsmappar",
    "note": "Arbetsmappar synkroniserar filer mellan Windows-klienter och en organisations filserver. Funktionen är skild från OneDrive."
   },
   "executionPolicy": {
    "title": "Microsoft: Körningsprinciper i PowerShell",
    "note": "Omfånget Process gäller den aktuella PowerShell-sessionen och åsidosätter inte organisationens principer."
   },
   "wia": {
    "title": "Microsoft: Arkitekturen för Windows Image Acquisition",
    "note": "Hur bildappar använder WIA-tjänsten för att kommunicera med skannrar och kompatibla kameror."
   },
   "hello": {
    "title": "Microsoft: Så fungerar Windows Hello",
    "note": "Nycklar, PIN-koder och biometrisk autentisering som Windows Hello använder."
   },
   "securityApp": {
    "title": "Microsoft: Tjänster i Windows-säkerhet",
    "note": "De olika rollerna för SecurityHealthService, Security Center och antivirusskyddet."
   },
   "defender": {
    "title": "Microsoft: Kompatibilitet för Defender Antivirus",
    "note": "Hur Defenders driftlägen beror på andra säkerhetsprodukter och hanteringskonfigurationen."
   },
   "updates": {
    "title": "Microsoft: Så fungerar Windows Update",
    "note": "Samordning av uppdateringar, nedladdningar, installation och omstarter."
   },
   "time": {
    "title": "Microsoft: Tjänsten Windows Time",
    "note": "Synkronisering av klockan och dess roll i nätverksautentisering."
   },
   "ncsi": {
    "title": "Microsoft: Identifiering av nätverksanslutning",
    "note": "I Windows 11 körs NCSI i Network List Manager i stället för Network Location Awareness."
   },
   "installer": {
    "title": "Microsoft: Windows Installer",
    "note": "Installation och underhåll av Windows Installer-paket."
   },
   "fileHistory": {
    "title": "Microsoft: Säkerhetskopiera och återställ med Filhistorik",
    "note": "Inställningar för säkerhetskopiering och återställning med Filhistorik i Kontrollpanelen."
   },
   "smartCard": {
    "title": "Microsoft: Smartkortsarkitektur",
    "note": "Smartkortstjänster och beroenden för autentisering."
   },
   "removed": {
    "title": "Microsoft: Borttagna Windows-funktioner",
    "note": "Används för att skilja funktioner som har tagits bort från aktuella Windows-komponenter."
   },
   "deprecated": {
    "title": "Microsoft: Inaktuella Windows-funktioner",
    "note": "Att en funktion är inaktuell är inte samma sak som att den har tagits bort. Tillgängligheten beror fortfarande på den installerade versionen."
   },
   "stopService": {
    "title": "Microsoft: Stop-Service och beroende tjänster",
    "note": "Skriptet använder Stop-Service utan -Force, så att det vägrar stoppa en tjänst som har beroende tjänster som körs."
   },
   "restore": {
    "title": "Microsoft: Systemåterställning",
    "note": "Vad återställningspunkter omfattar och hur du använder en från Windows Återställningsmiljö."
   },
   "protection": {
    "title": "Microsoft: Systemskydd",
    "note": "Aktivera Systemskydd och skapa en återställningspunkt innan du ändrar Windows."
   },
   "recovery": {
    "title": "Microsoft: Windows Återställningsmiljö",
    "note": "Skift + Starta om, Automatisk reparation och andra återställningsverktyg."
   },
   "settingsLinks": {
    "title": "Microsoft: Starta Windows-inställningar",
    "note": "Länkar till Inställningar som stöds. Vilka sidor som finns och vad de heter beror på Windows-version och utgåva."
   },
   "audit": {
    "title": "Microsoft: Princip för avstängning vid granskningsfel",
    "note": "Windows 11 kan stanna när säkerhetsgranskningen misslyckas om den här principen är aktiverad. Det är inte standardinställningen."
   },
   "cachedLogon": {
    "title": "Microsoft: Cachelagrad domäninloggning",
    "note": "Varför domäninloggning kan kräva nätverksåtkomst när cachelagrad inloggning inte är tillgänglig."
   },
   "rpcRecovery": {
    "title": "Microsoft: Återställ nödvändiga RPC-tjänster",
    "note": "Beroenden för RPC och Endpoint Mapper. Återställningsanvisningarna omfattar även system som inte kan starta."
   },
   "mdm": {
    "title": "Microsoft: Enhetshantering och WAP Push Routing",
    "note": "Varför inaktivering av dmwappushservice kan förhindra synkronisering med Intune."
   },
   "input": {
    "title": "Microsoft: Textinmatningstjänsten och problem med IME",
    "note": "Fel i inmatningsmetoder när textinmatningstjänster är inaktiverade, och skillnader i tjänstnamn mellan Windows-versioner."
   },
   "system": {
    "title": "Microsoft: Referens för Windows-tjänster",
    "note": "Definitioner av tjänster. Microsofts rekommendationer om inaktivering på den här sidan gäller IoT Enterprise-enheter med ett fast syfte, inte alla persondatorer."
   },
   "user": {
    "title": "Microsoft: Tjänster per användare i Windows",
    "note": "Sessionsspecifika tjänster, deras beroenden och skillnader mellan versioner."
   },
   "diagnostic": {
    "title": "Microsoft: Konfigurera diagnostikdata i Windows",
    "note": "Diagnostikkomponenter och organisationens principer."
   },
   "privacy": {
    "title": "Microsoft: Diagnostik, feedback och sekretess",
    "note": "Obligatoriska och valfria diagnostikdata och inställningarna för dem."
   },
   "search": {
    "title": "Microsoft: Sökindexering i Windows",
    "note": "Indexeringens omfattning, avvägningar kring resurser och appar som använder indexet."
   },
   "location": {
    "title": "Microsoft: Platstjänsten och sekretess",
    "note": "Platsbehörigheter och begränsningarna med att stänga av platsen."
   },
   "delivery": {
    "title": "Microsoft: Leveransoptimering i Windows",
    "note": "Inställningar för nedladdning av uppdateringar mellan datorer."
   },
   "errors": {
    "title": "Microsoft: Vägledning för Windows Error Reporting",
    "note": "Kraschrapportering och inställningar för principer."
   },
   "network": {
    "title": "Microsoft: Översikt över nätverkstjänster",
    "note": "Nätverkstjänsternas roller. Råd om serverkonfiguration är inte en förinställning för att inaktivera tjänster på en stationär dator."
   },
   "bluetooth": {
    "title": "Microsoft: Bluetooth-drivrutinsstacken",
    "note": "Bluetooth-stöd och enhetsanslutningar."
   },
   "print": {
    "title": "Microsoft: Tjänsten Print Spooler",
    "note": "Utskriftstjänsten i Windows och dess ansvar som klient och server."
   },
   "registry": {
    "title": "Microsoft: Protokollet Remote Registry",
    "note": "Fjärråtkomst till registret."
   },
   "firewall": {
    "title": "Microsoft: Hantera Windows-brandväggen",
    "note": "Brandväggskonfiguration som stöds, i stället för att stoppa tjänsten."
   },
   "vss": {
    "title": "Microsoft: Volume Shadow Copy Service",
    "note": "Ögonblicksbilder av volymer och hur program för säkerhetskopiering använder dem."
   },
   "vssRecovery": {
    "title": "Microsoft: Återställning till tidpunkt, Systemåterställning och VSS",
    "note": "Både Återställning till tidpunkt och Systemåterställning använder Volume Shadow Copy Service (VSS) för att återställa en enhet till ett tidigare tillstånd."
   },
   "hyperv": {
    "title": "Microsoft: Integrationstjänster i Hyper-V",
    "note": "Gästtjänster i Windows 11 och hur de påverkar en virtuell dator."
   },
   "startup": {
    "title": "Microsoft: Konfigurera startappar",
    "note": "Ett annat ställe där du kan undersöka belastning i bakgrunden."
   },
   "powershell": {
    "title": "Microsoft: Set-Service",
    "note": "Kommandon för tjänstkonfiguration och beroenden."
   }
  },
  "settings": {
   "CloudBackupRestoreSvc": {
    "path": "Inställningar → Konton → Windows-säkerhetskopiering",
    "action": "Välj om Windows ska komma ihåg appar och inställningar. Säkerhetskopieringen av mappar i OneDrive har egna inställningar."
   },
   "camsvc": {
    "path": "Inställningar → Sekretess och säkerhet → Appbehörigheter",
    "action": "Välj den resurs som du vill styra, till exempel kameran eller mikrofonen, och gå igenom vilka appar som får komma åt den. Låt behörighetstjänsten vara tillgänglig."
   },
   "FrameServer": {
    "path": "Inställningar → Sekretess och säkerhet → Kamera",
    "action": "Gå igenom appars kamerabehörigheter. Behåll åtkomsten för videosamtal och andra kamerafunktioner som du använder."
   },
   "icssvc": {
    "path": "Inställningar → Nätverk och Internet → Mobil hotspot",
    "action": "Stäng av Mobil hotspot när du inte vill dela datorns anslutning."
   },
   "TextInputManagementService": {
    "path": "Inställningar → Tid och språk → Skriva",
    "action": "Justera skrivfunktionerna här. Låt inmatningstjänsten vara tillgänglig för tangentbord och inmatningsmetoder."
   },
   "WbioSrvc": {
    "path": "Inställningar → Konton → Inloggningsalternativ",
    "action": "Hantera fingeravtryck och ansiktsigenkänning här. Se till att du har en annan konfigurerad inloggningsmetod."
   },
   "WpnService": {
    "path": "Inställningar → System → Aviseringar",
    "action": "Stäng av aviseringar från enskilda appar och låt aviseringsinfrastrukturen vara tillgänglig."
   },
   "WpnUserService": {
    "path": "Inställningar → System → Aviseringar",
    "action": "Välj vilka appar som får skicka aviseringar till dig i stället för att inaktivera mallen för tjänsten per användare."
   },
   "DiagTrack": {
    "path": "Inställningar → Sekretess och säkerhet → Diagnostik och feedback",
    "action": "Stäng av valfria diagnostikdata om du inte vill dela dem. Obligatoriska data och annan telemetri har egna inställningar."
   },
   "WSearch": {
    "path": "Inställningar → Sekretess och säkerhet → Sök eller Söka i Windows",
    "action": "Minska antalet indexerade platser eller använd alternativet Klassisk. Om det finns går du också igenom automatisk indexering av mappar som du använder ofta. Med de här inställningarna fungerar sökningen fortfarande, men den gör mindre arbete."
   },
   "lfsvc": {
    "path": "Inställningar → Sekretess och säkerhet → Plats",
    "action": "Stäng av Positioneringstjänster eller begränsa behörigheterna för enskilda appar. Kontrollera först om du behöver Hitta min enhet."
   },
   "DoSvc": {
    "path": "Inställningar → Windows Update → Avancerade alternativ → Leveransoptimering",
    "action": "Stäng av Tillåt nedladdning från andra enheter för att stoppa delningen mellan datorer. Låt tjänsten vara tillgänglig för leverans av uppdateringar."
   },
   "CDPSvc": {
    "path": "Inställningar → System → Delning i närheten; gå också igenom de funktioner för flera enheter som du använder",
    "action": "Stäng av delningsfunktioner som du inte använder. Anslutna funktioner har egna inställningar. Det finns inget enskilt reglage för allt som tjänsten ger stöd för."
   },
   "CDPUserSvc": {
    "path": "Inställningar → System → Delning i närheten; gå också igenom de funktioner för flera enheter som du använder",
    "action": "Stäng av den delningsfunktion som du inte använder. Låt mallen för tjänsten per användare vara tillgänglig för andra anslutna funktioner."
   },
   "cbdhsvc": {
    "path": "Inställningar → System → Urklipp",
    "action": "Stäng av Urklippshistorik och synkronisering av Urklipp mellan enheter om du inte använder dem. Tjänsten ger också stöd för funktioner i Urklipp utöver de här reglagen."
   },
   "BcastDVRUserService": {
    "path": "Inställningar → Spel → Inspelningar (Captures)",
    "action": "Stäng av bakgrundsinspelning om du inte använder den. Du kan styra inspelningen utan att ändra en mall för tjänst per användare."
   },
   "BluetoothUserService": {
    "path": "Inställningar → Bluetooth och enheter",
    "action": "Stäng av Bluetooth bara om inget tangentbord, ingen mus, inga hörlurar och ingen annan enhet behöver det."
   }
  },
  "features": {
   "insider": {
    "title": "Jag är inte med i Windows Insider Program",
    "description": "Datorn kör en stabil version och är inte registrerad för förhandsversioner. Vanliga uppdateringar via Windows Update är fortfarande tillgängliga."
   },
   "remote": {
    "title": "Jag tar inte emot anslutningar via Fjärrskrivbord",
    "description": "Inga inkommande sessioner via Fjärrskrivbord och ingen omdirigering av enheter. Gör ändringarna när du sitter vid datorn."
   },
   "registry": {
    "title": "Jag använder inga verktyg för fjärrhantering av registret",
    "description": "Ingen fjärradministration av registret. Kontrollera först om datorn hanteras av din arbetsgivare."
   },
   "workfolders": {
    "title": "Jag använder inte Arbetsmappar",
    "description": "Ingen synkronisering via Arbetsmappar med en organisations filserver. OneDrive är en separat funktion."
   },
   "printing": {
    "title": "Jag skriver aldrig ut något",
    "description": "Gäller fysiska skrivare, fax, delade skrivare, Microsoft Print to PDF samt att lägga till eller konfigurera skrivare."
   },
   "scanning": {
    "title": "Jag skannar inte och importerar inte bilder från en kamera",
    "description": "Ingen skanner, ingen skanning på multifunktionsskrivare och ingen kameraimport via bildhämtningsfunktionerna i Windows."
   },
   "bluetooth": {
    "title": "Jag använder inte Bluetooth",
    "description": "Inget Bluetooth-tangentbord, ingen mus, inga hörlurar, ingen handkontroll och ingen annan kringutrustning."
   },
   "discovery": {
    "title": "Jag använder inte nätverksidentifiering",
    "description": "Ingen automatisk identifiering av nätverksenheter, ingen UPnP och ingen delning från den här datorn som andra kan hitta."
   },
   "media": {
    "title": "Jag delar inte ett mediebibliotek",
    "description": "Ingen strömning från äldre Windows Media Player till andra enheter."
   },
   "fax": {
    "title": "Jag skickar eller tar inte emot fax",
    "description": "Den valfria faxfunktionen i Windows används inte. Vanlig utskrift är fortfarande tillgänglig."
   },
   "xbox": {
    "title": "Jag använder inte Xbox-funktioner eller Xbox-tillbehör",
    "description": "Ingen Xbox-inloggning, inga molnsparningar, inga nätverksfunktioner och inga tillbehör. Spel från Steam och andra butiker kan också använda de här funktionerna."
   },
   "retail": {
    "title": "Det här är inte en demonstrationsdator i en butik",
    "description": "Ingen demonstration av Windows i butik. Den kan redan vara inaktiverad."
   }
  }
 }
};
