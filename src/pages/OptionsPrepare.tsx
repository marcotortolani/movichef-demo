import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'wouter'
import { OptionType, RestrictionType } from '../types/types'
import { useStore } from '../store/AppStore'

import logoDarkBrand from '../assets/images/logo_dark.webp'
import lunchIcon from '../assets/images/SVG/almuerzo.svg'
import dinnerIcon from '../assets/images/SVG/cena.svg'
import dessertsIcon from '../assets/images/SVG/postres.svg'
import drinksIcon from '../assets/images/SVG/bebidas.svg'
import veganOption from '../assets/images/SVG/vegano.svg'
import vegetarianOption from '../assets/images/SVG/vegetariano.svg'
import glutenFreeOption from '../assets/images/SVG/sin-tacc.svg'
import omnivoreOption from '../assets/images/SVG/omnivoro.svg'

export default function OptionsPrepare() {
  const userName = useStore((state) => state.userName)
  const optionSelected = useStore((state) => state.optionSelected)
  const setOptionSelected = useStore((state) => state.setOption)
  const restrictionSelected = useStore((state) => state.restrictionSelected)
  const setRestrictionSelected = useStore((state) => state.setRestriction)
  const restrictionAdded = useStore((state) => state.restrictionAdded)
  const updateRestrictionAdded = useStore(
    (state) => state.updateRestrictionAdded
  )

  const [section, setSection] = useState<1 | 2>(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, navigate] = useLocation()

  const handleOption = (option: OptionType) => {
    if (optionSelected === option) {
      setOptionSelected(null)
      return
    }
    setOptionSelected(option)
  }

  const handleRestriction = (restriction: RestrictionType) => {
    if (restrictionSelected === restriction) {
      setRestrictionSelected(null)
      return
    }
    setRestrictionSelected(restriction)
  }

  const handleNext = (path: string | null) => {
    if (path === null) return
    navigate(path)
  }

  return (
    <main className=" bg-bkg w-full h-dvh flex flex-col items-center justify-evenly overflow-hidden gap-2 px-2">
      <a href="/" className=" w-full">
        <img
          className=" w-1/4 max-w-[150px] mx-auto mt-4"
          src={logoDarkBrand}
          alt="Logo Brand Light"
        />
      </a>
      <div className=" mt-10 flex items-center gap-2">
        <p className=" font-poppinsExtBold uppercase text-xl">{userName}</p>
        <button
          type="button"
          className=" p-1"
          onClick={() => handleNext('/begin-user')}
        >
          <svg
            className=" w-3 h-3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="edit">
                  <g>
                    <path
                      d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>{' '}
                    <polygon
                      fill="none"
                      points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div className=" h-full flex ">
        <section
          className={`${
            section === 1
              ? ' translate-x-0 opacity-100 scale-100'
              : ' -translate-x-[200%] opacity-0 scale-y-75'
          } w-full h-full transition-all duration-300 ease-in-out flex-shrink-0 flex flex-col items-center justify-evenly`}
        >
          <h2 className=" font-black uppercase text-2xl">
            ¿Qué vas a preparar?
          </h2>
          <div className=" w-2/3 grid grid-cols-2 gap-6 ">
            <ButtonOption
              label="Almuerzo"
              icon={lunchIcon}
              onClick={() => handleOption('lunch')}
              isActive={optionSelected === 'lunch'}
            />
            <ButtonOption
              label="Cena"
              icon={dinnerIcon}
              onClick={() => handleOption('dinner')}
              isActive={optionSelected === 'dinner'}
            />
            <ButtonOption
              label="Postres"
              icon={dessertsIcon}
              onClick={() => handleOption('dessert')}
              isActive={optionSelected === 'dessert'}
            />
            <ButtonOption
              label="Bebidas"
              icon={drinksIcon}
              onClick={() => handleOption('drinks')}
              isActive={optionSelected === 'drinks'}
            />
          </div>
          <button
            type="button"
            onClick={() => setSection(2)}
            disabled={optionSelected === null}
            className={` disabled:bg-neutral-300 disabled:text-neutral-500 bg-primary transition font-bold text-xl uppercase w-2/5 py-2 rounded-xl mt-4`}
          >
            Continuar
          </button>
        </section>

        <section
          className={`${
            section === 2
              ? ' -translate-x-full scale-100 '
              : ' translate-x-[200%] scale-y-75'
          } w-full h-full transition-all duration-300 ease-in-out flex-shrink-0 flex flex-col items-center justify-evenly`}
        >
          <h2 className=" font-black uppercase text-2xl">
            ¿Qué prefieres comer?
          </h2>
          <div className=" grid grid-cols-2 gap-6 ">
            <ButtonOption
              label="Vegano"
              icon={veganOption}
              onClick={() => handleRestriction('vegan')}
              isActive={restrictionSelected === 'vegan'}
            />
            <ButtonOption
              label="Vegetariano"
              icon={vegetarianOption}
              onClick={() => handleRestriction('vegetarian')}
              isActive={restrictionSelected === 'vegetarian'}
            />
            <ButtonOption
              label="Sin TACC"
              icon={glutenFreeOption}
              onClick={() => handleRestriction('glutenFree')}
              isActive={restrictionSelected === 'glutenFree'}
            />
            <ButtonOption
              label="Omnívoro"
              icon={omnivoreOption}
              onClick={() => handleRestriction('omni')}
              isActive={restrictionSelected === 'omni'}
            />
          </div>
          <div className=" w-full max-w-sm flex flex-col items-center gap-2 px-4 ">
            <label htmlFor="name" className=" font-poppinsReg text-sm">
              ¿Tienes alguna restricción alimenticia?
            </label>
            <input
              type="text"
              id="name"
              value={restrictionAdded}
              placeholder="Escribe aquí..."
              onChange={(e) => updateRestrictionAdded(e.target.value)}
              className=" w-[90%] placeholder:font-poppinsReg font-poppinsMed outline-primary placeholder:text-placeholder  text-sm rounded-md px-4 py-2"
            />
          </div>
          <div className=" flex items-center justify-center gap-4 w-full px-4">
            <button
              type="button"
              onClick={() => setSection(1)}
              className={` bg-primary transition font-bold text-xl uppercase w-2/5 py-2 rounded-xl mt-4`}
            >
              Volver
            </button>
            <button
              type="button"
              onClick={() => handleNext(optionSelected)}
              disabled={restrictionSelected === null}
              className={` disabled:bg-neutral-300 disabled:text-neutral-500 bg-primary transition font-bold text-xl uppercase w-2/5 py-2 rounded-xl mt-4`}
            >
              Continuar
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
interface ButtonOptionProps {
  label: string
  icon?: string
  isActive: boolean
  onClick: () => void
}

const ButtonOption = ({
  label,
  icon,
  isActive,
  onClick,
}: ButtonOptionProps) => {
  return (
    <div className=" flex flex-col items-center gap-2">
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.6 }}
        animate={{ scale: isActive ? 1.05 : 1 }}
        type="button"
        className={` ${
          isActive
            ? 'bg-primary shadow-lg shadow-black/30 '
            : 'bg-white shadow-md '
        } transition-all duration-200 ease-in-out p-6 size-28 rounded-xl`}
        onClick={onClick}
      >
        {icon && (
          <img className="w-full aspect-square" src={icon} alt={label} />
        )}
      </motion.button>
      <h4 className=" font-bold uppercase">{label}</h4>
    </div>
  )
}
