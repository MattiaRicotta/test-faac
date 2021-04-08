# EnhancersDesignSystem

Lo scopo di questo progetto è quello di creare una libreria grafica utilizzando Angular come framework e StoryBook come tool di documentazione. 
E' possibile vedere i componenti che dovranno essere realizzati al seguente link: https://miro.com/app/board/o9J_lNFwJaQ=/

Verrà utilizzato l'atomic design, pattern che ha come obiettivo quello di far realizzare un progetto pensando al quadro completo ma partendo dalla creazione del nucleo.

Le cinque fasi della progettazione atomica sono:
- Atomi
- Molecole
- Organismi
- Template
- Pagine
  

  ![alt text](https://miro.medium.com/max/2880/1*OwjMmIOi9rN5XwSOxZxT-g.png)

Dall'immagine possiamo notare che:
- Un insieme di atomi forma le molecole
- Tante molecole formano gli organismi
- Più organismi insieme formano i template
- Infine i template vengono raggruppati per comporre le pagine

Altre informazioni su questo design e su come utilizzarlo al meglio possono essere trovate al seguente url: https://medium.com/@nicolasciotti/atomic-design-dfafdb379432


## Sviluppo
Per sviluppare in parallelo utilizzeremo la metodologia git, seguendo il gitflow mostrato nell'immagine seguente

Flusso branches principali:
![alt text](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/git-flow/01-master-develop.png)
Flusso branches secondari (feature/hotfix):
![alt text](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/git-flow/01-master-develop.png)

Ecco una breve spiegazione del flusso:
1. Per iniziare a sviluppare si crea un branch partendo da develop e lo si chiama con il nome del componente che si vuole realizzare (Es. feature/buttons)
2. Si sviluppa sul branch creato e una volta terminato si fa il merge del proprio branch con develop.
3. Dopo aver fatto il merge in develop, si testa se la propria modifica funziona e se non ci sono stati conflitti o regressioni causate da quest'ultimo. Se questa verifica da esisto negativo si ritorna sul proprio branch, si effettuano le correzzioni e si procede ad un nuovo merge.
4. In caso di esito positivo si effettua il merge del branch develop in master e si cancella il proprio branch feature/nomefeature.
5. Se è necessario effettuare un hotfix in master si crea un nuovo branch nominato hotfix/nomefix partendo da master. Una volta corretto l'errore si effettua il merge con master e develop, successivamente si cancella il branch hotfix/nomefix.

Ulteriori informazioni qui: https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/git-flow/.

Il branch master è collegato ad un sistema di continuous integration:
Ogni push in quel branch avvierà una build automatica che, se completata senza errori, integrerà le nostre modifiche sul seguente indirizzo: https://enhancers-design-sistem.web.app/

Versione Angular: ~10.2.4

## Accessi
NPM

 - mail: services@nigithor.com
 - user: nigithor
 - pwd: g8Yw7WaRa3@5

Accesso zeplin:

  - https://app.zeplin.io/
  - user: acaprino
  - password: Z&5CUqn43tH&

Jira: https://enhancers-design-system.atlassian.net/

## Best practice
Scrivete commenti, e codice esclusivamente in inglese.
I messaggi sulle commit devono essere chiari e scritti in italiano.

## Build libreria
Per buildare la libreria avviare lo script ng build-ds. E' necessario fare la build prima di avviare il progetto di demo.

Per fare la build per la pubblicazione su npm avviare lo script ng build-ds-prod.

## Creazione di un elemento del ds
I nuovi elementi del DS si generano creando prima il relativo modulo con:
- `ng g m /components/nome-componente`.

Successivamente creando il componente/direttiva con i rispettivi comandi:
- `ng g c components/nome-componente/nome-componente --flat --prefix=eds --inline-template`
- `ng g d components/nome-componente/nome-componente --flat --prefix=eds --inline-template`


Questo comando genererà 4 file:
- nome-componente.module.ts > Modulo del componente 
- nome-componente.component.scss > Qui scriveremo il nostro codice scss
- nome-componente.component.ts > Qui scriveremo la logica del componente
- nome-componente.component.spec-ts -> Per eseguire degli unit test

Ogni componente avrà un file nome-componente.module.ts, chiamato modulo, elemento che permetterà a chi utilizzerà la libreria in futuro di importare solo quel determinato componente. Automaticamente il file importerà al suo interno il componente realizzato.

La console di generazione dei componenti/moduli (La angular cli) è progettata in modo da importare i componenti generati nel modulo più vicino, quindi il mio consiglio è quello di generare prima il modulo e successivamente il componente in modo da avere tutto pronto con solo due righe di comando.

## Creazione elemento su storybook
Per creare la documentazione del componente su storybook è sufficiente creare un file chiamato nome-component.stories.ts all'interno della directory del componente, e inserire al suo interno le specifiche del componente.

Ulteriori informazioni possono essere trovare qui: https://storybook.js.org/docs/angular/writing-stories/introduction

## Development server
Dopo averlo scaricato, per avviare il nostro progetto è fondamentale installare le dipendenze, è possibile farlo con il comando `npm install`. Bisogna tenere presente che per eseguire questo comando bisogna che sul nostro terminale sia posizionato sul root del progetto e che sul nostro pc sia installato node.

- Per avviare il progetto angular sul nostro browser bisogna lanciare il comando `ng serve` 
- Per avviare storybook sul nostro browser è sufficiente lanciare il comando `npm run storybook` all'interno della directory del progetto
