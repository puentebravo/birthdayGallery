import React from "react";
import "./landing.css"

function LandingPage() {
    return (
        <main className="h-screen w-screen">
            <section className="container mx-auto my-64">
            <h1 className="text-white underline text-7xl decoration-violet-600">Welcome!</h1>
            <button className="rounded-full bg-violet-600 text-white mt-10 px-8 py-1 shadow-lg shadow-violet-600/50 font-bold transition duration-300 ease-in-out hover:shadow-violet-600/100">Come on in!</button>
            </section>
        </main>
    )
} 

export default LandingPage;