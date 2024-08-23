'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink, NavigationMenuList
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <div className="w-full sticky top-0 left-0">
            <NavigationMenu className="px-10 w-full py-5 justify-between bg-gray-200">
                <Link href="landing">
                    <Image src="next.svg" alt="header-logo" width={45} height={45}/>
                </Link>
                <NavigationMenuList className="flex items-center gap-6 text-base font-medium">
                    <NavigationMenuItem className="hover:underline underline-offset-2">
                        <NavigationMenuLink>
                            <Link  href="#">
                                Home
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:underline underline-offset-2">
                        <NavigationMenuLink>
                            <Link href="#">
                                Review
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:underline underline-offset-2">
                        <NavigationMenuLink>
                            <Link href="#">
                                Appointment
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="hover:underline underline-offset-2">
                        <NavigationMenuLink>
                            <Link href="#">
                                Health Blog
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <div className="flex items-center gap-3">
                            <Button className="px-8 bg-transparent hover:bg-blue-100 hover:scale-105 duration-300 border-blue-700 border-2 rounded-full">
                                Login
                            </Button>
                            <Button className="px-8 bg-transparent hover:bg-blue-100 hover:scale-105 duration-300 border-blue-700 border-2 rounded-full">
                                Sign Up
                            </Button>
                        </div>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}