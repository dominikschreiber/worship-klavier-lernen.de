---
title: 02 Intervalle, Dreiklänge
date: 2025-10-16
---

## Auftakt

Zehntausend Gründe

## Impuls

> Denn alle Schrift, von Gott eingegeben, ist nütze zur Lehre, zur Zurechtweisung, zur Besserung, zur Erziehung in der Gerechtigkeit, dass der Mensch Gottes vollkommen sei, zu allem guten Werk geschickt.  
> (2. Timotheus 3,16-17)

- Occams Razor:
    - Entweder dieser Vers stimmt, und alle Schrift ist von Gott eingegeben; dann müssen wir alle Schrift ernst nehmen
    - Oder er stimmt nicht, dann müssen wir jeden Vers einzeln hinterfragen
- Beobachtung in meinem Leben: so vieles stimmt, dass die Wahrscheinlichkeit, dass der Vers stimmt, größer ist als die, dass er nicht stimmt
- Also: alle Schrift erst nehmen:
    - auch die, die ich nicht erklären kann
    - auch die, die ich nicht erlebe
    - auch die, die mir schwer verdaulich scheint

## Theorie

### Intervalle

{% lilypond "intervalle" %}
\language "deutsch"
\score {
  <<
    \new Staff \with {instrumentName = "1 (Prime)"} \relative c' {<c ces>1 <c c> <c cis>}
    \addlyrics { vermindert rein übermäßig }
    \new Staff \with {instrumentName = "2 (Sekunde)"} \relative c' {<c deses>1 <c des>2 <c d> <c dis>1}
    \addlyrics { vermindert klein groß übermäßig }
    \new Staff \with {instrumentName = "3 (Terz)"} \relative c' {<c eses>1 <c es>2 <c e> <c eis>1}
    \addlyrics { vermindert klein groß übermäßig }
    \new Staff \with {instrumentName = "4 (Quarte)"} \relative c' {<c fes>1 <c f> <c fis>}
    \addlyrics { vermindert rein übermäßig }
    \new Staff \with {instrumentName = "5 (Quinte)"} \relative c' {<c ges'>1 <c g'> <c gis'>}
    \addlyrics { vermindert rein übermäßig }
    \new Staff \with {instrumentName = "6 (Sexte)"} \relative c' {<c ases'>1 <c as'>2 <c a'> <c ais'>1}
    \addlyrics { vermindert klein groß übermäßig }
    \new Staff \with {instrumentName = "7 (Septime)"} \relative c' {<c heses'>1 <c b'>2 <c h'> <c his'>1}
    \addlyrics { vermindert klein groß übermäßig }
    \new Staff \with {instrumentName = "8 (Oktave)"} \relative c' {<c ces'>1 <c c'> <c cis'>}
    \addlyrics { vermindert rein übermäßig }
    \new Staff \with {instrumentName = "9 (None)"} \relative c' {<c deses'>1 <c des'>2 <c d'> <c dis'>1}
    \addlyrics { vermindert klein groß übermäßig }
    \new Staff \with {instrumentName = "10 (Dezime)"} \relative c' {<c eses'>1 <c es'>2 <c e'> <c eis'>1}
    \addlyrics { vermindert klein groß übermäßig }
  >>
}
{% endlilypond %}

### Umkehr von Intervallen

{%- lilypond "umkehrintervalle" -%}
\score {
  <<
    \new Staff \relative c' { <c e>1 <e c'> }
    \addlyrics { "kleine Terz" "große Sexte" }
    \new Staff \relative c' { <c f>1 <f c'> }
    \addlyrics { "reine Quarte" "reine Quinte" }
  >>
}
{%- endlilypond -%}

- groß->klein
- klein->groß
- rein->rein
- None (9) - altes Intervall (x) = neues Intervall (y)

### Dreiklänge

{%- lilypond "dreiklänge" -%}
\score {
  <<
    \new Staff \with {instrumentName = "Dur"} \relative c' {<c e g>}
    \new Staff \with {instrumentName = "Moll"} \relative c' {<c es g>}
    \new Staff \with {instrumentName = "Vermindert"} \relative c' {<c es ges>}
    \new Staff \with {instrumentName = "Übermäßig"} \relative c' {<c e gis>}
  >>
}
{%- endlilypond -%}

- Dreiklänge: zwei Terzen übereinandergeschichtet:
  - Dur: große Terz + kleine Terz
  - Moll: kleine Terz + große Terz
  - Vermindert: kleine Terz + kleine Terz
  - Übermäßig: große Terz + große Terz

### Umkehr von Dreiklängen

- Umkehr von Dreiklängen: Akkord, bei dem nicht der Grundton ganz unten ist
    - Grundstellung: C-E-G (G oben => Quintlage)
    - erste Umkehrung: E-G-C (C oben => Oktavlage)
    - zweite Umkehrung: G-C-E (E oben => Terzlage)

## Übung

Das glaube ich
