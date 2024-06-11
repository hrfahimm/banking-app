import HeaderTitle from '@/components/HeaderTitle'
import React from 'react'


const Home = () => {
    const loggedIn = { firstName: "Fahim" };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderTitle
                        type="title"
                        title="Wellcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transaction efficientlt"
                    />


                </header>


            </div>

        </section>

    )
}

export default Home