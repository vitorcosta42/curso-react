import React from 'react'
import {BsHeart,BsHeartFill} from 'react-icons/bs'
import './styles.css'

const LikeContainer = ({photo,user,handleLike}) => {
  return (
    <div className="like">
        {photo.likes&&user&&(
            <>
            {photo.likes.includes(user._id)?(
                <BsHeartFill/>
            ):(
                <BsHeart onClick={()=>handleLike(photo)}/>
            )}
            <p>{photo.likes.length} like(s)</p>
            </>
        )}
    </div>
    )
}

export default LikeContainer