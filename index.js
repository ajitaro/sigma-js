/**
 * This is a minimal example of sigma. You can use it as a base to write new
 * examples, or reproducible test cases for new issues, for instance.
 */

import Graph from 'graphology'
import Sigma from 'sigma'

const container = document.getElementById('sigma-container')

const graph = new Graph()

graph.addNode('hello', { x: 0, y: 5, size: 10, label: 'Hello', color: 'blue' })
graph.addNode('world', { x: 3, y: 3, size: 8, label: 'World', color: 'red' })
graph.addNode('robot', { x: 4, y: 4, size: 6, label: 'Robot', color: 'pink' })

graph.addEdge('hello', 'world', {
  type: 'line',
  label: 'Real Life',
  size: 4,
  color: 'green',
})
graph.addEdge('robot', 'world')
graph.addEdge('hello', 'robot')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const renderer = new Sigma(graph, container)
