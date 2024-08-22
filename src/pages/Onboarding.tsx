import { useState } from 'react'
import { useLocation } from 'wouter'

import loogoLightBrand from '../assets/images/logo_light.webp'
import onboardingBkg01 from '../assets/images/fondo_onboarding_1.webp'
import onboardingBkg02 from '../assets/images/fondo_onboarding_2.webp'
import onboardingBkg03 from '../assets/images/fondo_onboarding_3.webp'

import onboarding01 from '../assets/images/onboarding_1.webp'
import onboarding02 from '../assets/images/onboarding_2.webp'
import onboarding03 from '../assets/images/onboarding_3.webp'
import onboarding04 from '../assets/images/onboarding_4.webp'

export default function Onboarding() {
  const [page, setPage] = useState<number>(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, navigate] = useLocation()

  const handleEnd = () => {
    navigate('/begin-user')
  }

  const handleNext = () => {
    if (page < 4) {
      setPage(page + 1)
    } else {
      handleEnd()
    }
  }

  return (
    <main className="w-screen h-[100dvh] overflow-hidden relative">
      <div className=" absolute top-6 z-40 w-full">
        <img
          className=" w-1/4 mx-auto"
          src={loogoLightBrand}
          alt="Logo Brand Light"
        />
      </div>
      <div
        className="flex transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
      >
        <section
          className="w-full h-full flex-shrink-0 flex flex-col justify-center items-center"
          style={{
            backgroundImage: `url(${onboardingBkg01})`,
          }}
        >
          <img
            className=" w-3/4 max-w-[300px]"
            src={onboarding01}
            alt="On Boarding image cooking"
          />
          <div className=" w-full flex flex-col items-center gap-3">
            <h2 className=" text-white font-bold text-2xl">
              ¿No sabes qué cocinar?
            </h2>
            <div className=" px-2 text-white text-center">
              <p>¡Chef Virtual viene a resolverte el problema!</p>
              <p>Te generamos una receta 100% personalizable.</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className=" bg-yellow-500 font-bold text-2xl uppercase px-6 py-2 rounded-xl mt-4"
          >
            Comenzar
          </button>
        </section>

        <Section
          bkgImage={onboardingBkg02}
          heroImage={onboarding02}
          title="Con tus gustos"
          text="Contanos tus gustos y te vamos a generar recetas con tus ingredientes favoritos"
        >
          <button onClick={handleEnd}>Saltar</button>
          <button onClick={handleNext}>Siguiente</button>
        </Section>

        <Section
          bkgImage={onboardingBkg03}
          heroImage={onboarding03}
          title="Con lo que tengas"
          text="Si te sobró comida o si tenes alimentos que necesitas utilizar,
                te daremos una receta para que puedas aprovecharlos"
        >
          <button onClick={handleEnd}>Saltar</button>
          <button onClick={handleNext}>Siguiente</button>
        </Section>

        <Section
          bkgImage={onboardingBkg01}
          heroImage={onboarding04}
          title="Modo Gourmet"
          text="Si quieres una receta para una ocasión especial, activa este modo para descubrir las sensaciones de la comida"
        >
          <div />
          <button onClick={handleEnd}>Finalizar</button>
        </Section>
      </div>

      {page > 1 && (
        <div className=" absolute bottom-10 pointer-events-none flex items-center justify-center gap-1 mx-auto w-full">
          {new Array(3).fill(0).map((_, index) => (
            <span
              className={` ${
                index + 2 === page ? 'size-3 bg-white' : 'size-2 bg-white/50'
              } rounded-full`}
            ></span>
          ))}
        </div>
      )}
    </main>
  )
}

const Section = ({ bkgImage, heroImage, title, text, children }) => {
  return (
    <section
      className="w-full h-full flex-shrink-0 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bkgImage})`,
      }}
    >
      <img
        className=" w-3/4 max-w-[300px]"
        src={heroImage}
        alt="On Boarding image cooking"
      />
      <div className=" w-full flex flex-col items-center gap-3">
        <h2 className=" text-white font-bold text-2xl">{title}</h2>
        <div className=" px-2 text-white text-center">
          <p>{text}</p>
        </div>
      </div>

      <div className="flex gap-4 w-full justify-between px-4 text-white absolute bottom-10">
        {children}
      </div>
    </section>
  )
}
