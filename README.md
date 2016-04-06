# jquery-scroll-parallax
simple jquery scroll parallax

###Usage

First, add **parallax.css** & **parallax.js** to your page:

```html
<head>
...
<link rel="stylesheet" href="css/parallax.css">
...
<body>

  <div class="parallax"></div>

...
<script src="parallax.js"></script>
</body>
```

Next, call plugin:

```js
// default options
  var options = {
    speed: 0.5
  };

  new Parallax($('.parallax'), options);
```

###Options

**speed** - speed of parallax element

```
speed: 0.5; //default
speed: 0...1;

1 - no parallax
0 - fixed 
``` 

###Customize
You can simply customize blocks with parallax by yourself.

###Dependencies
```
jQuery 1.7+
```

