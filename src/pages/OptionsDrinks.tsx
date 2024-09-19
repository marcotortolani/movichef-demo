/* eslint-disable @typescript-eslint/no-unused-vars */

import { useLocation } from 'wouter'
import { useStore } from '../store/AppStore'

import logoDarkBrand from '../assets/images/logo_dark.webp'
import { TemperatureSwitch } from '../components/TemperatureSwitch'

import {
  FruitsIcon,
  ChocolateIcon,
  CreamIcon,
  IceCreamIcon,
  HerbsIcon,
  WhiteSpiritsIcon,
  AppetizersIcon,
  MilkIcon,
  InfusionsIcon,
  SoftDrinksIcon,
  WinesIcon,
  IceIcon,
} from '../utils/icons'
import ButtonOption from '../components/ButtonOption'

const INGREDIENTS = [
  {
    name: 'Chocolate',
    icon: ChocolateIcon,
    vegan: true,
  },
  {
    name: 'Frutas',
    icon: FruitsIcon,
    vegan: true,
  },
  {
    name: 'Bebidas Blancas',
    icon: WhiteSpiritsIcon,
    vegan: true,
  },
  {
    name: 'Aperitivos',
    icon: AppetizersIcon,
    vegan: true,
  },
  {
    name: 'Crema',
    icon: CreamIcon,
    vegan: false,
  },
  {
    name: 'Helado',
    icon: IceCreamIcon,
    vegan: false,
  },
  {
    name: 'Leche',
    icon: MilkIcon,
    vegan: false,
  },
  {
    name: 'Infusiones',
    icon: InfusionsIcon,
    vegan: true,
  },
  {
    name: 'Gaseosas',
    icon: SoftDrinksIcon,
    vegan: true,
  },
  {
    name: 'Vinos',
    icon: WinesIcon,
    vegan: true,
  },
  {
    name: 'Hielo',
    icon: IceIcon,
    vegan: true,
  },
  {
    name: 'Hierbas',
    icon: HerbsIcon,
    vegan: true,
  },
]

export default function OptionsDrinks() {
  const [_, navigate] = useLocation()
  // const userName = useStore((state) => state.userName)
  const optionSelected = useStore((state) => state.optionSelected)
  const restrictionSelected = useStore((state) => state.restrictionSelected)
  const restrictionAdded = useStore((state) => state.restrictionAdded)
  const dessertOptions = useStore((state) => state.dessertOptions)
  const updateDessertOptions = useStore((state) => state.updateDessertOptions)

  console.log(optionSelected)
  console.log(restrictionSelected)

  const handleNext = (path: string | null) => {
    if (path === null) return
    navigate(path)
  }

  const handleOption = (ingredient: string) => {
    console.log(ingredient)
    if (dessertOptions.ingredients.includes(ingredient)) {
      updateDessertOptions({
        ...dessertOptions,
        ingredients: dessertOptions.ingredients.filter(
          (item) => item !== ingredient
        ),
      })
    }

    if (!dessertOptions.ingredients.includes(ingredient)) {
      updateDessertOptions({
        ...dessertOptions,
        ingredients: [...dessertOptions.ingredients, ingredient],
      })
    }
  }
  return (
    <main className=" bg-neutral-100 w-full h-dvh pb-20 flex flex-col items-center justify-evenly overflow-x-hidden gap-2 px-2">
      <a href="/" className=" w-full">
        <img
          className=" w-1/4 max-w-[150px] mx-auto mt-4"
          src={logoDarkBrand}
          alt="Logo Brand Light"
        />
      </a>
      <div className=" mt-10 w-full px-4 flex items-center justify-between ">
        <p className=" w-2/3 font-poppinsMed leading-5">
          Selecciona los ingredientes que tienes en tu cocina:
        </p>
        <TemperatureSwitch
          checked={dessertOptions.temperature === 'hot'}
          setChecked={() =>
            updateDessertOptions({
              ...dessertOptions,
              temperature:
                dessertOptions.temperature === 'hot' ? 'cold' : 'hot',
            })
          }
        />
      </div>
      <div className=" h-full flex ">
        <section
          className={`w-full h-full px-4 transition-all duration-300 ease-in-out flex-shrink-0 flex flex-col items-center justify-evenly`}
        >
          <div className=" w-full  grid grid-cols-4 grid-rows-3 gap-4 ">
            {INGREDIENTS.map((ingredient) => (
              <ButtonOption
                key={ingredient.name}
                label={ingredient.name}
                icon={ingredient.icon}
                isActive={dessertOptions.ingredients.includes(ingredient.name)}
                isDisabled={
                  restrictionSelected === 'vegan' ? !ingredient.vegan : false
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
              value={restrictionAdded}
              placeholder="Escribe aquí..."
              onChange={(e) => console.log(e.target.value)}
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
              // onClick={() => handleNext(optionSelected)}
              disabled={restrictionSelected === null}
              className={` disabled:bg-neutral-300 disabled:text-neutral-500 bg-primary transition font-bold text-xl uppercase w-1/2 py-2 rounded-xl mt-4`}
            >
              Continuar
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
