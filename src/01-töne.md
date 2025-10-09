---
title: 01 Töne
date: 2025-10-02
---

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

Das nimmt mich nicht aus der Verantwortung, mich meinem Lobpreis _bewusst_ zu nähern. Auch ohne gesungene Worte will ich mir vor Augen führen, dass ich auf Gottes Eigenschaften reagiere. Aber du und ich, wir sind frei darin, alles dafür zu nutzen, was der Schöpfer in uns angelegt hat – auch Finger und Tasten.

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

- 440Hz &times; 2 = 880Hz (A)
- 440Hz &times; 3 = 1320Hz (E)
- 440Hz &times; 4 = 1760Hz (A)
- 440Hz &times; 5 = 2200Hz (C#)
- 440Hz &times; 6 = 2640Hz (E)
- 440Hz &times; 7 = 3080Hz (G)
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

- <sup>2</sup>&frasl;<sub>1</sub>: Oktave (<sup>880Hz</sup>&frasl;<sub>440Hz</sub>)
- <sup>3</sup>&frasl;<sub>2</sub>: Quinte (<sup>1320Hz</sup>&frasl;<sub>880Hz</sub>)
- <sup>4</sup>&frasl;<sub>3</sub>: Quarte (<sup>1760Hz</sup>&frasl;<sub>1320Hz</sub>)

- Ein (hörbarer) "Ton": für heute eine Welle mit einer Frequenz zwischen 20Hz und 20000Hz
- Frequenzverhältnisse bestimmen Intervalle:
    - 2:1: Oktave
    - 3:2: Quinte
    - 4:3: Quarte
    - 5:4: Große Terz
    - 6:5: Kleine Terz
    - 2^(1/12):1: Halbton (ca 1.05946:1)
- 12 Halbtöne wegen "Quintenzirkel": (3:2)^12 ~ 2^7 (minus pythagoreisches Komma)
- Obertonreihe:
    - Grundton + n*Grundton (A2 110Hz, A3 220Hz, E4 330Hz, A4 440Hz, C#5 550Hz, E5 660Hz, G5 770Hz)
    - bestimmt Klangfarbe (Timbre) des Intruments
- Würde man die 12 Halbtöne so oft oktavieren, dass sie vom hörbaren (20Hz-20kHz) Spektrum ins sichtbare (384-789THz) Spektrum kommen, bekäme man (nach 39-40 Oktaven) folgende Farben:
    - A: orange/rötlich
    - A#/Bb: gelb/orange
    - B: gelb/grünlich
    - C: grün
    - C#/Db: grün/cyan
    - D: blau/grünlich-blau
    - D#/Eb: blau/violettt
    - E: violett
    - F: tiefes violett, fast UV
    - F#/Gb: rot
    - G: rot/orange
    - G#/Ab: dunkelrot/orange-rot

## Übung

{%- youtube "4TXFigcT27A" "Zehntausend Gründe - Outbreakband | Glaubenszentrum Live (German Cover of 10000 Reasons)" -%}
