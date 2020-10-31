
import  React, {useEffect, useRef, useState}  from 'react';



const MeraCanvas = (props) => {
    
    const canvasRef = useRef(null)
    


    const [drawing, setDrawing] = useState(false)
    let canvasContext;
    
    const canvas2Ref = useRef(null)

    useEffect(() => {
         canvasContext = canvasRef.current.getContext("2d");
    }, [])
    

    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();


    const mouseDown = (e) => {
    
        var mouseX = e.pageX -  canvasRef.current.offsetLeft;
        var mouseY = e.pageY -  canvasRef.current.offsetTop;

        setDrawing(true)
       
        addClick(e.pageX -  canvasRef.current.offsetLeft,  e.pageY -  canvasRef.current.offsetTop)
        
        redraw()

        
        
    }

    const mouseMove = (e) => {
       // console.log(props.socket)
        if(drawing == true){
            addClick(e.pageX -  canvasRef.current.offsetLeft,  e.pageY -  canvasRef.current.offsetTop, true) 
            redraw()

  }
}
    
    const mouseUp = (e) => {
        setDrawing(false)
    }
   


    const addClick = (x, y, dragging) => {
      
  clickX.push(x);
  clickY.push(y);
  
  clickDrag.push(dragging);



}


const redraw  = () => {

    canvasContext = canvasRef.current.getContext("2d");
   // canvasContext.clearRect(0,0, canvasContext.canvas.width, canvasContext.canvas.height)
    canvasContext.strokeStyle = "#df4b26";
    canvasContext.lineJoin = "round";
    canvasContext.lineWidth = 5;
    console.log('redrawing')
    for(var i=0; i < clickX.length; i++) {		
        canvasContext.beginPath();
        if(clickDrag[i] && i){
            canvasContext.moveTo(clickX[i-1], clickY[i-1]);
         }else{
            canvasContext.moveTo(clickX[i]-1, clickY[i]);
         }
         canvasContext.lineTo(clickX[i], clickY[i]);
         canvasContext.closePath();
         canvasContext.stroke();
      }

    var imgData = canvasContext.getImageData(0,0,canvasRef.current.width, canvasRef.current.height)
   // console.log(imgData.data)  
    var normalArray = Array.from(imgData.data);
    //console.log(normalArray)
    props.givePixelData(normalArray)
  
}


    return(
        <div>
        <canvas id="canvas" ref={canvasRef} onMouseMove ={mouseMove} onMouseDown ={mouseDown} onMouseUp = {mouseUp}  style ={{border : "solid 2px black"}}></canvas>
        
        </div>
    )
}


export default MeraCanvas