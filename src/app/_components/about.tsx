import Image from "next/image";
import about1Img from '../../../public/about-1.png';
import about2Img from '../../../public/about-2.png';

export function About() {
    return (
        <section className="bg-[#FDF6ec] py-16 ">
            <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 itens-center">
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                        src={about1Img}
                        alt="Dog"
                        fill
                        quality={100}
                        priority
                        className="object-cover hover:scale-110 duration-300"
                    />
                </div>
            </div>
        </section>
    )
}