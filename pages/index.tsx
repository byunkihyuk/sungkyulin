import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div>
            <a className="absolute w-32 h-6">
                <Image
                    src="/sungkyulin.svg"
                    alt="Sungkyulin Logo"
                    layout="fill"
                />
            </a>
        </div>
    );
};

export default Home;
