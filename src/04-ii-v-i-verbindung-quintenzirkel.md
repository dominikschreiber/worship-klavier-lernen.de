---
title: 04 II-V-I Verbindung, Quintenzirkel
date: 2025-10-30
---

## Auftakt

{%- youtube "XgMq-0cD8Lc" "Keiner ist wie du" -%}

## Impuls

{%- cite "Römer 11,17-18" -%}
Wenn nun einige von den Zweigen ausgebrochen wurden, du aber, der du ein wilder Ölzweig bist, in den Ölbaum eingepropft wurdest und Anteil bekommen hast an der Wurzel und dem Saft des Ölbaums, so rühme dich nicht gegenüber den Zweigen. Rühmst du dich aber, so sollst du wissen: Nicht du trägst die Wurzel, sondern die Wurzel trägt dich.
{%- endcite -%}

- Paulus spricht hier vom Volk Israel als Ölbaum, und dass wir Nicht-Juden diesem Ölbaum eingepropft wurden
- Das heißt, wir müssen alles, was die Bibel über das Volk Israel sagt, persönlich nehmen

## Theorie

(TJPB S.17-22)

### II-V-I Verbindung

{%- lilypond "ii-v-i" -%}
\score {
  \new PianoGroup <<
    \new ChordNames {\chordmode {d1:m7 g:7 c:maj d1:m7 g:7 c:maj}}
    \new Staff \relative c' {<f c'>1 <f b> <e b'> <c f>1 <b f'> <b e>}
    \new Staff \relative c {
      \clef bass
      d1 g c, d1 g c,
    }
  >>
}
{%- endlilypond -%}

- iim7-V7-Imaj7 in allen Tonarten
    - 1 im linker Hand
    - 3 und 7 in rechter Hand
    - "schöne Tonführung" minimiert Änderungen: II 3-7, V 7-3, I 3-7 oder II 7-3, V 3-7, I 3-7

### Quintenzirkel

- Quinten aufeinandergeschichtet (oder Quarten abgezogen) um 1x durch alle 12 Töne zu kommen:
    - \# Tonarten: C-G-D-A-E-H-F# (Geh Du Alter Esel, Hole Fische)
    - b Tonarten: C-F-B-Eb-Ab-Db-Gb (Frische Brötchen Essen Asse Des Gesangsvereins)

### Akkorde mit Erweiterungen

- Mit Melodie: Melodie immer der höchste Ton, aber nur eigenständig, wenn nicht sowieso Teil des Akkords
- Weitere Akkordtöne: 9, 11, 13
    - höchste Zahl gibt an, bis zu welchem Akkordton Töne hinzugenommen werden können (C6 vs C13)
- Alterierte Akkordtöne:
    - b minus 1 Halbton
    - \+ plus 1 Halbton

## Übung
