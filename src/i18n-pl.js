'use strict';
// Polish text for i18n.js: interface strings, static page text, the long page views, and service data.
const LOCALE_PL = {
 "ui": {
  "meta.description": "Poznaj usługi Windows 11 i przydatne narzędzia, zrozum wpływ zmian na prywatność i wydajność oraz zbuduj skrypt PowerShell z instrukcją kopii zapasowej i przywracania.",
  "title.directory": "Winwise — przewodnik po usługach Windows 11",
  "title.builder": "Kreator skryptów PowerShell — Winwise",
  "title.tools": "Przydatne narzędzia Windows 11 — Winwise",
  "title.backup": "Opcje kopii zapasowej Windows 11 — Winwise",
  "title.repair": "Opcje naprawy Windows 11 — Winwise",
  "skip.directory": "Przejdź do usług",
  "skip.builder": "Przejdź do kreatora skryptów",
  "skip.tools": "Przejdź do przydatnych narzędzi",
  "skip.backup": "Przejdź do opcji kopii zapasowej",
  "skip.repair": "Przejdź do opcji naprawy",
  "category.all.name": "Wszystkie usługi",
  "category.all.description": "Kandydaci do zmian, kompromisy i usługi niezbędne, których lepiej nie ruszać.",
  "category.privacy.name": "Prywatność i telemetria",
  "category.privacy.description": "Zbieranie danych i funkcje online kontroluj najpierw w ustawieniach.",
  "category.performance.name": "Wydajność",
  "category.performance.description": "Sprawdź indeksowanie, pamięć podręczną, pobieranie i nagrywanie gier.",
  "category.optional.name": "Funkcje opcjonalne",
  "category.optional.description": "Wyłączaj funkcję tylko wtedy, gdy ją rozumiesz i z niej nie korzystasz.",
  "category.essential.name": "Niezbędne",
  "category.essential.description": "Zachowaj zabezpieczenia, aktualizacje, łączność i podstawowe działanie Windows.",
  "status.conditional": "Można wyłączyć, jeśli nieużywana",
  "status.settings": "Użyj Ustawień Windows",
  "status.keep": "Pozostaw włączoną",
  "risk.badge": "Może zablokować uruchamianie lub logowanie",
  "risk.defaultCondition": "Krytyczna zależność Windows",
  "risk.excluded": "Wykluczona z kreatora skryptów.",
  "settings.heading": "Zmień funkcję w Ustawieniach Windows",
  "settings.open": "Otwórz Ustawienia Windows",
  "settings.note": "Otwórz ten link na komputerze z Windows. Jeśli przeglądarka nie otworzy Ustawień, przejdź ścieżką podaną powyżej; nazwy mogą się różnić w zależności od kompilacji Windows.",
  "settings.builderNote": "Zmiana na poziomie usługi jest też dostępna w kreatorze, ale trzeba ją zaznaczyć świadomie. Najpierw sprawdź jej szersze skutki.",
  "directory.resultCount": "Wyświetlane: <b>{shown}</b> z {total} usług",
  "row.risk": "Może zablokować uruchamianie lub logowanie.",
  "row.viewDetails": "Pokaż szczegóły",
  "dialog.serviceDetails": "SZCZEGÓŁY USŁUGI",
  "details.copyName": "Kopiuj nazwę usługi",
  "details.checkBuild": "Sprawdź swoją kompilację Windows",
  "details.when": "Kiedy rozważyć zmianę",
  "details.changes": "Co się zmieni",
  "details.recommendation": "Nasze zalecenie",
  "details.perUserHeading": "To usługa dla poszczególnych użytkowników",
  "details.perUserText": "Windows dodaje do nazwy tej usługi przyrostek sesji. Takie usługi nie trafiają do generowanych skryptów; zamiast tego użyj ustawień danej funkcji.",
  "details.configHeading": "Sprawdź obecną konfigurację komputera",
  "details.configText": "Domyślny typ uruchomienia zależy od kompilacji i zainstalowanych funkcji. „Ręczny” może oznaczać, że Windows uruchamia usługę w razie potrzeby. Przed zmianą sprawdź kartę Zależności.",
  "details.selectedOpenBuilder": "Wybrana — otwórz kreator",
  "details.addToScript": "Dodaj do mojego skryptu",
  "details.reference": "Dokumentacja Microsoft",
  "details.howToChange": "Jak zmienić i przywrócić",
  "copy.command": "Kopiuj polecenie",
  "copy.script": "Kopiuj skrypt",
  "copy.done": "Skopiowano",
  "restorePoint.prefix": "Najpierw utwórz punkt przywracania →",
  "restorePoint.link": "Jak utworzyć punkt przywracania",
  "guide.eyebrow": "PRZEWODNIK ZMIAN",
  "guide.title": "Wprowadzaj zmiany, które możesz cofnąć.",
  "guide.lead": "W Kreatorze skryptów wybierz usługi i pobierz skrypt PowerShell, który po uruchomieniu automatycznie wprowadzi zmiany. Skrypt zapisuje oryginalne ustawienia i pozwala je przywrócić.",
  "guide.openBuilder": "Otwórz kreator skryptów",
  "guide.runUndo": "Jak uruchomić i cofnąć",
  "guide.manualHeading": "Wolisz zmieniać ręcznie?",
  "guide.step1.title": "Zapisz stan początkowy",
  "guide.step1.text": "Naciśnij Win + R, wpisz <code>services.msc</code> i otwórz usługę. Zapisz jej typ uruchomienia, ustawienie opóźnionego uruchomienia i stan działania. Sprawdź kartę Zależności. Zanim zaczniesz rozwiązywać problemy, zrób kopię ważnych plików.",
  "guide.step2.title": "Najpierw użyj ustawienia funkcji",
  "guide.step2.text": "Dane diagnostyczne, lokalizację, zakres indeksowania i nagrywanie gier zmieniaj w Ustawieniach Windows. Zatrzymana usługa może już nie zużywać znaczących zasobów.",
  "guide.step3.title": "Wyłącz nieużywaną usługę opcjonalną",
  "guide.step3.text": "Wybierz typ Wyłączony i zatrzymaj usługę. Usługi niezbędne pozostaw z ich obecnymi ustawieniami domyślnymi.",
  "guide.step4.title": "Korzystaj z komputera normalnie",
  "guide.step4.text": "Sprawdź, czy Twoje aplikacje i urządzenia działają jak zwykle. Jeśli potrzebna funkcja przestanie działać, przywróć zapisany typ uruchomienia, uruchom usługę, jeśli wcześniej działała, i w razie potrzeby uruchom ponownie Windows.",
  "guide.automatic.title": "Automatyczny",
  "guide.automatic.text": "Uruchamia się razem z Windows, czasem z opóźnieniem.",
  "guide.manual.title": "Ręczny",
  "guide.manual.text": "Może się uruchomić, gdy potrzebuje jej Windows lub aplikacja.",
  "guide.disabled.title": "Wyłączony",
  "guide.disabled.text": "Nie uruchomi się, dopóki nie zmienisz ustawienia.",
  "guide.managedHeading": "Na komputerze zarządzanym przez organizację",
  "guide.managedText": "Postępuj zgodnie z zasadami dotyczącymi urządzeń w Twojej organizacji. Generator jest przeznaczony do zmian, do których masz uprawnienia.",
  "sources.eyebrow": "ZAKRES I ŹRÓDŁA",
  "sources.title": "Zakres i podstawy zaleceń.",
  "sources.lead": "Liczba opisanych usług: {count}, w tym typowe kandydatki do wyłączenia i usługi niezbędne. To wybrany przewodnik, a nie pełny spis usług każdej instalacji Windows.",
  "inventory.eyebrow": "LOKALNY SPIS USŁUG",
  "inventory.title": "Zobacz, co jest na Twoim komputerze.",
  "inventory.lead": "Otwórz Windows PowerShell i uruchom to polecenie tylko do odczytu, aby wyświetlić zainstalowane usługi i ich obecne typy uruchomienia.",
  "inventory.matchHeading": "Dopasuj nazwę usługi",
  "inventory.matchText": "Szukaj w tym katalogu według kolumny Name. Wystąpienia dla poszczególnych użytkowników mają dodatkowy przyrostek. Usługi, których tu nie opisano, zostaw z obecnymi ustawieniami domyślnymi, dopóki nie poznasz ich roli i zależności.",
  "inventory.note": "To polecenie tylko wyświetla informacje na Twoim komputerze. Niczego nie zmienia i niczego nie wysyła.",
  "run.eyebrow": "INSTRUKCJA POWERSHELL",
  "run.title": "Uruchom, sprawdź i cofnij.",
  "run.lead": "Pobrany plik to czytelny skrypt dla Windows PowerShell 5.1 lub nowszego. Przejrzyj go i zacznij od próbnego uruchomienia na swoim komputerze.",
  "run.step1.title": "Zapisz i przejrzyj skrypt",
  "run.step1.text": "Pobierz <code>Winwise-Services.ps1</code>. Otwórz go w edytorze tekstu i sprawdź <code>$SelectedServices</code>. Zapisz plik w folderze, który łatwo znajdziesz.",
  "run.step2.title": "Otwórz PowerShell jako administrator",
  "run.step2.text": "W Eksploratorze plików otwórz folder z pobranym skryptem i skopiuj jego pełną ścieżkę z paska adresu. Wyszukaj Windows PowerShell, kliknij prawym przyciskiem myszy i wybierz Uruchom jako administrator. Zastąp przykładowy folder poniżej skopiowaną ścieżką:",
  "run.step2.note": "Użyj rzeczywistego folderu, także jeśli folder Pobrane jest przekierowany lub ma inną lokalizację. Gdy włączona jest ochrona administratora, okno z podwyższonymi uprawnieniami może używać osobnego profilu, więc <code>$env:USERPROFILE</code> może nie wskazywać Twoich pobranych plików.",
  "run.step3.title": "Zezwól na przejrzany plik w tej sesji",
  "run.step3.text": "Jeśli Windows zablokuje pobrany plik, odblokuj go po przejrzeniu. Poniższe ustawienie RemoteSigned dotyczy tylko bieżącego procesu PowerShell. Nie zastępuje zasad organizacji.",
  "run.step3.note": "Jeśli pojawi się potwierdzenie <strong>Zmiana zasad wykonywania (Execution Policy Change)</strong>, wpisz literę oznaczającą „Tak” (w polskim Windows zwykle <kbd>T</kbd>, w angielskim Y) i naciśnij <kbd>Enter</kbd>. Zmiana obowiązuje w bieżącej sesji PowerShell, do zamknięcia tego okna. W tej samej sesji możesz uruchomić podgląd, zastosować zmiany i je cofnąć; w nowym oknie te polecenia mogą być potrzebne ponownie.",
  "run.step4.title": "Najpierw podgląd",
  "run.step4.text": "Podgląd pokazuje planowane zmiany bez zatrzymywania usług i bez zapisywania kopii zapasowej. Brakujące, wyłączone lub zablokowane usługi mogą zostać pominięte.",
  "run.step5.title": "Zastosuj zmiany i sprawdź",
  "run.step5.text": "Uruchamiaj skrypt lokalnie przy komputerze, zwłaszcza gdy wybierasz usługi Pulpitu zdalnego. Przed zmianami skrypt zapisuje obok siebie nową kopię zapasową. Przeczytaj ostrzeżenia i zachowaj wyświetloną ścieżkę kopii. Uruchom komputer ponownie i sprawdź swoje aplikacje.",
  "run.step6.title": "Przywróć poprzednie ustawienia",
  "run.step6.text": "Użyj tego samego skryptu i dokładnej nazwy pliku kopii zapasowej wyświetlonej po uruchomieniu. Zastąp przykład poniżej. Najpierw przywracane są typy uruchomienia, a potem skrypt próbuje przywrócić poprzedni stan działania lub zatrzymania. Przeczytaj ostrzeżenia i w razie potrzeby uruchom komputer ponownie.",
  "run.backupHeading": "Zachowaj pierwszą kopię zapasową",
  "run.backupText": "Każde zastosowanie zmian zapisuje osobną kopię. Późniejsza kopia może zawierać ustawienia zmienione już przez wcześniejsze uruchomienie. Plik JSON to zapis ustawień usług, a nie pełna kopia systemu. Nie edytuj go i nie używaj pliku z innego komputera.",
  "run.docs": "Dokumentacja PowerShell dotycząca usług",
  "feature.eyebrow": "USŁUGI W TYM WYBORZE",
  "feature.lead": {
   "one": "Ten wybór obejmuje {n} usługę. Otwórz dowolną usługę, aby sprawdzić, co robi i co możesz stracić.",
   "few": "Ten wybór obejmuje {n} usługi. Otwórz dowolną usługę, aby sprawdzić, co robi i co możesz stracić.",
   "many": "Ten wybór obejmuje {n} usług. Otwórz dowolną usługę, aby sprawdzić, co robi i co możesz stracić.",
   "other": "Ten wybór obejmuje {n} usługi. Otwórz dowolną usługę, aby sprawdzić, co robi i co możesz stracić."
  },
  "builder.settingsFirst": "Najpierw zalecane: Ustawienia Windows",
  "builder.sysmain.title": "Spróbuj wyłączyć SysMain",
  "builder.sysmain.text": "Przy diagnozowaniu stałej aktywności SysMain. Aplikacje mogą uruchamiać się wolniej.",
  "builder.wsearch.title": "Wyłącz Windows Search i Foldery robocze",
  "builder.wsearch.text": "Akceptuję wolniejsze lub niepełne wyszukiwanie plików z indeksu i w klasycznym Outlooku. Zaznaczona zostanie też usługa Work Folders, a jej synchronizacja plików z serwerem organizacji zostanie zatrzymana; wybierz to tylko wtedy, gdy z niej nie korzystasz.",
  "builder.diagtrack.title": "Zamiast tego wyłącz DiagTrack",
  "builder.diagtrack.text": "Akceptuję wyłączenie tego składnika diagnostycznego. Raportowanie błędów i aplikacje mają osobne ustawienia.",
  "builder.readMore": "Więcej",
  "builder.alsoSelects": "Zaznacza też: {names}; jej synchronizacja plików z serwerem organizacji zostanie zatrzymana.",
  "builder.disableInstead": "Zamiast tego wyłącz usługę: ",
  "builder.settingsGroup": "Usługi, dla których zalecane są Ustawienia Windows",
  "builder.label": "TWÓJ KOMPUTER. TWOJE WYBORY.",
  "builder.title": "Zbuduj skrypt PowerShell<span>.</span>",
  "builder.lead": "Wybierz konfigurację kilkoma kliknięciami, przejrzyj każdą usługę, a potem pobierz skrypt PowerShell, którego zmiany można cofnąć.",
  "builder.back": "← Wróć do katalogu",
  "builder.presetTitle": "Ostrożny punkt wyjścia",
  "builder.presetText": "Remote Registry, Fax i Retail Demo. Najpierw sprawdź te założenia; te usługi mogą być już wyłączone.",
  "builder.usePreset": "Użyj zestawu",
  "builder.step1.title": "Z czego nie korzystasz?",
  "builder.step1.text": "Kliknij opcje pasujące do tego komputera. Winwise zaznaczy w skrypcie powiązane usługi.",
  "builder.serviceCount": {
   "one": "{n} usługa",
   "few": "{n} usługi",
   "many": "{n} usług",
   "other": "{n} usługi"
  },
  "builder.serviceCountView": {
   "one": "{n} usługa · Pokaż",
   "few": "{n} usługi · Pokaż",
   "many": "{n} usług · Pokaż",
   "other": "{n} usługi · Pokaż"
  },
  "builder.serviceCountLabel": {
   "one": "Pokaż {n} usługę w wyborze: {title}",
   "few": "Pokaż {n} usługi w wyborze: {title}",
   "many": "Pokaż {n} usług w wyborze: {title}",
   "other": "Pokaż {n} usługi w wyborze: {title}"
  },
  "builder.step2.title": "Rozważ kompromisy",
  "builder.step2.text": "Najpierw spróbuj zalecanej drogi przez Ustawienia. Wyłączenie usługi trzeba zaznaczyć świadomie i nie należy ono do ostrożnego zestawu.",
  "builder.pickerSummary": "Wybierz pojedyncze usługi",
  "builder.pickerCount": "dostępnych: {n}",
  "builder.pickerText": "Dopracuj wybór. Kliknij Więcej, aby zobaczyć te same kompromisy i zalecenia co w katalogu usług.",
  "builder.boundary": "Usługi oznaczone „Może zablokować uruchamianie lub logowanie” nie są dostępne w tym kreatorze. Wykluczone są też zabezpieczenia, aktualizacje, inne podstawowe usługi Windows i szablony usług dla poszczególnych użytkowników.",
  "builder.summaryTitle": "03 · PRZEGLĄD I POBIERANIE",
  "builder.selection": "Twój wybór",
  "builder.clear": "Wyczyść",
  "builder.dryRun": "Próbne uruchomienie z <code>-WhatIf</code>",
  "builder.savedFirst": "Najpierw zapis oryginalnych ustawień",
  "builder.restore": "Przywracanie z kopii zapasowej",
  "builder.download": "Pobierz skrypt PowerShell",
  "builder.preview": "Podgląd skryptu",
  "builder.runUndo": "Jak uruchomić i cofnąć",
  "builder.expectation": "Skrypt pomija brakujące lub już wyłączone usługi i nie zatrzymuje na siłę usług zależnych.",
  "builder.featuresIntro": "Każdy wygenerowany skrypt ma wbudowane te zabezpieczenia:",
  "builder.includedWithKeep": "Dołączona razem z: {names}. Aby zachować tę usługę, najpierw usuń tamten wybór.",
  "builder.includedWith": "Dołączona razem z: {names}",
  "builder.selectedCount": {
   "one": "Wybrano <strong>{n}</strong> usługę",
   "few": "Wybrano <strong>{n}</strong> usługi",
   "many": "Wybrano <strong>{n}</strong> usług",
   "other": "Wybrano <strong>{n}</strong> usługi"
  },
  "builder.removeFirst": "Najpierw usuń {parents}, aby zachować {name}",
  "builder.remove": "Usuń {name}",
  "builder.empty": "Zacznij od funkcji, z których nie korzystasz, albo wybierz ostrożny zestaw.",
  "builder.templateError": "Nie udało się wczytać skryptu. Odśwież stronę i spróbuj ponownie.",
  "builder.templateLoading": "Wczytywanie szablonu PowerShell…",
  "builder.templateReady": "Windows PowerShell 5.1+ · plik .ps1",
  "preview.eyebrow": "PODGLĄD SKRYPTU",
  "preview.title": "Twój skrypt PowerShell.",
  "preview.lead": {
   "one": "Wybrano {n} usługę. Przed uruchomieniem sprawdź nazwy i działanie. Ta strona niczego nie uruchamia.",
   "few": "Wybrano {n} usługi. Przed uruchomieniem sprawdź nazwy i działanie. Ta strona niczego nie uruchamia.",
   "many": "Wybrano {n} usług. Przed uruchomieniem sprawdź nazwy i działanie. Ta strona niczego nie uruchamia.",
   "other": "Wybrano {n} usługi. Przed uruchomieniem sprawdź nazwy i działanie. Ta strona niczego nie uruchamia."
  },
  "preview.download": "Pobierz plik .ps1",
  "preview.runUndo": "Instrukcja uruchamiania i cofania",
  "toast.downloaded": "Skrypt został pobrany. Przeczytaj instrukcję uruchamiania i cofania.",
  "toast.copied": "Skopiowano do schowka.",
  "toast.copyUnavailable": "Kopiowanie nie jest tu dostępne. Zaznacz tekst i skopiuj go ręcznie.",
  "toast.preset": "Wybrano zestaw: Remote Registry, Fax i Retail Demo.",
  "toast.scriptError": "Nie udało się utworzyć skryptu. Odśwież stronę i spróbuj ponownie.",
  "theme.switchToLight": "Przełącz na tryb jasny",
  "theme.switchToDark": "Przełącz na tryb ciemny",
  "theme.light": "Tryb jasny",
  "theme.dark": "Tryb ciemny",
  "motion.pause": "Wstrzymaj animację tła",
  "motion.resume": "Wznów animację tła",
  "motion.reduced": "Animacja tła wstrzymana zgodnie z ustawieniem ograniczania ruchu",
  "language.label": "Język",
  "count.total": {
   "one": "opisana usługa",
   "few": "opisane usługi",
   "many": "opisanych usług",
   "other": "opisanej usługi"
  },
  "count.launch": {
   "one": "usługa z opisem",
   "few": "usługi z opisem",
   "many": "usług z opisem",
   "other": "usługi z opisem"
  }
 },
 "static": {
  "nav.directory": "Katalog usług",
  "nav.builder": "Kreator skryptów <span class=\"nav-pill\">PS</span>",
  "nav.guide": "Jak wprowadzać zmiany <span aria-hidden=\"true\">↗</span>",
  "nav.tools": "Przydatne narzędzia",
  "nav.backup": "<span>Opcje <span class=\"nav-backup\">kopii zapasowej</span></span>",
  "nav.repair": "<span>Opcje <span class=\"nav-repair\">naprawy</span></span>",
  "intro.eyebrow": "<span class=\"tiny-line\"></span>TROCHĘ MNIEJ W TLE",
  "intro.title": "Usługi Windows 11<span>.</span>",
  "intro.copy": "Sprawdź, co możesz wyłączyć. Zrozum, co może niepotrzebnie spowalniać komputer.",
  "intro.build": "<span data-icon=\"terminal\"></span>Zbuduj skrypt PowerShell <span aria-hidden=\"true\">↗</span>",
  "intro.buildNote": "Wybierz usługi w kreatorze, a potem pobierz skrypt.",
  "intro.updated": "Zaktualizowano",
  "launch.eyebrow": "<span></span>PRZEWODNIK PO USŁUGACH WINDOWS 11",
  "launch.title": "Wiedz, co działa.<br><span>Zdecyduj, co zostaje.</span>",
  "launch.description": "Przejmij kontrolę nad usługami w tle. Zobacz, co robią, które możesz wyłączyć, jeśli z nich nie korzystasz, i od których zależą Twoje funkcje.",
  "launch.settings": "Tam, gdzie to możliwe, korzystaj ze skrótów do Ustawień Windows i jasnych kroków włączania i wyłączania usług.",
  "launch.note": "Przeglądaj katalog usług",
  "launch.tagline": "ZROZUM · WYBIERZ · KONTROLUJ",
  "overview.annotation": "Jedno miejsce, by zrozumieć,<br>co działa.",
  "overview.privacy": "<strong>Prywatność</strong><span>Ogranicz dane i funkcje online</span>",
  "overview.performance": "<strong>Wydajność</strong><span>Sprawdź aktywność w tle</span>",
  "sidebar.browse": "PRZEGLĄDAJ USŁUGI",
  "sidebar.noteTitle": "Małe zmiany.<br>Jedna na raz.",
  "sidebar.noteText": "Wiele usług uruchamia się tylko w razie potrzeby. Mniej działających usług nie oznacza automatycznie szybszego komputera.",
  "sidebar.guide": "Przeczytaj przewodnik zmian <span aria-hidden=\"true\">↗</span>",
  "sidebar.about": "<span data-icon=\"book\"></span>O tym przewodniku",
  "directory.sortLabel": "Sortuj usługi",
  "directory.sortRecommended": "Kolejność sugerowana",
  "directory.sortAz": "Nazwa: A–Z",
  "directory.sortZa": "Nazwa: Z–A",
  "filter.all": "Wszystkie zalecenia",
  "filter.conditional": "<span class=\"key-mark amber\"></span>Można wyłączyć, jeśli nieużywana",
  "filter.settings": "<span class=\"key-mark purple\"></span>Zamiast tego użyj przełącznika w Ustawieniach",
  "filter.settingsTooltip": "Wyłącz funkcję w Ustawieniach Windows, zamiast wyłączać usługę.",
  "filter.keep": "<span class=\"key-mark gray\"></span>Pozostaw włączoną",
  "directory.contextNote": "<strong>Nie ma uniwersalnej listy usług do wyłączenia.</strong> Dostępność zależy od wersji, kompilacji i sprzętu. To warunkowe zalecenia, a nie skan Twojego komputera.",
  "directory.selectHint": "WYBIERZ USŁUGĘ, ABY ZOBACZYĆ KOMPROMISY",
  "table.service": "USŁUGA",
  "table.recommendation": "ZALECENIE",
  "table.description": "CO ROBI",
  "empty.title": "Nie znaleziono usług",
  "empty.text": "Spróbuj innej nazwy albo wyczyść filtry.",
  "empty.reset": "Wyczyść filtry",
  "directory.inventory": "Szukasz wszystkich usług zainstalowanych na komputerze? <button data-dialog=\"inventory\">Zobacz lokalną listę usług <span aria-hidden=\"true\">↗</span></button>",
  "footer.note": "Niezależny przewodnik. Niepowiązany z Microsoft.",
  "footer.sources": "Zakres i źródła <span aria-hidden=\"true\">↗</span>",
  "header.home": "Winwise — strona główna",
  "header.mainNav": "Nawigacja główna",
  "header.resources": "Narzędzia i odzyskiwanie",
  "language.label": "Język",
  "overview.label": "Przegląd przewodnika",
  "overview.allLabel": "Pokaż wszystkie usługi",
  "sidebar.label": "Filtry katalogu",
  "sidebar.categories": "Kategorie usług",
  "directory.searchPlaceholder": "Szukaj po nazwie usługi lub jej przeznaczeniu…",
  "directory.searchLabel": "Szukaj usług",
  "directory.filterLabel": "Filtruj według zalecenia",
  "dialog.close": "Zamknij szczegóły"
 },
 "pages": {
  "tools": "      <div class=\"tools-heading\"><div><h1 id=\"tools-title\" tabindex=\"-1\">Przydatne narzędzia dla Windows 11<span>.</span></h1><p>Ułatw sobie codzienne zadania, szybciej znajduj pliki i sprawdź, co działa na Twoim komputerze.</p></div><a class=\"tools-directory-link\" href=\"#directory\" data-view=\"directory\"><span aria-hidden=\"true\">←</span> Powrót do usług</a></div>\n      <div class=\"tools-grid\">\n        <article class=\"tool-card tool-card-featured\" aria-labelledby=\"tool-powertoys\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"sliders\"></span><span class=\"tool-category\">Codzienna produktywność</span><span class=\"tool-pick\">Zacznij tutaj</span></div>\n          <h3 id=\"tool-powertoys\">Microsoft PowerToys</h3><p class=\"tool-publisher\">Microsoft Corporation · Bezpłatne, open source</p>\n          <p>Układaj okna za pomocą FancyZones, zmieniaj nazwy wielu plików naraz za pomocą PowerRename i wyświetlaj podgląd plików za pomocą Peek. Zestaw przydatnych dodatków do systemu Windows.</p>\n          <p class=\"tool-detail\">W ustawieniach PowerToys wybierz, które narzędzia chcesz włączyć.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://apps.microsoft.com/detail/xp89dcgq3k6vld\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz PowerToys <span data-icon=\"external\"></span></a><a href=\"https://learn.microsoft.com/en-us/windows/powertoys/\" target=\"_blank\" rel=\"noopener noreferrer\">Przewodnik Microsoft</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-everything\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"search\"></span><span class=\"tool-category\">Wyszukiwanie plików</span></div>\n          <h3 id=\"tool-everything\">Everything</h3><p class=\"tool-publisher\">voidtools</p>\n          <p>Znajduj pliki i foldery według nazwy już podczas pisania. Przydatne, gdy pamiętasz nazwę pliku, ale nie miejsce, w którym go zapisano.</p>\n          <p class=\"tool-detail\">Skupia się na nazwach plików. Zachowaj Windows Search dla programu Outlook i innych funkcji zależnych od jego indeksu.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://www.voidtools.com/downloads/\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz Everything <span data-icon=\"external\"></span></a><a href=\"https://www.voidtools.com/support/everything/\" target=\"_blank\" rel=\"noopener noreferrer\">Oficjalny przewodnik</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-sharex\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"monitor\"></span><span class=\"tool-category\">Przechwytywanie i objaśnianie</span></div>\n          <h3 id=\"tool-sharex\">ShareX</h3><p class=\"tool-publisher\">Zespół ShareX · Bezpłatne, open source</p>\n          <p>Przechwytuj zrzuty ekranu i dodawaj do nich adnotacje, nagrywaj ekran lub GIF i twórz skróty do powtarzalnych zadań przechwytywania.</p>\n          <p class=\"tool-detail\">Przejrzyj zadania wykonywane po przechwyceniu, aby wybrać, czy przechwycone obrazy zostają na komputerze, czy są przesyłane.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://getsharex.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz ShareX <span data-icon=\"external\"></span></a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-nanazip\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"cube\"></span><span class=\"tool-category\">Praca z archiwami</span></div>\n          <h3 id=\"tool-nanazip\">NanaZip</h3><p class=\"tool-publisher\">M2-Team · Open source</p>\n          <p>Program do archiwizacji plików oparty na 7-Zip, zintegrowany z menu prawego przycisku myszy w Windows 11 i obsługujący wiele formatów archiwów.</p>\n          <p class=\"tool-detail\">Do codziennego użytku wybierz stabilne wydanie NanaZip.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://apps.microsoft.com/detail/9n8g7tscl18r\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz NanaZip <span data-icon=\"external\"></span></a><a href=\"https://github.com/M2Team/NanaZip\" target=\"_blank\" rel=\"noopener noreferrer\">Oficjalny projekt</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-process-explorer\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"gauge\"></span><span class=\"tool-category\">Analiza procesów</span></div>\n          <h3 id=\"tool-process-explorer\">Process Explorer</h3><p class=\"tool-publisher\">Microsoft Sysinternals</p>\n          <p>Zajrzyj głębiej w uruchomione procesy i załadowane przez nie pliki. Sprawdź, który program trzyma otwarty plik, gdy system Windows nie pozwala go przenieść ani usunąć.</p>\n          <p class=\"tool-detail\">Przydatne do zbadania nieznanego procesu w tle, zanim zdecydujesz, co zmienić.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz Process Explorer <span data-icon=\"external\"></span></a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-autoruns\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"terminal\"></span><span class=\"tool-category\">Przegląd autostartu · Zaawansowane</span></div>\n          <h3 id=\"tool-autoruns\">Autoruns</h3><p class=\"tool-publisher\">Microsoft Sysinternals</p>\n          <p>Zobacz, co uruchamia się automatycznie, w tym wpisy logowania, zaplanowane zadania, usługi i rozszerzenia Eksploratora.</p>\n          <p class=\"tool-detail\">Użyj opcji Hide Signed Microsoft Entries, aby skupić się na elementach innych firm. Przejrzyj każdy wpis, zanim go wyłączysz.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz Autoruns <span data-icon=\"external\"></span></a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-warp\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"terminal\"></span><span class=\"tool-category\">Praca w terminalu</span></div>\n          <h3 id=\"tool-warp\">Warp</h3><p class=\"tool-publisher\">Warp</p>\n          <p>Uruchamiaj polecenia PowerShell w nowoczesnym terminalu z kartami, podzielonymi panelami i wynikami poleceń zgrupowanymi w bloki. Wbudowana sztuczna inteligencja może pomóc w zadaniach wiersza polecenia.</p>\n          <p class=\"tool-detail\">Obsługuje zarówno Windows PowerShell, jak i PowerShell 7. Preferowaną powłokę wybierz w ustawieniach.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://www.warp.dev/download\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz Warp <span data-icon=\"external\"></span></a><a href=\"https://docs.warp.dev/getting-started/migrate-to-warp/migrate-to-warp-from-windows-terminal\" target=\"_blank\" rel=\"noopener noreferrer\">Przewodnik dla Windows</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-zed\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"keyboard\"></span><span class=\"tool-category\">Edycja kodu</span></div>\n          <h3 id=\"tool-zed\">Zed</h3><p class=\"tool-publisher\">Zed Industries</p>\n          <p>Natywny edytor kodu stworzony z myślą o szybkiej edycji i współpracy. Korzystaj z rozszerzeń językowych, poruszaj się po projektach i używaj agentów kodowania w edytorze.</p>\n          <p class=\"tool-detail\">Wbudowana obsługa WSL pozwala edytować z poziomu Windows projekty w środowisku Linux.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://zed.dev/download\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz Zed <span data-icon=\"external\"></span></a><a href=\"https://zed.dev/windows\" target=\"_blank\" rel=\"noopener noreferrer\">Zed w systemie Windows</a></div>\n        </article>\n        <article class=\"tool-card\" aria-labelledby=\"tool-localsend\">\n          <div class=\"tool-card-top\"><span class=\"tool-icon\" data-icon=\"network\"></span><span class=\"tool-category\">Udostępnianie między urządzeniami</span></div>\n          <h3 id=\"tool-localsend\">LocalSend</h3><p class=\"tool-publisher\">LocalSend · Bezpłatne, open source</p>\n          <p>Wysyłaj zdjęcia, pliki i tekst między komputerem a pobliskimi telefonami lub komputerami przez sieć lokalną. Bez przesyłania do chmury i bez konta.</p>\n          <p class=\"tool-detail\">Zainstaluj aplikację na obu urządzeniach i połącz je z tą samą siecią lokalną. Działa w systemach Windows, macOS, Linux, Android i iOS.</p>\n          <div class=\"tool-links\"><a class=\"tool-download\" href=\"https://localsend.org/download\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz LocalSend <span data-icon=\"external\"></span></a><a href=\"https://localsend.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Jak to działa</a></div>\n        </article>\n      </div>\n      <p class=\"tools-reviewed\">Pierwotny wybór sprawdzono <time datetime=\"2026-09-25\">25 września 2026</time>. Warp, Zed i LocalSend sprawdzono w oficjalnych źródłach <time datetime=\"2026-10-04\">4 października 2026</time>.</p>\n    ",
  "backup": "      <div class=\"backup-heading\"><p class=\"eyebrow\"><span class=\"tiny-line\"></span>ZACHOWAJ KOPIĘ</p><h1 id=\"backup-title\" tabindex=\"-1\">Opcje <span>kopii zapasowej</span> Windows 11<span>.</span></h1><p class=\"backup-lead\">Dysk może ulec awarii, laptop może zginąć, a pliki można usunąć przez pomyłkę. Kopia zapasowa to oddzielna kopia, z której możesz odzyskać pliki. Ta strona dotyczy tylko Windows 11.</p></div>\n      <div class=\"backup-panel\">\n        <section class=\"backup-section\" aria-labelledby=\"backup-overview-title\">\n          <div class=\"backup-section-heading\"><h2 id=\"backup-overview-title\">Czego szukasz?</h2></div>\n          <div class=\"backup-comparison backup-entry\">\n            <div>\n              <span class=\"backup-type backup-type-files\">Pliki</span>\n              <h3>Kopia zapasowa tylko moich plików osobistych</h3>\n              <p>Dokumenty, zdjęcia i inne pliki osobiste przechowywane w innym miejscu niż komputer.</p>\n              <ul class=\"backup-entry-links\">\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"windows-backup-title\">Kopia zapasowa systemu Windows i OneDrive <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Wbudowana w system Windows. Synchronizuje wybrane foldery z OneDrive i zapisuje ustawienia oraz listę aplikacji na koncie Microsoft.</span></li>\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"file-history-title\">Historia plików <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Wbudowana w system Windows. Kopiuje pliki na dysk zewnętrzny i przechowuje ich wcześniejsze wersje.</span></li>\n              </ul>\n            </div>\n            <div>\n              <span class=\"backup-type backup-type-points\">Cały komputer</span>\n              <h3>Kopia zapasowa całego dysku</h3>\n              <p>System Windows, aplikacje, ustawienia i pliki w jednym obrazie dysku, dzięki czemu odzyskasz komputer po awarii dysku lub wirusie.</p>\n              <ul class=\"backup-entry-links\">\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"disk-image-title\">Obraz dysku za pomocą Rescuezilla <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Bezpłatny program open source uruchamiany z pendrive’a. Zapisuje cały dysk jako obraz na innym dysku.</span></li>\n                <li><a class=\"backup-jump\" href=\"#backup\" data-backup-jump=\"veeam-title\">Automatyczny obraz dysku za pomocą Veeam Agent FREE <span aria-hidden=\"true\">↓</span></a><span class=\"backup-entry-note\">Bezpłatny program firmy Veeam działający w systemie Windows. Kopiuje cały dysk według harmonogramu, a po pierwszej kopii tylko zmiany.</span></li>\n              </ul>\n            </div>\n          </div>\n          <p>Punkty przywracania nie są kopiami zapasowymi. Nie przechowują oddzielnej kopii plików i nie pomogą w razie awarii dysku. <a href=\"#repair\" data-view=\"repair\" data-backup-jump=\"system-restore-title\">Punkty przywracania opisano na stronie naprawy</a>.</p>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"backup-compare-title\">\n          <div class=\"backup-section-heading\"><h2 id=\"backup-compare-title\">Porównanie opcji</h2></div>\n          <div class=\"backup-table-wrap\">\n            <table class=\"backup-table\" role=\"table\">\n              <thead role=\"rowgroup\"><tr role=\"row\"><th scope=\"col\" role=\"columnheader\">Opcja</th><th scope=\"col\" role=\"columnheader\">Chroni</th><th scope=\"col\" role=\"columnheader\">Gdzie jest kopia</th><th scope=\"col\" role=\"columnheader\">Kiedy wybrać</th></tr></thead>\n              <tbody role=\"rowgroup\">\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"windows-backup-title\">Kopia zapasowa systemu Windows i OneDrive</a></th><td role=\"cell\" data-label=\"Chroni\">Wybrane foldery (Pulpit, Dokumenty, Obrazy, Wideo, Muzyka), lista zainstalowanych aplikacji, sieci Wi-Fi i ustawienia</td><td role=\"cell\" data-label=\"Gdzie jest kopia\">OneDrive i Twoje konto Microsoft (5 GB bezpłatnie)</td><td role=\"cell\" data-label=\"Kiedy wybrać\">Używasz osobistego konta Microsoft i chcesz mieć pliki na więcej niż jednym urządzeniu</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"file-history-title\">Historia plików</a></th><td role=\"cell\" data-label=\"Chroni\">Biblioteki, Pulpit i dodane foldery, z wcześniejszymi wersjami</td><td role=\"cell\" data-label=\"Gdzie jest kopia\">Dysk zewnętrzny lub lokalizacja sieciowa</td><td role=\"cell\" data-label=\"Kiedy wybrać\">Chcesz mieć kopie plików z wcześniejszymi wersjami na własnym dysku</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"disk-image-title\">Obraz dysku za pomocą Rescuezilla</a></th><td role=\"cell\" data-label=\"Chroni\">Cały dysk: system Windows, aplikacje, ustawienia i pliki</td><td role=\"cell\" data-label=\"Gdzie jest kopia\">Pliki obrazu na dysku zewnętrznym lub w udziale sieciowym</td><td role=\"cell\" data-label=\"Kiedy wybrać\">Chcesz szybko odzyskać cały komputer po awarii dysku lub wirusie</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\"><a class=\"backup-inline-jump\" href=\"#backup\" data-backup-jump=\"veeam-title\">Automatyczny obraz dysku za pomocą Veeam Agent FREE</a></th><td role=\"cell\" data-label=\"Chroni\">Cały dysk: system Windows, aplikacje, ustawienia i pliki</td><td role=\"cell\" data-label=\"Gdzie jest kopia\">Pliki kopii na dysku zewnętrznym lub w udziale sieciowym</td><td role=\"cell\" data-label=\"Kiedy wybrać\">Chcesz, żeby kopie całego komputera tworzyły się same, z poziomu systemu Windows</td></tr>\n              </tbody>\n            </table>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"windows-backup-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">01</span><h2 id=\"windows-backup-title\" tabindex=\"-1\">Kopia zapasowa systemu Windows i OneDrive</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Kopia zapasowa systemu Windows synchronizuje wybrane foldery z OneDrive i zapamiętuje obsługiwane ustawienia oraz listę zainstalowanych aplikacji na Twoim koncie Microsoft. Na nowym lub ponownie zainstalowanym komputerze logujesz się i odzyskujesz je.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Osobiste konto Microsoft, np. adres outlook.com. Aplikacja nie działa z kontami służbowymi ani szkolnymi.</li>\n                <li>Połączenie z internetem.</li>\n                <li>Wystarczająco dużo miejsca w OneDrive. Bezpłatne konto obejmuje 5 GB, a zdjęcia i filmy szybko je zapełniają.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/back-up-and-restore-with-windows-backup\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Kopia zapasowa systemu Windows <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/onedrive/restore-your-onedrive-files\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: przywracanie usuniętych plików OneDrive <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Zmiany i usunięcia też są synchronizowane.</strong> Jeśli usuniesz lub zmienisz plik na komputerze, zmiana trafi do OneDrive. Usunięte pliki pozostają w Koszu OneDrive tylko przez ograniczony czas, więc OneDrive nie zastępuje dysku zewnętrznego.</p></div>\n              <ul class=\"backup-list\">\n                <li>Gdy OneDrive się zapełni, tworzenie kopii zapasowej się zatrzymuje. Od czasu do czasu sprawdzaj jej stan.</li>\n                <li>To nie jest kopia całego komputera. Niektóre aplikacje i licencje trzeba zainstalować ponownie.</li>\n                <li>Na komputerze służbowym lub szkolnym kopia zapasowa ustawień to osobna funkcja kontrolowana przez organizację.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki</h3>\n              <ol class=\"backup-steps\">\n                <li>Zaloguj się do systemu Windows przy użyciu osobistego konta Microsoft.</li>\n                <li>Otwórz aplikację <strong>Kopia zapasowa systemu Windows</strong> z menu Start lub przejdź do <strong>Ustawienia → Konta → Kopia zapasowa systemu Windows</strong>.</li>\n                <li>W obszarze <strong>Foldery</strong> włącz foldery, które chcesz synchronizować z OneDrive.</li>\n                <li>Włącz aplikacje i preferencje, które system Windows ma zapamiętać, a następnie wybierz <strong>Wykonaj kopię zapasową</strong>.</li>\n                <li>Sprawdź stan kopii zapasowej w aplikacji Kopia zapasowa systemu Windows. Jeśli OneDrive zgłasza problem, sprawdź logowanie i ilość wolnego miejsca.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Odzyskiwanie danych</h3>\n              <ul class=\"backup-list\">\n                <li><strong>Pliki:</strong> zaloguj się do OneDrive przy użyciu tego samego konta Microsoft.</li>\n                <li><strong>Usunięte lub zmienione pliki:</strong> <strong>Kosz</strong> i <strong>Historia wersji (Version history)</strong> w OneDrive przechowują je przez ograniczony czas, który zależy od konta i ustawień.</li>\n                <li><strong>Nowy lub ponownie zainstalowany komputer:</strong> podczas konfiguracji zaloguj się na to samo konto. Jeśli system Windows znajdzie zgodną kopię zapasową, zaproponuje jej przywrócenie.</li>\n                <li><strong>Aplikacje:</strong> przypięte aplikacje wracają jako przypięcia. Wybierz przypięcie aplikacji z Microsoft Store, aby zainstalować ją ponownie; w przypadku innych aplikacji system Windows kieruje Cię do instalatora.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"file-history-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">02</span><h2 id=\"file-history-title\" tabindex=\"-1\">Historia plików</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Historia plików kopiuje na inny dysk pliki z bibliotek, takich jak Dokumenty, Obrazy, Wideo i Muzyka, oraz z Pulpitu. Przechowuje wcześniejsze wersje, więc możesz odzyskać plik w stanie sprzed zmiany lub usunięcia.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Dysk zewnętrzny lub lokalizacja sieciowa z wystarczającą ilością wolnego miejsca.</li>\n                <li>Regularnie podłączany dysk, aby powstawały nowe kopie.</li>\n              </ul>\n              <p class=\"backup-limits\">Możesz też samodzielnie kopiować ważne foldery na osobny dysk. Takie kopie się nie aktualizują, więc po ważnych zmianach powtórz kopiowanie.</p>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/backup-and-restore-with-file-history\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Historia plików <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Przywracanie może zastąpić bieżącą wersję.</strong> Microsoft zaznacza, że tego zastąpienia nie można cofnąć. Aby zachować obie wersje, użyj opcji <strong>Przywróć do</strong> i wybierz inny folder.</p></div>\n              <ul class=\"backup-list\">\n                <li>Historia plików kopiuje tylko pliki. Nie kopiuje systemu Windows, zainstalowanych aplikacji ani ich ustawień.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki: włącz ją</h3>\n              <ol class=\"backup-steps\">\n                <li>Podłącz dysk zewnętrzny lub upewnij się, że lokalizacja sieciowa jest dostępna.</li>\n                <li>Otwórz <strong>Panel sterowania → System i zabezpieczenia → Historia plików</strong>.</li>\n                <li>Jeśli potrzebny dysk nie jest wybrany, wybierz <strong>Wybierz dysk</strong>, wskaż dysk i wybierz <strong>OK</strong>.</li>\n                <li>Wybierz <strong>Włącz</strong>.</li>\n                <li>Aby dodać folder spoza bibliotek, kliknij go prawym przyciskiem myszy w Eksploratorze plików, wybierz <strong>Pokaż więcej opcji → Dołącz do biblioteki</strong> i wskaż bibliotekę.</li>\n                <li>Nie odłączaj dysku, dopóki nie zakończy się pierwsza kopia zapasowa. Następnie ponownie otwórz Historię plików i sprawdź, czy kopia została utworzona.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Kroki: przywróć wcześniejszą wersję</h3>\n              <ol class=\"backup-steps\">\n                <li>W Eksploratorze plików otwórz folder, w którym jest lub był plik.</li>\n                <li>Kliknij folder prawym przyciskiem myszy i wybierz <strong>Przywróć poprzednie wersje</strong>. Jeśli nie widzisz tej opcji, najpierw wybierz <strong>Pokaż więcej opcji</strong>.</li>\n                <li>Na karcie <strong>Poprzednie wersje</strong> wybierz wersję. Aby najpierw ją obejrzeć, wybierz strzałkę obok przycisku <strong>Otwórz</strong>, a następnie <strong>Otwórz w historii plików</strong>.</li>\n                <li>Wybierz strzałkę obok przycisku <strong>Przywróć</strong> i wybierz <strong>Przywróć do</strong>. Wskaż inny folder, aby bieżąca wersja pozostała.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"disk-image-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">03</span><h2 id=\"disk-image-title\" tabindex=\"-1\">Obraz dysku za pomocą Rescuezilla</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Obraz dysku to kopia całego dysku z systemem Windows, aplikacjami, ustawieniami i plikami, zapisana jako pliki na innym dysku. Możesz przechowywać kilka obrazów z różnych dni. Jeśli dysk ulegnie awarii lub komputer zostanie zainfekowany wirusem, przywracasz obraz na ten sam lub nowy dysk, a komputer wraca do stanu z tamtego dnia.</p>\n              <p>Rescuezilla to bezpłatne oprogramowanie open source. Działa z pendrive’a, więc nic nie jest instalowane w systemie Windows.</p>\n              <h3 class=\"backup-subheading\">Kiedy wybrać zamiast Veeam</h3>\n              <ul class=\"backup-list\">\n                <li>Chcesz oprogramowania open source, które pobierasz bez wypełniania formularza.</li>\n                <li>Nie chcesz instalować w systemie Windows programu do kopii zapasowych ani mieć go stale uruchomionego w tle.</li>\n                <li>Chcesz, żeby każdy obraz był pełną, samodzielną kopią. Kopie Veeam po pierwszej zawierają tylko zmiany i do przywrócenia potrzebują wcześniejszych plików.</li>\n                <li>Chcesz też sklonować system Windows na nowy dysk.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Rescuezilla 2.6.2 lub nowsza: <a href=\"https://github.com/rescuezilla/rescuezilla\" target=\"_blank\" rel=\"noopener noreferrer\">Rescuezilla w serwisie GitHub</a> (2,8 tys. gwiazdek, listopad 2026). Pobierz plik ISO z sekcji <a href=\"https://github.com/rescuezilla/rescuezilla/releases/latest\" target=\"_blank\" rel=\"noopener noreferrer\">Releases</a>. Starsze wersje mogą się nie uruchamiać na komputerach z włączonym bezpiecznym rozruchem (Secure Boot).</li>\n                <li><a href=\"https://etcher.balena.io/\" target=\"_blank\" rel=\"noopener noreferrer\">balenaEtcher</a> do zapisania pliku ISO na pendrivie.</li>\n                <li>Pendrive, który można wyczyścić. Oznacz go napisem „Rescuezilla” i przechowuj razem z dyskiem z kopiami zapasowymi.</li>\n                <li>Dysk na kopie zapasowe z wystarczającą ilością wolnego miejsca. Obrazy są kompresowane i obejmują tylko zajęte miejsce, ale obraz zaszyfrowanego dysku może być tak duży jak cały dysk.</li>\n                <li><a href=\"https://support.microsoft.com/en-us/windows/security/encryption/find-your-bitlocker-recovery-key\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odzyskiwania funkcji BitLocker</a>, jeśli system Windows jest zaszyfrowany. System Windows może poprosić o niego po przywróceniu.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://rescuezilla.com/download\" target=\"_blank\" rel=\"noopener noreferrer\">Rescuezilla: pobieranie i instrukcje <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Przywracanie wymazuje dysk, na który przywracasz obraz.</strong> Przed potwierdzeniem sprawdź rozmiar i nazwę dysku. Wybór niewłaściwego dysku to najpoważniejszy błąd.</p></div>\n              <ul class=\"backup-list\">\n                <li>Obraz pomoże po infekcji wirusem tylko wtedy, gdy utworzono go przed infekcją. Przechowuj kilka obrazów z różnych dat.</li>\n                <li>Uruchom komputer z pendrive’a za pomocą jednorazowego menu rozruchu, często pod klawiszem <strong>F8</strong>, <strong>F11</strong> lub <strong>F12</strong>. Klawisz zależy od producenta.</li>\n                <li>Jeśli obraz na ekranie jest nieczytelny, w pierwszym menu wybierz <strong>Graphical fallback mode</strong>.</li>\n                <li>Jeśli dysk zaczyna się psuć, na ekranie podsumowania włącz opcję ignorowania uszkodzonych sektorów.</li>\n                <li>Tworzenie obrazu może trwać od kilkudziesięciu minut do kilku godzin, zależnie od dysku i ilości danych. Użyj portu USB 3.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki: utwórz obraz</h3>\n              <ol class=\"backup-steps\">\n                <li>Zapisz plik ISO Rescuezilla na pendrivie za pomocą balenaEtcher. Spowoduje to wymazanie pendrive’a.</li>\n                <li>Podłącz dysk na kopie zapasowe. Uruchom komputer z pendrive’a.</li>\n                <li>Wybierz <strong>Start Rescuezilla</strong>, a następnie <strong>Backup</strong>.</li>\n                <li>Wybierz dysk z systemem Windows i pozostaw zaznaczone wszystkie jego partycje.</li>\n                <li>Wybierz dysk na kopie zapasowe i folder. Domyślna nazwa obrazu zawiera datę.</li>\n                <li>Pozostaw domyślną kompresję, potwierdź i poczekaj na zakończenie tworzenia kopii.</li>\n                <li>Wybierz <strong>Verify Image</strong>, aby sprawdzić nowy obraz. Następnie otwórz kilka plików w <strong>Image Explorer (beta)</strong>.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Kroki: przywróć obraz</h3>\n              <ol class=\"backup-steps\">\n                <li>Uruchom komputer z pendrive’a z Rescuezilla. Wybierz <strong>Start Rescuezilla</strong>, a następnie <strong>Restore</strong>.</li>\n                <li>Wybierz dysk z kopiami zapasowymi i folder, a następnie obraz z potrzebną datą.</li>\n                <li>Wybierz dysk docelowy. Sprawdź jego rozmiar i nazwę, ponieważ zostanie wymazany.</li>\n                <li>Potwierdź i poczekaj na zakończenie przywracania.</li>\n                <li>Wyłącz komputer, odłącz pendrive i dysk z kopiami zapasowymi, a następnie uruchom system Windows.</li>\n              </ol>\n              <p class=\"backup-limits\">Przywrócenie na większy dysk pozostawia dodatkowe nieprzydzielone miejsce. Możesz je tak zostawić lub utworzyć na nim nową partycję w narzędziu Zarządzanie dyskami. Funkcja <strong>Clone</strong> w Rescuezilla kopiuje jeden dysk bezpośrednio na drugi. Przydaje się do przeniesienia systemu Windows na nowy dysk, ale nie jako kopia zapasowa: tworzy tylko jedną kopię, wymazuje drugi dysk, a potem trzeba zamienić dyski w komputerze.</p>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"veeam-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">04</span><h2 id=\"veeam-title\" tabindex=\"-1\">Automatyczny obraz dysku za pomocą Veeam Agent FREE</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Veeam Agent for Microsoft Windows FREE tworzy obraz całego dysku z poziomu systemu Windows, według harmonogramu lub po podłączeniu dysku na kopie zapasowe. Pierwsza kopia obejmuje wszystko. Kolejne kopiują tylko zmiany, więc są dużo szybsze. Pojedyncze pliki odzyskasz w systemie Windows, a cały komputer przywrócisz z pendrive’a odzyskiwania.</p>\n              <p>Program jest bezpłatny, ale nie jest open source. Veeam tworzy oprogramowanie do kopii zapasowych dla firm, a wersja bezpłatna pozwala utworzyć tylko jedno zadanie kopii zapasowej.</p>\n              <h3 class=\"backup-subheading\">Kiedy wybrać zamiast Rescuezilla</h3>\n              <ul class=\"backup-list\">\n                <li>Chcesz, żeby kopie tworzyły się same, bez uruchamiania komputera z pendrive’a.</li>\n                <li>Chcesz normalnie pracować, gdy kopia się tworzy.</li>\n                <li>Chcesz szybkich codziennych kopii. Po pierwszej kopiowane są tylko zmiany.</li>\n                <li>Często potrzebujesz pojedynczego pliku. Skopiujesz go z kopii bez wychodzenia z systemu Windows.</li>\n                <li>Chcesz, żeby stare kopie usuwały się same, a zostawały kopie z ostatnich dni.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li><a href=\"https://www.veeam.com/products/free/microsoft-windows.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam Agent for Microsoft Windows FREE</a>. Strona pobierania prosi o wypełnienie formularza z danymi kontaktowymi.</li>\n                <li>Windows 11 w wersji 22H2 lub nowszej na komputerze z procesorem x64. Komputery z procesorami Arm nie są obsługiwane.</li>\n                <li>Dysk zewnętrzny na kopie zapasowe z większą ilością wolnego miejsca, niż zajmują dane na komputerze. Nie używaj dysku sformatowanego w systemie FAT32, bo nie zapisze plików większych niż 4 GB.</li>\n                <li>Pendrive, który można wyczyścić, na nośnik odzyskiwania. Oznacz go napisem „Veeam” i przechowuj razem z dyskiem z kopiami zapasowymi.</li>\n                <li><a href=\"https://support.microsoft.com/en-us/windows/security/encryption/find-your-bitlocker-recovery-key\" target=\"_blank\" rel=\"noopener noreferrer\">Klucz odzyskiwania funkcji BitLocker</a>, jeśli system Windows lub dysk z kopiami jest zaszyfrowany. Może być potrzebny do odblokowania dysku podczas przywracania.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://helpcenter.veeam.com/docs/agentforwindows/userguide/howto_protect_computer.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam: ochrona komputera z Windows <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://helpcenter.veeam.com/docs/agentforwindows/userguide/howto_restore_files.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam: przywracanie plików <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://helpcenter.veeam.com/docs/agentforwindows/userguide/howto_baremetal_recovery.html\" target=\"_blank\" rel=\"noopener noreferrer\">Veeam: przywracanie całego komputera <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Przywrócenie całego komputera nadpisuje dysk, na który przywracasz kopię.</strong> Przed kliknięciem <strong>Restore</strong> sprawdź podsumowanie.</p></div>\n              <ul class=\"backup-list\">\n                <li>Kopie tworzą się tylko wtedy, gdy dysk na kopie jest podłączony. Jeśli odłączasz go między kopiami, co chroni go przed ransomware, zaznacz <strong>When backup target is connected</strong>, aby kopia startowała po każdym podłączeniu.</li>\n                <li>Komputer wyłączony lub uśpiony pomija zaplanowaną kopię. Zaznacz <strong>Backup once powered on</strong>, aby wykonać ją później.</li>\n                <li>Domyślnie Veeam przechowuje kopie z 7 dni. Aby móc cofnąć się dalej, zwiększ liczbę dni w polu <strong>Keep backups for</strong> podczas konfiguracji.</li>\n                <li>Uruchom komputer z pendrive’a za pomocą jednorazowego menu rozruchu, często pod klawiszem <strong>F8</strong>, <strong>F11</strong> lub <strong>F12</strong>.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki: skonfiguruj automatyczne kopie</h3>\n              <ol class=\"backup-steps\">\n                <li>Pobierz Veeam Agent for Microsoft Windows FREE, otwórz archiwum i uruchom plik instalacyjny.</li>\n                <li>Kliknij <strong>Next</strong>, a potem <strong>I Accept</strong>. Uruchom ponownie komputer, jeśli system Windows o to poprosi.</li>\n                <li>Na ostatnim ekranie pozostaw zaznaczone <strong>Run Veeam Recovery Media creation wizard</strong> i kliknij <strong>Finish</strong>.</li>\n                <li>Włóż pendrive. Kliknij ikonę odświeżania, wybierz pendrive i kliknij <strong>Next</strong>. Kliknij <strong>Yes</strong>, aby go sformatować, a potem <strong>Create</strong>. Gdy nośnik będzie gotowy, po około 2–5 minutach, kliknij <strong>Finish</strong>.</li>\n                <li>Podłącz dysk na kopie zapasowe. Kliknij prawym przyciskiem ikonę Veeam w zasobniku systemowym obok zegara i wybierz <strong>Backup</strong> → <strong>Configure backup</strong>.</li>\n                <li>Wpisz nazwę, wybierz <strong>Entire computer</strong>, a potem <strong>Local storage</strong>.</li>\n                <li>Wybierz dysk na kopie zapasowe i ustaw, z ilu dni przechowywać kopie.</li>\n                <li>W kroku <strong>Schedule</strong> zaznacz <strong>Daily at</strong> i godzinę oraz <strong>Backup once powered on</strong>. Kliknij <strong>Apply</strong>.</li>\n                <li>Zaznacz <strong>Run the job when I click Finish</strong> i kliknij <strong>Finish</strong>. Poczekaj na zakończenie pierwszej kopii, bo trwa najdłużej.</li>\n                <li>Sprawdź, czy możesz odzyskać plik, tak jak opisano poniżej.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Kroki: odzyskaj pliki</h3>\n              <ol class=\"backup-steps\">\n                <li>Kliknij dwukrotnie ikonę Veeam w zasobniku systemowym. Wskaż zadanie kopii zapasowej i wybierz <strong>Restore file</strong>.</li>\n                <li>Wybierz kopię z potrzebną datą i kliknij <strong>Next</strong>, a potem <strong>Open</strong>.</li>\n                <li>W przeglądarce Veeam Backup kliknij prawym przyciskiem plik lub folder i wybierz <strong>Restore</strong> → <strong>Keep</strong>. Veeam zapisze go obok oryginału z przedrostkiem <code>RESTORED-</code> w nazwie. Aby zapisać go w innym miejscu, wybierz <strong>Copy To</strong>.</li>\n                <li>Po zakończeniu zamknij przeglądarkę Veeam Backup.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Kroki: przywróć cały komputer</h3>\n              <ol class=\"backup-steps\">\n                <li>Podłącz dysk z kopiami zapasowymi i pendrive Veeam. Uruchom komputer z pendrive’a i naciśnij dowolny klawisz, jeśli pojawi się taka prośba.</li>\n                <li>Kliknij <strong>Bare Metal Recovery</strong>.</li>\n                <li>Veeam zwykle sam znajduje najnowszą kopię na podłączonym dysku. Jeśli nie, wybierz <strong>Local storage</strong>, kliknij <strong>Browse</strong> i wskaż plik <code>.vbm</code> kopii.</li>\n                <li>Wybierz kopię z potrzebną datą, a potem <strong>Entire computer</strong>.</li>\n                <li>Sprawdź podsumowanie i kliknij <strong>Restore</strong>. Veeam nadpisze dysk danymi z kopii.</li>\n                <li>Po zakończeniu zamknij kreatora, odłącz pendrive i uruchom ponownie komputer.</li>\n              </ol>\n              <p class=\"backup-limits\">Jeśli w zasobniku systemowym nie ma ikony Veeam, otwórz program z menu Start: wyszukaj <strong>Configure Backup</strong> albo <strong>Create Recovery Media</strong>, aby utworzyć nowy pendrive.</p>\n            </div>\n          </div>\n        </section>\n        <div class=\"backup-bottom\"><p><strong>Ostatni krok: sprawdź, czy możesz odzyskać pliki z kopii zapasowej.</strong> Na podstawie dokumentacji Microsoft, Rescuezilla i Veeam, sprawdzonej w październiku i listopadzie 2026.</p><a class=\"tools-directory-link\" href=\"#directory\" data-view=\"directory\"><span aria-hidden=\"true\">←</span> Powrót do usług</a></div>\n      </div>\n    ",
  "repair": "      <div class=\"backup-heading\"><p class=\"eyebrow\"><span class=\"tiny-line\"></span>NAPRAW PROBLEM</p><h1 id=\"repair-title\" tabindex=\"-1\">Opcje <span>naprawy</span> Windows 11<span>.</span></h1><p class=\"backup-lead\">Gdy system Windows nie działa prawidłowo, zacznij od opcji, która zmienia najmniej. Niektóre opcje usuwają aplikacje lub pliki, więc przed każdą z nich przeczytaj ostrzeżenie. Ta strona dotyczy tylko Windows 11.</p></div>\n      <div class=\"backup-panel\">\n        <section class=\"backup-section\" aria-labelledby=\"repair-overview-title\">\n          <div class=\"backup-section-heading\"><h2 id=\"repair-overview-title\">Którą opcję wypróbować?</h2></div>\n          <div class=\"backup-warning\" role=\"note\"><p><strong>Przed naprawą utwórz kopię zapasową plików.</strong> Naprawa może się nie udać, a niektóre opcje usuwają pliki. <a href=\"#backup\" data-view=\"backup\">Zobacz opcje kopii zapasowej</a>.</p></div>\n          <h3 class=\"backup-subheading\">System Windows się uruchamia</h3>\n          <div class=\"backup-table-wrap\">\n            <table class=\"backup-table\" role=\"table\">\n              <thead role=\"rowgroup\"><tr role=\"row\"><th scope=\"col\" role=\"columnheader\">Wypróbuj w tej kolejności</th><th scope=\"col\" role=\"columnheader\">Pliki osobiste</th><th scope=\"col\" role=\"columnheader\">Aplikacje i ustawienia</th></tr></thead>\n              <tbody role=\"rowgroup\">\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">1. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"windows-update-repair-title\">Rozwiązywanie problemów przy użyciu Windows Update</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span></td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-files\">Zachowane</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">2. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"uninstall-updates-title\">Odinstaluj aktualizacje</a>, jeśli problem zaczął się po aktualizacji</th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span></td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-files\">Zachowane</span> Usuwana jest tylko aktualizacja.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">3. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"system-restore-title\">Przywracanie systemu</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span></td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-points\">Cofnięte</span> Zmiany wprowadzone po utworzeniu punktu przywracania zostają cofnięte.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">4. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"pitr-title\">Przywracanie do punktu w czasie</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-points\">Cofnięte</span> Nowsze pliki i zmiany zostają utracone.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-points\">Cofnięte</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">5. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"reset-title\">Resetuj ten komputer</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span> przy opcji Zachowaj moje pliki. <span class=\"backup-type backup-type-removed\">Usunięte</span> przy opcji Usuń wszystko.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-removed\">Usunięte</span></td></tr>\n              </tbody>\n            </table>\n          </div>\n          <h3 class=\"backup-subheading\">System Windows się nie uruchamia</h3>\n          <div class=\"backup-table-wrap\">\n            <table class=\"backup-table\" role=\"table\">\n              <thead role=\"rowgroup\"><tr role=\"row\"><th scope=\"col\" role=\"columnheader\">Wypróbuj w tej kolejności</th><th scope=\"col\" role=\"columnheader\">Pliki osobiste</th><th scope=\"col\" role=\"columnheader\">Aplikacje i ustawienia</th></tr></thead>\n              <tbody role=\"rowgroup\">\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">1. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"startup-repair-title\">Naprawa podczas uruchomienia</a></th><td role=\"cell\" data-label=\"Pliki osobiste\">Microsoft nie opisuje zmian w Twoich plikach.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\">Naprawia pliki systemowe i pliki rozruchowe.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">2. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"uninstall-updates-title\">Odinstaluj aktualizacje</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span></td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-files\">Zachowane</span> Usuwana jest tylko aktualizacja.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">3. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"system-restore-title\">Przywracanie systemu</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span></td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-points\">Cofnięte</span> Zmiany wprowadzone po utworzeniu punktu przywracania zostają cofnięte.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">4. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"pitr-title\">Przywracanie do punktu w czasie</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-points\">Cofnięte</span> Nowsze pliki i zmiany zostają utracone.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-points\">Cofnięte</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">5. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"reset-title\">Resetuj ten komputer</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-files\">Zachowane</span> przy opcji Zachowaj moje pliki. <span class=\"backup-type backup-type-removed\">Usunięte</span> przy opcji Usuń wszystko.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-removed\">Usunięte</span></td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">6. <a class=\"backup-inline-jump\" href=\"#repair\" data-backup-jump=\"install-usb-title\">Pendrive instalacyjny</a>: Napraw mój komputer, a potem czysta instalacja</th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-media\">Zależy</span> Napraw mój komputer tylko otwiera narzędzia. <span class=\"backup-type backup-type-removed\">Usunięte</span> przy czystej instalacji.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-removed\">Usunięte</span> przy czystej instalacji.</td></tr>\n                <tr role=\"row\"><th scope=\"row\" role=\"rowheader\">7. Dysk uległ awarii: wymień go i <a class=\"backup-inline-jump\" href=\"#backup\" data-view=\"backup\" data-backup-jump=\"disk-image-title\">przywróć obraz dysku</a></th><td role=\"cell\" data-label=\"Pliki osobiste\"><span class=\"backup-type backup-type-points\">Cofnięte</span> Do daty utworzenia obrazu.</td><td role=\"cell\" data-label=\"Aplikacje i ustawienia\"><span class=\"backup-type backup-type-points\">Cofnięte</span> Do daty utworzenia obrazu.</td></tr>\n              </tbody>\n            </table>\n          </div>\n          <p class=\"backup-limits\">Dostępność zależy od wersji i edycji Windows 11, zainstalowanych aktualizacji, uprawnień administratora oraz zasad Twojej organizacji. Nazwy menu mogą się nieznacznie różnić między kompilacjami. Żadna naprawa nie gwarantuje sukcesu.</p>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"recovery-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">01</span><h2 id=\"recovery-title\" tabindex=\"-1\">Otwórz środowisko odzyskiwania systemu Windows</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Środowisko odzyskiwania systemu Windows (Windows RE) to zestaw narzędzi naprawczych działających poza zwykłym systemem Windows. Działają w nim narzędzia: Naprawa podczas uruchomienia, Odinstaluj aktualizacje, Przywracanie systemu, Przywracanie do punktu w czasie i Resetuj ten komputer. Jeśli system Windows kilka razy się nie uruchomi, automatycznie otworzy Windows RE.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <div class=\"backup-note\"><p><strong>Jeśli komputer korzysta z funkcji Szyfrowanie urządzenia lub BitLocker, dowiedz się, gdzie znaleźć jego klucz odzyskiwania.</strong> Windows RE może o niego poprosić. Sprawdź teraz, czy możesz go otworzyć na innym urządzeniu: <a href=\"https://support.microsoft.com/en-us/windows/security/encryption/find-your-bitlocker-recovery-key\" target=\"_blank\" rel=\"noopener noreferrer\">zwykle jest na Twoim koncie Microsoft albo na koncie służbowym lub szkolnym</a>, a w razie potrzeby pomoże dział IT Twojej organizacji. Każdą kopię klucza przechowuj w tajemnicy, w bezpiecznym miejscu, oddzielnie od komputera. Szyfrowanie urządzenia jest dostępne także na obsługiwanych komputerach z Windows 11 Home.</p></div>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/windows-recovery-environment\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: środowisko odzyskiwania systemu Windows <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/security/encryption/device-encryption-in-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Szyfrowanie urządzenia <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <ul class=\"backup-list\">\n                <li>Wymuszaj wyłączenie tylko wtedy, gdy normalne uruchamianie już się nie udaje.</li>\n                <li>Nie przerywaj pracy komputera podczas instalowania aktualizacji, naprawy ani przywracania.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Jak je otworzyć</h3>\n              <ul class=\"backup-list\">\n                <li><strong>Z systemu Windows:</strong> przejdź do <strong>Ustawienia → System → Odzyskiwanie</strong> i obok opcji <strong>Uruchamianie zaawansowane</strong> wybierz <strong>Uruchom ponownie teraz</strong>. Możesz też przytrzymać klawisz <strong>Shift</strong> i wybrać <strong>Zasilanie → Uruchom ponownie</strong>; działa to również na ekranie logowania.</li>\n                <li><strong>Z pendrive’a:</strong> uruchom komputer z <a href=\"#repair\" data-backup-jump=\"install-usb-title\">pendrive’a instalacyjnego</a> i wybierz <strong>Dalej → Napraw mój komputer</strong>.</li>\n                <li><strong>Gdy normalne uruchamianie już się nie udaje:</strong> włącz komputer, a gdy pojawi się logo, przytrzymaj przycisk zasilania, aż komputer się wyłączy. Powtórz to jeszcze raz. Przy trzecim uruchomieniu pozwól mu przejść do ekranu <strong>Naprawa automatyczna</strong>, a następnie wybierz <strong>Opcje zaawansowane</strong>.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"windows-update-repair-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">02</span><h2 id=\"windows-update-repair-title\" tabindex=\"-1\">Rozwiązywanie problemów przy użyciu Windows Update</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Jeśli system Windows się uruchamia, ale nie działa prawidłowo, ta opcja ponownie instaluje bieżącą wersję systemu Windows, aby naprawić pliki i składniki systemowe. Twoje <strong>pliki, aplikacje i ustawienia</strong> zostają zachowane, więc warto zacząć od tej opcji.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Windows 11 w wersji 22H2 lub nowszej z opcjonalną aktualizacją z lutego 2024 albo nowszą aktualizacją.</li>\n                <li>Uruchamiający się system Windows i połączenie z internetem.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/install-upgrade/fix-issues-by-reinstalling-the-current-version-of-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: ponowna instalacja przez Windows Update <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <ul class=\"backup-list\">\n                <li>Do zakończenia procesu nie odłączaj komputera od zasilania ani od internetu.</li>\n                <li>Na komputerach zarządzanych przez organizację ta opcja może być niewidoczna.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki</h3>\n              <ol class=\"backup-steps\">\n                <li>Przejdź do <strong>Ustawienia → System → Odzyskiwanie</strong>.</li>\n                <li>Obok opcji <strong>Rozwiązywanie problemów przy użyciu Windows Update</strong> wybierz <strong>Zainstaluj ponownie teraz</strong>.</li>\n                <li>Postępuj zgodnie z instrukcjami. System Windows pobierze i zainstaluje pliki, a następnie uruchomi się ponownie.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"uninstall-updates-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">03</span><h2 id=\"uninstall-updates-title\" tabindex=\"-1\">Odinstaluj aktualizacje</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Usuwa niedawną aktualizację systemu Windows. Według Microsoft nie wpływa to na Twoje pliki i aplikacje. Użyj tej opcji, gdy problem pojawił się zaraz po aktualizacji.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Nazwa lub data aktualizacji, która spowodowała problem. Niektórych aktualizacji nie można odinstalować.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/updates-lifecycle/how-to-uninstall-a-windows-update\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: odinstalowywanie aktualizacji systemu Windows <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <ul class=\"backup-list\">\n                <li>Microsoft zaleca, aby najpierw wypróbować <a href=\"#repair\" data-backup-jump=\"windows-update-repair-title\">Rozwiązywanie problemów przy użyciu Windows Update</a>.</li>\n                <li>Usunięcie aktualizacji zabezpieczeń może osłabić ochronę komputera. Microsoft zaleca, aby najpierw poznać związane z tym zagrożenia.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki</h3>\n              <ul class=\"backup-list\">\n                <li><strong>System Windows się uruchamia:</strong> przejdź do <strong>Ustawienia → Windows Update → Historia aktualizacji → Odinstaluj aktualizacje</strong>. Obok aktualizacji wybierz <strong>Odinstaluj</strong>.</li>\n                <li><strong>System Windows się nie uruchamia:</strong> <a href=\"#repair\" data-backup-jump=\"recovery-title\">otwórz Windows RE</a> i wybierz <strong>Rozwiązywanie problemów → Opcje zaawansowane → Odinstaluj aktualizacje</strong>.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"startup-repair-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">04</span><h2 id=\"startup-repair-title\" tabindex=\"-1\">Naprawa podczas uruchomienia</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Naprawa podczas uruchomienia próbuje rozwiązać problemy, które uniemożliwiają uruchomienie systemu Windows, takie jak uszkodzone pliki systemowe lub ustawienia rozruchu. Jeśli nie może rozwiązać problemu, wyświetla raport z tym, co znalazła.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Dostęp do Windows RE.</li>\n                <li>Klucz odzyskiwania funkcji BitLocker, jeśli dysk jest zaszyfrowany.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/startup-boot/startup-repair\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Naprawa podczas uruchomienia <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <ul class=\"backup-list\">\n                <li>Jeśli Naprawa podczas uruchomienia nie pomoże, Microsoft zaleca <a href=\"#repair\" data-backup-jump=\"system-restore-title\">Przywracanie systemu</a>.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki</h3>\n              <ol class=\"backup-steps\">\n                <li><a href=\"#repair\" data-backup-jump=\"recovery-title\">Otwórz Windows RE</a>.</li>\n                <li>Wybierz <strong>Rozwiązywanie problemów → Opcje zaawansowane → Naprawa podczas uruchomienia</strong>.</li>\n                <li>Postępuj zgodnie z instrukcjami i poczekaj na zakończenie.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"system-restore-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">05</span><h2 id=\"system-restore-title\" tabindex=\"-1\">Przywracanie systemu</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Przywracanie systemu cofa pliki systemowe, ustawienia rejestru i zainstalowane programy do wcześniejszego punktu przywracania. Według Microsoft nie wpływa ono na pliki osobiste, co oznacza też, że nie tworzy ich kopii zapasowej.</p>\n              <p>System Windows tworzy też punkty przywracania automatycznie. Starsze punkty mogą być usuwane, gdy system Windows zarządza przydzielonym miejscem, więc nazwany punkt może później nie być dostępny.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Włączona Ochrona systemu dla dysku z systemem Windows.</li>\n                <li>Punkt przywracania utworzony przed wystąpieniem problemu.</li>\n                <li>Uprawnienia administratora, które mogą być potrzebne.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/system-protection\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: tworzenie punktu przywracania <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/system-restore\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Przywracanie systemu <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <ul class=\"backup-list\">\n                <li>Aplikacje, sterowniki i aktualizacje zainstalowane po utworzeniu punktu przywracania mogą zostać usunięte.</li>\n                <li>To nie jest kopia zapasowa. Punkty przywracania są na tym samym dysku i nie obejmują plików osobistych.</li>\n                <li>Jeśli dysk jest zaszyfrowany, Windows RE może poprosić o klucz odzyskiwania funkcji BitLocker.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki: utwórz punkt przywracania</h3>\n              <ol class=\"backup-steps\">\n                <li>Otwórz menu <strong>Start</strong>, wyszukaj <strong>Utwórz punkt przywracania</strong> i otwórz pasujący wynik.</li>\n                <li>Na karcie <strong>Ochrona systemu</strong> wybierz dysk z systemem Windows, zwykle <strong>C:</strong>.</li>\n                <li>Jeśli ochrona tego dysku jest wyłączona, wybierz <strong>Konfiguruj</strong>, zaznacz <strong>Włącz ochronę systemu</strong>, suwakiem przydziel miejsce na dysku, a następnie wybierz <strong>Zastosuj → OK</strong>.</li>\n                <li>Wybierz <strong>Utwórz</strong>, wpisz rozpoznawalną nazwę, np. <strong>Przed aktualizacją sterownika grafiki</strong>, i wybierz <strong>Utwórz</strong>.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Kroki: przywróć</h3>\n              <ul class=\"backup-list\">\n                <li><strong>System Windows się uruchamia:</strong> naciśnij <strong>klawisz z logo systemu Windows + R</strong>, wpisz <strong>rstrui.exe</strong> i naciśnij <strong>Enter</strong>. Wybierz punkt przywracania, opcjonalnie wybierz <strong>Skanuj w poszukiwaniu zależnych programów</strong>, a następnie <strong>Dalej → Zakończ</strong>.</li>\n                <li><strong>System Windows się nie uruchamia:</strong> <a href=\"#repair\" data-backup-jump=\"recovery-title\">otwórz Windows RE</a> i wybierz <strong>Rozwiązywanie problemów → Opcje zaawansowane → Przywracanie systemu</strong>.</li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"pitr-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">06</span><h2 id=\"pitr-title\" tabindex=\"-1\">Przywracanie do punktu w czasie</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Gdy ta funkcja jest włączona, system Windows automatycznie tworzy punkty przywracania, domyślnie mniej więcej co 24 godziny, i przechowuje każdy z nich do 72 godzin. Przywrócenie punktu cofa <strong>cały dysk z systemem Windows</strong> do tamtej chwili, łącznie z plikami lokalnymi.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Windows 11 w wersji 24H2 lub nowszej na obsługiwanym urządzeniu.</li>\n                <li>Włączona funkcja. Microsoft domyślnie włącza ją na urządzeniach z wersją Home oraz na urządzeniach z wersją Pro niezarządzanych przez organizację, gdy wolumin systemu Windows ma 200 GB lub więcej (chodzi o jego rozmiar, a nie o wolne miejsce). Na mniejszym woluminie włącz ją samodzielnie. Na urządzeniu zarządzanym przez organizację sprawdź to ustawienie i postępuj zgodnie z zasadami organizacji.</li>\n                <li>Wystarczająca ilość wolnego miejsca na dysku.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/point-time-restore-for-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Przywracanie do punktu w czasie <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://learn.microsoft.com/en-us/windows/configuration/point-in-time-restore\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Przywracanie do punktu w czasie – szczegóły techniczne <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Wszystko na dysku z systemem Windows wraca do stanu z wybranego punktu.</strong> Pliki, aplikacje, ustawienia i hasła zmienione później zostaną utracone. Jeśli nadal masz dostęp do ważnych nowszych plików, najpierw skopiuj je na inny dysk lub do magazynu w chmurze.</p></div>\n              <ul class=\"backup-list\">\n                <li>Punkty przywracania są na tym samym dysku, więc nie pomogą w razie jego awarii.</li>\n                <li>System Windows usuwa punkty, gdy wygasną, gdy osiągną limit miejsca lub gdy wolne miejsce spadnie do 20 GB lub mniej.</li>\n                <li>Po przywróceniu ponownie zainstaluj aktualizacje systemu Windows. Przywrócenie może cofnąć najnowsze aktualizacje zabezpieczeń.</li>\n                <li>Aby cofnąć się dalej niż o około trzy dni, użyj funkcji <a href=\"#repair\" data-backup-jump=\"system-restore-title\">Przywracanie systemu</a>.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki: sprawdź, czy funkcja jest włączona</h3>\n              <ol class=\"backup-steps\">\n                <li>Przejdź do <strong>Ustawienia → System → Odzyskiwanie → Przywracanie do punktu w czasie → Wyświetl lub edytuj</strong> i zatwierdź monit administratora.</li>\n                <li>Sprawdź, czy funkcja jest włączona, i przejrzyj dostępne punkty przywracania. Jeśli dopiero ją włączono, sprawdź później, czy punkt został utworzony.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Kroki: przywróć punkt</h3>\n              <ol class=\"backup-steps\">\n                <li><a href=\"#repair\" data-backup-jump=\"recovery-title\">Otwórz Windows RE</a> i wybierz <strong>Rozwiązywanie problemów → Przywracanie do punktu w czasie</strong>.</li>\n                <li>Jeśli pojawi się monit, wprowadź klucz odzyskiwania funkcji BitLocker, wybierz punkt przywracania i wybierz <strong>Kontynuuj</strong>.</li>\n                <li>Przejrzyj punkt, wersję systemu Windows i ostrzeżenie o utracie danych, a następnie wybierz <strong>Przywróć</strong>. Nie odłączaj komputera od zasilania, dopóki nie uruchomi się ponownie w systemie Windows.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"reset-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">07</span><h2 id=\"reset-title\" tabindex=\"-1\">Resetuj ten komputer</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Funkcja Resetuj ten komputer ponownie instaluje system Windows przy użyciu narzędzi odzyskiwania wbudowanych w komputer. Wybierasz, czy zachować pliki osobiste. W obu przypadkach zainstalowane aplikacje i ustawienia zostaną usunięte.</p>\n              <div class=\"backup-comparison\">\n                <div>\n                  <h4>Zachowaj moje pliki</h4>\n                  <p><strong>Pliki osobiste:</strong> zachowane.<br><strong>Aplikacje i ustawienia:</strong> usunięte. Niektóre aplikacje lub dostosowania producenta mogą zostać przywrócone, zależnie od wybranych opcji.</p>\n                </div>\n                <div>\n                  <h4>Usuń wszystko</h4>\n                  <p><strong>Pliki osobiste:</strong> usunięte.<br><strong>Aplikacje i ustawienia:</strong> usunięte. Użyj tej opcji, aby zacząć od nowa. Zanim oddasz komputer, włącz też opcję <strong>Wyczyść dane</strong>, która utrudnia odzyskanie usuniętych plików.</p>\n                </div>\n              </div>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Lista aplikacji, które trzeba będzie zainstalować ponownie, wraz z ich instalatorami i licencjami.</li>\n                <li>Połączenie z internetem, jeśli wybierzesz Pobieranie z chmury.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/reset-your-pc\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: resetowanie komputera <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/recovery-options-in-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: opcje odzyskiwania <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Opcja Usuń wszystko usuwa pliki osobiste.</strong> Najpierw utwórz kopię zapasową: <a href=\"#backup\" data-view=\"backup\">zobacz opcje kopii zapasowej</a>.</p></div>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Nie uruchamiaj ponownie komputera podczas resetowania.</strong> Microsoft zaznacza, że ekran może długo pozostawać czarny, czasem dłużej niż 15 minut, a komputer może sam się ponownie uruchomić. Samodzielne ponowne uruchomienie może spowodować niepowodzenie resetowania.</p></div>\n              <h3 class=\"backup-subheading\">Kroki</h3>\n              <ol class=\"backup-steps\">\n                <li><strong>Jeśli system Windows się uruchamia:</strong> przejdź do <strong>Ustawienia → System → Odzyskiwanie</strong> i obok opcji <strong>Resetuj ten komputer</strong> wybierz <strong>Resetuj komputer</strong>.<br><strong>Jeśli system Windows się nie uruchamia:</strong> <a href=\"#repair\" data-backup-jump=\"recovery-title\">otwórz Windows RE</a> i wybierz <strong>Rozwiązywanie problemów → Resetuj ten komputer</strong>.</li>\n                <li>Wybierz <strong>Zachowaj moje pliki</strong> lub <strong>Usuń wszystko</strong>.</li>\n                <li>Wybierz <strong>Pobieranie z chmury</strong> lub <strong>Ponowna instalacja lokalna</strong>.</li>\n                <li>Przejrzyj podsumowanie zmian, a następnie wybierz <strong>Resetuj (Reset)</strong>. Nie odłączaj komputera od zasilania.</li>\n              </ol>\n              <p><strong>Pobieranie z chmury</strong> pobiera od Microsoft nowe pliki instalacyjne systemu Windows. Nie jest to kopia zapasowa Twoich plików w chmurze. <strong>Ponowna instalacja lokalna</strong> korzysta z plików, które już są na komputerze; jeśli się nie powiedzie, wypróbuj Pobieranie z chmury.</p>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"install-usb-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">08</span><h2 id=\"install-usb-title\" tabindex=\"-1\">Pendrive instalacyjny Windows 11</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Pendrive instalacyjny pozwala otworzyć narzędzia odzyskiwania, ponownie zainstalować system Windows z zachowaniem plików i aplikacji albo zainstalować nową kopię. Możesz go przygotować z wyprzedzeniem lub w razie potrzeby na innym działającym komputerze.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Pusty pendrive o pojemności co najmniej 8 GB. Zostanie wymazany.</li>\n                <li>Działający komputer z systemem Windows, na którym go przygotujesz.</li>\n                <li>W przypadku większości komputerów: narzędzie Media Creation Tool firmy Microsoft, które tworzy nośniki dla komputerów x64. W przypadku Windows na procesorach Arm użyj <a href=\"https://www.microsoft.com/software-download/windows11arm64\" target=\"_blank\" rel=\"noopener noreferrer\">obrazu Windows 11 Arm64 do pobrania</a> od Microsoft, który do uruchomienia może wymagać sterowników od producenta komputera, albo nośnika odzyskiwania od producenta.</li>\n              </ul>\n              <p class=\"backup-limits\">Aby uzyskać najlepszą zgodność sterowników na każdym komputerze, Microsoft zaleca sprawdzenie, czy producent oferuje własny nośnik odzyskiwania.</p>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/install-upgrade/create-installation-media-for-windows\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: tworzenie nośnika instalacyjnego <span aria-hidden=\"true\">↗</span></a><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/deployment/install-upgrade/reinstall-windows-with-the-installation-media\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: ponowna instalacja z nośnika instalacyjnego <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Przygotowanie pendrive’a wymazuje całą jego zawartość.</strong> Najpierw skopiuj z pendrive’a wszystko, czego potrzebujesz.</p></div>\n              <h3 class=\"backup-subheading\">Kroki: utwórz pendrive</h3>\n              <ol class=\"backup-steps\">\n                <li>Na działającym komputerze z systemem Windows przejdź do strony Microsoft <a href=\"https://www.microsoft.com/software-download/windows11\" target=\"_blank\" rel=\"noopener noreferrer\">Pobierz system Windows 11</a>. W sekcji <strong>Tworzenie nośnika instalacyjnego z systemem Windows 11</strong> wybierz <strong>Pobierz teraz</strong>.</li>\n                <li>Uruchom narzędzie Media Creation Tool, zatwierdź monit administratora i zaakceptuj postanowienia licencyjne.</li>\n                <li>Wybierz język i wersję, wybierz <strong>Dysk flash USB</strong>, wskaż swój pendrive i poczekaj, aż narzędzie zakończy pracę.</li>\n              </ol>\n              <h3 class=\"backup-subheading\">Trzy sposoby użycia</h3>\n              <div class=\"backup-usb-uses\">\n                <div>\n                  <h4>1. Naprawa bez ponownej instalacji</h4>\n                  <p class=\"backup-usb-result\"><strong>Pliki, aplikacje, ustawienia:</strong> zależnie od wybranego narzędzia</p>\n                  <p>Uruchom komputer z pendrive’a. Na pierwszym ekranie Instalatora systemu Windows wybierz <strong>Dalej</strong>, a następnie <strong>Napraw mój komputer</strong>. Otworzą się narzędzia odzyskiwania, takie jak Naprawa podczas uruchomienia i Przywracanie systemu. Samo ich otwarcie niczego nie zmienia.</p>\n                </div>\n                <div>\n                  <h4>2. Ponowna instalacja z zachowaniem wszystkiego</h4>\n                  <p class=\"backup-usb-result\"><strong>Pliki, aplikacje, ustawienia:</strong> zachowane</p>\n                  <p>Tylko jeśli system Windows nadal się uruchamia. Otwórz pendrive w Eksploratorze plików i uruchom <strong>setup.exe</strong>. Wybierz <strong>Zmień elementy do zachowania</strong>, wybierz <strong>Zachowaj pliki osobiste i aplikacje</strong>, a następnie <strong>Dalej</strong> i <strong>Zainstaluj</strong>. Użyj nośnika z tą samą wersją, co zainstalowany system Windows. Jeśli opcja <strong>Zachowaj pliki osobiste i aplikacje</strong> nie jest dostępna, przerwij, chyba że akceptujesz ponowną instalację aplikacji.</p>\n                </div>\n                <div>\n                  <h4>3. Czysta instalacja</h4>\n                  <p class=\"backup-usb-result\"><strong>Pliki, aplikacje, ustawienia:</strong> usunięte</p>\n                  <div class=\"backup-warning\" role=\"note\"><p><strong>Czysta instalacja usuwa pliki osobiste, aplikacje, ustawienia i dostosowania producenta.</strong> <a href=\"#backup\" data-view=\"backup\">Najpierw utwórz kopię zapasową plików</a>, a następnie odłącz dyski z kopiami zapasowymi.</p></div>\n                  <p>Uruchom komputer z pendrive’a, wybierz <strong>Instalowanie systemu Windows 11</strong> i potwierdź, że wszystko zostanie usunięte. Wybierz wersję zgodną z licencją. Gdy Instalator wyświetli listę partycji, usuń tylko partycje oznaczone jako <strong>Dysk 0</strong>, a następnie zainstaluj system w obszarze <strong>Nieprzydzielone miejsce na dysku 0</strong>.</p>\n                  <div class=\"backup-warning\" role=\"note\"><p><strong>Nie zmieniaj partycji na żadnym innym dysku,</strong> np. Dysk 1. Na komputerze z więcej niż jednym dyskiem może to wymazać dysk z danymi.</p></div>\n                </div>\n              </div>\n              <p class=\"backup-limits\"><strong>Uruchamianie z pendrive’a:</strong> jeśli system Windows działa, przejdź do <strong>Ustawienia → System → Odzyskiwanie → Uruchamianie zaawansowane → Uruchom ponownie teraz</strong>, a następnie wybierz <strong>Korzystanie z urządzenia (Use a device)</strong>. W przeciwnym razie podczas uruchamiania komputera użyj klawisza menu rozruchu; klawisz zależy od producenta. Komputer, który był wcześniej aktywowany, zwykle aktywuje się ponownie po reinstalacji tej samej wersji.</p>\n            </div>\n          </div>\n        </section>\n        <section class=\"backup-section\" aria-labelledby=\"recovery-drive-title\">\n          <div class=\"backup-section-heading\"><span class=\"backup-number\" aria-hidden=\"true\">09</span><h2 id=\"recovery-drive-title\" tabindex=\"-1\">Dysk odzyskiwania</h2></div>\n          <div class=\"backup-split\">\n            <div class=\"backup-aside\">\n              <h3 class=\"backup-subheading\">Co robi</h3>\n              <p>Dysk odzyskiwania to pendrive przygotowany na Twoim komputerze, gdy ten jeszcze działa. Pozwala otworzyć Windows RE i ponownie zainstalować system Windows. Zawiera wbudowane pliki systemu Windows, aktualizacje zainstalowane w chwili jego utworzenia oraz ewentualne dostosowania od producenta komputera i jest przeznaczony dla tego komputera.</p>\n              <h3 class=\"backup-subheading\">Czego potrzebujesz</h3>\n              <ul class=\"backup-list\">\n                <li>Pendrive, który można wyczyścić.</li>\n                <li>Komputer, który nadal działa. Microsoft zaleca przygotowanie dysku odzyskiwania z wyprzedzeniem, jako opcji ostatniej szansy.</li>\n              </ul>\n              <div class=\"backup-source-links\"><a class=\"source-link\" href=\"https://support.microsoft.com/en-us/windows/experience/backup-recovery/recovery-drive\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft: Dysk odzyskiwania <span aria-hidden=\"true\">↗</span></a></div>\n            </div>\n            <div class=\"backup-main\">\n              <h3 class=\"backup-subheading\">Uwaga</h3>\n              <div class=\"backup-warning\" role=\"note\"><p><strong>Utworzenie dysku odzyskiwania wymazuje dane na wybranym dysku USB.</strong> Najpierw skopiuj z niego wszystko, czego potrzebujesz.</p></div>\n              <ul class=\"backup-list\">\n                <li><strong>Nie zawiera kopii zapasowej plików osobistych</strong>. Ponowna instalacja za pomocą opcji <strong>Odzyskaj z dysku</strong> usuwa pliki, aplikacje i ustawienia.</li>\n                <li>Twórz go ponownie raz w roku, aby zawierał najnowsze aktualizacje.</li>\n              </ul>\n              <h3 class=\"backup-subheading\">Kroki</h3>\n              <ol class=\"backup-steps\">\n                <li>W menu Start wyszukaj <strong>Dysk odzyskiwania</strong> i otwórz go. Jeśli system Windows o to poprosi, zatwierdź monit administratora.</li>\n                <li>Pozostaw zaznaczone pole <strong>Utwórz kopię zapasową plików systemowych na dysku odzyskiwania</strong>, a następnie wybierz <strong>Dalej</strong>.</li>\n                <li>Podłącz pendrive, zaznacz go, a następnie wybierz <strong>Dalej</strong> i <strong>Utwórz</strong>. Kopiowanie może chwilę potrwać.</li>\n              </ol>\n            </div>\n          </div>\n        </section>\n        <div class=\"backup-bottom\"><p>Na podstawie dokumentacji Microsoft, sprawdzonej w październiku i listopadzie 2026. Nazwy menu i dostępność mogą się zmieniać wraz z aktualizacjami Windows 11.</p><a class=\"tools-directory-link\" href=\"#directory\" data-view=\"directory\"><span aria-hidden=\"true\">←</span> Powrót do usług</a></div>\n      </div>\n    "
 },
 "data": {
  "services": {
   "DiagTrack": {
    "summary": "Zacznij od ograniczenia opcjonalnych danych diagnostycznych.",
    "tradeoff": "Zbieranie danych diagnostycznych obsługiwane przez tę usługę zostaje zatrzymane. Raportowanie błędów systemu Windows (Windows Error Reporting) i poszczególne aplikacje mają osobne ustawienia.",
    "advice": "Najpierw wyłącz opcjonalne dane diagnostyczne na stronie Ustawienia → Prywatność i zabezpieczenia → Diagnostyka i opinie. Wyłączenie usługi jest też dostępne w kreatorze skryptów jako opcja, którą trzeba zaznaczyć samodzielnie.",
    "description": "Zbiera i wysyła zdarzenia diagnostyczne oraz dzienniki systemu Windows zgodnie z ustawieniami danych diagnostycznych."
   },
   "dmwappushservice": {
    "summary": "Pozostaw dostępną dla Intune i zarządzania urządzeniem.",
    "tradeoff": "Jej wyłączenie może uniemożliwić zarejestrowanemu komputerowi synchronizację z Microsoft Intune i odbieranie poleceń zarządzania urządzeniem.",
    "advice": "Pozostaw jej obecne ustawienie domyślne, zwłaszcza na komputerze zarejestrowanym w Microsoft Intune lub innym systemie zarządzania urządzeniami.",
    "description": "Przekazuje wiadomości push dotyczące zarządzania urządzeniem. Microsoft Intune używa tej usługi do synchronizacji urządzeń.",
    "availability": "Jej pełna nazwa wyświetlana może zawierać „Device Management Wireless Application Protocol”. Dostępność i konfiguracja zależą od kompilacji i sposobu zarządzania urządzeniem."
   },
   "WerSvc": {
    "summary": "Przed wyłączeniem diagnostyki sprawdź ustawienia raportów.",
    "tradeoff": "Raporty o awariach, dzienniki diagnostyczne i sugerowane poprawki mogą stać się niedostępne, co utrudni badanie powtarzających się awarii.",
    "advice": "Tam, gdzie to obsługiwane, kontroluj wysyłanie raportów za pomocą zasad Raportowania błędów systemu Windows (Windows Error Reporting). Raporty podlegają obowiązującym ustawieniom zgody i zasad.",
    "description": "Zbiera informacje o awariach i nieodpowiadających aplikacjach na potrzeby rozwiązywania problemów i raportów o błędach.",
    "recommendation": "Użyj zasad raportowania"
   },
   "RemoteRegistry": {
    "summary": "Można wyłączyć, jeśli nie używasz zdalnej administracji rejestrem.",
    "tradeoff": "Narzędzia do zdalnego zarządzania rejestrem przestaną działać z tym komputerem. Lokalny Edytor rejestru pozostanie dostępny.",
    "advice": "Na własnym komputerze wyłącz ją, jeśli nie potrzebuje jej żadne narzędzie do zdalnej administracji. Pozostaw ją, jeśli wymaga jej dział IT lub oprogramowanie do zarządzania. Jeśli jest już wyłączona, nie zmieniaj jej.",
    "description": "Pozwala autoryzowanym narzędziom do zdalnej administracji odczytywać i zmieniać rejestr systemu Windows, zgodnie z uprawnieniami konta i konfiguracją urządzenia."
   },
   "SysMain": {
    "summary": "Rozważ zmianę, gdy SysMain stale obciąża dysk lub procesor.",
    "tradeoff": "Wstępne ładowanie zostanie zatrzymane, więc często używane aplikacje mogą otwierać się dłużej.",
    "advice": "Pozostaw ustawienie domyślne, chyba że ustalono, że to ta usługa powoduje stałą aktywność w tle. Jeśli ją wyłączysz, a aplikacje zaczną uruchamiać się wolniej, przywróć poprzednie ustawienie.",
    "description": "Uczy się sposobu korzystania z komputera i wstępnie ładuje dane aplikacji do pamięci, aby często używane aplikacje uruchamiały się szybciej.",
    "recommendation": "Tylko przy rozwiązywaniu problemów"
   },
   "WSearch": {
    "summary": "Zanim ją wyłączysz, spróbuj ograniczyć indeksowane lokalizacje.",
    "tradeoff": "Eksplorator plików i aplikacje korzystające z indeksu systemu Windows, w tym klasyczny Outlook, mogą zwracać wyniki wyszukiwania wolniej lub niekompletne. Kreator wyłącza też Foldery robocze (Work Folders), więc zatrzymuje się ich synchronizacja plików organizacji.",
    "advice": "Wybierz tryb indeksowania Klasyczny lub wyklucz często zmieniane foldery na stronie Ustawienia → Prywatność i zabezpieczenia → Wyszukiwanie lub Wyszukiwanie w systemie Windows. W wersjach z automatycznym indeksowaniem często używanych folderów sprawdź też tę opcję. Zaznacz opcję wyłączenia tylko wtedy, gdy akceptujesz ograniczenia wyszukiwania i nie używasz Folderów roboczych. Ich usługa może zależeć od Windows Search.",
    "description": "Tworzy i aktualizuje lokalny indeks, aby system Windows i zgodne aplikacje mogły szybko znajdować pliki, ich właściwości i zawartość."
   },
   "workfolderssvc": {
    "summary": "Można wyłączyć, jeśli nie używasz Folderów roboczych (Work Folders).",
    "tradeoff": "Pliki przestaną synchronizować się z serwerem Folderów roboczych Twojej organizacji. Zmiany wprowadzone na różnych urządzeniach nie będą już synchronizowane przez tę funkcję.",
    "advice": "Pozostaw ją, jeśli Ty lub Twoja organizacja używacie Folderów roboczych. Sprawdź w obszarze Panel sterowania → System i zabezpieczenia → Foldery robocze (Work Folders). Kreator dodaje tę usługę, gdy zaznaczysz Windows Search, a skrypt najpierw przetwarza wybrane usługi zależne.",
    "description": "Synchronizuje pliki między tym komputerem a serwerem Folderów roboczych organizacji."
   },
   "Spooler": {
    "summary": "Można wyłączyć, jeśli nigdy nie drukujesz, również do PDF.",
    "tradeoff": "Drukarki lokalne, drukarki udostępnione i drukowanie wirtualne, np. Microsoft Print to PDF, mogą przestać działać.",
    "advice": "Pozostaw ją przy każdym sposobie drukowania, nawet bez fizycznej drukarki. Jeśli nigdy nie drukujesz, sprawdź jej zależności i wyłącz ją, zachowując kopię zapasową pierwotnych ustawień.",
    "description": "Kolejkuje zadania drukowania i łączy aplikacje z drukarkami lokalnymi, sieciowymi i wirtualnymi."
   },
   "PrintDeviceConfigurationService": {
    "summary": "Można wyłączyć tylko wtedy, gdy nigdy nie drukujesz ani nie dodajesz drukarek.",
    "tradeoff": "Dodawanie lub konfigurowanie drukarek może się nie udać.",
    "advice": "Pozostaw ją, jeśli drukujesz lub dodajesz drukarki. Sprawdź jej lokalny opis i zależności, bo składniki drukowania różnią się między kompilacjami. Jeśli jej nie ma, skrypt ją pomija.",
    "description": "Obsługuje konfigurację urządzeń drukujących.",
    "availability": "Składnik drukowania zależny od kompilacji. Podlinkowane źródło opisuje stos drukowania; lokalny opis i zależności tego składnika sprawdź w services.msc."
   },
   "Fax": {
    "summary": "Można wyłączyć, jeśli nie używasz funkcji faksu w systemie Windows.",
    "tradeoff": "Wysyłanie lub odbieranie faksów przez system Windows stanie się niedostępne. Inne oprogramowanie faksowe może mieć inne wymagania.",
    "advice": "Wyłącz, jeśli nie używasz faksowania w systemie Windows. Jeśli usługi nie ma lub jest już wyłączona, nie musisz nic robić; skrypt ją pomija.",
    "description": "Umożliwia wysyłanie i odbieranie faksów w systemie Windows, gdy zainstalowane są opcjonalne składniki faksu.",
    "availability": "Funkcja opcjonalna. Usługa Fax może nie występować w Twojej instalacji Windows 11."
   },
   "TabletInputService": {
    "summary": "Pozostaw usługi wprowadzania dostępne, nawet bez ekranu dotykowego.",
    "tradeoff": "Pisanie na ekranie, pismo odręczne i funkcje metod wprowadzania mogą przestać działać.",
    "advice": "Pozostaw usługi wprowadzania przy ich obecnych ustawieniach domyślnych, również na komputerach z fizyczną klawiaturą.",
    "description": "Obsługuje klawiaturę dotykową i panel pisma ręcznego w kompilacjach, które zawierają tę usługę.",
    "availability": "Starsza nazwa usługi. W obecnych kompilacjach może zamiast niej występować TextInputManagementService, która ma w tym przewodniku osobny wpis. Kieruj się nazwą usługi na swoim komputerze."
   },
   "wisvc": {
    "summary": "Można wyłączyć, jeśli ten komputer nie należy do Niejawnego programu testów systemu Windows.",
    "tradeoff": "Funkcje Niejawnego programu testów systemu Windows mogą przestać działać. Wyłączenie usługi nie zmienia zainstalowanej kompilacji zapoznawczej w wersję stabilną.",
    "advice": "Rozważ wyłączenie tylko na komputerze ze stabilną wersją, który nie jest zarejestrowany w programie. Jeśli już otrzymujesz kompilacje zapoznawcze, wypisz się z programu w obsługiwany sposób na stronie Ustawienia → Windows Update → Niejawny program testów systemu Windows.",
    "description": "Zapewnia infrastrukturę pomocniczą dla Niejawnego programu testów systemu Windows i obsługi kompilacji zapoznawczych."
   },
   "TermService": {
    "summary": "Jeśli ten komputer nigdy nie przyjmuje połączeń Pulpitu zdalnego.",
    "tradeoff": "Przychodzące sesje Pulpitu zdalnego i powiązane funkcje sesji zdalnych staną się niedostępne. Może to rozłączyć Twoją bieżącą sesję.",
    "advice": "Najlepiej wyłącz Pulpit zdalny na stronie Ustawienia → System. Jeśli wyłączasz usługi, uruchom skrypt lokalnie przy komputerze i pozostaw je, jeśli potrzebujesz jakiejkolwiek funkcji sesji zdalnych. Możliwość przyjmowania połączeń zależy od wersji systemu Windows.",
    "description": "Pozwala temu komputerowi obsługiwać sesje Pulpitu zdalnego, aby inny komputer mógł się z nim połączyć."
   },
   "lfsvc": {
    "summary": "Najpierw sprawdź uprawnienia lokalizacji.",
    "tradeoff": "Aplikacje korzystające z lokalizacji, funkcje automatycznej lokalizacji i Znajdź moje urządzenie mogą stracić część możliwości. Aplikacje nadal mogą ustalić lokalizację na podstawie adresu IP.",
    "advice": "Do zarządzania usługą i uprawnieniami aplikacji użyj strony Ustawienia → Prywatność i zabezpieczenia → Lokalizacja. Zanim wyłączysz lokalizację, sprawdź funkcję Znajdź moje urządzenie.",
    "description": "Udostępnia informacje o lokalizacji funkcjom systemu Windows i aplikacjom, które mają uprawnienia do ich używania."
   },
   "DoSvc": {
    "summary": "Ogranicz w Ustawieniach pobieranie z innych urządzeń.",
    "tradeoff": "Wyłączenie usługi może zakłócić dostarczanie zawartości i aktualizacji. Po wyłączeniu udostępniania między urządzeniami pobieranie bezpośrednie nadal działa.",
    "advice": "Na stronie Ustawienia → Windows Update → Opcje zaawansowane → Optymalizacja dostarczania wyłącz pobieranie z innych urządzeń lub ogranicz jego zakres. Pozostaw usługę dostępną.",
    "description": "Pobiera aktualizacje systemu Windows i inną zawartość Microsoft, z opcjonalnym udostępnianiem między komputerami."
   },
   "bthserv": {
    "summary": "Jeśli nie używasz żadnych urządzeń Bluetooth.",
    "tradeoff": "Parowanie Bluetooth i podłączone urządzenia peryferyjne mogą przestać działać. Dotyczy to klawiatur, myszy, kontrolerów, zestawów słuchawkowych i niektórych urządzeń ułatwień dostępu.",
    "advice": "Zanim zmienisz tę usługę, podłącz przewodową klawiaturę i mysz. Pozostaw ją, jeśli możesz jeszcze podłączyć urządzenie Bluetooth. Prostszym rozwiązaniem jest wyłączenie Bluetooth w Ustawieniach.",
    "description": "Obsługuje wykrywanie i parowanie urządzeń Bluetooth."
   },
   "BTAGService": {
    "summary": "Jeśli nie prowadzisz rozmów przez zestaw słuchawkowy Bluetooth.",
    "tradeoff": "Dźwięk zestawu słuchawkowego w trybie głośnomówiącym, w tym mikrofon używany do rozmów, może przestać działać.",
    "advice": "Pozostaw ją, jeśli używasz zestawu słuchawkowego Bluetooth do rozmów głosowych lub wideo.",
    "description": "Obsługuje połączenie audio Bluetooth w trybie głośnomówiącym, używane do rozmów przez zestaw słuchawkowy."
   },
   "BthAvctpSvc": {
    "summary": "Jeśli nie używasz sterowania multimediami w urządzeniach Bluetooth.",
    "tradeoff": "Sterowanie odtwarzaniem na urządzeniach audio Bluetooth może przestać działać.",
    "advice": "Pozostaw ją dla urządzeń audio Bluetooth, które zdalnie sterują odtwarzaniem.",
    "description": "Obsługuje polecenia zdalnego sterowania audio i wideo przez Bluetooth, takie jak sterowanie odtwarzaniem."
   },
   "RetailDemo": {
    "summary": "Jeśli nie jest to komputer demonstracyjny w sklepie.",
    "tradeoff": "Tryb demonstracyjny dla sklepów stanie się niedostępny.",
    "advice": "Jeśli jest już wyłączona, pozostaw ją wyłączoną.",
    "description": "Obsługuje tryb demonstracyjny używany na komputerach wystawowych w sklepach."
   },
   "UmRdpService": {
    "summary": "Jeśli nie używasz przekierowania urządzeń w Pulpicie zdalnym.",
    "tradeoff": "Przekierowanie dysków, drukarek i innych urządzeń w sesjach zdalnych może nie działać.",
    "advice": "Przejrzyj razem z usługą Remote Desktop Services. Wyłącz tylko z sesji lokalnej, gdy nie udostępniasz tych funkcji ani ich nie potrzebujesz.",
    "description": "Przekierowuje drukarki, dyski i obsługiwane urządzenia klienta do sesji Pulpitu zdalnego."
   },
   "SessionEnv": {
    "summary": "Jeśli nie korzystasz z konfigurowania sesji Pulpitu zdalnego.",
    "tradeoff": "Sesje Pulpitu zdalnego mogą się nie uruchamiać lub nie stosować skonfigurowanych ustawień.",
    "advice": "Przejrzyj razem z usługą Remote Desktop Services; pozostaw ją, jeśli korzystasz z sesji zdalnych.",
    "description": "Konfiguruje i utrzymuje ustawienia potrzebne do sesji Pulpitu zdalnego."
   },
   "SSDPSRV": {
    "summary": "Jeśli nie używasz wykrywania urządzeń multimedialnych w sieci.",
    "tradeoff": "Wykrywanie UPnP może przestać znajdować urządzenia sieciowe, takie jak odbiorniki multimediów.",
    "advice": "Pozostaw ją dla urządzeń lub aplikacji multimedialnych, które korzystają z wykrywania UPnP. Przejrzyj razem z nią usługę UPnP Device Host.",
    "description": "Wykrywa urządzenia sieciowe, które ogłaszają się przez SSDP, w tym urządzenia multimedialne UPnP."
   },
   "upnphost": {
    "summary": "Jeśli nie hostujesz urządzeń UPnP.",
    "tradeoff": "Urządzenia UPnP hostowane na tym komputerze staną się niedostępne dla innych urządzeń.",
    "advice": "Pozostaw ją, jeśli oprogramowanie do udostępniania multimediów lub obsługi urządzeń korzysta z hostowania UPnP.",
    "description": "Pozwala hostować urządzenia UPnP na tym komputerze."
   },
   "fdPHost": {
    "summary": "Jeśli nie używasz automatycznego wykrywania w sieci.",
    "tradeoff": "Aplikacje korzystające z tych dostawców mogą przestać wykrywać urządzenia sieciowe i udostępnione zasoby.",
    "advice": "Pozostaw ją, jeśli korzystasz z automatycznego wykrywania drukarek sieciowych, urządzeń multimedialnych lub udostępnionych zasobów.",
    "description": "Hostuje dostawców SSDP i WS-Discovery, których aplikacje używają do znajdowania urządzeń i zasobów sieciowych."
   },
   "FDResPub": {
    "summary": "Jeśli inne komputery nie muszą wykrywać tego komputera.",
    "tradeoff": "Inne komputery mogą przestać znajdować ten komputer lub jego udostępnione zasoby przez odnajdowanie sieci.",
    "advice": "Pozostaw ją, jeśli ten komputer i jego udziały mają być widoczne podczas przeglądania sieci.",
    "description": "Ogłasza ten komputer i jego udostępnione zasoby, aby inne komputery mogły je wykryć w sieci."
   },
   "WMPNetworkSvc": {
    "summary": "Jeśli nie używasz starszego udostępniania biblioteki multimediów.",
    "tradeoff": "Inne urządzenia stracą dostęp do udostępnionej biblioteki multimediów. Ta usługa zależy od zainstalowanych funkcji multimedialnych.",
    "advice": "Wyłącz tylko wtedy, gdy żadne urządzenie nie odtwarza strumieniowo zawartości z tego komputera przez starszą funkcję udostępniania programu Windows Media Player.",
    "description": "Udostępnia bibliotekę starszego programu Windows Media Player zgodnym urządzeniom sieciowym."
   },
   "CDPSvc": {
    "summary": "Najpierw przejrzyj funkcje połączonych urządzeń.",
    "tradeoff": "Funkcje systemu Windows korzystające z Connected Devices Platform mogą przestać łączyć się z innymi urządzeniami.",
    "advice": "Wyłącz nieużywane funkcje, np. Udostępnianie w pobliżu, w ich własnych ustawieniach. Pozostaw usługę dostępną dla funkcji połączonych urządzeń, z których nadal korzystasz.",
    "description": "Obsługuje funkcje systemu Windows, które łączą się i komunikują z innymi urządzeniami."
   },
   "CDPUserSvc": {
    "summary": "Jeśli nie używasz udostępniania w pobliżu ani funkcji między urządzeniami.",
    "tradeoff": "Funkcje połączonych urządzeń w Twojej sesji użytkownika mogą przestać działać.",
    "advice": "Zamiast wyłączać szablon usługi użytkownika, wyłącz nieużywane funkcje udostępniania w Ustawieniach. Microsoft wymienia wśród jej zależności Network Connection Broker (NcbService), RPC i sterownik TCP/IP. Pozostaw tę infrastrukturę dostępną dla funkcji, z których korzystasz.",
    "description": "Zapewnia obsługę połączonych urządzeń w sesji zalogowanego użytkownika."
   },
   "cbdhsvc": {
    "summary": "Sprawdź historię schowka i synchronizację w chmurze.",
    "tradeoff": "Historia schowka lub synchronizacja mogą przestać działać.",
    "advice": "Użyj strony Ustawienia → System → Schowek.",
    "description": "Obsługuje historię schowka i synchronizację schowka między urządzeniami."
   },
   "OneSyncSvc": {
    "summary": "Sprawdź synchronizację kont.",
    "tradeoff": "Aplikacje korzystające z tej usługi mogą przestać synchronizować pocztę, kalendarze i kontakty.",
    "advice": "Użyj ustawień konta lub synchronizacji w aplikacji, której to dotyczy.",
    "description": "Synchronizuje pocztę, kalendarze, kontakty i inne dane użytkownika dla aplikacji korzystających z tej usługi systemu Windows.",
    "recommendation": "Użyj ustawień synchronizacji konta"
   },
   "BcastDVRUserService": {
    "summary": "Jeśli nie nagrywasz gier w tle.",
    "tradeoff": "Przechwytywanie gier stanie się niedostępne.",
    "advice": "Użyj strony Ustawienia → Granie (Gaming) → Przechwytywanie (Captures).",
    "description": "Obsługuje funkcje nagrywania i transmitowania gier w systemie Windows."
   },
   "CaptureService": {
    "summary": "Pozostaw dostępną do przechwytywania ekranu.",
    "tradeoff": "Przechwytywanie ekranu może nie działać w aplikacjach korzystających z tego interfejsu API systemu Windows.",
    "advice": "Pozostaw ją dostępną dla aplikacji do przechwytywania i udostępniania ekranu.",
    "description": "Obsługuje przechwytywanie ekranu w aplikacjach korzystających z interfejsu API Windows.Graphics.Capture."
   },
   "BluetoothUserService": {
    "summary": "Przejrzyj razem z urządzeniami Bluetooth.",
    "tradeoff": "Funkcje Bluetooth dla poszczególnych użytkowników mogą nie działać.",
    "advice": "Najpierw użyj ustawień Bluetooth.",
    "description": "Obsługuje funkcje Bluetooth związane z sesją zalogowanego użytkownika."
   },
   "PimIndexMaintenanceSvc": {
    "summary": "Pozostaw dostępną do wyszukiwania kontaktów.",
    "tradeoff": "Kontakty mogą zniknąć z wyników wyszukiwania.",
    "advice": "Pozostaw konfigurację domyślną.",
    "description": "Indeksuje dane kontaktów, aby obsługiwane aplikacje mogły je szybko przeszukiwać."
   },
   "UserDataSvc": {
    "summary": "Pozostaw dostępną dla zależnych aplikacji.",
    "tradeoff": "Aplikacje korzystające z tej usługi mogą stracić dostęp do kontaktów, kalendarzy i innych wspólnych danych użytkownika.",
    "advice": "Pozostaw konfigurację domyślną.",
    "description": "Daje obsługiwanym aplikacjom dostęp do uporządkowanych danych użytkownika, w tym kontaktów i kalendarzy."
   },
   "UnistoreSvc": {
    "summary": "Pozostaw dostępną dla zależnych aplikacji.",
    "tradeoff": "Aplikacje korzystające z tego magazynu mogą nie móc odczytywać ani zapisywać kontaktów, kalendarzy i powiązanych danych.",
    "advice": "Pozostaw konfigurację domyślną.",
    "description": "Przechowuje uporządkowane dane użytkownika, w tym kontakty i kalendarze, dla obsługiwanych aplikacji."
   },
   "PrintWorkflowUserSvc": {
    "summary": "Pozostaw dostępną dla aplikacji drukujących.",
    "tradeoff": "Aplikacje przepływu pracy drukowania mogą nie móc przygotowywać ani dostosowywać zadań drukowania.",
    "advice": "Pozostaw dostępną, jeśli drukujesz.",
    "description": "Obsługuje aplikacje przepływu pracy drukowania w sesji zalogowanego użytkownika."
   },
   "WpnUserService": {
    "summary": "Pozostaw powiadomienia dostępne.",
    "tradeoff": "Alerty lokalne i push mogą nie działać.",
    "advice": "Wyłącz niechciane powiadomienia aplikacji w Ustawieniach.",
    "description": "Dostarcza powiadomienia lokalne i push zalogowanemu użytkownikowi."
   },
   "vmicheartbeat": {
    "summary": "Pozostaw, jeśli system Windows działa w maszynie wirtualnej.",
    "tradeoff": "Host przestaje otrzymywać raporty o stanie gościa.",
    "advice": "Na komputerach fizycznych nie zmieniaj nieaktywnych usług integracji.",
    "description": "Informuje host Hyper-V, że system operacyjny gościa działa."
   },
   "vmicshutdown": {
    "summary": "Pozostaw, jeśli system Windows działa w maszynie wirtualnej.",
    "tradeoff": "Prawidłowe zamykanie systemu zainicjowane przez host jest niedostępne.",
    "advice": "Nie zastępuj prawidłowego zamykania systemu wymuszonym wyłączeniem zasilania.",
    "description": "Pozwala hostowi Hyper-V zażądać normalnego zamknięcia tego systemu operacyjnego gościa."
   },
   "vmictimesync": {
    "summary": "Pozostaw, jeśli system Windows działa w maszynie wirtualnej.",
    "tradeoff": "Synchronizacja czasu między hostem a gościem zostaje zatrzymana.",
    "advice": "Szczególne wymagania dotyczące czasu uzgodnij z administratorem maszyny wirtualnej.",
    "description": "Synchronizuje zegar gościa z jego hostem Hyper-V."
   },
   "vmickvpexchange": {
    "summary": "Pozostaw, jeśli system Windows działa w maszynie wirtualnej.",
    "tradeoff": "Wymiana metadanych między gościem a hostem zostaje zatrzymana.",
    "advice": "Nie zmieniaj konfiguracji integracji gościa.",
    "description": "Wymienia podstawowe informacje o konfiguracji między gościem Hyper-V a jego hostem."
   },
   "vmicvss": {
    "summary": "Pozostaw dla kopii zapasowych działających maszyn wirtualnych.",
    "tradeoff": "Kopie zapasowe na żywo koordynowane przez host mogą się nie udać.",
    "advice": "Omów to z administratorem kopii zapasowych.",
    "description": "Koordynuje migawki gościa na potrzeby kopii zapasowych tworzonych przez host Hyper-V podczas działania maszyny wirtualnej."
   },
   "vmicguestinterface": {
    "summary": "Pozostaw domyślne ustawienie skonfigurowane dla maszyny wirtualnej.",
    "tradeoff": "Integracja kopiowania plików z hosta może nie działać.",
    "advice": "Jeśli jest już wyłączona, nie trzeba nic zmieniać.",
    "description": "Pozwala hostowi Hyper-V kopiować pliki do gościa przez usługi integracji."
   },
   "vmicvmsession": {
    "summary": "Pozostaw dla PowerShell z hosta do gościa.",
    "tradeoff": "Administracja przez PowerShell Direct stanie się niedostępna.",
    "advice": "Pozostaw domyślne ustawienie skonfigurowane dla maszyny wirtualnej.",
    "description": "Umożliwia połączenia PowerShell Direct z hosta Hyper-V do gościa z systemem Windows bez połączenia sieciowego."
   },
   "WinDefend": {
    "summary": "Pozostaw ochronę przed złośliwym oprogramowaniem dostępną.",
    "tradeoff": "Microsoft Defender Antivirus nie może zapewniać normalnego skanowania i ochrony przed złośliwym oprogramowaniem.",
    "advice": "Pozwól systemowi Windows zarządzać rejestracją programu antywirusowego. Nie wyłączaj ochrony w celu poprawy wydajności i nie wymuszaj włączenia usługi, gdy ochroną zarządza zgodny produkt zabezpieczający.",
    "description": "Uruchamia skanowanie i ochronę przed złośliwym oprogramowaniem w Microsoft Defender Antivirus.",
    "availability": "Gdy zainstalowany jest inny program antywirusowy, system Windows może zmienić tryb działania Defendera. Prawidłowy stan zależy od tej konfiguracji zabezpieczeń."
   },
   "WdNisSvc": {
    "summary": "Pozostaw inspekcję sieci w Defenderze dostępną.",
    "tradeoff": "Inspekcja sieci pod kątem exploitów w Microsoft Defender zostaje zakłócona.",
    "advice": "Nie wyłączaj.",
    "description": "Sprawdza ruch sieciowy pod kątem exploitów w ramach Microsoft Defender Antivirus."
   },
   "MpsSvc": {
    "summary": "Użyj ustawień zapory, a nie zmiany usługi.",
    "tradeoff": "Zatrzymanie usługi zapory może osłabić zabezpieczenia i zakłócić działanie systemu Windows.",
    "advice": "Konfiguruj reguły lub profile w obsługiwanych ustawieniach zapory. Nie dodawaj tej usługi do skryptu poprawiającego wydajność.",
    "description": "Stosuje reguły Zapory systemu Windows (Windows Firewall) do przychodzącego i wychodzącego ruchu sieciowego."
   },
   "BFE": {
    "summary": "Pozostaw filtrowanie sieci dostępne.",
    "tradeoff": "Działanie zapory i IPsec zależy od infrastruktury filtrowania.",
    "advice": "Pozostaw ją dostępną, a niepożądane działanie sieci rozwiązuj w obsługiwanych ustawieniach.",
    "description": "Zarządza infrastrukturą filtrowania używaną przez Zaporę systemu Windows (Windows Firewall) i IPsec."
   },
   "wuauserv": {
    "summary": "Pozostaw obsługę aktualizacji dostępną.",
    "tradeoff": "System Windows może nie móc wyszukiwać, pobierać ani instalować aktualizacji.",
    "advice": "Użyj ustawień aktualizacji.",
    "description": "Umożliwia wykrywanie, pobieranie i instalowanie aktualizacji systemu Windows."
   },
   "BITS": {
    "summary": "Pozostaw transfery w tle dostępne.",
    "tradeoff": "Pobieranie lub przekazywanie w tle używane przez system Windows i zależne aplikacje może zostać zatrzymane lub się nie udać.",
    "advice": "Pozostaw konfigurację domyślną.",
    "description": "Przesyła pliki w tle dla systemu Windows i aplikacji, korzystając z dostępnej przepustowości sieci."
   },
   "RpcSs": {
    "summary": "Podstawowa komunikacja aplikacji i usług.",
    "tradeoff": "Wiele składników systemu Windows zależy od RPC.",
    "advice": "Pozostaw włączoną. Słowo „Remote” w nazwie nie oznacza, że to opcjonalny dostęp zdalny.",
    "description": "Zapewnia obsługę RPC i zarządza komunikacją COM/DCOM używaną przez system Windows i aplikacje.",
    "bootRisk": {
     "reason": "Podstawowe składniki systemu Windows zależą od RPC. Jej wyłączenie może uniemożliwić uruchomienie tych składników oraz zakłócić uruchamianie systemu lub logowanie."
    }
   },
   "RpcEptMapper": {
    "summary": "Podstawowa infrastruktura połączeń RPC.",
    "tradeoff": "Programy i usługi mogą nie móc nawiązywać połączeń RPC.",
    "advice": "Pozostaw konfigurację domyślną.",
    "description": "Łączy klientów RPC z potrzebnymi im punktami końcowymi.",
    "bootRisk": {
     "reason": "Podstawowe składniki systemu Windows używają tej usługi do nawiązywania połączeń RPC. Jej wyłączenie może zakłócić uruchamianie systemu lub logowanie."
    }
   },
   "Dhcp": {
    "summary": "Pozostaw konfigurację adresów sieciowych dostępną.",
    "tradeoff": "Uzyskiwanie adresu i powiązana rejestracja w sieci mogą się nie udać.",
    "advice": "Nie wyłączaj jej w ramach optymalizacji, także w zwykle stabilnej sieci.",
    "description": "Pobiera ustawienia adresu IP z serwera DHCP i obsługuje rejestrację adresów sieciowych."
   },
   "Dnscache": {
    "summary": "Pozostaw buforowanie i rejestrację DNS dostępne.",
    "tradeoff": "Może to wpłynąć na rozpoznawanie nazw i zależne usługi.",
    "advice": "Pozostaw konfigurację domyślną.",
    "description": "Buforuje wyniki zapytań DNS i rejestruje nazwę komputera w DNS."
   },
   "DcomLaunch": {
    "summary": "Podstawowa aktywacja składników systemu Windows.",
    "tradeoff": "Składniki systemu Windows i aplikacje wymagające aktywacji COM/DCOM mogą się nie uruchomić.",
    "advice": "Nie wyłączaj.",
    "description": "Uruchamia składniki COM i DCOM używane przez system Windows i aplikacje.",
    "bootRisk": {
     "reason": "Uruchamianie systemu i logowanie zależą od składników systemu Windows korzystających z aktywacji COM/DCOM. Wyłączenie tej usługi może uniemożliwić uruchomienie tych składników."
    }
   },
   "EventLog": {
    "summary": "Pozostaw zapisy diagnostyczne i zapisy inspekcji dostępne.",
    "tradeoff": "Rozwiązywanie problemów i administracja zależne od dzienników mogą zawieść.",
    "advice": "Zamiast wyłączać usługę, ustaw czas przechowywania dzienników.",
    "description": "Rejestruje zdarzenia systemu Windows używane do diagnostyki, inspekcji zabezpieczeń i administracji.",
    "bootRisk": {
     "reason": "Gdy włączone są zasady zamykania systemu po niepowodzeniu inspekcji, system Windows może się zatrzymać, jeśli nie może rejestrować inspekcji zabezpieczeń. Te zasady są zwykle wyłączone.",
     "condition": "Gdy włączone są zasady zamykania systemu po niepowodzeniu inspekcji"
    }
   },
   "Schedule": {
    "summary": "Pozostaw zaplanowane zadania systemu Windows dostępne.",
    "tradeoff": "Zaplanowana konserwacja systemu Windows oraz zadania utworzone przez aplikacje lub użytkowników przestaną się uruchamiać.",
    "advice": "Nie wyłączaj.",
    "description": "Uruchamia zaplanowane zadania systemu Windows, zainstalowanego oprogramowania i użytkownika."
   },
   "Winmgmt": {
    "summary": "Pozostaw informacje o zarządzaniu systemem dostępne.",
    "tradeoff": "Narzędzia do zarządzania i oprogramowanie korzystające z WMI mogą przestać działać.",
    "advice": "Pozostaw włączoną dla lokalnych i zdalnych narzędzi do zarządzania. Usunięcie starszego narzędzia wiersza polecenia WMIC nie usuwa WMI ani nie sprawia, że ta usługa staje się zbędna.",
    "description": "Udostępnia interfejs WMI, którego narzędzia do zarządzania i aplikacje używają do odpytywania systemu Windows i zarządzania nim."
   },
   "CryptSvc": {
    "summary": "Pozostaw funkcje certyfikatów i podpisów dostępne.",
    "tradeoff": "Sprawdzanie podpisów, aktualizacje certyfikatów i zależne od nich instalacje mogą się nie udać.",
    "advice": "Nie wyłączaj.",
    "description": "Obsługuje weryfikację podpisów plików i zarządza zaufanymi certyfikatami głównymi."
   },
   "BDESVC": {
    "summary": "Pozostaw zarządzanie szyfrowaniem dysków dostępne.",
    "tradeoff": "Zarządzanie funkcją BitLocker i automatyczne odblokowywanie dysków mogą nie działać. Wyłączenie usługi nie odszyfrowuje zaszyfrowanego dysku.",
    "advice": "Nie wyłączaj.",
    "description": "Obsługuje zarządzanie szyfrowaniem dysków funkcją BitLocker, monity o odblokowanie i automatyczne odblokowywanie."
   },
   "VSS": {
    "summary": "Pozostaw infrastrukturę migawek dostępną.",
    "tradeoff": "Przywracanie systemu i Przywracanie do punktu w czasie korzystają z niej przy tworzeniu punktów przywracania, więc mogą przestać działać. Aplikacje do kopii zapasowych używające migawek VSS też mogą zawieść. Nie każda kopia zapasowa plików zależy od VSS; ręczne kopiowanie plików lub ich synchronizacja z chmurą zwykle nie zależą.",
    "advice": "Pozostaw ją dostępną, nawet jeśli jest obecnie zatrzymana.",
    "description": "Koordynuje migawki woluminów, nazywane też kopiami w tle, z których korzystają funkcje odzyskiwania systemu Windows, w tym Przywracanie systemu i Przywracanie do punktu w czasie. Oprogramowanie do kopii zapasowych może też używać jej do kopiowania plików, które są w użyciu."
   },
   "WlanSvc": {
    "summary": "Pozostaw konfigurację Wi-Fi dostępną.",
    "tradeoff": "System Windows może nie móc wykrywać sieci Wi-Fi ani łączyć się z nimi.",
    "advice": "Pozostaw, jeśli używasz Wi-Fi.",
    "description": "Wykrywa sieci Wi-Fi oraz zarządza połączeniami i profilami bezprzewodowymi."
   },
   "Audiosrv": {
    "summary": "Pozostaw dźwięk dostępny.",
    "tradeoff": "Odtwarzanie i nagrywanie dźwięku przez system Windows przestaną działać.",
    "advice": "Nie wyłączaj.",
    "description": "Zarządza odtwarzaniem i nagrywaniem dźwięku w systemie Windows."
   },
   "AudioEndpointBuilder": {
    "summary": "Pozostaw obsługę urządzeń audio dostępną.",
    "tradeoff": "System Windows może nie móc używać głośników, mikrofonów i innych punktów końcowych audio.",
    "advice": "Nie wyłączaj.",
    "description": "Zarządza punktami końcowymi audio, których system Windows używa dla urządzeń odtwarzających i nagrywających."
   },
   "PlugPlay": {
    "summary": "Pozostaw wykrywanie sprzętu dostępne.",
    "tradeoff": "Wykrywanie sprzętu i reagowanie na zmiany urządzeń mogą zawodzić lub działać niestabilnie.",
    "advice": "Nie wyłączaj.",
    "description": "Pomaga systemowi Windows wykrywać sprzęt i reagować na zmiany urządzeń."
   },
   "AppXSvc": {
    "summary": "Pozostaw wdrażanie aplikacji w pakietach dostępne.",
    "tradeoff": "Instalowanie, aktualizowanie i usuwanie aplikacji w pakietach może się nie udać.",
    "advice": "Pozostaw ustawienie domyślne.",
    "description": "Instaluje, aktualizuje i usuwa aplikacje Windows w pakietach, w tym aplikacje z Microsoft Store."
   },
   "VaultSvc": {
    "summary": "Pozostaw przechowywanie poświadczeń dostępne.",
    "tradeoff": "Aplikacje i składniki systemu Windows mogą nie móc pobrać zapisanych poświadczeń.",
    "advice": "Nie wyłączaj.",
    "description": "Przechowuje i pobiera zapisane poświadczenia dla aplikacji i składników systemu Windows."
   },
   "ProfSvc": {
    "summary": "Wymagana do ładowania i zwalniania profili użytkowników.",
    "tradeoff": "Jej wyłączenie może uniemożliwić logowanie i wylogowywanie.",
    "advice": "Pozostaw włączoną, aby system Windows mógł ładować i zwalniać profile użytkowników.",
    "description": "Ładuje profil użytkownika, którego system Windows potrzebuje do działającej sesji.",
    "bootRisk": {
     "reason": "Microsoft wyraźnie ostrzega, że zatrzymanie lub wyłączenie tej usługi może uniemożliwić użytkownikom logowanie i wylogowywanie."
    }
   },
   "nsi": {
    "summary": "Pozostaw sieć systemu Windows i jej zależności dostępne.",
    "tradeoff": "Jej zatrzymanie powoduje utratę łączności sieciowej; zależne usługi mogą przestać działać.",
    "advice": "Pozostaw włączoną. Logowanie lokalne i z użyciem poświadczeń z pamięci podręcznej może nadal działać, ale logowanie wymagające kontrolera domeny może się nie udać bez działającej sieci.",
    "description": "Dostarcza składnikom systemu Windows powiadomienia o zmianach w sieci.",
    "bootRisk": {
     "reason": "Utrata sieci może zablokować logowanie do domeny, gdy poświadczenia z pamięci podręcznej są niedostępne.",
     "condition": "Przy logowaniu wymagającym działającej sieci"
    }
   },
   "gpsvc": {
    "summary": "Pozostaw przetwarzanie zasad dostępne.",
    "tradeoff": "Stosowanie zasad i zależne od niego procesy zarządzania mogą zawodzić.",
    "advice": "Postępuj zgodnie z zasadami zarządzania urządzeniem; nie wyłączaj.",
    "description": "Stosuje ustawienia zasad grupy do komputera i jego użytkowników."
   },
   "TextInputManagementService": {
    "summary": "Pozostaw wprowadzanie tekstu dostępne przy każdej klawiaturze.",
    "tradeoff": "Metody wprowadzania i przełączanie języków pisania mogą nie działać.",
    "advice": "Zachowaj obecną konfigurację, nawet na komputerze stacjonarnym bez ekranu dotykowego. Niechciane funkcje wprowadzania wyłącz w ustawieniach pisania i języka.",
    "description": "Obsługuje wprowadzanie tekstu w systemie Windows, w tym edytory metody wprowadzania (IME).",
    "availability": "W obecnych kompilacjach szukaj tej nazwy. TabletInputService ma osobny wpis dla instalacji używających starszej nazwy usługi."
   },
   "NgcSvc": {
    "summary": "Pozostaw logowanie kodem PIN i kluczami dostępne.",
    "tradeoff": "Windows Hello i aplikacje korzystające z tych kluczy mogą nie móc Cię zalogować.",
    "advice": "Pozostaw włączoną. Metody logowania zmieniaj na stronie Ustawienia → Konta → Opcje logowania (Sign-in options).",
    "description": "Izoluje klucze uwierzytelniania używane przez Windows Hello i połączone tożsamości.",
    "bootRisk": {
     "reason": "Wyłączenie obsługi kluczy może sprawić, że metoda logowania Hello stanie się niedostępna. Aby skorzystać z innej metody logowania, musi ona być wcześniej skonfigurowana.",
     "condition": "Gdy logowanie opiera się na Windows Hello"
    }
   },
   "NgcCtnrSvc": {
    "summary": "Zachowaj dostęp do kluczy logowania.",
    "tradeoff": "Klucze Windows Hello i poświadczenia wirtualnej karty inteligentnej TPM mogą stać się niedostępne.",
    "advice": "Nie zmieniaj konfiguracji usługi. Kodem PIN i innymi metodami logowania zarządzaj w Ustawieniach.",
    "description": "Zarządza lokalnymi kluczami tożsamości używanymi do uwierzytelniania Windows Hello.",
    "bootRisk": {
     "reason": "Wyłączenie dostępu do kluczy tożsamości może zablokować metodę logowania, która od nich zależy.",
     "condition": "Gdy logowanie korzysta z Hello lub wirtualnej karty inteligentnej TPM"
    }
   },
   "WbioSrvc": {
    "summary": "Pozostaw logowanie biometryczne dostępne.",
    "tradeoff": "Logowanie odciskiem palca lub twarzą może przestać działać; wtedy potrzebna jest inna skonfigurowana metoda logowania.",
    "advice": "Niechcianą biometryczną metodę logowania usuń na stronie Ustawienia → Konta → Opcje logowania (Sign-in options). Pozostaw usługę dostępną.",
    "description": "Zapewnia obsługę odcisków palców i rozpoznawania twarzy dla systemu Windows i zgodnych aplikacji."
   },
   "wlidsvc": {
    "summary": "Zachowaj możliwość korzystania z konta Microsoft.",
    "tradeoff": "Logowanie kontem Microsoft i połączone aplikacje mogą nie działać.",
    "advice": "Sposób logowania wybierz w ustawieniach kont systemu Windows. Nie wyłączaj usługi uwierzytelniania, aby ograniczyć aktywność w tle.",
    "description": "Obsługuje uwierzytelnianie kontem Microsoft w systemie Windows i aplikacjach.",
    "bootRisk": {
     "reason": "Wyłączenie tej usługi może uniemożliwić uwierzytelnianie kontem Microsoft wymagane w takim procesie logowania. Konta lokalne korzystają z innej ścieżki uwierzytelniania.",
     "condition": "Gdy proces logowania wymaga konta Microsoft"
    }
   },
   "TokenBroker": {
    "summary": "Zachowaj działanie logowania do kont w aplikacjach.",
    "tradeoff": "Aplikacje mogą nie móc się zalogować lub wielokrotnie prosić o poświadczenia.",
    "advice": "Niechcianymi kontami zarządzaj na stronie Ustawienia → Konta. Pozostaw brokera tokenów dostępnego.",
    "description": "Pośredniczy w przekazywaniu tokenów kont na potrzeby logowania jednokrotnego w aplikacjach Windows."
   },
   "ClipSVC": {
    "summary": "Pozostaw sprawdzanie licencji aplikacji z Microsoft Store dostępne.",
    "tradeoff": "Licencjonowane aplikacje z Microsoft Store mogą nie działać poprawnie.",
    "advice": "Zachowaj obecny typ uruchomienia. Usługa uruchamiana tylko na żądanie nie musi działać bez przerwy.",
    "description": "Obsługuje licencjonowanie aplikacji z Microsoft Store."
   },
   "LicenseManager": {
    "summary": "Zachowaj dostęp do zawartości z Microsoft Store.",
    "tradeoff": "Aplikacje lub zawartość pobrane z Microsoft Store mogą przestać działać.",
    "advice": "Pozostaw usługę dostępną, nawet jeśli rzadko otwierasz Microsoft Store.",
    "description": "Zapewnia infrastrukturę licencjonowania używaną przez zawartość z Microsoft Store."
   },
   "InstallService": {
    "summary": "Pozostaw instalowanie i aktualizowanie aplikacji z Microsoft Store dostępne.",
    "tradeoff": "Instalowanie lub aktualizowanie aplikacji z Microsoft Store może się nie udać.",
    "advice": "Niechcianymi aplikacjami zarządzaj na stronie Zainstalowane aplikacje. Zachowaj obecne ustawienia infrastruktury Microsoft Store.",
    "description": "Obsługuje instalowanie aplikacji z Microsoft Store."
   },
   "msiserver": {
    "summary": "Pozostaw instalowanie i naprawianie aplikacji klasycznych dostępne.",
    "tradeoff": "Instalatory, naprawy, aktualizacje i odinstalowania korzystające z Windows Installer mogą się nie udać.",
    "advice": "Pozostaw tę usługę dostępną do uruchamiania na żądanie.",
    "description": "Instaluje i obsługuje oprogramowanie dystrybuowane jako pakiety MSI i MSP."
   },
   "sppsvc": {
    "summary": "Pozostaw aktywację i licencjonowanie systemu Windows dostępne.",
    "tradeoff": "System Windows lub licencjonowane aplikacje mogą zgłaszać problemy z aktywacją.",
    "advice": "Nie wyłączaj. Problemy z aktywacją rozwiązuj na stronie Ustawienia → System → Aktywacja.",
    "description": "Zarządza licencjami cyfrowymi systemu Windows i obsługiwanych aplikacji."
   },
   "Appinfo": {
    "summary": "Zachowaj działanie polecenia Uruchom jako administrator.",
    "tradeoff": "Podnoszenie uprawnień aplikacji i narzędzi administracyjnych może się nie udać.",
    "advice": "Pozostaw usługę dostępną. Jest częścią zwykłego procesu podnoszenia uprawnień w systemie Windows.",
    "description": "Pozwala aplikacjom uruchamiać się z zatwierdzonymi uprawnieniami administratora."
   },
   "StateRepository": {
    "summary": "Nie naruszaj infrastruktury aplikacji Windows.",
    "tradeoff": "Aplikacje w pakietach i składniki systemu Windows mogą działać nieprawidłowo.",
    "advice": "Pozostaw obecne ustawienie domyślne. Źle działającą aplikację diagnozuj bezpośrednio.",
    "description": "Przechowuje stan używany przez model aplikacji Windows."
   },
   "UserManager": {
    "summary": "Pozostaw obsługę sesji użytkowników dostępną.",
    "tradeoff": "Aplikacje i funkcje sesji użytkownika mogą przestać działać poprawnie.",
    "advice": "Nie wyłączaj tej podstawowej usługi.",
    "description": "Zapewnia obsługę interakcji użytkownika z systemem Windows w czasie działania."
   },
   "LSM": {
    "summary": "Zachowaj działanie sesji pulpitu.",
    "tradeoff": "Tworzenie sesji użytkowników lub zarządzanie nimi może się nie udać.",
    "advice": "Nie wyłączaj, także na komputerze, który nigdy nie korzysta z Pulpitu zdalnego.",
    "description": "Zarządza lokalnymi sesjami użytkowników systemu Windows.",
    "bootRisk": {
     "reason": "Lokalne logowanie do systemu Windows wymaga działającej sesji użytkownika. Wyłączenie menedżera sesji może zakłócić logowanie i tworzenie sesji."
    }
   },
   "SamSs": {
    "summary": "Pozostaw infrastrukturę kont dostępną.",
    "tradeoff": "Usługi zależne od kont mogą się nie uruchomić.",
    "advice": "Nie wyłączaj tej podstawowej usługi kont.",
    "description": "Udostępnia usługom systemu Windows informacje o zabezpieczeniach kont lokalnych.",
    "bootRisk": {
     "reason": "Uwierzytelnianie w systemie Windows i zależne usługi korzystają z infrastruktury kont lokalnych. Jej wyłączenie może zakłócić uruchamianie systemu lub logowanie."
    }
   },
   "UsoSvc": {
    "summary": "Harmonogramem aktualizacji zarządzaj w Ustawieniach.",
    "tradeoff": "Aktualizacje mogą przestać być poprawnie planowane lub instalowane.",
    "advice": "Użyj godzin aktywnego użytkowania lub obsługiwanego tymczasowego wstrzymania aktualizacji. Pozostaw usługę dostępną.",
    "description": "Koordynuje wyszukiwanie, pobieranie i instalowanie aktualizacji Windows Update oraz ponowne uruchomienia."
   },
   "TrustedInstaller": {
    "summary": "Pozostaw obsługę serwisową systemu Windows dostępną.",
    "tradeoff": "Aktualizacje systemu Windows i zmiany funkcji opcjonalnych mogą się nie udać.",
    "advice": "Nie zmieniaj jej konfiguracji. Przed ponownym uruchomieniem lub zamknięciem komputera poczekaj na zakończenie obsługi serwisowej.",
    "description": "Instaluje i usuwa aktualizacje systemu Windows oraz składniki opcjonalne."
   },
   "WaaSMedicSvc": {
    "summary": "Pozostaw naprawę aktualizacji dostępną.",
    "tradeoff": "System Windows może nie móc naprawić części swojej infrastruktury aktualizacji.",
    "advice": "Nie zmieniaj uprawnień ani wpisów rejestru, aby wymusić wyłączenie tej usługi. Użyj rozwiązywania problemów z Windows Update.",
    "description": "Obsługuje przywracanie składników Windows Update.",
    "availability": "Jej obecność i konfiguracja zależą od kompilacji systemu Windows i składników obsługi serwisowej."
   },
   "SecurityHealthService": {
    "summary": "Zachowaj dokładność stanu zabezpieczeń i ostrzeżeń.",
    "tradeoff": "Zabezpieczenia Windows mogą wyświetlać niepełne lub nieaktualne informacje.",
    "advice": "Pozostaw dostępną, nawet jeśli używasz innego programu antywirusowego. Ta usługa jest oddzielona od silnika antywirusowego.",
    "description": "Dostarcza informacje o ochronie i kondycji urządzenia do aplikacji Zabezpieczenia Windows."
   },
   "wscsvc": {
    "summary": "Pozostaw monitorowanie dostawców zabezpieczeń dostępne.",
    "tradeoff": "Stan zabezpieczeń może stać się niedokładny, także po zmianie programu antywirusowego.",
    "advice": "Pozostaw włączoną. Usunięcie tej usługi nie jest obsługiwanym sposobem zmiany programu antywirusowego.",
    "description": "Śledzi zarejestrowane programy antywirusowe, zapory i innych dostawców zabezpieczeń."
   },
   "DPS": {
    "summary": "Pozostaw diagnostykę systemu Windows dostępną.",
    "tradeoff": "Diagnostyka zależna od tej usługi może przestać działać.",
    "advice": "Nie traktuj każdej usługi ze słowem „diagnostic” w nazwie jak DiagTrack. Pozostaw tę usługę rozwiązywania problemów dostępną.",
    "description": "Koordynuje wykrywanie i rozwiązywanie problemów ze składnikami systemu Windows."
   },
   "WdiServiceHost": {
    "summary": "Pozostaw zadania rozwiązywania problemów dostępne.",
    "tradeoff": "Diagnostyka wymagająca tego hosta może się nie udać.",
    "advice": "Pozostaw obecny typ uruchomienia. Usługa może działać tylko wtedy, gdy potrzebuje jej zadanie diagnostyczne.",
    "description": "Hostuje zadania diagnostyczne działające na koncie Usługa lokalna (Local Service)."
   },
   "WdiSystemHost": {
    "summary": "Pozostaw diagnostykę systemu dostępną.",
    "tradeoff": "Diagnostyka wymagająca dostępu na poziomie systemu może się nie udać.",
    "advice": "Zachowaj jej obecną konfigurację. To coś innego niż udostępnianie opcjonalnych danych diagnostycznych.",
    "description": "Hostuje zadania diagnostyczne wymagające konta System lokalny (Local System)."
   },
   "W32Time": {
    "summary": "Utrzymuj synchronizację zegara systemowego.",
    "tradeoff": "Rozbieżność zegara może zakłócać uwierzytelnianie i aplikacje zależne od czasu.",
    "advice": "Użyj strony Ustawienia → Czas i język → Data i godzina. Pozostaw usługę czasu dostępną.",
    "description": "Synchronizuje zegar komputera ze skonfigurowanym źródłem czasu."
   },
   "Power": {
    "summary": "Zachowaj działanie zarządzania energią.",
    "tradeoff": "Zarządzanie energią w systemie Windows może działać nieprawidłowo.",
    "advice": "Tryb zasilania i ustawienia uśpienia zmieniaj na stronie Ustawienia → System → Zasilanie i bateria.",
    "description": "Stosuje zasady zasilania i powiadamia składniki o zmianach zasilania."
   },
   "WinHttpAutoProxySvc": {
    "summary": "Zachowaj działanie systemowych żądań internetowych w sieciach zarządzanych.",
    "tradeoff": "System Windows lub aplikacje zależne od automatycznej konfiguracji serwera proxy mogą stracić łączność.",
    "advice": "Konfiguracją serwera proxy zarządzaj na stronie Ustawienia → Sieć i Internet → Serwer proxy. Pozostaw usługę dostępną.",
    "description": "Znajduje ustawienia serwera proxy dla aplikacji korzystających z WinHTTP."
   },
   "iphlpsvc": {
    "summary": "Pozostaw zależne funkcje sieciowe dostępne.",
    "tradeoff": "Funkcje takie jak Teredo, IP-HTTPS lub skonfigurowane przekierowanie portów mogą nie działać.",
    "advice": "Zachowaj obecną konfigurację, chyba że rozwiązujesz problem z konkretną funkcją sieciową.",
    "description": "Obsługuje funkcje sieci IP, w tym tunele przejściowe i przekierowanie portów."
   },
   "LanmanWorkstation": {
    "summary": "Zachowaj dostęp do folderów udostępnionych i urządzeń NAS.",
    "tradeoff": "Połączenia z udziałami SMB i zależne aplikacje mogą przestać działać.",
    "advice": "Pozostaw włączoną. Nazwa nie oznacza, że jest potrzebna tylko na komputerze firmowym.",
    "description": "Łączy ten komputer z udziałami plików SMB i innymi zasobami SMB."
   },
   "LanmanServer": {
    "summary": "Udostępnianiem zarządzaj w jego własnych ustawieniach.",
    "tradeoff": "Inne komputery mogą stracić dostęp do udziałów tego komputera; może to też dotyczyć aplikacji korzystających z potoków nazwanych.",
    "advice": "Do kontrolowania udostępniania używaj strony Zaawansowane ustawienia udostępniania. Nie zakładaj, że komputer stacjonarny nigdy nie potrzebuje usługi o nazwie Server.",
    "description": "Obsługuje udostępnianie plików, drukarek i potoków nazwanych z tego komputera."
   },
   "Netlogon": {
    "summary": "Pozostaw uwierzytelnianie w domenie dostępne.",
    "tradeoff": "Uwierzytelnianie w domenie i dostęp do zasobów domeny mogą się nie udać.",
    "advice": "Na komputerze służbowym zachowaj skonfigurowany stan. Na domowym komputerze, który nie jest przyłączony do domeny, nie zmieniaj jej nieaktywnej konfiguracji.",
    "description": "Utrzymuje komunikację uwierzytelniania z domeną Active Directory.",
    "bootRisk": {
     "reason": "Wyłączenie uwierzytelniania w domenie może zablokować logowanie, gdy nie można użyć poświadczeń z pamięci podręcznej.",
     "condition": "Przy logowaniu do domeny wymagającym kontrolera domeny"
    }
   },
   "RasMan": {
    "summary": "Pozostaw obsługę połączeń VPN dostępną.",
    "tradeoff": "Połączenia VPN korzystające ze stosu dostępu zdalnego systemu Windows mogą się nie udać.",
    "advice": "Niechciany profil VPN usuń w Ustawieniach. Pozostaw usługę, jeśli może jej potrzebować jakakolwiek sieć VPN lub połączenie służbowe.",
    "description": "Zarządza połączeniami VPN i telefonicznymi w systemie Windows."
   },
   "EapHost": {
    "summary": "Zachowaj działanie uwierzytelniania sieciowego.",
    "tradeoff": "Logowanie do firmowej sieci Wi-Fi, uwierzytelnianej sieci Ethernet lub VPN może się nie udać.",
    "advice": "Pozostaw dostępną, zwłaszcza w sieciach firmowych lub szkolnych. Zapisana sieć może nadal wymagać tej usługi.",
    "description": "Udostępnia metody uwierzytelniania używane przez chronione sieci i sieci VPN."
   },
   "Wcmsvc": {
    "summary": "Zachowaj automatyczne łączenie z sieciami.",
    "tradeoff": "Automatyczne połączenia i obsługa zasad sieciowych mogą zostać zakłócone.",
    "advice": "Preferencjami Wi-Fi i sieci zarządzaj w Ustawieniach. Pozostaw usługę dostępną.",
    "description": "Zarządza wyborem połączenia spośród dostępnych sieci."
   },
   "netprofm": {
    "summary": "Zachowaj działanie identyfikacji sieci.",
    "tradeoff": "Aplikacje mogą otrzymywać błędny stan sieci lub pomijać zmiany łączności.",
    "advice": "Pozostaw tę usługę włączoną. Zamiast wyłączać wykrywanie łączności, rozwiąż problem z połączeniem.",
    "description": "Śledzi profile połączonych sieci i obsługuje wykrywanie stanu łączności w Windows 11."
   },
   "NlaSvc": {
    "summary": "Pozostaw obsługę rozpoznawania sieci dostępną.",
    "tradeoff": "Zależne składniki mogą tracić informacje o zmianach w sieci.",
    "advice": "Zachowaj konfigurację dostarczoną z Twoją kompilacją systemu Windows.",
    "description": "Dostarcza informacje o konfiguracji sieci składnikom systemu Windows i aplikacjom.",
    "availability": "W Windows 11 Network Connectivity Status Indicator (NCSI) działa w Network List Manager, a nie w tej usłudze. Nie kopiuj starszych instrukcji optymalizacji systemu Windows bez sprawdzenia kompilacji."
   },
   "swprv": {
    "summary": "Pozostaw kopie zapasowe oparte na migawkach dostępne.",
    "tradeoff": "Operacje tworzenia kopii zapasowych lub odzyskiwania wymagające tego dostawcy migawek mogą się nie udać.",
    "advice": "Pozostaw dostępne zarówno tę usługę, jak i VSS. To, że dostawca uruchamiany na żądanie jest zatrzymany, nie dowodzi, że nie jest używany.",
    "description": "Udostępnia programowe migawki systemu Windows używane przez Volume Shadow Copy."
   },
   "fhsvc": {
    "summary": "Pozostaw kopie zapasowe wersji plików dostępne.",
    "tradeoff": "Kopie zapasowe Historii plików mogą przestać się wykonywać.",
    "advice": "Historią plików zarządzaj w obszarze Panel sterowania → System i zabezpieczenia → Historia plików. Pozostaw jej usługę dostępną dla istniejących kopii zapasowych.",
    "description": "Obsługuje kopie zapasowe plików osobistych w Historii plików."
   },
   "SDRSVC": {
    "summary": "Zachowaj działanie istniejących procesów tworzenia i przywracania kopii zapasowych.",
    "tradeoff": "Operacje tworzenia lub przywracania kopii zapasowych korzystające z tej funkcji mogą się nie udać.",
    "advice": "Pozostaw dostępną, jeśli używasz funkcji Kopia zapasowa i przywracanie (Backup and Restore). Jest ona niezależna od nowszej aplikacji Kopia zapasowa systemu Windows i kopii zapasowej ustawień w chmurze.",
    "description": "Obsługuje starszą funkcję Kopia zapasowa i przywracanie (Backup and Restore) w Panelu sterowania.",
    "availability": "Starszy składnik kopii zapasowych; nie zakładaj, że kontroluje każdą metodę tworzenia kopii zapasowych w systemie Windows."
   },
   "wbengine": {
    "summary": "Zachowaj możliwość korzystania z istniejących kopii zapasowych obrazów.",
    "tradeoff": "Tworzenie lub przywracanie kopii zapasowej obrazu zależne od tego mechanizmu może się nie udać.",
    "advice": "Pozostaw dostępną dla funkcji Kopia zapasowa i przywracanie (Backup and Restore). Harmonogramem kopii zapasowych zarządzaj w narzędziu do tworzenia kopii, zamiast wyłączać jego mechanizm.",
    "description": "Wykonuje operacje tworzenia kopii zapasowych i odzyskiwania na poziomie bloków dla Kopii zapasowej systemu Windows."
   },
   "PrintNotify": {
    "summary": "Można wyłączyć, jeśli nigdy nie używasz funkcji drukowania.",
    "tradeoff": "Rozszerzenia drukarek, niestandardowe okna dialogowe i powiadomienia o drukowaniu mogą przestać działać.",
    "advice": "Pozostaw ją przy drukowaniu fizycznym lub wirtualnym. Jeśli w ogóle nie drukujesz, przejrzyj ją razem z usługą Print Spooler.",
    "description": "Wyświetla okna dialogowe właściwe dla drukarki i powiadomienia o drukowaniu."
   },
   "XboxGipSvc": {
    "summary": "Rozważ wyłączenie tylko wtedy, gdy nie używasz akcesoriów Xbox.",
    "tradeoff": "Funkcje akcesoriów Xbox lub zarządzanie nimi mogą przestać działać.",
    "advice": "Pozostaw ją dla kontrolerów i akcesoriów Xbox używanych z dowolnym programem uruchamiającym gry, w tym Steam. Ta usługa może być potrzebna nawet bez konsoli Xbox.",
    "description": "Zarządza podłączonymi akcesoriami Xbox."
   },
   "XblAuthManager": {
    "summary": "Rozważ wyłączenie tylko wtedy, gdy żadna aplikacja nie korzysta z logowania Xbox.",
    "tradeoff": "Gry i aplikacje korzystające z Xbox mogą nie móc się uwierzytelnić.",
    "advice": "Pozostaw ją dla Game Pass i każdej gry korzystającej z logowania Xbox, także gier zainstalowanych poza aplikacją Xbox.",
    "description": "Uwierzytelnia aplikacje i gry korzystające z logowania do sieci Xbox.",
    "availability": "Zainstalowane składniki są różne. Skrypt z kreatora pomija usługę, której nie ma na Twoim komputerze."
   },
   "XblGameSave": {
    "summary": "Rozważ wyłączenie tylko wtedy, gdy nie używasz zapisów gier w chmurze Xbox.",
    "tradeoff": "Gry, których to dotyczy, przestaną przesyłać i pobierać zapisy przez tę usługę.",
    "advice": "Pozostaw ją, jeśli używasz zapisów w chmurze lub grasz na różnych urządzeniach. Jej wyłączenie nie jest kopią zapasową zapisanych gier.",
    "description": "Synchronizuje zapisy w chmurze dla gier korzystających z tej usługi zapisów Xbox."
   },
   "XboxNetApiSvc": {
    "summary": "Rozważ wyłączenie tylko wtedy, gdy nie używasz funkcji sieciowych Xbox.",
    "tradeoff": "Funkcje sieciowe lub gra wieloosobowa w grach, których to dotyczy, mogą nie działać.",
    "advice": "Pozostaw ją dla gier korzystających z sieci Xbox, niezależnie od tego, gdzie zostały kupione.",
    "description": "Obsługuje aplikacje korzystające z interfejsów API sieci Xbox w systemie Windows."
   },
   "FontCache": {
    "summary": "Zachowaj pamięć podręczną, która pomaga aplikacjom z dużą ilością tekstu.",
    "tradeoff": "Aplikacje mogą częściej odbudowywać dane czcionek i działać wolniej.",
    "advice": "Pozostaw włączoną. Usunięcie usługi pamięci podręcznej nie poprawia automatycznie wydajności.",
    "description": "Przechowuje w pamięci podręcznej często używane dane czcionek dla aplikacji."
   },
   "PcaSvc": {
    "summary": "Pozostaw pomoc dla starszych aplikacji dostępną.",
    "tradeoff": "Wykrywanie problemów ze zgodnością i powiadomienia o nich mogą przestać działać.",
    "advice": "Zamiast wyłączać usługę dla całego systemu, zmień ustawienia zgodności konkretnej aplikacji.",
    "description": "Wykrywa znane problemy ze zgodnością podczas działania programów klasycznych."
   },
   "camsvc": {
    "summary": "Kontroluj uprawnienia poszczególnych aplikacji.",
    "tradeoff": "Wyłączenie brokera może zepsuć dostęp aplikacji, zamiast zapewnić niezawodną ochronę prywatności.",
    "advice": "Przejrzyj sekcję Uprawnienia aplikacji na stronie Ustawienia → Prywatność i zabezpieczenia. Pozostaw usługę, która stosuje te kontrole dostępu.",
    "description": "Sprawdza dostęp aplikacji do funkcji takich jak kamera i mikrofon."
   },
   "FrameServer": {
    "summary": "Ogranicz dostęp do kamery w ustawieniach prywatności.",
    "tradeoff": "Po wyłączeniu usługi aplikacje aparatu, rozmowy wideo lub współdzielony dostęp do kamery mogą nie działać.",
    "advice": "Wyłącz dostęp do kamery dla niechcianych aplikacji na stronie Ustawienia → Prywatność i zabezpieczenia → Kamera. Pozostaw usługę dla aplikacji, którym na to zezwalasz.",
    "description": "Udostępnia klatki obrazu z kamery zgodnym aplikacjom."
   },
   "hidserv": {
    "summary": "Pozostaw skróty sprzętowe dostępne.",
    "tradeoff": "Klawisze głośności, przyciski multimediów lub inne skróty urządzeń mogą przestać działać.",
    "advice": "Pozostaw dostępną, nawet jeśli zwykłe pisanie i ruch myszy działają bez niej.",
    "description": "Obsługuje przyciski specjalne na klawiaturach, pilotach i innych urządzeniach wejściowych."
   },
   "DeviceAssociationService": {
    "summary": "Pozostaw parowanie urządzeń dostępne.",
    "tradeoff": "Parowanie lub konfigurowanie urządzeń może się nie udać.",
    "advice": "Niechciane urządzenia usuń na stronie Ustawienia → Bluetooth i urządzenia. Nie naruszaj obsługi kojarzenia urządzeń.",
    "description": "Kojarzy urządzenia przewodowe i bezprzewodowe z systemem Windows."
   },
   "DeviceInstall": {
    "summary": "Zachowaj działanie instalacji urządzeń.",
    "tradeoff": "Nowy sprzęt lub zmienione urządzenia mogą nie zainstalować się poprawnie.",
    "advice": "Pozostaw dostępną. Niezmieniona konfiguracja sprzętu nie sprawia, że instalacja urządzeń jest zbędna.",
    "description": "Pomaga systemowi Windows rozpoznawać i instalować zmiany urządzeń."
   },
   "WpnService": {
    "summary": "Niechciane powiadomienia kontroluj osobno dla każdej aplikacji.",
    "tradeoff": "Aplikacje mogą przestać otrzymywać powiadomienia push.",
    "advice": "Użyj strony Ustawienia → System → Powiadomienia. Pozostaw dostępne tę usługę i usługę powiadomień użytkownika.",
    "description": "Utrzymuje systemowe połączenie używane do powiadomień push systemu Windows."
   },
   "SCardSvr": {
    "summary": "Pozostaw uwierzytelnianie kartą inteligentną dostępne.",
    "tradeoff": "Logowanie kartą inteligentną, certyfikaty lub aplikacje mogą przestać działać.",
    "advice": "Pozostaw dostępną na komputerach zarządzanych i w systemach korzystających z kart inteligentnych. Nie decyduj o wyłączeniu tylko na podstawie tego, czy karta jest teraz włożona.",
    "description": "Zarządza komunikacją z czytnikami kart inteligentnych i kartami.",
    "bootRisk": {
     "reason": "Nie można użyć wymaganej karty inteligentnej, jeśli system Windows nie może się z nią komunikować.",
     "condition": "Gdy logowanie wymaga karty inteligentnej"
    }
   },
   "ScDeviceEnum": {
    "summary": "Pozostaw wykrywanie czytników kart inteligentnych dostępne.",
    "tradeoff": "Aplikacje korzystające z tej metody wykrywania mogą przestać znajdować czytniki.",
    "advice": "Pozostaw skonfigurowane ustawienie domyślne, zwłaszcza tam, gdzie organizacja wymaga kart inteligentnych.",
    "description": "Udostępnia czytniki kart inteligentnych obsługiwanym aplikacjom Windows."
   },
   "SCPolicySvc": {
    "summary": "Zachowaj zasady blokowania sesji Twojej organizacji.",
    "tradeoff": "Po wyjęciu karty pulpit może przestać się blokować lub wylogowywać zgodnie z wymaganiami.",
    "advice": "Przestrzegaj skonfigurowanych zasad kart inteligentnych. Nie wyłączaj zabezpieczenia sesji.",
    "description": "Wykonuje skonfigurowaną akcję po wyjęciu karty inteligentnej."
   },
   "EFS": {
    "summary": "Zachowaj dostęp do zaszyfrowanych plików.",
    "tradeoff": "Aplikacje mogą nie mieć dostępu do plików zaszyfrowanych za pomocą EFS.",
    "advice": "Pozostaw usługę i zachowaj certyfikat szyfrowania oraz kopię zapasową klucza prywatnego. EFS to coś innego niż szyfrowanie dysków funkcją BitLocker.",
    "description": "Obsługuje szyfrowanie poszczególnych plików NTFS za pomocą certyfikatów."
   },
   "StorSvc": {
    "summary": "Pozostaw ustawienia pamięci dostępne.",
    "tradeoff": "Ustawienia pamięci i zależne funkcje mogą nie działać poprawnie.",
    "advice": "Czyszczeniem zarządzaj na stronie Ustawienia → System → Pamięć. Pozostaw tę usługę dostępną.",
    "description": "Obsługuje ustawienia pamięci systemu Windows i funkcje zarządzania pamięcią masową."
   },
   "DusmSvc": {
    "summary": "Zachowaj działanie ustawień zużycia danych sieciowych.",
    "tradeoff": "Raportowanie zużycia i zależne funkcje zarządzania danymi mogą przestać działać.",
    "advice": "Połączenie taryfowe lub limity danych skonfiguruj na stronie Ustawienia → Sieć i Internet. Pozostaw usługę dostępną.",
    "description": "Śledzi zużycie danych sieciowych i obsługuje limity danych oraz połączenia taryfowe."
   },
   "icssvc": {
    "summary": "Nieużywany hotspot wyłącz w Ustawieniach.",
    "tradeoff": "Gdy hotspot jest wyłączony, inne urządzenia nie mogą z niego korzystać.",
    "advice": "Użyj strony Ustawienia → Sieć i Internet → Hotspot mobilny. Pozostaw usługę dostępną, aby móc później włączyć tę funkcję.",
    "description": "Obsługuje udostępnianie połączenia internetowego tego komputera przez Hotspot mobilny."
   },
   "AarSvc": {
    "summary": "Pozostaw dostępną dla aplikacji, które jej potrzebują.",
    "tradeoff": "Zależne aplikacje agentów mogą przestać się aktywować.",
    "advice": "Zamiast edytować szablon usługi użytkownika, zmień uprawnienia niechcianej aplikacji lub ją odinstaluj.",
    "description": "Aktywuje obsługiwane aplikacje agentów konwersacyjnych."
   },
   "CloudBackupRestoreSvc": {
    "summary": "Wybierz, co system Windows ma zapamiętywać.",
    "tradeoff": "Kopie zapasowe wybranych ustawień lub stanu aplikacji mogą przestać być tworzone.",
    "advice": "Przejrzyj stronę Kopia zapasowa systemu Windows w obszarze Ustawienia → Konta. Pozostaw szablon usługi dostępny dla opcji kopii zapasowej, które zachowujesz.",
    "description": "Obsługuje tworzenie w chmurze kopii zapasowych stanu aplikacji i ustawień."
   },
   "ConsentUxUserSvc": {
    "summary": "Zachowaj działanie monitów o uprawnienia.",
    "tradeoff": "Prośby aplikacji o zgodę mogą nie działać.",
    "advice": "Korzystaj z uprawnień poszczególnych aplikacji. Wyłączenie interfejsu zgody nie jest ustawieniem prywatności.",
    "description": "Wyświetla prośby o zgodę na dostęp aplikacji do poufnych zasobów."
   },
   "CredentialEnrollmentManagerUserSvc": {
    "summary": "Pozostaw rejestrowanie poświadczeń dostępne.",
    "tradeoff": "Zależne procesy uwierzytelniania mogą się nie udać.",
    "advice": "Nie zmieniaj szablonu usługi użytkownika.",
    "description": "Obsługuje bezpieczne przechowywanie i pobieranie poświadczeń oraz tokenów."
   },
   "DeviceAssociationBrokerSvc": {
    "summary": "Pozostaw parowanie z poziomu aplikacji dostępne.",
    "tradeoff": "Aplikacje mogą nie móc sparować urządzeń.",
    "advice": "Sparowanymi urządzeniami zarządzaj na stronie Bluetooth i urządzenia, zamiast wyłączać tego brokera.",
    "description": "Obsługuje prośby aplikacji o sparowanie urządzeń i sprawdzenie dostępu."
   },
   "DevicePickerUserSvc": {
    "summary": "Zachowaj działanie wyboru urządzeń.",
    "tradeoff": "Wybór ekranu bezprzewodowego lub urządzenia multimedialnego może się nie udać.",
    "advice": "Pozostaw szablon usługi użytkownika dostępny do przesyłania obrazu i wyboru urządzeń.",
    "description": "Obsługuje wybieranie ekranów bezprzewodowych i urządzeń multimedialnych."
   },
   "DevicesFlowUserSvc": {
    "summary": "Pozostaw interfejs łączenia dostępny.",
    "tradeoff": "Konfigurowanie Bluetooth lub ekranu bezprzewodowego może się nie udać.",
    "advice": "Nieużywane funkcje sprzętu wyłącz w Ustawieniach.",
    "description": "Obsługuje interfejs łączenia urządzeń Bluetooth i ekranów bezprzewodowych."
   },
   "MessagingService": {
    "summary": "Pozostaw dostępną dla aplikacji do przesyłania wiadomości.",
    "tradeoff": "Zależne funkcje wiadomości mogą przestać działać.",
    "advice": "Zamiast zmieniać szablon usługi użytkownika, zarządzaj uprawnieniami lub usuń nieużywane aplikacje do wiadomości.",
    "description": "Obsługuje wiadomości tekstowe w zgodnych aplikacjach."
   },
   "NPSMSvc": {
    "summary": "Zachowaj działanie integracji sesji multimediów.",
    "tradeoff": "Sterowanie sesjami odtwarzania może działać nieprawidłowo.",
    "advice": "Pozostaw dostępną dla aplikacji muzycznych, wideo i innych aplikacji multimedialnych.",
    "description": "Zarządza aktywnymi sesjami multimediów."
   },
   "P9RdrService": {
    "summary": "Zachowaj działanie dostępu do plików WSL.",
    "tradeoff": "Operacje udostępniania plików w WSL mogą się nie udać.",
    "advice": "Jeśli WSL jest zainstalowany, pozostaw szablon dostępny. Nieużywane składniki WSL usuwaj w obsługiwanych ustawieniach funkcji.",
    "description": "Uruchamia serwery plików Plan 9 dla Windows Subsystem for Linux."
   },
   "PenService": {
    "summary": "Pozostaw skróty pióra dostępne.",
    "tradeoff": "Skonfigurowane akcje przycisku pióra przestaną działać.",
    "advice": "Skróty zmieniaj na stronie Ustawienia → Bluetooth i urządzenia → Pióro i Windows Ink (Pen & Windows Ink).",
    "description": "Obsługuje akcje przycisku skrótu pióra."
   },
   "UdkUserSvc": {
    "summary": "Pozostaw integrację z powłoką dostępną.",
    "tradeoff": "Zależne interfejsy systemu Windows mogą działać nieprawidłowo.",
    "advice": "Zachowaj obecną konfigurację szablonu usługi użytkownika.",
    "description": "Koordynuje elementy powłoki systemu Windows."
   },
   "webthreatdefusersvc": {
    "summary": "Pozostaw ostrzeżenia o kradzieży poświadczeń dostępne.",
    "tradeoff": "Ostrzeżenia chroniące poświadczenia mogą przestać się pojawiać.",
    "advice": "Pozostaw tę usługę zabezpieczeń dostępną.",
    "description": "Ostrzega przed próbami przejęcia Twoich poświadczeń."
   },
   "stisvc": {
    "summary": "Można wyłączyć, jeśli nigdy nie skanujesz ani nie importujesz obrazów przez WIA.",
    "tradeoff": "Skanery zgodne z WIA i aplikacje do importu obrazów mogą przestać pobierać obrazy lub wykrywać swoje urządzenia.",
    "advice": "Pozostaw ją dla skanerów, skanowania na drukarkach wielofunkcyjnych i importu z aparatów przez WIA. Zaznacz opcję dotyczącą skanera tylko wtedy, gdy nie korzystasz z żadnego z tych zastosowań.",
    "description": "Łączy aplikacje do obsługi obrazów ze skanerami i aparatami zgodnymi z WIA."
   },
   "WiaRpc": {
    "summary": "Można wyłączyć, jeśli nie używasz zdarzeń urządzeń obrazów nieruchomych.",
    "tradeoff": "Aplikacje powiązane ze zdarzeniami skanera lub aparatu mogą przestać otwierać się automatycznie.",
    "advice": "Pozostaw ją, jeśli przy pozyskiwaniu obrazów aplikacje uruchamiają się na podstawie zdarzeń urządzeń. Jeśli nigdy nie skanujesz ani nie importujesz obrazów, przejrzyj ją razem z usługą Windows Image Acquisition.",
    "description": "Uruchamia aplikacje zarejestrowane do obsługi zdarzeń pozyskiwania obrazów nieruchomych."
   },
   "Sysmon": {
    "summary": "Zachowaj istniejącą konfigurację monitorowania zabezpieczeń.",
    "tradeoff": "Zatrzymanie zainstalowanej usługi Sysmon przerywa zbieranie zdarzeń zabezpieczeń i może pozostawić narzędzia monitorujące bez oczekiwanych zapisów.",
    "advice": "Jeśli nie jest zainstalowana ani włączona, pozostaw ją w tym stanie, chyba że potrzebujesz jej rejestrowania. Jeśli skonfigurowała ją Twoja organizacja lub Ty, zarządzaj jej filtrami zdarzeń przez obsługiwaną konfigurację Sysmon. Pozostaw usługę Windows Event Log dostępną. Wbudowanego i autonomicznego Sysmon nie można włączyć jednocześnie.",
    "description": "Rejestruje szczegółowe zdarzenia dotyczące procesów, sieci i inne skonfigurowane zdarzenia systemowe w dzienniku zdarzeń systemu Windows na potrzeby analizy bezpieczeństwa.",
    "availability": "Wbudowana funkcja opcjonalna w obsługiwanych kompilacjach Windows 11, domyślnie wyłączona. Włączenie funkcji i zainstalowanie usługi to osobne kroki. Autonomiczne instalacje Sysinternals mogą używać innej nazwy usługi.",
    "recommendation": "Pozostaw, jeśli skonfigurowana"
   },
   "MidiSrv": {
    "summary": "Zachowaj działanie aplikacji i urządzeń MIDI.",
    "tradeoff": "Oprogramowanie muzyczne, kontrolery MIDI i wirtualne połączenia MIDI korzystające z tej usługi mogą przestać się komunikować.",
    "advice": "Zachowaj obecną konfigurację, także wtedy, gdy oprogramowanie muzyczne używa wirtualnych portów MIDI bez fizycznego instrumentu. Ta usługa obsługuje MIDI 1.0 oraz nowsze funkcje MIDI. Nie zastępuje usługi Windows Audio.",
    "description": "Łączy zgodne aplikacje muzyczne i urządzenia MIDI oraz przekazuje między nimi komunikaty MIDI.",
    "availability": "Udostępnianie Windows MIDI Services w obsługiwanych wersjach Windows 11 rozpoczęło się w 2026 roku. Dostępność i obsługiwane metody transmisji zależą od zainstalowanych aktualizacji."
   },
   "AppReadiness": {
    "summary": "Pozostaw przygotowywanie aplikacji dostępne.",
    "tradeoff": "Aplikacje mogą nie zakończyć przygotowania do pierwszego użycia po zalogowaniu lub instalacji.",
    "advice": "Zachowaj jej obecną konfigurację. Usługi uruchamianej tylko w razie potrzeby nie trzeba wyłączać, aby pozostała bezczynna.",
    "description": "Przygotowuje aplikacje do pierwszego użycia, gdy użytkownik się loguje lub instalowane są nowe aplikacje."
   },
   "AppIDSvc": {
    "summary": "Zachowaj egzekwowanie kontroli aplikacji.",
    "tradeoff": "Reguły AppLocker mogą przestać być egzekwowane.",
    "advice": "Zachowaj obecną konfigurację usługi, zwłaszcza na komputerach korzystających z AppLocker. Reguły kontroli aplikacji zmieniaj w odpowiednich zasadach, zamiast wyłączać tę usługę.",
    "description": "Ustala i weryfikuje tożsamość aplikacji na potrzeby AppLocker."
   },
   "BrokerInfrastructure": {
    "summary": "Pozostaw infrastrukturę zadań w tle systemu Windows dostępną.",
    "tradeoff": "Zadania w tle systemu Windows i aplikacji mogą przestać działać poprawnie.",
    "advice": "Pozostaw tę usługę infrastruktury włączoną. Zamiast tego kontroluj poszczególne aplikacje i ich funkcje.",
    "description": "Kontroluje, które zadania w tle mogą działać w systemie."
   },
   "CoreMessagingRegistrar": {
    "summary": "Zachowaj działanie komunikacji między składnikami systemu Windows.",
    "tradeoff": "Składniki i interfejsy systemu Windows zależne od tych komunikatów mogą działać nieprawidłowo.",
    "advice": "Zachowaj obecną konfigurację. To wspólna infrastruktura systemu Windows, a nie przełącznik opcjonalnej aplikacji.",
    "description": "Zarządza komunikacją między składnikami systemu."
   },
   "SystemEventsBroker": {
    "summary": "Pozostaw pracę aplikacji w tle dostępną.",
    "tradeoff": "Praca w tle aplikacji korzystających ze środowiska Windows Runtime może przestać się uruchamiać.",
    "advice": "Zachowaj tę wspólną usługę. Jeśli chcesz ograniczyć aktywność aplikacji, której to dotyczy, przejrzyj jej ustawienia.",
    "description": "Koordynuje pracę w tle aplikacji Windows Runtime."
   },
   "TimeBrokerSvc": {
    "summary": "Pozostaw pracę aplikacji w tle dostępną.",
    "tradeoff": "Zadania w tle w aplikacjach korzystających ze środowiska Windows Runtime mogą nie być wyzwalane.",
    "advice": "Zachowaj jej obecną konfigurację. Zamiast wyłączać wspólną infrastrukturę zadań, kontroluj funkcje poszczególnych aplikacji.",
    "description": "Koordynuje wykonywanie pracy w tle aplikacji Windows Runtime."
   },
   "KeyIso": {
    "summary": "Pozostaw chronione operacje na kluczach prywatnych dostępne.",
    "tradeoff": "Uwierzytelnianie, certyfikaty lub aplikacje korzystające z izolowanych operacji na kluczach prywatnych mogą przestać działać.",
    "advice": "Zachowaj jej obecną konfigurację. Certyfikatami i uwierzytelnianiem zarządzaj w ich obsługiwanych ustawieniach.",
    "description": "Izoluje klucze prywatne i powiązane operacje kryptograficzne w chronionym procesie."
   },
   "NcbService": {
    "summary": "Pozostaw łączność aplikacji i obsługę połączonych urządzeń dostępne.",
    "tradeoff": "Aplikacje, których to dotyczy, mogą przestać otrzymywać powiadomienia sieciowe, a funkcje połączonych urządzeń mogą nie działać.",
    "advice": "Pozostaw usługę dostępną. Microsoft wymienia ją jako zależność usługi Connected Devices Platform User Service (CDPUserSvc). Nieużywane funkcje udostępniania lub powiadomień wyłącz w ich ustawieniach.",
    "description": "Pośredniczy w połączeniach sieciowych, których aplikacje z Microsoft Store używają do odbierania powiadomień."
   },
   "Wecsvc": {
    "summary": "Zachowaj skonfigurowane zbieranie zdarzeń.",
    "tradeoff": "Subskrypcje zdalnych źródeł zdarzeń przestaną zbierać przekazywane zdarzenia na tym komputerze.",
    "advice": "Pozostaw ją dostępną, jeśli ten komputer zbiera zdarzenia z innych urządzeń. Nieużywanemu modułowi zbierającemu pozostaw obecną konfigurację. Jest niezależna od usługi Windows Event Log, która przechowuje zdarzenia lokalne.",
    "description": "Zarządza subskrypcjami zdalnych źródeł zdarzeń i zapisuje przekazywane zdarzenia w lokalnym dzienniku zdarzeń."
   }
  },
  "sources": {
   "sysmon": {
    "title": "Microsoft: wbudowany Sysmon",
    "note": "Opcjonalne rejestrowanie zdarzeń zabezpieczeń w systemie Windows. Wbudowany Sysmon jest domyślnie wyłączony i nie może działać równolegle z autonomicznym Sysmon."
   },
   "midi": {
    "title": "Microsoft: Windows MIDI Services",
    "note": "Usługa MIDI łączy zgodne aplikacje muzyczne i urządzenia, w tym istniejące aplikacje MIDI 1.0."
   },
   "windows26h2": {
    "title": "Microsoft: nowości w Windows 11, wersja 26H2",
    "note": "Informacje o wydaniu, w tym o automatycznym indeksowaniu często używanych folderów. Funkcje mogą też pojawiać się w comiesięcznych aktualizacjach."
   },
   "administratorProtection": {
    "title": "Microsoft: ochrona administratora i oddzielne profile",
    "note": "Aplikacje z podniesionymi uprawnieniami mogą używać oddzielnego profilu administratora, dlatego folder pobranego skryptu należy wybrać według jego rzeczywistej ścieżki."
   },
   "appIdentity": {
    "title": "Microsoft: Application Identity i AppLocker",
    "note": "AppLocker korzysta z usługi Application Identity do identyfikowania aplikacji i egzekwowania reguł."
   },
   "keyIsolation": {
    "title": "Microsoft: przechowywanie i izolacja kluczy CNG",
    "note": "Izolacja kluczy prywatnych i operacji, które z nich korzystają."
   },
   "eventCollector": {
    "title": "Microsoft: Windows Event Collector",
    "note": "Subskrypcje zbierające zdarzenia z komputerów zdalnych; niezależne od lokalnej usługi Windows Event Log."
   },
   "workFolders": {
    "title": "Microsoft: omówienie Folderów roboczych (Work Folders)",
    "note": "Foldery robocze synchronizują pliki między klientami Windows a serwerem plików organizacji. Są niezależne od OneDrive."
   },
   "executionPolicy": {
    "title": "Microsoft: zasady wykonywania programu PowerShell",
    "note": "Zakres Process dotyczy bieżącej sesji PowerShell i nie zastępuje zasad organizacji."
   },
   "wia": {
    "title": "Microsoft: architektura Windows Image Acquisition",
    "note": "Jak aplikacje do obsługi obrazów używają usługi WIA do komunikacji ze skanerami i zgodnymi aparatami."
   },
   "hello": {
    "title": "Microsoft: jak działa Windows Hello",
    "note": "Klucze, kody PIN i uwierzytelnianie biometryczne używane przez Windows Hello."
   },
   "securityApp": {
    "title": "Microsoft: usługi Zabezpieczeń Windows",
    "note": "Odrębne role SecurityHealthService, Security Center i ochrony antywirusowej."
   },
   "defender": {
    "title": "Microsoft: zgodność Microsoft Defender Antivirus",
    "note": "Jak tryby działania Defendera zależą od innych produktów zabezpieczających i konfiguracji zarządzania."
   },
   "updates": {
    "title": "Microsoft: jak działa Windows Update",
    "note": "Koordynacja aktualizacji, pobieranie, instalacja i ponowne uruchomienia."
   },
   "time": {
    "title": "Microsoft: usługa Windows Time",
    "note": "Synchronizacja zegara i jej rola w uwierzytelnianiu sieciowym."
   },
   "ncsi": {
    "title": "Microsoft: wykrywanie łączności sieciowej",
    "note": "W Windows 11 NCSI działa w Network List Manager, a nie w Network Location Awareness."
   },
   "installer": {
    "title": "Microsoft: Windows Installer",
    "note": "Instalowanie i obsługa pakietów Windows Installer."
   },
   "fileHistory": {
    "title": "Microsoft: kopia zapasowa i przywracanie za pomocą Historii plików",
    "note": "Ustawienia tworzenia kopii zapasowych i odzyskiwania Historii plików w Panelu sterowania."
   },
   "smartCard": {
    "title": "Microsoft: architektura kart inteligentnych",
    "note": "Usługi kart inteligentnych i zależności uwierzytelniania."
   },
   "removed": {
    "title": "Microsoft: usunięte funkcje systemu Windows",
    "note": "Służy do odróżniania wycofanych funkcji od bieżących składników systemu Windows."
   },
   "deprecated": {
    "title": "Microsoft: przestarzałe funkcje systemu Windows",
    "note": "Oznaczenie funkcji jako przestarzałej to nie to samo co jej usunięcie; dostępność nadal zależy od zainstalowanej kompilacji."
   },
   "stopService": {
    "title": "Microsoft: Stop-Service i usługi zależne",
    "note": "Skrypt używa polecenia Stop-Service bez parametru -Force, aby odmówić zatrzymania usługi, od której zależą działające usługi."
   },
   "restore": {
    "title": "Microsoft: Przywracanie systemu",
    "note": "Co obejmują punkty przywracania i jak zastosować punkt przywracania ze środowiska odzyskiwania systemu Windows."
   },
   "protection": {
    "title": "Microsoft: Ochrona systemu",
    "note": "Włącz Ochronę systemu i utwórz punkt przywracania przed wprowadzeniem zmian w systemie Windows."
   },
   "recovery": {
    "title": "Microsoft: Środowisko odzyskiwania systemu Windows",
    "note": "Shift + Uruchom ponownie, Naprawa automatyczna i inne narzędzia odzyskiwania."
   },
   "settingsLinks": {
    "title": "Microsoft: uruchamianie Ustawień systemu Windows",
    "note": "Obsługiwane linki do Ustawień. Dostępność stron i ich nazwy zależą od wersji i edycji systemu Windows."
   },
   "audit": {
    "title": "Microsoft: zasady zamykania systemu po niepowodzeniu inspekcji",
    "note": "Jeśli te zasady są włączone, Windows 11 może się zatrzymać, gdy inspekcja zabezpieczeń zawiedzie; nie jest to ustawienie domyślne."
   },
   "cachedLogon": {
    "title": "Microsoft: logowanie do domeny z pamięci podręcznej",
    "note": "Dlaczego logowanie do domeny może wymagać dostępu do sieci, gdy logowanie z pamięci podręcznej jest niedostępne."
   },
   "rpcRecovery": {
    "title": "Microsoft: przywracanie wymaganych usług RPC",
    "note": "Zależności RPC i Endpoint Mapper; wskazówki dotyczące odzyskiwania obejmują systemy, których nie można uruchomić."
   },
   "mdm": {
    "title": "Microsoft: zarządzanie urządzeniami i WAP Push Routing",
    "note": "Dlaczego wyłączenie dmwappushservice może uniemożliwić synchronizację z Intune."
   },
   "input": {
    "title": "Microsoft: usługa wprowadzania tekstu i problemy z IME",
    "note": "Błędy metod wprowadzania, gdy usługi wprowadzania tekstu są wyłączone, oraz różnice w nazwach usług między kompilacjami systemu Windows."
   },
   "system": {
    "title": "Microsoft: dokumentacja usług systemu Windows",
    "note": "Definicje usług. Zalecenia Microsoft dotyczące wyłączania na tej stronie odnoszą się do urządzeń IoT Enterprise o stałym przeznaczeniu, a nie do każdego komputera osobistego."
   },
   "user": {
    "title": "Microsoft: usługi użytkownika w systemie Windows",
    "note": "Usługi przypisane do sesji, ich zależności i różnice między wersjami."
   },
   "diagnostic": {
    "title": "Microsoft: konfigurowanie danych diagnostycznych systemu Windows",
    "note": "Składniki diagnostyczne i zasady organizacji."
   },
   "privacy": {
    "title": "Microsoft: diagnostyka, opinie i prywatność",
    "note": "Wymagane i opcjonalne dane diagnostyczne oraz ich ustawienia."
   },
   "search": {
    "title": "Microsoft: indeksowanie wyszukiwania w systemie Windows",
    "note": "Zakres indeksowania, kompromisy dotyczące zasobów i aplikacje korzystające z indeksu."
   },
   "location": {
    "title": "Microsoft: usługa lokalizacji i prywatność",
    "note": "Uprawnienia lokalizacji i ograniczenia wyłączenia lokalizacji."
   },
   "delivery": {
    "title": "Microsoft: Optymalizacja dostarczania w systemie Windows",
    "note": "Ustawienia pobierania aktualizacji z innych urządzeń."
   },
   "errors": {
    "title": "Microsoft: wskazówki dotyczące Raportowania błędów systemu Windows",
    "note": "Raportowanie awarii i ustawienia zasad."
   },
   "network": {
    "title": "Microsoft: omówienie usług sieciowych",
    "note": "Role usług sieciowych. Porady dotyczące konfiguracji serwera nie są gotowym zestawem wyłączeń dla komputera stacjonarnego."
   },
   "bluetooth": {
    "title": "Microsoft: stos sterowników Bluetooth",
    "note": "Obsługa Bluetooth i połączenia z urządzeniami."
   },
   "print": {
    "title": "Microsoft: usługa Print Spooler",
    "note": "Usługa drukowania systemu Windows i jej zadania po stronie klienta i serwera."
   },
   "registry": {
    "title": "Microsoft: protokół Remote Registry",
    "note": "Zdalny dostęp do rejestru."
   },
   "firewall": {
    "title": "Microsoft: zarządzanie Zaporą systemu Windows",
    "note": "Obsługiwana konfiguracja zapory zamiast zatrzymywania jej usługi."
   },
   "vss": {
    "title": "Microsoft: Volume Shadow Copy Service",
    "note": "Migawki woluminów i ich wykorzystanie przez aplikacje do kopii zapasowych."
   },
   "vssRecovery": {
    "title": "Microsoft: Przywracanie do punktu w czasie, Przywracanie systemu i VSS",
    "note": "Przywracanie do punktu w czasie i Przywracanie systemu korzystają z Volume Shadow Copy Service (VSS), aby przywrócić urządzenie do wcześniejszego stanu."
   },
   "hyperv": {
    "title": "Microsoft: usługi integracji Hyper-V",
    "note": "Usługi gościa Windows 11 i ich wpływ na działanie maszyny wirtualnej."
   },
   "startup": {
    "title": "Microsoft: konfigurowanie aplikacji uruchamianych przy starcie",
    "note": "Inne miejsce, w którym można zbadać obciążenie w tle."
   },
   "powershell": {
    "title": "Microsoft: Set-Service",
    "note": "Polecenia konfiguracji usług i zależności."
   }
  },
  "settings": {
   "CloudBackupRestoreSvc": {
    "path": "Ustawienia → Konta → Kopia zapasowa systemu Windows",
    "action": "Wybierz, czy system Windows ma zapamiętywać aplikacje i preferencje. Kopia zapasowa folderów w OneDrive ma osobne ustawienia."
   },
   "camsvc": {
    "path": "Ustawienia → Prywatność i zabezpieczenia → Uprawnienia aplikacji",
    "action": "Wybierz zasób, którym chcesz zarządzać, np. Kamera lub Mikrofon, i przejrzyj aplikacje, które mają do niego dostęp. Pozostaw broker uprawnień dostępny."
   },
   "FrameServer": {
    "path": "Ustawienia → Prywatność i zabezpieczenia → Kamera",
    "action": "Przejrzyj uprawnienia aplikacji do kamery. Pozostaw dostęp dla rozmów wideo i innych funkcji kamery, z których korzystasz."
   },
   "icssvc": {
    "path": "Ustawienia → Sieć i Internet → Hotspot mobilny",
    "action": "Wyłącz Hotspot mobilny, gdy nie chcesz udostępniać połączenia tego komputera."
   },
   "TextInputManagementService": {
    "path": "Ustawienia → Czas i język → Pisanie (Typing)",
    "action": "Tu dostosuj funkcje pisania; pozostaw usługę wprowadzania dostępną dla klawiatur i metod wprowadzania."
   },
   "WbioSrvc": {
    "path": "Ustawienia → Konta → Opcje logowania (Sign-in options)",
    "action": "Tu zarządzaj logowaniem odciskiem palca i rozpoznawaniem twarzy. Pozostaw dostępną inną skonfigurowaną metodę logowania."
   },
   "WpnService": {
    "path": "Ustawienia → System → Powiadomienia",
    "action": "Wyłącz alerty poszczególnych aplikacji, zachowując infrastrukturę powiadomień."
   },
   "WpnUserService": {
    "path": "Ustawienia → System → Powiadomienia",
    "action": "Wybierz, które aplikacje mogą wysyłać Ci powiadomienia, zamiast wyłączać szablon usługi użytkownika."
   },
   "DiagTrack": {
    "path": "Ustawienia → Prywatność i zabezpieczenia → Diagnostyka i opinie",
    "action": "Wyłącz opcjonalne dane diagnostyczne, jeśli nie chcesz ich udostępniać. Wymagane dane i inna telemetria mają osobne ustawienia."
   },
   "WSearch": {
    "path": "Ustawienia → Prywatność i zabezpieczenia → Wyszukiwanie lub Wyszukiwanie w systemie Windows",
    "action": "Ogranicz indeksowane lokalizacje lub użyj trybu indeksowania Klasyczny. Jeśli jest dostępne, sprawdź też automatyczne indeksowanie często używanych folderów. Te ustawienia zachowują wyszukiwanie, ograniczając pracę, którą ono wykonuje."
   },
   "lfsvc": {
    "path": "Ustawienia → Prywatność i zabezpieczenia → Lokalizacja",
    "action": "Wyłącz Usługi lokalizacyjne lub ogranicz uprawnienia poszczególnych aplikacji. Najpierw sprawdź, czy potrzebujesz funkcji Znajdź moje urządzenie."
   },
   "DoSvc": {
    "path": "Ustawienia → Windows Update → Opcje zaawansowane → Optymalizacja dostarczania",
    "action": "Wyłącz pobieranie z innych komputerów, aby zatrzymać udostępnianie między urządzeniami. Pozostaw usługę dostępną do dostarczania aktualizacji."
   },
   "CDPSvc": {
    "path": "Ustawienia → System → Udostępnianie w pobliżu; sprawdź też używane funkcje między urządzeniami",
    "action": "Wyłącz nieużywane funkcje udostępniania. Środowiska połączone mają osobne ustawienia; nie ma jednego przełącznika dla wszystkiego, co obsługuje ta usługa."
   },
   "CDPUserSvc": {
    "path": "Ustawienia → System → Udostępnianie w pobliżu; sprawdź też używane funkcje między urządzeniami",
    "action": "Wyłącz nieużywaną funkcję udostępniania. Pozostaw szablon usługi użytkownika dostępny dla innych środowisk połączonych."
   },
   "cbdhsvc": {
    "path": "Ustawienia → System → Schowek",
    "action": "Wyłącz opcję Historia schowka i synchronizację schowka między urządzeniami, jeśli z nich nie korzystasz. Usługa obsługuje też działanie schowka wykraczające poza te przełączniki."
   },
   "BcastDVRUserService": {
    "path": "Ustawienia → Granie (Gaming) → Przechwytywanie (Captures)",
    "action": "Wyłącz nagrywanie w tle, jeśli z niego nie korzystasz. Przechwytywaniem możesz sterować bez edytowania szablonu usługi użytkownika."
   },
   "BluetoothUserService": {
    "path": "Ustawienia → Bluetooth i urządzenia",
    "action": "Wyłącz Bluetooth tylko wtedy, gdy nie potrzebuje go żadna klawiatura, mysz, słuchawki ani inne urządzenie."
   }
  },
  "features": {
   "insider": {
    "title": "Nie należę do Niejawnego programu testów systemu Windows",
    "description": "Na tym komputerze działa stabilna wersja i nie jest on zarejestrowany do otrzymywania kompilacji zapoznawczych. Zwykłe aktualizacje przez Windows Update pozostają dostępne."
   },
   "remote": {
    "title": "Nie przyjmuję połączeń Pulpitu zdalnego",
    "description": "Brak przychodzących sesji Pulpitu zdalnego i przekierowania urządzeń. Wprowadzaj zmiany, siedząc przy komputerze."
   },
   "registry": {
    "title": "Nie używam narzędzi do zdalnej obsługi rejestru",
    "description": "Brak zdalnej administracji rejestrem. Najpierw sprawdź, czy tym komputerem nie zarządza Twój pracodawca."
   },
   "workfolders": {
    "title": "Nie używam Folderów roboczych (Work Folders)",
    "description": "Brak synchronizacji Folderów roboczych z serwerem plików organizacji. OneDrive to osobna funkcja."
   },
   "printing": {
    "title": "Nigdy niczego nie drukuję",
    "description": "Obejmuje drukarki fizyczne, faks, drukarki udostępnione, Microsoft Print to PDF oraz dodawanie i konfigurowanie drukarek."
   },
   "scanning": {
    "title": "Nie skanuję ani nie importuję obrazów z aparatu",
    "description": "Brak skanera, skanowania na drukarce wielofunkcyjnej i importu z aparatu przez funkcje pozyskiwania obrazów systemu Windows."
   },
   "bluetooth": {
    "title": "Nie używam Bluetooth",
    "description": "Brak klawiatury, myszy, słuchawek, kontrolera ani innych urządzeń peryferyjnych Bluetooth."
   },
   "discovery": {
    "title": "Nie używam odnajdowania sieci",
    "description": "Brak automatycznego wykrywania urządzeń w sieci, UPnP i udostępniania, dzięki któremu ten komputer jest widoczny dla innych."
   },
   "media": {
    "title": "Nie udostępniam biblioteki multimediów",
    "description": "Brak przesyłania strumieniowego ze starszego programu Windows Media Player na inne urządzenia."
   },
   "fax": {
    "title": "Nie wysyłam ani nie odbieram faksów",
    "description": "Opcjonalna funkcja faksu systemu Windows nie jest używana. Zwykłe drukowanie pozostaje dostępne."
   },
   "xbox": {
    "title": "Nie używam funkcji ani akcesoriów Xbox",
    "description": "Brak logowania Xbox, zapisów w chmurze, funkcji sieciowych i akcesoriów. Gry ze Steam i innych sklepów też mogą korzystać z tych funkcji."
   },
   "retail": {
    "title": "To nie jest komputer demonstracyjny w sklepie",
    "description": "Brak trybu demonstracyjnego Windows dla sklepów. Może być już wyłączony."
   }
  }
 }
};
