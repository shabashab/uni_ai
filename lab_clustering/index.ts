interface Point {
  x: number;
  y: number;
}

const calculateDistanceEvclide = (point1: Point, point2: Point): number => {
  const x = Math.pow(point1.x - point2.x, 2);
  const y = Math.pow(point1.y - point2.y, 2);
  return Math.sqrt(x + y);
}

const calculateDistanceCityBlock = (point1: Point, point2: Point): number => {
  const x = Math.abs(point1.x - point2.x);
  const y = Math.abs(point1.y - point2.y);
  return x + y;
}

const generatePoints = (x1: number[], x2: number[]): Point[] => {
  return x1.map((x, index) => ({ x, y: x2[index] }));
}

const getDistances = (points: Point[], caluclateFunction: (point1: Point, point2: Point) => number) => {
  const distances = [] as number[][];

  for (let i = 0; i < points.length; i++) {
    const point1 = points[i];
    let distancesRow = [] as number[];
    for (let j = 0; j < points.length; j++) {
      const point2 = points[j];
  
      distancesRow.push(caluclateFunction(point1, point2));
    }
    distances.push(distancesRow);
  }

  return distances;
}


const getMiddleIndexOfCluster = (cluster: number[]) => {
  return Math.floor(cluster.length / 2);
} 

const getDistacesBetweenClasters = (cluster1: number[], cluster2: number[], points: Point[]) => {
  const distanceBetweenMiddles = calculateDistanceEvclide(points[getMiddleIndexOfCluster(cluster1)], points[getMiddleIndexOfCluster(cluster2)]);

  const minDistance = Math.min(...cluster1.map((el) => Math.min(...cluster2.map((el2) => calculateDistanceEvclide(points[el], points[el2])))));

  return (distanceBetweenMiddles + minDistance) / 2;
}

const mergeTwoClustersWithMinDistance = (clusters: number[][], points: Point[]) => {
  let minDistance = getDistacesBetweenClasters(clusters[0], clusters[1], points);
  let minDistanceIndex = [0, 1];

  for (let i = 1; i < clusters.length; i++) {
    for (let j = 0; j < clusters.length; j++) {
      if (i === j) {
        continue;
      }

      const distance = getDistacesBetweenClasters(clusters[i], clusters[j], points);
      if (distance < minDistance || minDistance === 0) {
        minDistance = distance;
        minDistanceIndex = [i, j];
      }
    }
  }

  const mergedClusters = clusters[minDistanceIndex[0]].concat(clusters[minDistanceIndex[1]]);

  clusters = clusters.filter((el, index) => !minDistanceIndex.includes(index));
  clusters.push(mergedClusters);
  return clusters;
}

const getClustersByDendrites = (cluster: number[][], points: Point[]) => {
  while (cluster.length > 3) {
    cluster = mergeTwoClustersWithMinDistance(cluster, points);
  }

  return cluster;
}

const getMinDistanceIndex = (distances: number[]) => {
  let minDistance = distances[0];
  let minDistanceIndex = 0;
  for (let i = 1; i < distances.length; i++) {
    if (minDistance === 0 || (distances[i] < minDistance && distances[i] !== 0)) {
      minDistance = distances[i];
      minDistanceIndex = i;
    }
  }
  return minDistanceIndex;
}

const getMaxDistaceIndex = (distances: number[]) => {
  let maxDistance = distances[0];
  let maxDistanceIndex = 0;
  for (let i = 1; i < distances.length; i++) {
    if (distances[i] > maxDistance) {
      maxDistance = distances[i];
      maxDistanceIndex = i;
    }
  }
  return maxDistanceIndex;
}


const getClusters = (distances: number[][], getIndexFunction: (distancesRow: number[]) => number): number[][] => {
  const clusters = [] as number[][];

  for (let i = 0; i < distances.length; i++) {
    const distancesRow = distances[i];
    const newDistanceIndex = getIndexFunction(distancesRow);
    
    if (clusters.some((el) => el.includes(newDistanceIndex))) {
      const clusterIndex = clusters.findIndex((el) => el.includes(newDistanceIndex));
  
      if (clusters[clusterIndex].includes(i)) {
        continue;
      } else {
        clusters[clusterIndex].push(i);
      }
  
    } else if (clusters.some((el) => el.includes(i))) {
  
      const clusterIndex = clusters.findIndex((el) => el.includes(i));
  
      if (clusters[clusterIndex].includes(newDistanceIndex)) {
        continue;
      } else {
        clusters[clusterIndex].push(newDistanceIndex);
      }
    } else {
      clusters.push([i, newDistanceIndex]);
    }
  }

  return clusters;
}

const x1 = [119.4, 121.0, 16.6, 114.2, 115.8, 15.2, 17.9, 117.5];
const x2 = [16.6, 18.1, 15.5, 19.4, 23.2, 16.7, 15.7, 15.2];

console.log(`Clustering by closest neighbor:`);
console.log(getClusters(getDistances(generatePoints(x1, x2), calculateDistanceEvclide), getMinDistanceIndex))


const x3 = [121.4, 123.0, 18.6, 116.2, 117.8, 17.2, 19.9, 119.5];
const x4 = [18.6, 10.1, 17.5, 11.4, 15.2, 18.7, 17.7, 17.2];

console.log(`\n\nClustering by farthest neighbor:`);
console.log(getClusters(getDistances(generatePoints(x3,x4), calculateDistanceCityBlock), getMinDistanceIndex))


const x5 = [113.2, 110.2, 113.7, 110.6, 19.1, 125.8, 113.2, 110.2];
const x6 = [24.2, 29.6, 26.6, 20.1, 12.1, 24.1, 24.2, 29.6];

console.log(`\n\nClustering by dendrites:`);
const pointsForDendrites = generatePoints(x5, x6);
const dendritesPoints = pointsForDendrites.map((el, index) => ([index]));
console.log(getClustersByDendrites(dendritesPoints, pointsForDendrites));