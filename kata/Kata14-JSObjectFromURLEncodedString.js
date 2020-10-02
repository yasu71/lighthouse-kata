const urlDecode = function(text) {
  const splitText = text.split("&");

  let keyAndValue = []
  let object = {};

  for (const split of splitText) {
    keyAndValue = split.split("=")

    const key = keyAndValue[0];
    const value = keyAndValue[1].replace(/%20/g, " ");
    object[key] = value;
  }
    return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);