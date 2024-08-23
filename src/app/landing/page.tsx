import {Button} from "@/components/ui/button";


export default function LandingPage() {
    return (
        <div className="relative mx-auto mt-48 flex flex-col items-center gap-16 max-w-3xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-800 rounded-3xl animate-pulseScale blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-800 rounded-3xl animate-pulseScale blur-3xl"></div>
            <div className="flex flex-col items-center gap-3">
                <h1 className="font-black text-6xl">Your Health</h1>
                <h1 className="font-black w-fit text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#2190FF] to-[#b673f8]">Our
                    Responsibility</h1>
            </div>
            <div className="flex flex-col items-center gap-3">
                <p className="text-[#969BA5] text-center text-xl font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis
                    quibusdam non cum rem voluptatem!
                </p>
                <Button
                    className="bg-blue-500 px-24 py-2.5 text-white text-base font-normal rounded-full hover:scale-95 duration-300">
                    <a href="/home">
                        Get Started
                    </a>
                </Button>
            </div>
        </div>
    )
}