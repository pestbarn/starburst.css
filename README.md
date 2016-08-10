# starburst.css
>Everyone said it couldn't be done. I'm glad to prove them wrong. Creating starbursts in CSS will no longer be a problem.

### [Download source](https://github.com/pestbarn/starburst.css/blob/master/source/starburst.scss) ###
[Official demo](http://www.mattias.pw/starburst.css/) | [Demo on codepen.io](http://codepen.io/pestbarn/full/RRYdxX/)

## Requirements
* Sass 3.4.22 (Selective Steve) or higher
* Compass 1.0.3 (Polaris) or higher

## Installation
1. Download or copy `starburst.scss` (or `git clone git@github.com:pestbarn/starburst.css.git`)
2. Somewhere at the top of your Sass file, insert `@import "starburst";`
3. Insert `@include starburst(opts);` inside the selector of your choice
4. Set the element's `height` and `width`
5. You're done!

## Example
**.HTML**
```html
<div class="burst"></div>
```
**.SCSS**
```scss
div.burst {
    width: 200px;
    height: 200px;
    @include starburst(both, 15, maroon, darkred, 1, 1);
}
```

## Syntax & options
```scss
@include starburst(align, deg, color1, color2, zindex, circle)
```
| Setting   | Value                    | Example   | Description                                                                                                  |
| :---      | :---                     | :---      | :---                                                                                                         |
| *`align`  | `top|bottom|both`        | `both`    | Create starburst in top or bottom halves, or the full 360 degrees (both).                                    |
| *`deg`    | `int`                    | `14`      | Amount of degrees for each line of burst. Smaller number = tighter burst.                                    |
| *`color1` | `hex|rgb(a)|hsl(a)|name` | `maroon`  | Color to apply to burst. *Any valid CSS color will work.*                                                    |
| *`color2` | `hex|rgb(a)|hsl(a)|name` | `#8b0000` | Second color to apply (note: mixing dark and bright colors is not recommended).                              |
| `zindex`  | `int`                    | `1`       | Z-index for element containing the burst. Will increase with `+1` for all children. **Default:** `null`.     |
| `circle`  | `boolean`                | `1`       | Set to `1` to create a circular element. Leave blank for default behavior. **Default:** `null`.              |
**\* = Required attributes**

## Variables explained
As you may notice, the variables in the mixin are named with Unicode characters. Here's what they represent:

| Variable | Representation                |
| :---     | :---                          |
| `$⇅`     | Alignment (`top|bottom|both`) |
| `$↭`     | Angle degree                  |
| `$⬔`     | First color                   |
| `$⬕`     | Second color                  |
| `$❏`     | Z-index                       |
| `$⬤`     | Make element circular or not  |
| `$✓`     | The gradient output           |
| `$α`     | Set start angle               |
| `$ω`     | Set end angle                 |
| `$↻`     | 1-index incremental counter   |
| `$✳`     | Current angle of burst ray    |
| `$↩`     | Workaround for proper commas  |
| `$❖`     | Current color of burst ray    |
| `$⮐`     | Workaround for proper commas  |
| `$⩲`     | Add current angle + set angle |

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
*Have you tested in other browsers? Please leave a comment [here](https://github.com/pestbarn/starburst.css/issues/1).*

## Contributing
Please use the `gh-pages` branch when adding your contributions. This way, you'll already have a site configured for use with Haml, Gruntfile, Gemfile, package.json, and Sass + Compass. When contributing, please make a pull request - don't push to `master`.

You'll find the `gh-pages` branch [right here](https://github.com/pestbarn/starburst.css/tree/gh-pages).
