(() => {
    const _Worker = globalThis.Worker;
    const $Worker = class Worker extends _Worker {
      constructor(url,options) {
        const patch = 'console.log("asdf");';
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        const code = patch + xhr.responseText;
        const newURL = URL.createObjectURL(new Blob([code],{type:"text/javascript"}));
        super(newURL,options);
      }
    };
    globalThis.Worker = $Worker;
  })();
})();
