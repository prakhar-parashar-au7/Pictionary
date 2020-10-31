import react from 'react'
import Button from '@material-ui/core/Button'


const ChooseWord = (props) => {

    
    const arr =  ["Stapler", "Desk", "Pay", "cheque", "Work", "computer", "Fax machine", "Phone", "Paper", "Light", "Chair", "Desk lamp", "Notepad", "Paper clips", "Binder", "Calculator", "Calendar", "Sticky notes", "Pens", "Pencils", "Notebook", "Book", "Chairs", "Coffee cup", "Coffee mug", "Thermos", "Hot cup", "Glue", "clipboard", "Paperclips", "Chocolate", "Secretary", "Work", "Paperwork", "Workload", "Employee", "Boredom", "Coffee", "Golf", "Laptop", "Sandcastle", "Monday"]

    const shuffled = arr.sort(() => 0.5 - Math.random());

const words = shuffled.splice(0,3)

console.log(words)

const wordChosen = (index) => {
    props.choseWord(words[index])
}

return (
    <div>

        <h4>Choose a word to draw</h4>
        {
            words.map((word, index) => <Button onClick = {() => wordChosen(index)} variant="contained" color="primary">
                {word}
            </Button>)
        }
    </div>
)

}



export default ChooseWord

