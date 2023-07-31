import { applyNodeChanges, applyEdgeChanges } from "reactflow"
import { nanoid } from "nanoid"
import { create } from "zustand"
import { connect,disconnect, removeAudioNode, updateAudioNode, isRunning, toggleAudio, createAudioNode } from "./audio"


const initialNodes = [
    { id: 'a', data: { label: 'Oscillator', frequency: 220 }, position: { x: 0, y: 0 }, type: 'osc' },
    { id: 'b', data: { label: 'gain', gain: 0.50 }, position: { x: 200, y: 0 }, type: 'gain' },
    { id: 'c', data: { label: 'output', isRunning: false }, position: { x: 400, y: 0 }, type: 'out' },
]

const initialEdges = [
    { id: 'e1', source: 'a', target: 'b', animated: true },
    { id: 'e2', source: 'b', target: 'c' },
]

export const useStore = create((set, get) => ({
    nodes: initialNodes,
    edges: [],



    onNodesChange(changes) {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },

    onEdgesChange(changes) {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },

    addEdge(data) {
        const id = nanoid(6);
        const edge = { id, ...data };

        set({ edges: [edge, ...get().edges] });
        connect(data.source, data.target);
    },

    onEdgesDelete(deletedEdges){
        console.log('deletedEdges :>> ', deletedEdges);
        for(const {source,target} of deletedEdges){
            disconnect(source,target);
        }
    },

    addNode(data) {
        const id = nanoid(6);
        const node = { id, data: { label: 'new_node', ...data }, position: { x: data.x, y: data.y }, type: data.type };
        
        // Create the corresponding audio node
        createAudioNode(id, data); 
        
        set({ nodes: [node, ...get().nodes] });
      },
      

    updateNode(id, data) {
        updateAudioNode(id, data);
        set({
            nodes: get().nodes.map(node =>
                node.id === id
                    ? { ...node, data: { ...node.data, ...data } }
                    : node
            )
        });
    },

    removeNodes(nodes) {
        for (const { id } of nodes) {
            removeAudioNode(id)
        }
    },

    isRunning: isRunning(),

    toggleAudio() {
        toggleAudio().then(() => {
            set({ isRunning: isRunning() });
        });
    }
}));