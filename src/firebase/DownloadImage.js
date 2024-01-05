import React, { useEffect, useState } from "react";
import { imageDb } from './Config';
import { getDownloadURL, listAll, ref } from "firebase/storage";

function DownloadImage() {
    const [imgUrl, setImgUrl] = useState([])
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
            {
                imgUrl.map(dataVal => <div>
                    <img src={dataVal} />
                </div>)
            }
        </div>
    )
}

export default DownloadImage