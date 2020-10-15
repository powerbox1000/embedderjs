var EmbedderJS = {
  embedHTML: function(id, html, hasHTMLTag, w = null, h = null){
    if(hasHTMLTag){
      var datauri = "data:text/html;charset=UTF-8,"+encodeURI(html);
      document.getElementById(id).innerHTML '<iframe src="'+ datauri +'" width="'+ w +'" height="'+ h +'"></iframe>';
    }
    else{
      document.getElementById(id).innerHTML = html;
    }
  }
}
