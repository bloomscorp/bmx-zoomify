# bmx-zoomify

The `bmx-zoomify` package is a simple and lightweight npm package that enables magnifying images on hover. It can be easily integrated into any angular application.

## Installation

To install the `bmx-zoomify` package, you can use npm:

```bash
npm i bmx-zoomify
```

or

```bash
npm i bmx-zoomify --force
```


## Usage

To use the `bmx-zoomify` package, you need to add the `bmx-zoomify` tag your HTML document:

```html
<bmx-zoomify [src]="src"></bmx-zoomify>
```

## src Input

The `bmx-zoomify` package comes with some default interfaces. You need provide the src to render the image.

Note: `width` and `height` attributes are optional

```typescript
import {BmxZoomifyImage} from "./bmx-zoomify-image";

let src: BmxZoomifyImage = {
	url: 'image.jpg', //image url from assets folder or CDN
	altText: '' //alt Text for SEO
};
```

or

```typescript
import {BmxZoomifyImage} from "./bmx-zoomify-image";

let src: BmxZoomifyImage = {
	url: 'image.jpg', //image url from assets folder or CDN
	altText: '', //alt Text for SEO
	width: '500',
	height: '500' //provide height and width for image optimisation
};
```

You can customize the image size by providing your own CSS styles or Tailwind.

```html
<bmx-zoomify [src]="src" class="w-full h-full"></bmx-zoomify>
```
or

```html
<bmx-zoomify [src]="src" class="w-52 h-full"></bmx-zoomify>
```

or

```html
<bmx-zoomify [src]="src" class="zoom-style"></bmx-zoomify>
```

```css
.zoom-style {
	width: 330px;
	height: 250px;
}
```

## Compatibility

The `bmx-zoomify` package works in all modern browsers, including Chrome, Firefox, Safari, and Edge. It may not work in older browsers that do not support CSS variables or CSS transforms.

## License

The `bmx-zoomify` package is released under the MIT License.
