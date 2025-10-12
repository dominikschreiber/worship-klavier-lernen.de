---
title: 03 Kirchentonarten, Septakkorde
date: 2025-10-23
---

## Auftakt

{%- youtube "qcYN-VeGuSQ" "Das Glaube Ich Lyric Video - Hillsong Worship" -%}

## Impuls

In der letzten Einheit haben wir die Grundlage dafür gelegt, dem ganzen Wort der Bibel zu glauben. Heute sehen wir, warum die Bibel so persönlich ist – und du sie auf dich beziehen darfst.

{%- cite "Matthäus 28,18-20" -%}
Und Jesus trat herzu, redete mit ihnen und sprach: Mir ist gegeben alle Gewalt im Himmel und auf Erden. Darom gehet hin und lehret alle Völker: Taufet sie auf den Namen des Vaters, des Sohnes und des Heiligen Geistes und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.
{%- endcite -%}

Mit diesem Auftrag sendet Jesus seine Jünger, und beendet damit das Matthäus-Evangelium. Für uns heute ist ein Element darin besonders hervorstechend: "lehret sie halten alles, was ich euch befohlen habe".

Jesus lehrte seine Jünger, und _alles_, was er sie gelehrt hat, sollten sie auch ihre "Jünger" lehren. Auch: alles, was Jesus gelehrt hat, weiter zu lehren. Deren "Jüngern" ging es genauso, und auch der Generation vor dir, _und auch dir_ gilt Jesu Lehre und Jesu Auftrag.

So ist Jesu Lehre _transitiv_: sie kommt genauso bei dir an, wie sie von Jesus ausgegangen ist. Ganz persönlich, als hätte Jesus genau nur zu dir gesprochen.

Wenn Jesus also sagt

{%- cite "Johannes 10,27" -%}
Meine Schafe hören meine Stimme, und ich kenne sie und sie folgen mir;
{%- endcite -%}

dann spricht er ganz persönlich von _dir_: du _hörst seine Stimme_, er _kennt dich_ und du _folgst ihm_. Wenn du Jesus als den Herrn Deines Lebens angenommen hast, was das Beste ist, was du tun kannst.

Und wie diesen Vers kannst du jeden anderen Vers herausnehmen, und überlegen, was er für dich ganz persönlich bedeutet. Rede mit Jesus darüber, er kennt dich, und du hörst seine Stimme – dein Gebet ist keine Einbahnstraße, erwarte eine Antwort!

## Theorie

(TJPB S.13-16)

### Kirchentonarten

{%- lilypond "kirchentonarten" -%}
\score {
  <<
    \new Staff \with { instrumentName = "I (Ionisch)" } \relative c' { c4 d e f g a b c }
    \new Staff \with { instrumentName = "II (Dorisch)" } \relative c' { d4 e f g a b c d }
    \new Staff \with { instrumentName = "III (Phrygisch)" } \relative c' { e4 f g a b c d e }
    \new Staff \with { instrumentName = "IV (Lydisch)" } \relative c' { f4 g a b c d e f }
    \new Staff \with { instrumentName = "V (Mixolydisch)" } \relative c'' { g4 a b c d e f g }
    \new Staff \with { instrumentName = "VI (Aeolisch)" } \relative c'' { a4 b c d e f g a }
    \new Staff \with { instrumentName = "VII (Lokrisch)" } \relative c'' { b4 c d e f g a b }
  >>
}
{%- endlilypond -%}

- Durtonleiter, von jedem Ton aus begonnen

### Septakkorde

{%- lilypond "septakkorde" -%}
\score {
  <<
    \new Staff \with {instrumentName = "I (Ionisch)"} \relative c' {<c e g b>1}
    \new Staff \with {instrumentName = "II (Dorisch)"} \relative c' {<d f a c>1}
    \new Staff \with {instrumentName = "V (Mixolydisch)"} \relative c' {<g' b d f>1}
  >>
}
{%- endlilypond -%}

- Septakkorde: jeden zweiten Ton aus einer der Kirchentonarten
- I, II und V enthalten alle eine reine Quinte => nur Grundton, Terz und Septime sagen etwas über die Natur des Akkords aus

## Übung

{%- youtube "XgMq-0cD8Lc" "Keiner ist wie du" -%}
