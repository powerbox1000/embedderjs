# embedderjs - a script to embed HTML into a web page using iframe.
Just include this script in your web page using <br>
`<script src="path/to/script/embedder.js></script>`<br>
Then, insert a `<div id="my-id"></div>` where you want the embedd, replacing "my-id" with your id.<br>
Finally, insert this script before the `</body>` tag:<br>
`<script>
EmbedderJS.embedHTML("my-id","<html></html>",true);
</script>` of course, replacing my-id with your id and `<html></html>` with the full html.

## What are the inputs?
