var posts=["hello-world/","posts/always-like-this/","posts/air-conditioner/","posts/echo/","posts/hamster/","posts/i-am-er-ci-yuan-and-try-to-prove/","posts/proof-of-love/","posts/the-common-hamster/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };