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
  
  embedHTMLByClass: function(elClass, html, hasHTMLTag, w, h){
     var datauri = "data:text/html;charset=UTF-8,"+encodeURI(html);
     var el = document.createElement("iframe");
     el.setAttribute("src",datauri);
     el.setAttribute("width",w);
     el.setAttribute("height",h);
     const parentObject = document.getElementsByClassName(elClass);
    [...parentObject].forEach((parent, i) => {
      parent.appendChild(el)
    });
  }
}
