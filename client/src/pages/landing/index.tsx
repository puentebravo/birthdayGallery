import React from "react";
import { Link } from "react-router-dom";
// import "./landing.css"

function LandingPage() {

    return (
        <main className="h-screen w-screen">
            <section className="container mx-auto text-center my-64">
            <h1 className="text-white underline text-8xl font-cursive decoration-violet-600">Welcome!</h1>
            <button className="rounded-full bg-violet-600 text-white mt-10 px-8 py-1 mx-7 shadow-lg shadow-violet-600/50 font-bold transition duration-300 ease-in-out hover:shadow-violet-600/100"><Link to="/gallery">Come on in!</Link></button>
            </section>
        </main>
    )
} 

export default LandingPage;