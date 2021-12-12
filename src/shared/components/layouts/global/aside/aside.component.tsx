import React, { FC, useRef } from 'react'
import Draggable from 'react-draggable'
import { AsideProps } from '../layout.types'
import { DragResize, SideBar } from './aside.styled'

export const Aside: FC<AsideProps> = ({width, handleDragAside, positionDragger}) => {
    // Manejador del evento de resize al sidebar
    const dragResizer = (e: any, data: any) => {
        handleDragAside(data.deltaX)
    }
    const dragger = useRef(null)
    return (
        <SideBar width={width}>
            {
                ['Hello', 'Jai'].map((x, i) => {
                    return <a href='#' key={i}>{x}</a>
                })
            }
            <Draggable
                nodeRef={dragger}
                axis = 'x'
                defaultPosition = { { x : 0 , y : 0 } }
                // position = { null }
                grid = { [ 25 , 25 ] }
                scale = { 1 }
                onStart = { dragResizer }
                onDrag= { dragResizer }
                onStop = { dragResizer}
            >
                <DragResize ref={dragger} right={positionDragger} />
            </Draggable>
        </SideBar>
    )
}
