---
title: 03 Kirchentonarten, Septakkorde
date: 2025-10-23
---

## Auftakt

{%- youtube "qcYN-VeGuSQ" "Das Glaube Ich Lyric Video - Hillsong Worship" -%}

## Impuls

>  Und Jesus trat herzu, redete mit ihnen und sprach: Mir ist gegeben alle Gewalt im Himmel und auf Erden. Darom gehet hin und lehret alle Völker: Taufet sie auf den Namen des Vaters, des Sohnes und des Heiligen Geistes und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.  
> (Matthäus 28,18-20)

- Jesu Lehre ist transitiv: weil die Jünger lehren sollen, alles zu halten, was Jesus ihnen befohlen hat, gilt die Bibel auch mir ganz persönlich

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
