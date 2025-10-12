# worship-klavier-lernen.de

This is a workshop (in german) that teaches playing piano in a church/worship setting. It's a work in progress, accompanying the small group "Liedbegleitung am Klavier" that I host from October '25 to February '26 at our church, [Freie evangelische Gemeinde Limburg](https://feg-limburg.de). See the result at [worship-klavier-lernen.de](https://worship-klavier-lernen.de).

Technically, it is a static site generated with [11ty](https://11ty.dev), with a heavy focus/customization for musical notation. It's built with a GitHub action and served as GitHub Pages from the [`gh-pages`](https://github.com/dominikschreiber/worship-klavier-lernen.de/tree/gh-pages) branch.

## Setup

```sh
brew install node lilypond # globally install node and lilypond
git clone git@github.com:dominikschreiber/worship-klavier-lernen.de.git
cd worship-klavier-lernen.de
npm ci
npm start # npx @11ty/eleventy --serve, starts a livereload server at localhost:8080
```

## 11ty extensions

### `lilypond` paired shortcode

```njk
{%- lilypond "scale" -%}
\score {
  \relative c' { c4 d e f g a b c }
}
{%- endlilypond -%}
<!-- results in -->
<img src="/assets/svg/scale.svg" class="lilypond" alt="scale">
```

Compiles the content to an svg at `assets/svg/<id>.svg` (with an additional `:root{color-scheme:light dark}`) and returns an `<img>` that references it.

In a previous version, it directly returned the `<svg>` content from lilypond, to inline it into the page. But the SVGs get large rather quickly, and inexplainable rendering errors appear, if they are inlined.

### `cite` paired shortcode

```njk
{%- cite "John 3,16" -%}
For God so loved the world,[9] that he gave his only Son, that whoever believes in him should not perish but have eternal life.
{%- endcite -%}
<!-- results in -->
<blockquote class="cite">
  <p>For God so loved the world,[9] that he gave his only Son, that whoever believes in him should not perish but have eternal life.</p>
  <footer>John 3,16</footer>
</blockquote>
```

A blockquote with a reference set to the bottom right.

### `chord` shortcode

```njk
{% chord "Eb7#9" %}
<!-- results in -->
<span class="chord chord--flat">E&flat;<sup>7&sharp;9</sup></span>
```

Turns easily to write chord notation into more elaborate html.

### `frac` shortcode

```njk
{% frac 1 2 %}
<!-- results in -->
<sup>1</sup>&frasl;<sub>2</sub>
```

Creates a fraction.

### `youtube` shortcode

```njk
{%- youtube "dQw4w9WgXcQ" "Totally not Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)" -%}
<!-- results in -->
<div class="youtube"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Totally not Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
```

Creates a youtube embed with 100% width and automatic 16:9 ratio.

### `squircle` paired shortcode

```njk
{%- squircle "red" -%}
A red squircle
{%- endsquircle -%}
<!-- results in -->
<span class="squircle" style="--bg: red">A red squircle</span>
```

Creates a squircle with the background passed as 1st argument, and automated white/black contrast text for the content.
