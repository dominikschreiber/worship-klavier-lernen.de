---
title: 01 Töne
date: 2025-10-02
---
Persönlicher Lobpreis mit Tasten statt Worten, die Definition von Tönen als Frequenzen und daraus folgend Obertöne und Intervalle durch Rechnen mit diesen Frequenzen – darum geht es in dieser ersten Einheit. Außerdem geht sie etwas detailierter auf die vier Abschnitte jeder Einheit ein: ein Lied als Auftakt, ein theologischer Impuls, Musiktheorie, und ihre praktische Übung.<!-- excerpt -->

## Auftakt

Ich habe unendlich viel über Musik gelernt als Lead-Posaunist der Big Band von Tile- und Marienschule Limburg, der "TileMarie BigBand". Holger Fröhlich, der Dirigent, hat die wunderbare Tradition eingeführt, jede Übungsstunde mit dem Hören eines Big Band-Klassikers zu starten. Meistens unkommentiert, nicht weiter darüber nachgedacht; einfach nur, um uns Schüler an den "echten" Klang einer Big Band heranzuführen.

Diese Tradition will ich in diesem Workshop ebenfalls etablieren, jede Einheit wird mit einem Worship-Lied beginnen – meist mit dem, mit dem die vorherige Einheit aufgehört hat. Höre dieses Lied _aktiv_, achte auf Dinge, die dir ins Ohr springen.

{%- youtube "2zol2H87GTM" "Ströme des Lebendigen Wassers (Live)" -%}

## Impuls

Liedbegleitung am Klavier ist vielfältig, und kann in den verschiedensten Bereichen eingesetzt werden – von deinem Klavier zuhause über Schulklassen und Gesangsvereine hin zu Kirchen und Worship. Da dieser Workshop dir speziell Worship-Klavier näherbringen soll, möchte ich neben Musiktheorie einen ebenso tiefen Schwerpunkt auf das theologische Verständnis von Worship, Lobpreis und Anbetung legen. Denn in alldem kommt uns Musikern nicht nur die _profane Aufgabe_ des "Töne drückens" zu, sondern wir tauchen ein in die _geistliche Aufgabe_, Gott zu betrachten, über seine Eigenschaften und Taten zu staunen, und dieses Staunen in Worten und Tönen zum Ausdruck zu bringen.

Um dir dies näher zu bringen, werden wir jede Einheit mit einem Bibelvers starten, den ich im Hinblick auf Worship auslegen möchte.

> So will auch ich dir danken mit Saitenspiel für deine Treue, mein Gott; ich will dir zur Harfe lobsingen du Heiliger Israels.  
> (Psalm 71,22)

Worship ist eine Reaktion auf das, was ich in Gott erkenne. Wie David in Psalm 71 die Treue und Heiligkeit seines Gottes. Und schon von je her ist diese Reaktion _musikalisch_, im Saitenspiel und im Lobgesang zur Harfe.

Ich als Pianist wollte lange nicht zu meinem Klavierspiel singen – auch heute noch beobachte ich, dass ich "anders" Klavier spiele, wenn ich dabei singe: weniger virtuos, weniger rhythmisch, weniger ausgefeilt.

Verse wie der aus Psalm 71 gaben und geben mir die Freiheit, mich damit nicht geistlich "minderwertig" zu fühlen. Mein Lobpreis ist nicht nur in meinen (gesungenen) Worten, mein Lobpreis ist mein Saitenspiel (am Klavier eher ein Tastenspiel).

Das nimmt mich nicht aus der Verantwortung, mich meinem Lobpreis _bewusst_ zu nähern. Auch ohne gesungene Worte will ich mir vor Augen führen, dass ich auf Gottes Eigenschaften reagiere. Aber du und ich, wir sind frei darin, alles dafür zu nutzen, was der Schöpfer in uns angelegt hat – auch Finger und Tasten.

## Theorie

Ich habe die erste Mathematik-Vorlesung meines Studiums als sehr prägend in Erinnerung: der Professor fing an einem Zustand komplett ohne Vorkenntnisse an – aber nach zwei Wochen hatten wir den Stoff bis zum Abitur hinter uns. Wer bis dahin etwas nicht verstanden hatte, konnte immer zu den Definitionen und Erklärungen bis dahin zurück, und sich den Inhalt tiefergehend erarbeiten.

