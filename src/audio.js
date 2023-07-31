const context = new AudioContext();
const nodes = new Map();

const osc = context.createOscillator();
osc.frequency.value = 220;
osc.type = 'square';
osc.start();

const amp = context.createGain();
amp.gain.value = 0.5;

const out = context.destination;

nodes.set('a', osc);
nodes.set('b', amp);
nodes.set('c', out);


export function updateAudioNode(id, data) {
    const node = nodes.get(id);

    for (const [key, val] of Object.entries(data)) {
        if (node[key] instanceof AudioParam) {
            node[key].value = val;
        } else {
            node[key] = val;
        }
    }
}

export function removeAudioNode(id) {
    const node = nodes.get(id);

    node.disconnect();
    node.stop?.();

    nodes.delete(id);
}

export function connect(sourceId, targetId) {
    const source = nodes.get(sourceId);
    const target = nodes.get(targetId);

    source.connect(target);
}

export function isRunning(id) {
    const node = nodes.get(id);
    
    return context.state === 'running';
}

export function toggleAudio(id) {
    return isRunning(id) ? context.suspend() : context.resume();
}

export function createAudioNode(id, data) {
    let node;

    switch (data.type) {
        case 'osc':
            node = context.createOscillator();
            node.frequency.value = data.frequency || 220;
            node.type = data.waveType || 'square';
            node.start();
            break;
        case 'gain':
            node = context.createGain();
            node.gain.value = data.gain || 0.5;
            break;
        case 'out':
            node = context.destination;
            break;
        // Add more cases if you have other types of nodes
        default:
            throw new Error(`Unsupported node type: ${data.type}`);
    }

    nodes.set(id, node);
}
