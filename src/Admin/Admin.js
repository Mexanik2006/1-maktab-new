import React, { useState } from 'react'
import "./Admin.css"
import axios from "../Api/Api"

function Admin() {
    const [name, setName] = useState("");
    const [overall, setOverall] = useState("");
    const [listening, setListening] = useState("");
    const [reading, setReading] = useState("");
    const [writing, setWriting] = useState("");
    const [speaking, setSpeaking] = useState("");



    const aboutComment = async (e) => {
        e.preventDefault()
        let newComment = {
            name
        }
        console.log(newComment)
        await axios.post("/about/create", newComment)
            .then(res => {
                // setIsLoading(false)
                console.log("Muvafaqqiyatli joylandi")
            }

            )
            .catch(err => {
                // setIsLoading(false)

                console.log(err)
            })
    }

    const ScoreComment = async (e) => {
        e.preventDefault()
        let newComment = {
            overall,
            listening,
            reading,
            writing,
            speaking
        }
        console.log(newComment)
        await axios.post("/score/create", newComment)
            .then(res => {
                // setIsLoading(false)
                console.log("Muvafaqqiyatli joylandi")
            }

            )
            .catch(err => {
                // setIsLoading(false)

                console.log(err)
            })
    }
    return (
        <div className='Admin'>
            <div className="Admin_title">
                <h1>Bu admin page buladi! Xush kelibsiz do'stim</h1>
            </div>

            {/* Maktab uchun hikoya yozish va rasmlar joylash*/}

            <div className="About_left">
                <h1>About qo'shish</h1>
                <form action="" onSubmit={aboutComment}>
                    <input type="text" placeholder='Bu yerga malumotingizni kiriting...' onChange={(e) => setName(e.target.value)} />
                    <button type='submit'>sss</button>
                </form>
            </div>


            <div className="ScoreUcun">
                <h1>Natija kiritish</h1>
                <form action="" onSubmit={ScoreComment}>
                    <input type="text" placeholder='Overall' onChange={(e) => setOverall(e.target.value)} />
                    <input type="text" placeholder='Listening' onChange={(e) => setListening(e.target.value)} />
                    <input type="text" placeholder='Reading' onChange={(e) => setReading(e.target.value)} />
                    <input type="text" placeholder='Writing' onChange={(e) => setWriting(e.target.value)} />
                    <input type="text" placeholder='Speaking' onChange={(e) => setSpeaking(e.target.value)} />
                    <button>nnn</button>
                </form>
            </div>
        </div>
    )
}

export default Admin