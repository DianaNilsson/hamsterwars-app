import React, { useState } from 'react';
import './Upload.css'
import { GiPin } from 'react-icons/gi'

const Upload = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [loves, setLoves] = useState('');
    const [favFood, setFavFood] = useState('');

    //For css
    const [nameStatus, setNameStatus] = useState('');
    const [ageStatus, setAgeStatus] = useState('');
    const [lovesStatus, setLovesStatus] = useState('');
    const [favFoodStatus, setFavFoodStatus] = useState('');

    //Success message
    const [successMessage, setSuccessMessage] = useState();

    //Fail message
    const [failMessage, setFailMessage] = useState(false);

    //Validate name input
    const validateNameInput = async (e) => {
        e.preventDefault()
        if (e.target.value.trim().length > 0) {
            setName(e.target.value)
            setNameStatus('input-ok')
        } else {
            setName('')
            setNameStatus('input-not-ok')
        }
    }

    //Validate age input
    const validateAgeInput = async (e) => {
        e.preventDefault()
        if (Number(e.target.value)) {
            setAge(e.target.value)
            setAgeStatus('input-ok')
        } else {
            setAge(null)
            setAgeStatus('input-not-ok')
        }
    }

    //Validate loves input
    const validateLovesInput = async (e) => {
        e.preventDefault()
        if (e.target.value.trim().length > 0) {
            setLoves(e.target.value)
            setLovesStatus('input-ok')
        } else {
            setLoves('')
            setLovesStatus('input-not-ok')
        }
    }

    //Validate favFood input
    const validateFavFoodInput = async (e) => {
        e.preventDefault()
        if (e.target.value.trim().length > 0) {
            setFavFood(e.target.value)
            setFavFoodStatus('input-ok')
        } else {
            setFavFood('')
            setFavFoodStatus('input-not-ok')
        }
    }

    //Fetch (post) hamster
    const uploadHamster = async (e) => {

        e.preventDefault()

        if (name && age && loves && favFood) {

            console.log('test');

            setFailMessage(false)

            const config = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, age, loves, favFood
                })
            };


            try {

                const response = await fetch(`/hamsters`, config);
                const result = await response.json();
                setSuccessMessage(result.msg);

            } catch (error) {
                return error;
            }
        } else {
            console.log('test')
            setFailMessage(true)
        }

    }

    return (
        <section className="upload-section">
            <h2 className="heading to-uppercase">Add a new hamster</h2>

            <form onSubmit={e => uploadHamster(e)} className="upload-form">

                {failMessage && <p className="fail-message">We need more information about your hamster, please fill in all fields</p>}

                <h4>Name</h4>
                <input
                    type="text"
                    name="name"
                    className={nameStatus}
                    onBlur={e => validateNameInput(e)}
                    onKeyDown={e => { e.key === 'Enter' && validateNameInput(e) }}
                />

                <h4>Age</h4>
                <input
                    type="text"
                    name="name"
                    placeholder="ange ålder i siffror"
                    className={ageStatus}
                    onBlur={e => validateAgeInput(e)}
                    onKeyDown={e => { e.key === 'Enter' && validateAgeInput(e) }}
                />

                <h4>Loves</h4>
                <input
                    type="text"
                    name="name"
                    className={lovesStatus}
                    onBlur={e => validateLovesInput(e)}
                    onKeyDown={e => { e.key === 'Enter' && validateLovesInput(e) }}
                />

                <h4>Favourite Food</h4>
                <input
                    type="text"
                    name="name"
                    className={favFoodStatus}
                    onBlur={e => validateFavFoodInput(e)}
                    onKeyDown={e => { e.key === 'Enter' && validateFavFoodInput(e) }}
                />

                <button type="submit" className={name && age && loves && favFood ? 'upload-button-active' : 'upload-button-inactive'} >Upload</button>

            </form>

            {successMessage && <p className="playful-heading success-message">{successMessage}<GiPin className="message-pin" /></p>}

        </section>
    );
};

export default Upload;