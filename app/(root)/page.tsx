import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';





const Home = () => {
    const loggedIn = { firstName: "Fahim" };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Wellcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transaction efficientlt"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={12932344.83}
                    />


                </header>


            </div>

        </section>

    )
}

export default Home