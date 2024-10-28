/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { useLocation } from 'wouter'
import { useStore } from '../store/AppStore'

import logoDarkBrand from '../assets/images/logo_dark.webp'
import { TemperatureSwitch } from '../components/TemperatureSwitch'

import {
  MeatIcon,
  ChickenIcon,
  FishIcon,
  PastaIcon,
  VegetablesIcon,
  SauceIcon,
  DairyIcon,
  EggsIcon,
  CannedIcon,
  SpicesIcon,
  LegumesIcon,
  DriedFruitsIcon,
  HerbsIcon,
  FruitsIcon,
  CerealsIcon,
} from '../utils/icons'
import ButtonOption from '../components/ButtonOption'
import RouletteChores from './RouletteChores'

const INGREDIENTS = {
  omni: [
    {
      name: 'Carne',
      icon: MeatIcon,
      vegan: false,
    },
    {
      name: 'Pollo',
      icon: ChickenIcon,
      vegan: false,
    },
    {
      name: 'Pescado',
      icon: FishIcon,
      vegan: false,
    },
    {
      name: 'Pastas',
      icon: PastaIcon,
      vegan: true,
    },
    {
      name: 'Verduras',
      icon: VegetablesIcon,
      vegan: true,
    },
    {
      name: 'Salsa',
      icon: SauceIcon,
      vegan: true,
    },
    {
      name: 'Lacteos',
      icon: DairyIcon,
      vegan: false,
    },
    {
      name: 'Huevos',
      icon: EggsIcon,
      vegan: false,
    },
    {
      name: 'Enlatados',
      icon: CannedIcon,
      vegan: false,
    },
    {
      name: 'Especias',
      icon: SpicesIcon,
      vegan: true,
    },
    {
      name: 'Legumbres',
      icon: LegumesIcon,
      vegan: true,
    },
    {
      name: 'Frutos Secos',
      icon: DriedFruitsIcon,
      vegan: true,
    },
  ],
  vegetarian: [
    {
      name: 'Hierbas',
      icon: HerbsIcon,
      vegan: true,
    },
    {
      name: 'Frutas',
      icon: FruitsIcon,
      vegan: true,
    },
    {
      name: 'Cereales',
      icon: CerealsIcon,
      vegan: true,
    },
    {
      name: 'Pastas',
      icon: PastaIcon,
      vegan: true,
    },
    {
      name: 'Verduras',
      icon: VegetablesIcon,
      vegan: true,
    },
    {
      name: 'Salsa',
      icon: SauceIcon,
      vegan: true,
    },
    {
      name: 'Lacteos',
      icon: DairyIcon,
      vegan: false,
    },
    {
      name: 'Huevos',
      icon: EggsIcon,
      vegan: false,
    },
    {
      name: 'Enlatados',
      icon: CannedIcon,
      vegan: false,
    },
    {
      name: 'Especias',
      icon: SpicesIcon,
      vegan: true,
    },
    {
      name: 'Legumbres',
      icon: LegumesIcon,
      vegan: true,
    },
    {
      name: 'Frutos Secos',
      icon: DriedFruitsIcon,
      vegan: true,
    },
  ],
}

