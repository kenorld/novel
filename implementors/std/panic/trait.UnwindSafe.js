(function() {var implementors = {};
implementors["salvo_core"] = [{"text":"impl UnwindSafe for CatcherImpl","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Depot","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HttpError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ReadError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FormData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FilePart","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FieldHeaders","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; !UnwindSafe for NextField&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; !UnwindSafe for Field&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, S&gt; !UnwindSafe for FieldData&lt;'a, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for ReadToString&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; UnwindSafe for Multipart&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as TryStream&gt;::Ok: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HttpRange","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Request","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ResponseBody","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Response","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; UnwindSafe for FnFilter&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Router","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for DetectMatched","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathState","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Server","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TlsServer","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for HyperHandler","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NamedFile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NamedFileBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FileChunk","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for HtmlTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for JsonTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for PlainTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for XmlTextContent&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]}];
implementors["salvo_extra"] = [{"text":"impl !UnwindSafe for BasicAuthHandler","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for BasicAuthConfig","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !UnwindSafe for JwtHandler&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !UnwindSafe for JwtConfig&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HeaderExtractor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FormExtractor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QueryExtractor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CookieExtractor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Options","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Static","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Builder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WsHandler","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for WebSocket","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MissingConnectionUpgrade","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SseEvent","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !UnwindSafe for SseKeepAlive&lt;S&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()