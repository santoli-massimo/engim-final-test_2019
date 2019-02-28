
# GIT Exercises for 2019 engim class

## Gruppi

1. Inserire nel subnav a sinistra un orologio: mostrare [data, ora, minuto e secondo]
    > **(Flavio):** *Task completed*

2. Inserire in main nav un input che faccia ricerca di testo nella pagina e colora i risultati
    > **(Olga, Nicolas):** *Task completed*

3. Creare un tasto back
    > **???:** *status*

4. Creare una pagina con un form con campi [nome, cognome] che crea una nuovo oggetto persona; visualizzare lista delle persone sotto al form (se fatto in gruppo fare anche il rimuovi persona) 
    > **(Daniele, Olga):** *Task completed*

5. Creare una pagina con una select con i nomi di animali, al select mostrare la foto dell animale sotto alla select
    > **(Mario):** *Task completed*

6. Creare una pagina con una calcolatrice
    > **(Flavio, Nicolas):** *Task completed*

7. Creare una pagina con vari paragrafi al click cambiare colore al pargrafo
    > **Angelo [Colori random]:** *completo*

8. Al click su qualsiasi punto della pagina inserisce una forma (sfera o quadrato) nel punto in cui si è cliccato (opzionale fare un tasto che elimina tutte le forme aggiunte)

9. Creare una tabella con un head e 10 o piu righe al click sull head ordina i risultati in base alla colonna

10. Ogni 5 secondi il colore dell head cambia (opzionale: tasto per start stop )

11. Form che chiede di indovinare un numero da 1 a 1000 se il numero non è giusto ti dice se il numeor corretto è maggiore o minore di quello inserito. (opzionale il numero da indovinare è casuale)


## Comunicazioni di servizio
*Qui di seguito possiamo scrivere tutto quello che serve per coordinare le varie sezioni del progetto, consigli, bug, ecc.*

- **Per tutti:** seguendo l'esempio di Nicolas, ho diviso alcuni pezzi del main.js in altri file js: btCerca, calc e clock. Direi che si può fare con tutte le task richieste.
*Flavio*

- **Per tutti:** mi sono permesso di modificare questo file in modo che possiamo usarlo per aggiornare lo stato di avanzamento. Vi prego di aggiornare lo stato di avanzamento e i task che sono ancora orfani se decidete di farli. La formattazione del markdown (il linguaggio usato per questo readme) è abbastanza semplice, ma a beneficio di tutti ho creato dei template sia dei gruppi di task che di messaggio che vi basta copincollare e modificare. *Nicolas*

- **Per Olga:** ho implementato un fix nella ricerca globale in modo da non avere confitti con quella locale. Per fare ciò devo fare riferimento a due dei tuoi `id`, che sono `txtBacon` e `txtcerca`. Se hai necessità di modificarli, please tell me!
*Nicolas*

- **Per Nicolas:**  La calcolatrice presenta errori di calcolo (es 8.6*6=51.59999...4)                      e presenta un problema con la virgola, se si fa una operazione in cui entrambi i valori sono con virgola nelle operazioni successive
non permette più di usare la virgola (sembra con tutti i tipi di operazione). *Daniele* `fixed`

- **Per tutti:** ho testato in vari modi la ricerca globale e mi sembra non ci siano bug e non si spacchi niente, ma se doveste trovare qualche bug vi prego di fare uno screenshot e farmelo avere! Più occhi notano molte più cose! Grazie!
*Nicolas*

***

## Template
- Task
    > **(persona):** *status*

    > **(persona1, persona2, persona3):** *status*

*Se più persone/gruppi prendono parte allo stesso task, è necessario che ci sia una riga vuota a separare le due istanze.*

- Comunicazione di servizio

- **Per chi:** messaggio
*Firma*

***

***Dai, ragazzi, che Google ci aspetta!***