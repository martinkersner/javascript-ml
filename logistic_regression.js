function dummy_data() {
  var X = math.matrix([[1, 1], [0, 0]]);
  var y = math.matrix([1, 0]);

  return [y X];
}

function sigmoid(z) {
  return 1/(1+math.exp(-z));
}

function gradient_descent() {
  var cycles = 200;
  var cols = 2;
  var alpha = 0.001;

  var w = math.ones(cols, 1);
  for (i = 0; i <= cycles; i++) {
    var h = sigmoid(math.multiply(X, w));
    var err = y - h;
  }
}