So möchte auch ich in diesen Workshop starten: "bei null", und dann rasant anziehen. "Bei null" ist die Frage: _Was ist eigentlich ein Ton?_

### Töne

Und diese Frage lässt sich sehr mathematisch-physisch-naturwissenschaftlich beantworten. Darin wird klar, warum die alten Griechen Musik nicht zu den Künsten, sondern zu den Naturwissenschaften zählten.

**Schwingt eine Welle in einer Frequenz zwischen 20Hz und 20000Hz, erzeugt sie einen hörbaren Ton.**

Für die erste Betrachtung klammern wir andere Eigenschaften eines Tons (wie die Art der Welle, oder verschiedene Envelopes/Hüllkurven) getrost aus.

Zunächst reicht: drückst du eine Taste an deinem Klavier, erzeugt das das Schwingen einer Welle mit der Frequenz der jeweiligen Tonhöhe. Z.B. erzeugt die Taste A4 eine Welle mit 440Hz.

{% lilypond "töne" %}
\score {
  <<
    \new Staff \with { instrumentName = "A4" } \relative c'' { a1 }
  >>
}
{% endlilypond %}

### Obertöne

Fast nie jedoch schwingt bei einem Ton nur eine einzelne Frequenz. Mit einer Grundfrequenz klingen _Obertöne_, das _n_-fache der Grundfrequenz. Welcher Oberton wie laut klingt bestimmt die Klangfarbe ("Timbre") des Instruments – und macht damit einen großen Teil dessen aus, wie das Instrument klingt.

Zu unserem A4 mit 440Hz klingen also

