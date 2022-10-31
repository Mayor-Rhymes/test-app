import {useDispatch, useSelector} from 'react-redux'
import {login} from '../app/features/user/userSlice'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Entry = () => {
  

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user = useSelector(state => state.user.user)
    
    const [username, setUsername] = useState("")
    

    const handleSubmit = (e) => {
       
         e.preventDefault();

         if(username){
            
            dispatch(login({username: username}))
            navigate('/')
         } else{

            alert("Please enter a valid username")
         }

         

         
        
    }


    console.log(user)
    return(

       <form className="entry-form" onSubmit={handleSubmit}>
            
           <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}/>

           <button>Enter Chat</button>
           

       </form>
    )

}



export default Entry;
