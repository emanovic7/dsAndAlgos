//QUESTON
//DATA STRUCTURE: GRAPHS

/*
In a town, there are N people labelled from 1 to N.
There is a rumor that one of these people is secretly the town judge.
If the town judge exists, then:
The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b]
representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

Example 1:
Input: N = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */

//The judge trusts nobody
//The judge doesn't trust the judge
//everybody trusts the town judge


//SOLUTION

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = []
  this.trustList = []
  for (let i = 0; i < this.vertices; i++) {
    this.adj[i] = []
    this.trustList[i] = []
  }
  this.addEdge = addEdge
}

function addEdge(v, w) { 
  if (this.adj[v].indexOf(w) >= 0) {
    console.log("No matched edge")
    return
  }
  this.adj[v].push(w)
  this.trustList[w].push(v)
  this.edges++
}


var findJudge = function (N, trust) {
  let townGraph = new Graph(N)
  for (let i = 0, len = trust.length; i < len; i++) {
    townGraph.addEdge(trust[i][0] - 1, trust[i][1] - 1)
  }
  for (let i = 0; i < townGraph.vertices; i++) {
    if (townGraph.trustList[i].length === townGraph.vertices - 1) {
      return (townGraph.adj[i].length === 0) ? i + 1 : -1
    }
  }
  return -1
};
