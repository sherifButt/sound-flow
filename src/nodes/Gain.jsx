import React from 'react'
import { Handle } from 'reactflow'
import { shallow } from 'zustand/shallow'

import { useStore } from '../store'

const selector = id => store => ({
    setGain: e => store.updateNode(id, { gain: +e.target.value })
})

export default function Gain({ id, data }) {
const { setGain,} = useStore(selector(id), shallow)
return (
    <div className=' '>
        <Handle type='target' position='left' />
            <div className='rounded-md bg-white shadow-xl  text-gray-800 text-left'>
                <p className='rounded-t-md px-2 py-1 bg-blue-500 text-white text-sm'>Amp</p>
                <label className='flex flex-col px-2 py-1'>
                    <p className='text-xs font-bold mb-2'>Gain</p>
                    <input
                        className='nodrag'
                        type='range'
                        min='0'
                        max='1'
                        step='0.01'
                        value={data.gain}
                        onChange={setGain}
                    />
                    <p className='text-right text-xs'>{data.gain.toFixed(2)}</p>
                </label>
                

            </div>
            <Handle type='source' position='right' />
        </div>
)
}