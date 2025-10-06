# 02 Intervalle

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