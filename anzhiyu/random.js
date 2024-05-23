var posts=["hello-world/","posts/air-conditioner/","posts/always-like-this/","posts/i-am-er-ci-yuan-and-try-to-prove/","posts/hamster/","posts/echo/","posts/proof-of-love/","posts/the-common-hamster/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };