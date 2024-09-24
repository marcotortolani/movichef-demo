import { useState } from 'react'
import { useLocation } from 'wouter'

import logoLightBrand from '../assets/images/logo_light.webp'
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
    <main className="w-screen h-dvh overflow-hidden relative flex flex-col items-center">
      <div className=" absolute top-6 z-40 w-full">
        <img
          className=" w-1/4 max-w-[150px] mx-auto"
          src={logoLightBrand}
          alt="Logo Brand Light"
        />
      </div>
      <div
        className="w-full flex transition-transform duration-300 ease-in-out h-full"
        style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
      >
        <Section
          bkgImage={onboardingBkg01}
          heroImage={onboarding01}
          title="¿No sabes qué cocinar?"
          text="¡Chef Virtual viene a resolverte el problema! Te generamos una receta 100% personalizable."
          button="Comenzar"
          onClick={handleNext}
        />

        <Section
          bkgImage={onboardingBkg02}
          heroImage={onboarding02}
          title="Con tus gustos"
          text="Contanos tus gustos y te vamos a generar recetas con tus ingredientes favoritos"
        />

        <Section
          bkgImage={onboardingBkg03}
          heroImage={onboarding03}
          title="Con lo que tengas"
          text="Si te sobró comida o si tenes alimentos que necesitas utilizar, te daremos una receta para que puedas aprovecharlos"
        />

        <Section
          bkgImage={onboardingBkg01}
          heroImage={onboarding04}
          title="Modo Gourmet"
          text="Si quieres una receta para una ocasión especial, activa este modo para descubrir las sensaciones de la comida"
        />
      </div>

      {page > 1 && (
        <div className=" absolute z-50 w-full max-w-2xl  pointer-events-auto bottom-10 flex items-center justify-between px-8  ">
          <button
            className={` ${
              page === 4 && ' opacity-0 pointer-events-none'
            } font-poppinsReg text-sm text-textLight`}
            onClick={handleEnd}
          >
            Saltar
          </button>
          <div className=" flex items-center gap-1">
            {new Array(3).fill(0).map((_, index) => (
              <span
                key={index}
                className={` ${
                  index + 2 === page
                    ? 'size-2.5 bg-primaryLight'
                    : 'size-1.5 bg-primaryLight/40'
                } rounded-full`}
              ></span>
            ))}
          </div>
          {page < 4 ? (
            <button
              className=" font-poppinsSemBold text-sm text-textLight"
              onClick={handleNext}
            >
              Siguiente
            </button>
          ) : (
            <button
              className=" font-poppinsSemBold text-sm text-textLight"
              onClick={handleEnd}
            >
              Finalizar
            </button>
          )}
        </div>
      )}
    </main>
  )
}

interface SectionProps {
  bkgImage: string
  heroImage: string
  title: string
  text: string
  button?: string
  onClick?: () => void
}

const Section = ({
  bkgImage,
  heroImage,
  title,
  text,
  button,
  onClick,
}: SectionProps) => {
  return (
    <section
      className="w-full z-20 h-full flex-shrink-0 flex flex-col justify-center pointer-events-none items-center gap-10 pt-8 px-4"
      style={{
        backgroundImage: `url(${bkgImage})`,
      }}
    >
      <img
        className=" w-3/4 max-w-[300px]"
        src={heroImage}
        alt="On Boarding image cooking"
      />
      <div className=" w-full max-w-[500px] flex flex-col items-center gap-3">
        <h2 className=" text-textLight font-poppinsExtBold text-xl xl:text-2xl">{title}</h2>
        <p className=" w-[94%] text-textLight leading-5 font-poppinsReg text-sm md:text-base xl:text-lg text-center">
          {text}
        </p>
      </div>
      {button && (
        <button
          onClick={onClick}
          className=" pointer-events-auto bg-primary font-poppinsBold text-2xl uppercase px-6 py-2 rounded-xl mt-4"
        >
          {button}
        </button>
      )}
    </section>
  )
}
