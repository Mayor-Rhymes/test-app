import {useState, useRef, useEffect} from 'react'
import  {useDispatch, useSelector} from 'react-redux'
import {addMessages} from '../app/features/message/messageSlice'
import Message from '../components/Message'


const Home = () => {


  const dispatch = useDispatch()
  const messages = useSelector(state => state.message.messages)  
  const user = useSelector(state => state.user.user)
  const messageBox = useRef(null)

  const [text, setText] = useState('')
  const [updateMessages, setUpdateMessages] = useState()


  

  const handleSubmit = (e) => {

      e.preventDefault()

      if(text){
        dispatch(addMessages({user: user, text: text}))
        setText("")
        Location.reload()
        
        
        
      } else{
         alert("Please enter a valid message")
      }

  }


  useEffect(() => {

      setUpdateMessages([...messages])
      

  }, [messages, updateMessages])


  

  console.log(user)
  
  return (
    <div className="message-board">
      <div className="conversation" ref={messageBox}>
      {updateMessages?.map((message, index) => 
        
        {

          if(message?.user.username === user.username){

            return <Message message={message} key={index} className={"right"}/>
          } else{

           return <Message message={message} key={index} className={"left"}/>
          }

        }
        
        
      )}

     </div>

      <form className="keyboard" onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Enter message" value={text} onChange={(e) => setText(e.target.value)}/>
        <button>Send</button>

      </form>

    </div>
  )
}

export default Home