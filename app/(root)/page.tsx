import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';





const Home = () => {
    const loggedIn = { firstName: "HR", lastName: "Fahim", email: 'fahim@gmail.com', id: 'hrf' };
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
            <RightSideBar user={loggedIn} transactions={[]}
                banks={[{}, {}]} />

        </section>

    )
}

export default Home