import react, {useState, forwardRef, useImperativeHandle} from 'react'

const Timer = forwardRef((props, ref) => {

    const [timer, setTimer] = useState(0)



    useImperativeHandle(ref, () => ({

         mantainTimer () {
  
            let myInter =  setInterval(()=> {
              setTimer(timer =>{
                if(timer == 10) {
                    console.log("he")
                    clearInterval(myInter)
                    props.timeUp()
                    setTimer(0)
                return timer} 
                return timer +1
              } )
               
           }, 1000)

    }
}))
    

      
        
       
      
       
       
      

      return (
          <p>{timer}</p>
      )
      

})

export default Timer