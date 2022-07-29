import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, UnfollowUser } from '../../Actions/userAction';
import { makeChats } from '../../Api/ChatRequest';



const User = ({person}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));
    const [chatUser, setChatUser] = useState([]);

    const handleFollow = () =>{
        following ? dispatch(UnfollowUser(person._id, user)) : dispatch(followUser(person._id, user))

        setFollowing((prev) => !prev)
        // startChat();
    }

    // const startChat = async() =>{
    //     const {data} = await makeChats()
    //     const newPost = {
    //         senderId:user._id,
    //         receiverId: person._id,
    //       };
    //     setChatUser(newPost);
    //     console.log(newPost);
    //     try {
    //         dispatch(chatStart(newPost));
    //       } catch (err) {
    //         console.log(err);
    //       }
    // }

  return (

            <div className="follower">
                <div>
                    <img src={person.profilePicture ? serverPublic + person.profilePicture: serverPublic + "defaultProfile.png"} alt="" className='followerImage' />
                    <div className="name">
                        <span>{person.firstname}</span>
                        <span>{person.username}</span>
                    </div>
                </div>
                <button className={following? "button fc-button UnfollowButton": "button fc-button"} onClick={handleFollow} >
                    {following ? "Unfollow" : "Follow"}
                </button>
            </div>
  )
}

export default User