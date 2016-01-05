/*
 * Martin Kersner, m.kersner@gmail.com
 * 2016/01/04
 *
 *
 * TODO load csv
 *      unit tests
 *      real dataset
 */


function dummy_data() {
  var X = math.matrix([[1, 1], 
                       [0, 0]]);
  var y = math.matrix([[1], 
                       [0]]);

  return [X, y];
}

function sigmoid(z) {
  return 1/(1+math.exp(-z));
}

function neg(x) {
 return math.dotMultiply(x, -1)
}

function sigmoid_matrix(z) {
  var ones = math.ones(z.size());
  return math.dotDivide(ones, math.add(math.exp(neg(z)), ones));
}

function gradient_descent(X, y) {
  var cycles = 50;
  var alpha = 0.001;
  var cols = X.size()[1];
  var w = math.ones(cols, 1);

  var h, err;

  for (i = 0; i <= cycles; i++) {
    h = sigmoid_matrix(math.multiply(X, w));
    err = math.subtract(y, h);
    w = math.add(w, math.multiply(X, math.dotMultiply(alpha, err)))
  }
  document.writeln(w)
}