export default function OptionsMeal() {
  const [_, navigate] = useLocation()
  // const userName = useStore((state) => state.userName)

  //const optionSelected = useStore((state) => state.optionSelected)
  const restrictionSelected = useStore((state) => state.restrictionSelected)
  const ingredientsAdded = useStore((state) => state.ingredientsAdded)
  const updateIngredientsAdded = useStore(
    (state) => state.updateIngredientsAdded
  )
  const mealOptions = useStore((state) => state.mealOptions)
  const updateMealOptions = useStore((state) => state.updateMealOptions)

  const [showRoulette, setShowRoulette] = useState(false)

  const handleNext = (path: string | null) => {
    if (path === null) return
    navigate(path)
  }

  const handleOption = (ingredient: string) => {
    if (mealOptions[restrictionSelected].ingredients.includes(ingredient)) {
      updateMealOptions({
        ...mealOptions,
        [restrictionSelected]: {
          ...mealOptions[restrictionSelected],
          ingredients: mealOptions[restrictionSelected].ingredients.filter(
            (item) => item !== ingredient
          ),
        },
      })
    }

    if (!mealOptions[restrictionSelected].ingredients.includes(ingredient)) {
      updateMealOptions({
        ...mealOptions,
        [restrictionSelected]: {
          ...mealOptions[restrictionSelected],
          ingredients: [
            ...mealOptions[restrictionSelected].ingredients,
            ingredient,
          ],
        },
      })
    }
  }
  return (
    <main className=" bg-bkg relative w-full h-dvh min-h-[700px] flex flex-col items-center overflow-hidden ">
      <div className=" w-full max-w-screen-sm h-full pb-10 flex flex-col items-center justify-evenly overflow-x-hidden gap-2 px-2">
        <a href="/" className=" w-full">
          <img
            className=" w-1/4 max-w-[150px] mx-auto mt-4"
            src={logoDarkBrand}
            alt="Logo Brand Light"
          />
        </a>
        <div className=" mt-10 w-full px-4 flex items-center justify-between ">
          <p className=" w-2/3 md:w-4/5 lg:text-lg font-poppinsMed leading-5">
            Selecciona los ingredientes que tienes en tu cocina:
          </p>
          <TemperatureSwitch
            checked={mealOptions[restrictionSelected].temperature === 'hot'}
            setChecked={() =>
              updateMealOptions({
                ...mealOptions,
                [restrictionSelected]: {
                  ...mealOptions[restrictionSelected],
                  temperature:
                    mealOptions[restrictionSelected].temperature === 'hot'
                      ? 'cold'
                      : 'hot',
                },
              })
            }
          />
        </div>
        <div className=" h-full flex ">
          <section
            className={`w-full h-full px-4 transition-all duration-300 ease-in-out flex-shrink-0 flex flex-col items-center justify-evenly`}
          >
            <div className=" w-full  grid grid-cols-4 grid-rows-3 gap-4 md:gap-6 lg:gap-8 ">
              {(restrictionSelected === 'omni' ||
                restrictionSelected === 'glutenFree') &&
                INGREDIENTS['omni'].map((ingredient) => (
                  <ButtonOption
                    key={ingredient.name}
                    label={ingredient.name}
                    icon={ingredient.icon}
                    isActive={mealOptions[
                      restrictionSelected
                    ].ingredients.includes(ingredient.name)}
                    isDisabled={false}
                    onClick={() => handleOption(ingredient.name)}
                  />
                ))}
              {(restrictionSelected === 'vegan' ||
                restrictionSelected === 'vegetarian') &&
                INGREDIENTS['vegetarian'].map((ingredient) => (
                  <ButtonOption
                    key={ingredient.name}
                    label={ingredient.name}
                    icon={ingredient.icon}
                    isActive={mealOptions[
                      restrictionSelected
                    ].ingredients.includes(ingredient.name)}
                    isDisabled={
                      restrictionSelected === 'vegan'
                        ? !ingredient.vegan
                        : false
                    }
                    onClick={() => handleOption(ingredient.name)}
                  />
                ))}
            </div>
            <div className=" w-full max-w-sm flex flex-col items-center gap-2  ">
              <label htmlFor="name" className=" font-poppinsReg text-sm">
                ¿Quieres agregar algún otro ingrediente?
              </label>
              <input
                type="text"
                id="name"
                value={ingredientsAdded}
                placeholder="Escribe aquí..."
                onChange={(e) => updateIngredientsAdded(e.target.value)}
                className=" w-full placeholder:font-poppinsReg font-poppinsMed outline-primary placeholder:text-placeholder  text-sm rounded-md px-4 py-2"
              />
            </div>
            <div className=" flex items-center justify-between gap-5 w-full">
              <button
                onClick={() => handleNext('/prepare')}
                className={` bg-primary transition font-bold text-xl uppercase w-1/2 py-2 rounded-xl mt-4`}
              >
                Volver
              </button>
              <button
                onClick={() => setShowRoulette(true)}
                disabled={restrictionSelected === null}
                className={` disabled:bg-neutral-300 disabled:text-neutral-500 bg-primary transition font-bold text-xl uppercase w-1/2 py-2 rounded-xl mt-4`}
              >
                Continuar
              </button>
            </div>
          </section>
        </div>
      </div>

      <RouletteChores
        show={showRoulette}
        onClose={() => setShowRoulette(false)}
      />
    </main>
  )
}
