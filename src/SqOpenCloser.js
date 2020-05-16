import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import SqOpenCloserPresentational from './SqOpenCloserPresentational'
const SqOpenCloser = (props) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    return <SqOpenCloserPresentational w = {w} h = {h} onClick = {start} scale = {scale}>
    </SqOpenCloserPresentational>
}
export default SqOpenCloser 
