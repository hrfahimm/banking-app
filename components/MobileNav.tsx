'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiThMenu } from "react-icons/ti";

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section className="w-full max-w-[254px] ">
            <Sheet>
                <SheetTrigger>
                    <TiThMenu size={25} />
                </SheetTrigger>

                <SheetContent side='left' className="border-none bg-white ">

                    <Link href="/" className='mb-12 cursor-pointer flex items-center gap-1 px-4  '>
                        <Image src="/icons/logo.svg" width={34} height={34} alt='logo' />
                        <h1 className="text-26 font-bold font-ibm-plex-serif text-black-1">BANK</h1>
                    </Link>

                    <div className="mobilenav-sheet">
                        <SheetClose asChild >
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}`)
                                    return (



                                        <SheetClose asChild key={item.route} >
                                            <Link href={item.route} key={item.label} className={cn('mobilenav-sheet_close w-full ', { 'bg-bank-gradient': isActive })}>

                                                <div className="relative size-6">
                                                    <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })} />
                                                </div>
                                                <p className={cn('text-16 font-semibold text-black-2', { 'text-white': isActive })} >
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                <p className="text-black-1">USER</p>
                            </nav>
                        </SheetClose>
                        <p className="text-black-1">Footr</p>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav