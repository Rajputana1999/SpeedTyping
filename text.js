let texts=[
    `In normal BFS of a graph all edges have equal weight but in 0-1 BFS some edges may have 0 weight and some may have 1 weight. In this we will not use bool array to mark visited nodes but at each step we will check for the optimal distance condition. We use double ended queue to store the node. While performing BFS if a edge having weight = 0 is found node is pushed at front of double ended queue and if a edge having weight = 1 is found, it is pushed at back of double ended queue.`
];
let boxText=texts[0];