- 440Hz &times; 2 = 880Hz ({% chord "A" %})
- 440Hz &times; 3 = 1320Hz ({% chord "E" %})
- 440Hz &times; 4 = 1760Hz ({% chord "A" %})
- 440Hz &times; 5 = 2200Hz ({% chord "C#" %}<sup>[1](#1)</sup>)
- 440Hz &times; 6 = 2640Hz ({% chord "E" %})
- 440Hz &times; 7 = 3080Hz ({% chord "G" %})
- […] 440Hz &times; n

{%- lilypond "obertöne" -%}
\score {
    <<
        \new Staff \with {instrumentName="Obertöne von A4"} \relative c'' {<a a' e' a cis e g>1}
    >>
}
{%- endlilypond -%}

### Intervalle

In dieser Obertonreihe lassen sich Intervalle als _Verhältnisse von Frequenzen_ beobachten:

- {% frac 2 1 %}: Oktave (z.B. {% frac "880Hz (A5)" "440Hz (A4)" %})
- {% frac 3 2 %}: Quinte (z.B. {% frac "1320Hz (E)" "880Hz (A5)" %})
- {% frac 4 3 %}: Quarte (z.B. {% frac "1760Hz (A6)" "1320Hz (E)" %})
- {% frac 5 4 %}: große Terz (z.B. {% frac "2200Hz (C&sharp;)" "1760Hz (A)" %})
- {% frac 6 5 %}: kleine Terz (z.B. {% frac "2640Hz (E)" "2200Hz (C&sharp;)" %})
- […] ({% frac "n" "n-1" %})
- <sup>2<sup><sup>1</sup>&frasl;<sub>12</sub></sup></sup>&frasl;<sub>1</sub>: Halbton (bei wohltemperierter Stimmung)

### 12 Halbtöne

Die Einteilung in 12 Halbtonschritte ist in gewissem Sinne willkürlich gewählt, Verhältnisse von Frequenzen ließen sich auch anders einteilen.

Aber sie ist nicht völlig willkürlich, dank des _Quintenzirkels_ (denn ({% frac 3 2 %})<sup>12</sup> (= 129.746) &approx; 2<sup>7</sup> (= 128)): geht man von einem Ton aus immer eine Quinte nach oben (also erhöht man die Frequenz um das {% frac 3 2 %}-fache), landet man nach 12 Tönen wieder beim ursprünglichen Ton (nur 7 Oktaven höher):

{% chord "C" %} &rarr; {% chord "G" %}  &rarr; {% chord "D" %} &rarr; {% chord "A" %} &rarr; {% chord "E" %} &rarr; {% chord "B" %} &rarr; {% chord "F#" %}/{% chord "Gb" %} &rarr; {% chord "Db" %} &rarr; {% chord "Ab" %} &rarr; {% chord "Eb" %} &rarr; {%chord "Bb" %} &rarr; {% chord "F" %} &rarr; {% chord "C" %}

{%- lilypond "12-halbtöne" -%}
\score {
  \language "deutsch"
  <<
    \relative c' {
        c1 g'
        \ottava #1 d' a'
        \ottava #2 e' h'
        \ottava #3 fis'2 ges des'1
        \ottava #4 as' es'
        \ottava #5 \set Staff.ottavation = #"36" b' f'
        \ottava #6 \set Staff.ottavation = #"43" c'
    }
  >>
}
{%- endlilypond -%}

### Frequenzen außerhalb des hörbaren Bereichs

Der hörbare Bereich von 20Hz bis 20000Hz ist natürlich nicht alles.

Würde man die 12 Halbtöne in den sichtbaren Bereich (zwischen Infrarot mit 384THz und Ultraviolett mit 789THz) "hochoktavieren" (immer weiter verdoppeln), bekämen Töne eine "Farbe". Andersherum könnte man sie auch so lang "herunteroktavieren" (immer weiter halbieren), bis sie in den Bereich eines Rhythmus mit 70-150 "beats-per-minute" kämen:

| Ton                                | Farbe (verdoppeln)                                     | bpm (halbieren) |
|------------------------------------|--------------------------------------------------------|-----------------|
| {% chord "E" %}                    | {% squircle "#C80000" %}rot{% endsquircle %}         | 77              |
| {% chord "F" %}                    | {% squircle "#F30000" %}rot-orange{% endsquircle %}  | 82              | 
| {% chord "F#" %}, {% chord "Gb" %} | {% squircle "#FF7800" %}orange{% endsquircle %}      | 87              |
| {% chord "G" %}                    | {% squircle "#FFEF00" %}gelb{% endsquircle %}        | 92              |
| {% chord "G#" %}, {% chord "Ab" %} | {% squircle "#AAFF00" %}gelbgrün{% endsquircle %}    | 97              |
| {% chord "A" %}                    | {% squircle "#3AFF00" %}grün{% endsquircle %}        | 103             |
| {% chord "A#" %}, {% chord "Bb" %} | {% squircle "#00FFEC" %}cyan{% endsquircle %}        | 109             |
| {% chord "B" %}                    | {% squircle "#008FFF" %}hellblau{% endsquircle %}    | 116             |
| {% chord "C" %}                    | {% squircle "#1000FF" %}dunkelblau{% endsquircle %}  | 123             |
| {% chord "C#" %}, {% chord "Db" %} | {% squircle "#7800E8" %}blau-violett{% endsquircle %}| 130             |
| {% chord "D" %}                    | {% squircle "#7A008E" %}violett{% endsquircle %}     | 138             |
| {% chord "D#" %}, {% chord "Eb" %} | {% squircle "#980000" %}tief violett{% endsquircle %}| 146             |

## Übung

Heute ist die Übung ähnlich dem Auftakt: höre das Worship-Lied "Zehntausend Gründe" im Lauf der kommenden Woche _aktiv_. Achte bei jedem Mal auf etwas anderes. Zum Beispiel:

- Wie ist die _Form_? Welche Elemente gibt es? Welche werden wiederholt, welche tauchen nur einmal auf?
- Welches _Instrument_ spielt was? Höre auch E-Gitarre, Akustik-Gitarre und den anderen zu.
- Wie entwickelt sich die _Dynamik_ des Stücks? Wann ist es laut, wann ist es leise? Was macht welches Instrument, um die Dynamik anzupassen?
- Vergleiche mit deiner _eigenen Erfahrung_: Hast du dieses Lied schon mitgesungen? Vielleicht selbst gespielt? Was von dem, was du herausgefunden hast, könntest du umsetzen?

{%- youtube "4TXFigcT27A" "Zehntausend Gründe - Outbreakband | Glaubenszentrum Live (German Cover of 10000 Reasons)" -%}

---

<sup id="1">1</sup> Ich verwende die mittlerweile auch im Deutschen gebräuchliche "amerikanische" Schreibweise. {% chord "Db" %} spricht man "Des" aus (die schwarze Taste zwischen C und D), {% chord "D#" %} "Dis" (die schwarze Taste zwischen D und E). Insbesondere spricht man {% chord "B" %} als "H" aus (die weiße Taste) und {% chord "Bb" %} als "B" (die schwarze). [&olarr;](#obertone)
