import SectionWrapper from "@/components/reusables/SectionWrapper"

const Home = () => {
    return (
        <main className='flex flex-col space-y-12'>
            <SectionWrapper heading="" classes='pb-40'>
                <div className="flex flex-col justify-center items-center font-bold text-[10rem] xl:text-[25rem] drop-shadow-2xl" style={{ textShadow: "9px 7px #96d8ff" }}>404</div>
            </SectionWrapper>

        </main>
    )
}

export default Home