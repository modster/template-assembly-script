WebAssembly.instantiateStreaming(fetch("/dist/main.wasm"), {})
  .then((result) => {
    const exports = result.instance.exports;
    document.getElementById("container").textContent =
      "Result: " + exports.add(18, 22);
  })
  .catch(console.error);
