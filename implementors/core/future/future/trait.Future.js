(function() {var implementors = {};
implementors["salvo_core"] = [{"text":"impl&lt;'a, S:&nbsp;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"salvo_core/http/multipart/struct.NextField.html\" title=\"struct salvo_core::http::multipart::NextField\">NextField</a>&lt;'a, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: TryStream,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Ok: <a class=\"trait\" href=\"salvo_core/http/body_chunk/trait.BodyChunk.html\" title=\"trait salvo_core::http::body_chunk::BodyChunk\">BodyChunk</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"salvo_core/http/errors/read_error/enum.ReadError.html\" title=\"enum salvo_core::http::errors::read_error::ReadError\">ReadError</a>&gt;,&nbsp;</span>","synthetic":false,"types":["salvo_core::http::multipart::field::NextField"]},{"text":"impl&lt;S:&nbsp;TryStream + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"salvo_core/http/multipart/struct.ReadToString.html\" title=\"struct salvo_core::http::multipart::ReadToString\">ReadToString</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Ok: <a class=\"trait\" href=\"salvo_core/http/body_chunk/trait.BodyChunk.html\" title=\"trait salvo_core::http::body_chunk::BodyChunk\">BodyChunk</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"salvo_core/http/errors/read_error/enum.ReadError.html\" title=\"enum salvo_core::http::errors::read_error::ReadError\">ReadError</a>&gt;,&nbsp;</span>","synthetic":false,"types":["salvo_core::http::multipart::field::ReadToString"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()