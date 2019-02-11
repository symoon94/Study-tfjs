function setup() {
  noCanvas();

  const values = [];
  for (let i =0; i < 15; i++) {
    values[i] = random(0, 100);
  }

  const shape = [5, 3];

  const a = tf.tensor2d(values, shape, 'int32');
  const b = tf.tensor2d(values, shape, 'int32');

  const bb = b.transpose();

  const c = a.matMul(bb);

   a.print()
   bb.print()
   c.print();

  // const vtense = tf.variable(tense);
  // console.log(vtense);

  // tense.print();
  // //console.log(tense.dataSync());
  // console.log(tense.get(0,0,0));

  // tense.set(0,10);

}