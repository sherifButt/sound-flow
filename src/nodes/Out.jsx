import React from 'react'
import { Handle } from 'reactflow'
import { shallow } from 'zustand/shallow'

import { useStore } from '../store'

const selector = store => ({
    isRunning: store.isRunning,
    toggleAudio: store.toggleAudio})

export default function Out({id,data}){
    const {isRunning,toggleAudio} = useStore(selector,shallow)
    return(
        <div>
        <Handle type="target" position="left" />
  
        <div>
         
  
          <button onClick={()=>toggleAudio({})}>
            {isRunning ? (
              <span role="img" aria-label="mute">
                ⏸
              </span>
            ) : (
              <span role="img" aria-label="unmute">
                ▶️
              </span>
            )}
          </button>
        </div>
      </div>
    )
}