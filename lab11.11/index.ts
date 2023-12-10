const generateExponentialRandomVariable = (lambda: number) => {
  const random = Math.random();
  return (-1 / lambda) * Math.log(1 - random);
}

let stream = [] as number[];


const simulateStreamPart = (lambda: number, oprationsNumber: number) => {
  let sum = 0;
  for (let i = 0; i < oprationsNumber; i++) {
    const randomVariable = generateExponentialRandomVariable(lambda);
    stream.push(randomVariable);
    sum += randomVariable;
  }
  return sum / oprationsNumber;
}

const simulateStream = (lambda: number, oprationsNumber: number) => {
  const partNumbers = 100;
  const partOparationsNumber = oprationsNumber / partNumbers;

  let avaragesSum = 0;
  for (let i = 0; i < partNumbers; i++) {
    const avarage = simulateStreamPart(lambda, partOparationsNumber);
    avaragesSum += avarage;
  }

  return avaragesSum / partNumbers;
}

const avarageStream = simulateStream(5, 100);


const OPARATION_FOR_LAMBDA = 10000;


const simulateStreamWithTime = (lambda: number, totalIntervals: number) => {
  let totalEvents = 0;

  for (let i = 0; i < totalIntervals; i++) {
    let time = 0.0;
    let events = 0;

    while (time < 1) {
      time += generateExponentialRandomVariable(lambda);
      if (time < 1) {
        events++;
      }
    }

    totalEvents += events;
  }


  return {
    total: totalEvents,
    avarage: totalEvents / totalIntervals,
  }
}

for (let lambda = 1; lambda <= 10; lambda++) {
  const avarage = simulateStream(lambda, OPARATION_FOR_LAMBDA);
  // console.log(`Stream ${stream}`);
  console.log(`Opations number: ${OPARATION_FOR_LAMBDA}`);
  console.log(`Avarage value for lambda = ${lambda}: ${avarage}`);
  console.log(`Expected value = ${lambda}: ${1 / lambda}`);

  console.log(`\n\n`);

  stream = [] as number[];
}

console.log(`\n\n---------------------\n\n`);

for (let lambda = 0; lambda <= 10; lambda++) {
  const output = simulateStreamWithTime(lambda, OPARATION_FOR_LAMBDA);
  // console.log(`Stream ${stream}`);

  console.log(`Total events: ${OPARATION_FOR_LAMBDA}`);
  console.log(`Average events in interval for lambda = ${lambda}: ${output.avarage}`);
  console.log(`Expected value = ${lambda}`);

  console.log(`\n\n`);

  stream = [] as number[];
}


