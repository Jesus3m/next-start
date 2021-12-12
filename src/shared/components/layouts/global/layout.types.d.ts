export interface AsideProps {
    width: number,
    handleDragAside: (width: number)=> void,
    positionDragger: number
}

export interface NavProps {
    width: number,
    toggleAside: () => void
}
