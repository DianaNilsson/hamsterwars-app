import React, { useState } from 'react';
import './Upload.css'

const Upload = () => {

    const [name, setName] = useState('Max');
    const [age, setAge] = useState('4');
    const [loves, setLoves] = useState('Swimming');
    const [favFood, setFavfood] = useState('Candy');
    const [imgName, setImgName] = useState('hamster-max.jpg');

    const uploadHamster = async () => {

        console.log("click")

        const config = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, age, loves, favFood, imgName
            })
        };

        try {
            console.log('startfetch')
            const response = await fetch(`/hamsters`, config);
            const result = await response.json();
            console.log(result.msg)
        } catch (error) {
            return error;
        }

    }

    return (
        <section className="uploadSection">
            <h2 className="heading to-uppercase">Add a new hamster</h2>

            <button onClick={uploadHamster}>Klick</button>
            {/* <form action="" className="upload-hamster-form">

            </form> */}

        </section>
    );
};

export default Upload;