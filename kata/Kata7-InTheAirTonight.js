const checkAir = function (samples, threshold) {
  let totalPolution = 0;
  const thresholdParcent = threshold * 100;

  for (sample of samples) {
    if ("dirty" === sample) {
      totalPolution += 10;
    }
  }

  if (totalPolution < thresholdParcent) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))