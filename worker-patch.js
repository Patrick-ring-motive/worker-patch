
  (() => {
    const _Worker = globalThis.Worker;
    const $Worker = class Worker extends _Worker {
      constructor(url,options) {
        const patch = 'console.log("asdf");';
        const request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send();

if (request.status === 200) {
  console.log(request.responseText);
}

      }
    };
    globalThis.Worker = $Worker;
  })();
})();
