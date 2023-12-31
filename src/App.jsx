import React from 'react'
import { Background, ReactFlow } from 'reactflow'
import './App.css'
import { shallow } from 'zustand/shallow'
import { ReactFlowProvider } from 'reactflow'

import { useStore } from './store'
import Osc from './nodes/Osc'
import Gain from './nodes/Gain'
import Out from './nodes/Out'

const nodeTypes = {
  osc: Osc,
  gain: Gain,
  out: Out
}

const selector = store => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  onEdgesChange: store.onEdgesChange,
  onNodesDelete: store.removeNodes,
  onEdgesDelete:store.onEdgesDelete,
  addEdge: store.addEdge,
  addNode: store.addNode,
})

function App() {
  const store = useStore(selector, shallow)
  const { nodes, edges, onNodesChange, onEdgesChange, addEdge, addNode,onNodesDelete,onEdgesDelete } = store


  return (
    <div className='flex flex-row h-screen w-screen'>
      <div className='w-2/3 '>
        <ReactFlowProvider>
          <ReactFlow
            nodeTypes={nodeTypes}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodesDelete={onNodesDelete}
            onEdgesDelete={onEdgesDelete}
            onConnect={addEdge}
            fitView
          >
            <Background />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
      <div>
        <button onClick={()=>addNode({type:'osc'})}>Add Osc</button>
        <button onClick={()=>addNode({type:'gain'})}>Add Amp</button>
        <button onClick={()=>addNode({type:'out'})}>Add Out</button>
        <pre className='text-left text-xs leading-3'>
          <code>
            {JSON.stringify(store, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default App