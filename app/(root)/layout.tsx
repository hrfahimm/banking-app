import SideBar from "@/components/SideBar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: 'Fahim', lastName: 'HRF' }
    return (
        // <html lang="en">
        <main className="flex h-screen w-full font-inter">

            <SideBar user={loggedIn} />
            {children}


        </main>
        // </html>
    );
}
