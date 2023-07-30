# Sound Flow App

Sound Flow App is a React-based application designed to manipulate audio nodes through a simple graphical interface. This application utilizes the Web Audio API and Zustand for state management. It lets users connect different nodes (Oscillator, Gain, and Output) and alter the properties of these nodes to create and manipulate sound.

The oscillator node generates sound based on frequency, and the waveform (sine, square, sawtooth, triangle) you choose. The gain node controls the volume of the sound, and finally, the output node is where the sound is played.

## Main Features

- Graphical audio node network creation using React Flow.
- Node control for Oscillator, Gain, and Output nodes.
- Add and delete nodes in real-time.
- Direct manipulation of nodes and their properties (frequency and gain).
- Easy to understand UI.
- Toggle sound on and off from the output node.
- Shows the state of nodes and edges in real-time on the screen.

## Demo

🔗 [App Demo](jolly-blancmange-5a2379.netlify.app)

## Setup

1. Clone the repository:

```
git clone https://github.com/sherifButt/sound-flow
cd sound-flow
```

2. Install dependencies:

```
npm install
```

3. Run the app:

```
npm start
```

The app will be accessible at [http://localhost:5173](http://localhost:5173).

## Usage

- Drag and drop an "Oscillator" node from the left sidebar to the main canvas area.
- Connect the "Oscillator" node's output to the "Gain" node's input by clicking on the output handle of the "Oscillator" node and dragging the connector to the "Gain" node's input handle.
- Adjust the frequency of the "Oscillator" node using the frequency slider.
- Adjust the gain (volume) of the "Gain" node using the gain slider.
- Toggle audio on/off using the audio toggle button.

## Code Structure

The application code is structured into several modules:

- `App.js`: This is the main React component for the application. It sets up the overall layout and manages the node and edge state.
- `store.js`: This is where Zustand is used to manage the application state. The state includes the current nodes and edges. It also provides actions to manipulate the state such as adding a node or an edge, updating nodes, and removing nodes.
- `Out.js`, `Gain.js`, `Osc.js`: These modules represent the output, gain, and oscillator nodes respectively. They include controls to manipulate the properties of the nodes and to connect/disconnect the nodes.
- `audio.js`: This module handles the interaction with the Web Audio API. It manages the audio context and the audio nodes, provides functions to manipulate the nodes, and controls the audio playback.
- `index.js`: This is the entry point of the application. It renders the `App` component into the DOM.

## Dependencies

The app relies on the following major dependencies:

- React
- ReactFlow: A library for building interactive node-based interfaces.
- Zustand: A minimal state management library.
- nanoid: For generating unique node IDs.

## Credits

The app is built on top of ReactFlow, which provides the core functionality for handling node-based UI interactions.

## License

This project is licensed under the MIT License. Feel free to use and modify it as per the terms of the license.

## Feedback and Contributions

Feedback and contributions to improve the app are welcome. If you find any issues or have suggestions for enhancements, please open an issue or submit a pull request. Let's make this app even better together!