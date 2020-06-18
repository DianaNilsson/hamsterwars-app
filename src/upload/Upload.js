import React, { useState } from 'react';
import './Upload.css'

const Upload = () => {

    const [name, setName] = useState('Max');
    const [age, setAge] = useState('4');
    const [loves, setLoves] = useState('Swimming');
    const [favFood, setFavfood] = useState('Candy');
    const [imgName, setImgName] = useState('hamster-max.jpg');

    const [successMessage, setSuccessMessage] = useState();

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

            const response = await fetch(`/hamsters`, config);
            const result = await response.json();
            setSuccessMessage(result.msg);

        } catch (error) {
            return error;
        }

    }

    return (
        <section className="uploadSection">
            <h2 className="heading to-uppercase">Add a new hamster</h2>

            <form action="" className="upload-form">
                <h4>Name</h4>
                <input type="text" name="name" />

                <h4>Age</h4>
                <input type="text" name="name" />

                <h4>Loves</h4>
                <input type="text" name="name" />

                <h4>Favourite Food</h4>
                <input type="text" name="name" />

                <h4>Image Name (only name at the moment)</h4>
                <input type="text" name="name" />

                <button type="submit" className="upload-button">Upload Hamster</button>
            </form>

            {successMessage && <p className="playful-heading">{successMessage}</p>}

        </section>
    );
};

export default Upload;