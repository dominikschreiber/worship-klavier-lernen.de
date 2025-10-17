---
title: 02 Intervalle, Dreiklänge
date: 2025-10-16
---
"Alle Schrift, von Gott eingegeben", so beginnt die Grundlage dafür, dass wir der ganzen Bibel Glauben schenken. In dieser Einheit tauchen wir in diese Überlegung ein. Außerdem führen wir Intervalle, Umkehr von Intervallen, Dreiklänge, und die Umkehr von Dreiklängen ein.<!-- excerpt -->

## Auftakt

Als Übung letzte Woche hast du "Zehntausend Gründe" gehört. Hör zu Beginn noch einmal das Lied, und hör aktiv zu: was von dem, was du letzte Woche entdeckt hast, ist dir am eindrücklichsten in Erinnerung geblieben?

{%- youtube "4TXFigcT27A" "Zehntausend Gründe - Outbreakband | Glaubenszentrum Live (German Cover of 10000 Reasons)" -%}

## Impuls

Über die nächsten drei Einheiten will ich theologisch den Schwerpunkt darauf legen, dass und warum wir dem Wort der Bibel glauben können, warum wir Jesu Zusagen auf uns beziehen dürfen, und warum wir als Christen die Zu- und Aussagen des Volkes Israel auf uns beziehen dürfen.

{%- cite "2. Timotheus 3,16-17" -%}
Denn alle Schrift, von Gott eingegeben, ist nütze zur Lehre, zur Zurechtweisung, zur Besserung, zur Erziehung in der Gerechtigkeit, dass der Mensch Gottes vollkommen sei, zu allem guten Werk geschickt.
{%- endcite -%}

Dieser Vers hat meiner Reise in die Bibel einen Kickstart gegeben: entweder alle Schrift ist von Gott eingegeben, oder nicht. Stimmt dieser Vers, muss ich alle Schrift ernst nehmen – _alle_ Schrift. Stimmt er nicht, muss ich jeden Vers einzeln hinterfragen.

In meinem Leben habe ich oft genug Gottes Gegenwart, Gottes Liebe und Gottes Wirken erlebt, dass ich mit Sicherheit sagen kann: der Vers kann nicht _nicht_ stimmen.

Stimmt er aber, dann stimmt er nicht nur für mich, sondern auch für dich.

Und stimmt er für dich, heißt das, du kannst – musst – _alle_ Schrift ernst nehmen:

- Auch die, die du nicht erklären kannst.
- Auch die, die du nicht erlebst.
- Auch die, die dir schwer verdaulich erscheint.

Es gibt einen sehr treffenden Spruch (ich habe ihn von [Kris Vallotton](https://krisvallotton.com)):

> Die Bibel ist geschrieben mit der Annahme, dass der Leser mit dem Autor redet.

Das ist entscheidend: du wirst nicht jedes Wort, nicht jeden Gedankengang, nicht jeden Zusammenhang verstehen; erst Recht nicht auf Anhieb. Das soll so sein! Dann nimm diese Grundlage, um mit Gott über deine Situation ins Gespräch zu kommen: _Vater, ich verstehe etwas nicht, kannst du es mir erklären?_

Und dann werde still, und höre zu.

## Theorie

In der letzten Einheit haben wir Töne als Frequenzen von Wellen kennengelernt, und bereits in den Obertönen einer Grundfrequenz die verschiedenen Intervalle gefunden. Heute tauchen wir tiefer in Intervalle ein, kehren sie um, erzeugen Dreiklänge, und kehren wiederum die um<sup>[1](#1)</sup>.

### Intervalle

Das Verhältnis zweier Töne zueinander nennt man _Intervall_.

Bei der Bezeichnung eines Intervalls geht man erst mal vom Abstand innerhalb der _sieben Grundtöne_ A, B, C, D, E, F, und G aus. Das bestimmt den "Namen" des Intervalls<sup>[2](#2)</sup>:

{% lilypond "grundintervalle" %}
\score {
  <<
    \new Staff \with {instrumentName = "1 (Prime)"} \relative c' {<c c>1}
    \new Staff \with {instrumentName = "2 (Sekunde)"} \relative c' {<c d>1}
    \new Staff \with {instrumentName = "3 (Terz)"} \relative c' {<c e>1}
    \new Staff \with {instrumentName = "4 (Quarte)"} \relative c' {<c f>1}
    \new Staff \with {instrumentName = "5 (Quinte)"} \relative c' {<c g'>1}
    \new Staff \with {instrumentName = "6 (Sexte)"} \relative c' {<c a'>1}
    \new Staff \with {instrumentName = "7 (Septime)"} \relative c' {<c b'>1}
    \new Staff \with {instrumentName = "8 (Oktave)"} \relative c' {<c c'>1}
    \new Staff \with {instrumentName = "9 (None)"} \relative c' {<c d'>1}
    \new Staff \with {instrumentName = "10 (Dezime)"} \relative c' {<c e'>1}
  >>
}
{% endlilypond %}

