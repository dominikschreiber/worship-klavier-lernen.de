---
title: Intervalle
layout: page.njk
---

## Impuls

> Denn alle Schrift, von Gott eingegeben, ist nütze zur Lehre, zur Zurechtweisung, zur Besserung, zur Erziehung in der Gerechtigkeit, dass der Mensch Gottes vollkommen sei, zu allem guten Werk geschickt.  
> (2. Timotheus 3,16-17)

## Theorie

{% lilypond "prim" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c c>1
  }
}
{% endlilypond %}

{% lilypond "sekund" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c d>1
  }
}
{% endlilypond %}

{% lilypond "terz" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c e>1
  }
}
{% endlilypond %}

{% lilypond "quart" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c f>1
  }
}
{% endlilypond %}

{% lilypond "quint" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c g'>1
  }
}
{% endlilypond %}

{% lilypond "sext" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c a'>1
  }
}
{% endlilypond %}

{% lilypond "septim" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c b'>1
  }
}
{% endlilypond %}

{% lilypond "oktav" %}
\score {
  \relative c' {
    \omit Staff.Clef
    \omit Staff.KeySignature
    \override Score.TimeSignature.transparent = ##t
    <c c'>1
  }
}
{% endlilypond %}