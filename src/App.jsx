import React from 'react'
import './App.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { PlaylistView } from './components/PlaylistView'
import { Footer } from './components/Footer'
export default function App() {
    return (
        <>
            <Header />
            <div className='player-container'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className="playerview">
                    <PlaylistView />
                </div>
            </div>
            <Footer />
        </>
    )
}