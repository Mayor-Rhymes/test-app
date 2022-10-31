

import {useSelector} from 'react-redux';

const Message = ({message, className}) => {
   
   const user = useSelector(state => state.user.user)
   return(

      <div className={className}>

        <p>{message.text}</p>
        <p style={{ fontSize: '10px' }}>Author: {user.username === message.user.username ? `you` : message.user.username}</p>
        {/* <p>{`${message.time.getHours()} : ${message.time.getMinutes()} : ${message.time.getSeconds()}`}</p> */}


      </div>
   )
}

export default Message