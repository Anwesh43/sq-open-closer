import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 6
    const position = 'absolute'
    const background = '#1565C0'
    const midX = w / 2
    const midY = h / 2
    const sf = sinify(scale)
    return {
        getBlockOpenStyle(i) {

            const x = midX - size + i * (size + size * sf)
            const y = midY - size / 2
            const left = `${x}px`
            const top = `${y}px`
            const width = `${size * (1 - sf)}px`
            const height = `${size}px`
            return {position, left, top, width, height, background}

        }
    }
}
