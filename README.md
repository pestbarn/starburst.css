# starburst.css
>Now using real CSS!

### Download: [Sass version](https://github.com/pestbarn/starburst.css/blob/master/source/starburst.scss) | [Vanilla version](https://github.com/pestbarn/starburst.css/blob/master/source/starburst.css) ###
[Official demo](https://codepen.io/lethargic/full/RRYdxX)

## Requirements
* Sass 3.4.22 (Selective Steve) or higher
* Compass 1.0.3 (Polaris) or higher
* *------OR------*
* Just a regular browser *(vanilla version only)*

## Installation: Sass
1. Download or copy this repo (or `git clone git@github.com:pestbarn/starburst.css.git`)
2. Somewhere at the top of your Sass file, insert `@import "starburst";`
3. Insert `@include starburst(opts);` inside the selector of your choice
4. Set the element's `height` and `width`
5. You're done!

## Installation: vanilla
1. Download or copy `starburst.css`
2. Import/link to it like you would with any CSS file
3. Use the class name `starburst` together with
    * `starburst--top`
    * `starburst--bottom`
    * `starburst--both`, and/or
    * `starburst--circular`

## Example
**Using Sass version:**

```html
<div class="burst"></div>
```

```scss
div.burst {
    width: 200px;
    height: 200px;
    @include starburst(both, 15, maroon, darkred, 1, 1);
}
```

**Using vanilla:**

```html
<div class="burst starburst starburst--top starburst--circular"></div>
```

```css
div.burst {
    width: 200px;
    height: 200px;
}
```

## Syntax & options
```scss
@include starburst(align, degree, color1, color2, zindex, circle)
```
| Setting   | Value                                   | Example   | Description                                                                                                  |
| :---      | :---                                    | :---      | :---                                                                                                         |
| *`align`  | `top&#124;bottom&#124;both`             | `both`    | Create starburst in top or bottom halves, or the full 360 degrees (both).                                    |
| *`degree` | `int`                                   | `14`      | Amount of degrees for each line of burst. Smaller number = tighter burst.                                    |
| *`color1` | `hex&#124;rgb(a)&#124;hsl(a)&#124;name` | `maroon`  | Color to apply to burst. *Any valid CSS color will work.*                                                    |
| *`color2` | `hex&#124;rgb(a)&#124;hsl(a)&#124;name` | `#8b0000` | Second color to apply (note: mixing dark and bright colors is not recommended).                              |
| `zindex`  | `int`                                   | `1`       | Z-index for element containing the burst. Will increase with `+1` for all children. **Default:** `null`.     |
| `circle`  | `boolean`                               | `1`       | Set to `1` to create a circular element. Leave blank for default behavior. **Default:** `null`.              |
**\* = Required attributes**

## Variables

| Variable      | Description                             |
| :---          | :---                                    |
| `$align`      | Alignment (`top&#124;bottom&#124;both`) |
| `$degree`     | Angle degree                            |
| `$color1`     | First color                             |
| `$color2`     | Second color                            |
| `$zindex`     | Z-index                                 |
| `$circle`     | Make element circular or not            |
| `$output`     | The gradient output                     |
| `$angleStart` | Set start angle                         |
| `$angleEnd`   | Set end angle                           |
| `$i`          | 1-index incremental counter             |
| `$currAngle`  | Current angle of burst ray              |
| `$notLast`    | Workaround for proper commas            |
| `$currColor`  | Current color of burst ray              |
| `$checkLast`  | Workaround for proper commas            |
| `$nextAngle`  | Add current angle + set angle           |

## Browser support
| Browser         | Version tested               |
| :---            | ---:                         |
| Chrome          | 52.0.2743                    |
| Firefox         | 47.0.1+                      |
| Safari          | 9.1.1                        |
| IE              | *not tested*                 |
| Edge            | *not tested*                 |
| Chrome (mobile) | 52.0.2743.98 (Android 6.0.1) |
| Safari (mobile) | 601.1 (iOS 9.3)              |
| Windows Phone   | *not tested*                 |
**Have you tested in other browsers? Please leave a comment [here](https://github.com/pestbarn/starburst.css/issues/1).**

## Credits
* Special thanks to [Calley Nye](https://about.me/calleynye) for the [original inspiration](http://codepen.io/syren/pen/Ahkrv) which got me started on Starburst.css,
* To [Lea Verou](http://lea.verou.me/) for the exceptional [Prism.js](http://prismjs.com/)
* To [the Codepen team](http://codepen.io/about/) for making my life so much easier)
* To [the H5BP team](https://html5boilerplate.com/)
* To [Nicolas Gallagher](http://nicolasgallagher.com/) and [Jonathan Neal](http://www.jonathantneal.com/) for [Normalize.css](https://necolas.github.io/normalize.css/)
