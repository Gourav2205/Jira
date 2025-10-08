"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = (
    { children }: AuthLayoutProps) => {

    const pathname = usePathname();

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex items-center justify-between">
                    <Image src="/logof.svg" alt="logo" width={100} height={50} />
                    <Button asChild variant="secondary">
                        <Link href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}>
                            {pathname === "/sign-up" ? "Login" : "Sign Up"}
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout