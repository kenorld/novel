(function() {var implementors = {};
implementors["salvo_core"] = [{"text":"impl Freeze for CatcherImpl","synthetic":true,"types":[]},{"text":"impl Freeze for Depot","synthetic":true,"types":[]},{"text":"impl Freeze for HttpError","synthetic":true,"types":[]},{"text":"impl Freeze for ReadError","synthetic":true,"types":[]},{"text":"impl !Freeze for FormData","synthetic":true,"types":[]},{"text":"impl Freeze for FilePart","synthetic":true,"types":[]},{"text":"impl Freeze for FieldHeaders","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Freeze for NextField&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Freeze for Field&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; Freeze for FieldData&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for ReadToString&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for Multipart&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as TryStream&gt;::Ok: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for HttpRange","synthetic":true,"types":[]},{"text":"impl !Freeze for Request","synthetic":true,"types":[]},{"text":"impl Freeze for ResponseBody","synthetic":true,"types":[]},{"text":"impl Freeze for Response","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for FnFilter&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Router","synthetic":true,"types":[]},{"text":"impl Freeze for DetectMatched","synthetic":true,"types":[]},{"text":"impl Freeze for PathState","synthetic":true,"types":[]},{"text":"impl Freeze for Timeouts","synthetic":true,"types":[]},{"text":"impl Freeze for Server","synthetic":true,"types":[]},{"text":"impl Freeze for ServerConfig","synthetic":true,"types":[]},{"text":"impl Freeze for HyperHandler","synthetic":true,"types":[]},{"text":"impl Freeze for NamedFile","synthetic":true,"types":[]},{"text":"impl Freeze for NamedFileBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for FileChunk","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for HtmlTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for JsonTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for PlainTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for XmlTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Protocol","synthetic":true,"types":[]}];
implementors["salvo_extra"] = [{"text":"impl Freeze for BasicAuthHandler","synthetic":true,"types":[]},{"text":"impl Freeze for BasicAuthConfig","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for JwtHandler&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Freeze for JwtConfig&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for HeaderExtractor","synthetic":true,"types":[]},{"text":"impl Freeze for FormExtractor","synthetic":true,"types":[]},{"text":"impl Freeze for QueryExtractor","synthetic":true,"types":[]},{"text":"impl Freeze for CookieExtractor","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for Options","synthetic":true,"types":[]},{"text":"impl Freeze for Static","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()