import React, { Component } from 'react'


const DragAndDrop = ({children, handleDrop}) => {

    let dropRef = React.createRef();

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDragIn = (e) => {
        let div = dropRef.current;
        div.classList.add("active");
        e.preventDefault()
        e.stopPropagation()
        
    }
    const handleDragOut = (e) => {
        let div = dropRef.current;
        div.classList.remove("active");
        e.preventDefault()
        e.stopPropagation()
        
    }
    const handleDropEvent = (event) => {
        console.log("handledrop", event)
        event.preventDefault()
        event.stopPropagation()
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            handleDrop(event.dataTransfer.files[0])
            
            
        }
    }

    React.useEffect(() => {
        let div = dropRef.current;
        console.log("div: ",div);
        div.addEventListener('dragenter', handleDragIn);
        div.addEventListener('dragleave', handleDragOut);
        div.addEventListener('dragover', handleDrag);
        div.addEventListener('drop', handleDropEvent);
    }, []);

    React.useEffect(() => {
        let div = dropRef.current
        return () => {
            
            div.removeEventListener('dragenter', handleDragIn)
            div.removeEventListener('dragleave', handleDragOut)
            div.removeEventListener('dragover', handleDrag)
            div.removeEventListener('drop', handleDropEvent)
        }
    }, []);

    return (
        <div ref={dropRef}>
            {children}
        </div>
    )
}

export default DragAndDrop