Die sieben Grundtöne können mit &flat; und &sharp; angepasst werden (auch mit mehreren):

- Jedes &flat; _verringert_ den Grundton um einen Halbtonschritt. (C &rarr; {% chord "Db" %} = 1 Halbtonschritt)
- Jedes &sharp; _erhöht_ den Grundton um einen Halbtonschritt. (C &rarr; {% chord "D#" %} = 3 Halbtonschritte)

Intervalle, die nur einmal in der Obertonreihe vorkommen – das sind die am Anfang: Prime, Oktave, Quinte und Quarte – gibt es nur in einer Form: sie sind _rein_. Alle anderen – Terz, Sekunde, Sexte und Septime – gibt es zweimal: _groß_ und _klein_ (wobei groß einen Halbtonschritt mehr umfasst als klein). Das gilt auch für ihre "Oktavierungen": Sekunde und None z.B. sind beide _groß_ und _klein_, Quarte und Undezime sind beide _rein_.

Wird ein Intervall über rein, groß und klein weiter vergrößert, spricht man von (n-fach) _übermäßig_, wird es weiter verkleinert, spricht man von (n-fach) _vermindert_.

In der Praxis kann es helfen, Intervalle als _Anzahl von Halbtonschritten_ (HT) zu zählen. So hätte z.B. eine kleine 3 (Terz) drei Halbtonschritte, eine große jedoch vier.

{% lilypond "intervalle" %}
\language "deutsch"
\score {
  <<
    \new Staff \with {instrumentName = "1 (Prime)"} \relative c' {<c ces>1 <c c> <c cis>}
    \addlyrics { "vermindert (-1HT)" "rein (0HT)" "übermäßig (1HT)" }
    \new Staff \with {instrumentName = "2 (Sekunde)"} \relative c' {<c deses>1 <c des>2 <c d> <c dis>1}
    \addlyrics { "vermindert (0HT)" "klein (1HT)" "groß (2HT)" "übermäßig (3HT)" }
    \new Staff \with {instrumentName = "3 (Terz)"} \relative c' {<c eses>1 <c es>2 <c e> <c eis>1}
    \addlyrics { "vermindert (2HT)" "klein (3HT)" "groß (4HT)" "übermäßig (5HT)" }
    \new Staff \with {instrumentName = "4 (Quarte)"} \relative c' {<c fes>1 <c f> <c fis>}
    \addlyrics { "vermindert (4HT)" "rein (5HT)" "übermäßig (6HT)" }
    \new Staff \with {instrumentName = "5 (Quinte)"} \relative c' {<c ges'>1 <c g'> <c gis'>}
    \addlyrics { "vermindert (6HT)" "rein (7HT)" "übermäßig (8HT)" }
    \new Staff \with {instrumentName = "6 (Sexte)"} \relative c' {<c ases'>1 <c as'>2 <c a'> <c ais'>1}
    \addlyrics { "vermindert (7HT)" "klein (8HT)" "groß (9HT)" "übermäßig (10HT)" }
    \new Staff \with {instrumentName = "7 (Septime)"} \relative c' {<c heses'>1 <c b'>2 <c h'> <c his'>1}
    \addlyrics { "vermindert (9HT)" "klein (10HT)" "groß (11HT)" "übermäßig (12HT)" }
    \new Staff \with {instrumentName = "8 (Oktave)"} \relative c' {<c ces'>1 <c c'> <c cis'>}
    \addlyrics { "vermindert (11HT)" "rein (12HT)" "übermäßig (13HT)" }
    \new Staff \with {instrumentName = "9 (None)"} \relative c' {<c deses'>1 <c des'>2 <c d'> <c dis'>1}
    \addlyrics { "vermindert (12HT)" "klein (13HT)" "groß (14HT)" "übermäßig (15HT)" }
    \new Staff \with {instrumentName = "10 (Dezime)"} \relative c' {<c eses'>1 <c es'>2 <c e'> <c eis'>1}
    \addlyrics { "vermindert (14HT)" "klein (15HT)" "groß (16HT)" "übermäßig (17HT)" }
  >>
}
{% endlilypond %}

### Umkehr von Intervallen

Wie man mit Tönen rechnen kann, so auch mit Intervallen: Innerhalb einer Oktave lassen sich Intervalle _umkehren_. Man nimmt den unteren Ton und oktaviert ihn nach oben (oder andersherum). Dabei ergeben sich folgende "Rechenregeln":

- das neue Grundintervall ergibt sich als: _9 (None) - das alte Grundintervall_, z.B. 9 (None) - 3 (Terz) = 6 (Sexte)
- rein bleibt _rein_ (reine 5 (Quinte) &rarr; reine 4 (Quarte))
- klein und groß _dreht sich um_ (große 3 (Terz) &rarr; kleine 6 (Sexte), kleine 2 (Sekunde) &rarr; große 7 (Septime))

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

### Dreiklänge

