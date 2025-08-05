import pfcover from './pfcover.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
    >
      <div className="hero-bg-container absolute inset-0 z-0 flex">
        <div
          className="hero-block"
          style={{
            backgroundImage: `url(${pfcover})`,
            backgroundPosition: '0% 0%',
          }}
        ></div>
        <div
          className="hero-block"
          style={{
            backgroundImage: `url(${pfcover})`,
            backgroundPosition: '33.33% 0%',
          }}
        ></div>
        <div
          className="hero-block"
          style={{
            backgroundImage: `url(${pfcover})`,
            backgroundPosition: '66.66% 0%',
          }}
        ></div>
        <div
          className="hero-block"
          style={{
            backgroundImage: `url(${pfcover})`,
            backgroundPosition: '100% 0%',
          }}
        ></div>
      </div>

      {/* Foreground content */}
      <div className="z-10 relative animate-slide-right">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ashish Kumar</h1>
        <div className="text-xl mb-6 ">
          <div className=''>Frontend Developer | React | Tailwind CSS</div>
        </div>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all ease-in-out inline-block"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
