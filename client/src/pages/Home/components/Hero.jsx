const Hero = () => {
  return (
    <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/Home-bg.png')", // Replace with your image URL
        }}
    >
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 text-left text-white font-roboto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Empowering Women <br /> Transforming Futures.
            </h1>
            <p className="text-xl md:text-5xl mb-6 text-[#D1DBFF] md:font-bold">
            Bringing change, one click at a time
            </p>
            <button className="btn btn-primary">Donate Now</button>
        </div>
    </div>
  )
}

export default Hero
