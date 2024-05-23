var posts=["hello-world/","posts/air-conditioner/","posts/always-like-this/","posts/hamster/","posts/echo/","posts/i-am-er-ci-yuan-and-try-to-prove/","posts/proof-of-love/","posts/the-common-hamster/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };