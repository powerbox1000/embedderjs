var EmbedderJS = {
  embedHTML: function(id, html, hasHTMLTag, w, h){
    if(hasHTMLTag){
      var datauri = "data:text/html;charset=UTF-8,"+encodeURI(html);
      var el = document.createElement("iframe");
      el.setAttribute("src",datauri);
      el.setAttribute("width",w);
      el.setAttribute("height",h);
            document.getElementById(id).appendChild(el);
    }
    else{
      document.getElementById(id).innerHTML = html;
    }
  },
  
  embedHTMLByClass: function(elClass, html, w, h){
     var datauri = "data:text/html;charset=UTF-8,"+encodeURI(html);
     var el = document.createElement("iframe");
     el.setAttribute("src",datauri);
     el.setAttribute("width",w);
     el.setAttribute("height",h);
     for(var i = 0; i <= document.getElementsByClassName("one").length; i++){
        var el = document.createElement("iframe);
        el.setAttribute("src",datauri);
        el.setAttribute("width", w);
        el.setAttribute("height", h);
        document.getElementsByClassName(elClass) [i].appendChild(el);
    };
  }
}
