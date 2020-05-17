import React from 'react'
import {useStyle} from './hooks'
const Square = ({i, w, h, scale}) => {
    const {getBlockOpenStyle} = useStyle(w, h, scale)
    return <div style = {getBlockOpenStyle(i)}>
    </div>
}

const SqOpenCloserPresentational = ({w, h, scale, onClick}) => {
    return <div onClick = {onClick}>
        {[0, 1].map(i => <Square key = {`square_${i}`} i = {i} w = {w} h = {h} scale = {scale}/>)}
    </div>
}

export default SqOpenCloserPresentational
