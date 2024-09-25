import { useState } from 'react'
import { useStore } from '../store/AppStore'
import { motion } from 'framer-motion'

import logoDarkBrand from '../assets/images/logo_dark.webp'

const INGREDIENTS = [
  {
    ingredient: 'Pechuga de pollo',
    amount: '1 unidad',
  },
  {
    ingredient: 'Pimiento rojo',
    amount: '1/2 unidad',
  },
  {
    ingredient: 'Pimiento verde',
    amount: '1/2 unidad',
  },
  {
    ingredient: 'Zanahoria',
    amount: '1 unidad',
  },
  {
    ingredient: 'Calabacín',
    amount: '1/2 unidad',
  },
  {
    ingredient: 'Cebolla',
    amount: '1/2 unidad',
  },
  {
    ingredient: 'Ajo',
    amount: '1 unidad',
  },
]

const STEPS = [
  {
    step: 'Paso 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    step: 'Paso 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    step: 'Paso 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    step: 'Paso 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export default function Recipes() {
  const userName = useStore((state) => state.userName)
  const [section, setSection] = useState<'ingredients' | 'preparation'>(
    'ingredients'
  )

  return (
    <main className=" bg-bkg w-full h-dvh flex flex-col items-center gap-6  overflow-hidden">
      <a href="/" className=" w-full">
        <img
          className=" w-1/4 max-w-[150px] mx-auto mt-4"
          src={logoDarkBrand}
          alt="Logo Brand Light"
        />
      </a>
      <div className=" w-full flex flex-col items-center gap-2 px-6">
        <h2 className=" text-center font-poppinsExtBold text-2xl text-black">
          ¡Bienvenido/a {userName}!
        </h2>
        <p className=" font-poppinsReg text-center text-[0.7rem] leading-4 text-textGray">
          Hoy te propongo una deliciosa receta de Pollo con Verduras al Horno.
          Esta receta combina la jugosidad del pollo con la frescura y nutientes
          de las verduras, todo en un solo plato. Es una opción saludable y
          fácil de preparar, ideal para una comida equilibrada y sabrosa.
        </p>
      </div>
      <div className=" w-full">
        <section className=" w-full">
          <h3 className=" w-full bg-primary font-poppinsExtBold text-textDark text-center text-2xl py-1.5">
            Pollo al horno con verduras
          </h3>
          <div className=" w-full px-4 py-4 grid grid-cols-3 ">
            <div className=" py-1.5 flex flex-col items-center justify-between gap-3 border-r-[1px] border-r-black ">
              <p className=" font-poppinsReg text-[0.7rem] leading-3 text-center">
                Tiempo de preparación
              </p>
              <p className=" font-poppinsBold text-sm leading-3 text-center">
                40 min
              </p>
            </div>
            <div className=" py-1.5 flex flex-col items-center justify-between gap-3 border-r-[1px] border-r-black ">
              <p className=" font-poppinsReg text-[0.7rem] leading-3 text-center">
                Tipo de plato
              </p>
              <p className=" font-poppinsBold text-sm leading-3 text-center">
                Principal
              </p>
            </div>
            <div className=" py-1.5 flex flex-col items-center justify-between gap-3">
              <p className=" font-poppinsReg text-[0.7rem] leading-3 text-center">
                Dificultad
              </p>
              <p className=" font-poppinsBold text-sm leading-3 text-center">
                Intermedio
              </p>
            </div>
          </div>
        </section>

        <section className=" w-full">
          <div className=" relative w-full bg-primary grid grid-cols-2">
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: section === 'ingredients' ? 0 : '100%' }}
              className={` absolute left-0 bottom-0 w-1/2 h-[3px] bg-black`}
            ></motion.span>

            <motion.button
              initial={{ fontFamily: 'PoppinsRegular', fontSize: '1rem' }}
              animate={{
                fontFamily:
                  section === 'ingredients' ? 'PoppinsBold' : 'PoppinsRegular',
                fontSize: section === 'ingredients' ? '1.1rem' : '1rem',
              }}
              type="button"
              onClick={() => setSection('ingredients')}
              className={` py-2 text-textDark `}
            >
              Ingredientes
            </motion.button>

            <motion.button
              initial={{ fontFamily: 'PoppinsRegular', fontSize: '1rem' }}
              animate={{
                fontFamily:
                  section === 'preparation' ? 'PoppinsBold' : 'PoppinsRegular',
                fontSize: section === 'preparation' ? '1.1rem' : '1rem',
              }}
              type="button"
              onClick={() => setSection('preparation')}
              className=" py-2 text-textDark"
            >
              Preparación
            </motion.button>
          </div>

          <div className=" w-full h-fit flex ">
            <motion.div
              initial={{ opacity: 100, x: 0 }}
              animate={{
                opacity: section === 'ingredients' ? 100 : 0,
                x: section === 'ingredients' ? 0 : '-100%',
              }}
              className={`${
                section === 'ingredients' ? 'block' : 'hidden'
              } w-full h-fit`}
            >
              <ul className=" w-full h-fit flex flex-col gap-1">
                {INGREDIENTS.map(({ ingredient, amount }, i) => (
                  <ItemIngredient
                    key={`${i}-${ingredient}`}
                    index={i}
                    ingredient={ingredient}
                    amount={amount}
                  />
                ))}
              </ul>
              {INGREDIENTS.length < 10 && (
                <ul className=" w-full mt-1 flex flex-col gap-1">
                  {Array(10)
                    .fill(null)
                    .map((_, i) => (
                      <ItemIngredient
                        key={`${i}-placeholder`}
                        index={INGREDIENTS.length + i}
                        ingredient=""
                        amount=""
                      />
                    ))}
                </ul>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{
                opacity: section === 'preparation' ? 100 : 0,
                x: section === 'preparation' ? 0 : '100%',
              }}
              className={`${
                section === 'preparation' ? 'block' : 'hidden'
              } w-full h-fit`}
            >
              <ul className=" w-full h-fit px-6 py-4 flex flex-col gap-4 overflow-y-scroll">
                {STEPS.map(({ step, text }, i) => (
                  <ItemStep key={`${i}-${step}`} step={step} text={text} />
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  )
}

const ItemIngredient = ({
  index,
  ingredient,
  amount,
}: {
  index: number
  ingredient: string
  amount: string
}) => {
  return (
    <li
      className={`${
        index % 2 ? ' bg-primaryLighter' : 'bg-primaryLight'
      } px-10 py-2.5 min-h-9 grid grid-cols-3`}
    >
      <span className=" col-span-2 font-poppinsSemBold text-sm">
        {ingredient}
      </span>
      <span className=" col-span-1 font-poppinsReg text-sm text-right">
        {amount}
      </span>
    </li>
  )
}

const ItemStep = ({ step, text }: { step: string; text: string }) => {
  return (
    <li className=" w-full h-fit flex flex-col items-start gap-1">
      <span className=" font-poppinsSemBold text-sm text-textDark">{step}</span>
      <p className=" font-poppinsReg text-xs text-textDark">{text}</p>
    </li>
  )
}
