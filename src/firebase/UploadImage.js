import React, { useEffect, useState } from "react";
import { imageDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function UploadImage() {
    const [img, setImg] = useState('')
    const [imgUrl, setImgUrl] = useState([])

    const handleClick = () => {
        if (img !== null) {
            const imgRef = ref(imageDb, `files/${v4()}`)
            uploadBytes(imgRef, img).then(value => {
                console.log(value)
                getDownloadURL(value.ref).then(url => {
                    setImgUrl(data => [...data, url])
                })
            })
        }
    }

    useEffect(() => {
        listAll(ref(imageDb, "files")).then(imgs => {
            console.log(imgs)
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrl(data => [...data, url])
                })
            })
        })
    }, [])

    return (
        <div>
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
        </div>
    )
}

export default UploadImage