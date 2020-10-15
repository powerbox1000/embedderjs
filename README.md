# embedderjs - a script to embed HTML into a web page using iframe.

This can take all types of html scripts!

## How do I use this?
First, clone the repo: `git clone https://github.com/powerbox1000/embedderjs`.<br>
Then, just include this script in your web page using <br>
`<script src="path/to/script/embedder.js></script>`<br>
Then, insert a `<div id="my-id"></div>` where you want the embedd, replacing "my-id" with your id.<br>
Finally, insert this script before the `</body>` tag:<br>
```HTML 
<script>
EmbedderJS.embedHTML("my-id","<html></html>",true, 500, 500);
</script>
``` 

and you, of course, replace my-id with your id and `<html></html>` with the full html. Replace the number 500 with the correct width and height in the order: width, height.

## What are the inputs?

Input | Type | What it does
------|------|------
id | string |the id of the element you want to embed the HTML in.
html | string | The HTML to embed
contains `<html>` tags? | boolean | Set to true if your HTML has `<html>` tags
width (optional) | string or integer | width of embed (only if contains `html` tag is true)
height (optional) | string or integer | height of embed (only if contains `html` tag is true)

## How does this work?

If the `contains html tags` input is set to true, it will generate a `data:` URI and embedd it using iframe.

## Features planned to come in the next release

* Add the style of the iframe
* Add it to multiple elements using classes

## How can I contribute?

Just put ideas and bugs in the "Issues" section!

###### Copyrights

<b>copyright&copy;2020 DevTime Scripting, Inc.</b>
