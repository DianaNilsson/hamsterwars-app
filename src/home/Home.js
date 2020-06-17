import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home-section">
            <h3 className="subheader">Welcome to this Hamsterwar Application</h3>
            <p>In this playful app you can vote for the cutest hamster. You can also upload your own hamster or just explore cute hamster pictures and funny hamster facts.</p>
            <p>Detta projekt är en del i kursen Effektiv Frontend-utveckling som ingår i utbildningen Frontend-utveckling på IT-Högskolan i Göteborg/Stockholm. I projektet har frontend och backend kombinerats med React på frontend-sidan och Node.js, Express och cloud-database Google Firestore på backendsidan. Detta är mitt första React-projekt och det har varit mycket kul! <span className="sign-by">/Diana</span></p>
        </section>
    );
};

export default Home;