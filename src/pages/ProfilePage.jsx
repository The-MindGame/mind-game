import React from 'react'
import Cup from "../assets/images/cup.png"
import PlayIcon from "../assets/icons/PlayIcon"
import LoadingPage from "../pages/LoadingPage"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StartGamePopup from '../components/StartGamePopup'
import Cookies from 'js-cookie'


function ProfilePage() {

    const [loading, setLoading] = useState(false);
    const [ranking, setRanking] = useState([]);
    const [popup, setPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          setRanking(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error(error)
        });
      },[]);


      const handleSignOut = () => {
        Cookies.remove("user");
        navigate("/home");
      }


  return (

    <div className="profile-page-wrapper">
    {loading ? (<LoadingPage/>) :( <div className='profile-page-wrapper2'>

        <div className="profile-col">
            <div className="profile-info">
                <p>Username :  <span>{ranking[0]?.username}</span></p> 
                <p>Email :  <span>{ranking[0]?.email}</span></p>
                <p>Ranking :  <span>{ranking[0]?.id}</span></p>

                <button className='signout-button' onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>

        <div className="profile-col">
            <div className="ranking-container">
                <div className="ranking-container-row">
                    <h1>Top #10</h1>
                    <img src={Cup} />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Username</th>
                            <th>Ranking</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ranking.map((user)=>{
                            return(<tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.name}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        <button className='play-button' onClick={()=>{setPopup(!popup)}}><PlayIcon /></button>
        <StartGamePopup popup = {popup} setPopup = {setPopup}/>
        </div>
    </div>)}
    </div>
  )
}

export default ProfilePage