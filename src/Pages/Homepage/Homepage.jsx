"use client";
import React from "react";
import Header from "../../components/Header/Header";
import MainSection from "../../components/main/Main";
import "./Homepage.css";

export default function HomePage() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <section className="hero-placeholder">
                    <MainSection></MainSection>
                </section>
            </main>
        </div>
    )
}

