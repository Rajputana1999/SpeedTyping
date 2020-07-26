let texts=[
    `In normal BFS of a graph all edges have equal weight but in 0-1 BFS some edges may have 0 weight and some may have 1 weight. In this we will not use bool array to mark visited nodes but at each step we will check for the optimal distance condition. We use double ended queue to store the node. While performing BFS if a edge having weight = 0 is found node is pushed at front of double ended queue and if a edge having weight = 1 is found, it is pushed at back of double ended queue.

    The approach is similar to Dijkstra that the if the shortest distance to node is relaxed by the previous node then only it will be pushed in the queue.
    
    The above idea works in all cases, when pop a vertex (like Dijkstra), it is the minimum weight vertex among remaining vertices. If there is a 0 weight vertex adjacent to it, then this adjacent has same distance. If there is a 1 weight adjacent, then this adjacent has maximum distance among all vertices in dequeue (because all other vertices are either adjacent of currently popped vertex or adjacent of previously popped vertices).`
];
let boxText=texts[0]+texts[0];