Schichtet man zwei Terzen übereinander – so dass der obere Ton der unteren Terz wiederum der untere Ton der oberen Terz ist – so erhält man einen _Dreiklang_. Da es große und kleine Terzen gibt, ergeben sich 2&times;2=4 Möglichkeiten:

- große Terz + kleine Terz = _Dur_
- kleine Terz + große Terz = _Moll_
- kleine Terz + kleine Terz = _Vermindert_
- große Terz + große Terz = _Übermäßig_

{%- lilypond "dreiklänge" -%}
\score {
  <<
    \new ChordNames {\chordmode {c}}
    \new Staff \with {instrumentName = "Dur"} \relative c' {<c e g>}
    \new ChordNames {\chordmode {c:m}}
    \new Staff \with {instrumentName = "Moll"} \relative c' {<c es g>}
    \new ChordNames {\chordmode {c:dim}}
    \new Staff \with {instrumentName = "Vermindert"} \relative c' {<c es ges>}
    \new ChordNames {\chordmode {c:aug}}
    \new Staff \with {instrumentName = "Übermäßig"} \relative c' {<c e gis>}
  >>
}
{%- endlilypond -%}

### Umkehr von Dreiklängen

Wie schon Intervalle, so lassen sich auch _Dreiklänge umkehren_: hierbei wird wahlweise der Grundton oder die unteren beiden Töne einmal hoch oktaviert. So erreicht man drei verschiedene Stellungen:

- Grundstellung: C-E-G (G oben => Quintlage)
- erste Umkehrung: E-G-C (C oben => Oktavlage)
- zweite Umkehrung: G-C-E (E oben => Terzlage)

{%- lilypond "umkehrdreiklänge" -%}
\score {
  <<
    \new ChordNames {\chordmode {c}}
    \new Staff \with {instrumentName = "Grundstellung (Quintlage)"} \relative c' {<c e g>1}
    \new ChordNames {\chordmode {c}}
    \new Staff \with {instrumentName = "erste Umkehrung (Oktavlage)"} \relative c' {<e g c>1}
    \new ChordNames {\chordmode {c}}
    \new Staff \with {instrumentName = "zweite Umkehrung (Terzlage)"} \relative c'' {<g c e>1}
  >>
}
{%- endlilypond -%}

**Dreiklänge beliebig umkehren zu können ist eine unschätzbare Eigenschaft am Klavier.**

Du brauchst dies ständig, um "schöne Tonführungen" zu erreichen: Übergänge von einem Akkord zum nächsten, bei denen sich _möglichst wenig_ ändert.

## Übung

Lass dir das Umkehren von Dreiklängen in Fleisch und Blut übergehen: Nimm die verschiedenen Umkehrungen von C-Dur, und gehe für jede _rückwärts durch den Quintenzirkel_ – und achte auf schöne Tonführung, das heißt auf möglichst wenig Änderungen.

{%- lilypond "dreiklang-umkehr-übung" -%}
\score {
  <<
    \new ChordNames {\chordmode {
      c2 f bes
      es as des
      gis4~ fis b2 e
      a g d
      c
    }}
    \new Staff \with {instrumentName = "Grundstellung"} \relative c' {
      <c e g>2 <c f a> <d f bes>
      <es g bes> <es as c> <f as des>
      <ges bes des>4~ <fis ais cis> <fis b dis>2 <gis b e>
      <a cis e> <a d fis> <b d g>
      <c e g>
    }
    \new Staff \with {instrumentName = "erste Umkehrung"} \relative c' {
      <e g c>2 <f a c> <f bes d>
      <g bes es> <as c es> <as des f>
      <bes des ges>4~ <ais cis fis> <b dis fis>2 <b e gis>
      <cis e a> <d fis a> <d g b>
      <e g c>
    }
    \new Staff \with {instrumentName = "zweite Umkehrung"} \relative c' {
      <g' c e>2 <a c f> <bes d f>
      <bes es g> <c es as> <des f as>
      <des ges bes>4~ <cis fis ais> <dis fis b>2 <e gis b>
      <e a cis> <fis a d> <g b d>
      <g c e>
    }
  >>
}

{%- endlilypond -%}

Übe diese Umkehrungen in der kommenden Woche. Und, einmal mehr, höre aktiv. Diesmal das Worship-Lied "Das glaube ich".

{%- youtube "qcYN-VeGuSQ" "Das Glaube Ich Lyric Video - Hillsong Worship" -%}

---

<sup id="1">1</sup> Viele musikalische Grundlagen findest du in mehr Detail im Buch "The Jazz Piano Book" von Mark Levine (ISBN 9780961470159). Die heutige Einheit greift Kapitel I auf, die Seiten 1-12. [&olarr;](#theorie)

<sup id="2">2</sup> Intervalle ließen sich beliebig weiter zählen und benennen; im Deutschen entstammen ihre Namen dem Lateinischen. In der Praxis gehen wir selten über eine 10 (Dezime) hinaus, die passt grade noch in große Pianisten-Hände. [&olarr;](#intervalle)