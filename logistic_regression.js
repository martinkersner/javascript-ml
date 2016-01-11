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
  var X = [[1, 1], 
           [0, 0]];
  var y = [[1], 
           [0]];


  return [X, y];
}

function dummy_data2() {
  var X = [[5,   20], 
           [25,  67], 
           [85,  21], 
           [100, 33], 
           [220, 88],
           [250, 50], 
           [330, 95],
           [410, 12], 
           [475, 44], 
           [480, 90], 
           [600, 150]];
  var y = [[0],
           [0],
           [0],
           [0],
           [0],
           [0],
           [0],
           [0],
           [0],
           [0],
           [0]]

  return [X, y]
}

function conc_col_ones(data) {
  //ones = math.ones(data.size()[0], 1);
  ones = math.ones(data.length, 1);
  modified_data = math.concat(ones, data);

  return modified_data
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
  var cycles = 500;
  var alpha = 0.001;
  var cols = X.size()[1];
  var w = math.ones(cols, 1);

  X = math.transpose(X);
  y = math.transpose(y);

  var h, err;

  for (i = 0; i <= cycles; i++) {
    h = sigmoid_matrix(math.multiply(math.transpose(w), X));
    err = math.subtract(y, h);
    w = math.add(w, math.multiply(X, math.transpose(math.dotMultiply(alpha, err))))
  }

  return w;
}
