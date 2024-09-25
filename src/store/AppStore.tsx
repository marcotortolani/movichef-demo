import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { OptionType, RestrictionType } from '../types/types'

type TemperatureType = 'hot' | 'cold'
type OptionsByRestriction = {
  vegan: {
    temperature: TemperatureType
    ingredients: string[]
  }
  vegetarian: {
    temperature: TemperatureType
    ingredients: string[]
  }
  glutenFree: {
    temperature: TemperatureType
    ingredients: string[]
  }
  omni: {
    temperature: TemperatureType
    ingredients: string[]
  }
}

type State = {
  userName: string | null
  optionSelected: OptionType
  restrictionSelected: RestrictionType
  restrictionAdded: string
  mealOptions: OptionsByRestriction
  dessertOptions: OptionsByRestriction
  drinkOptions: OptionsByRestriction
}

const optionsInitial = {
  vegan: {
    temperature: 'hot' as TemperatureType,
    ingredients: [],
  },
  vegetarian: {
    temperature: 'hot' as TemperatureType,
    ingredients: [],
  },
  glutenFree: {
    temperature: 'hot' as TemperatureType,
    ingredients: [],
  },
  omni: {
    temperature: 'hot' as TemperatureType,
    ingredients: [],
  },
}

type Action = {
  updateUserName: (userName: State['userName']) => void
  setOption: (optionSelected: State['optionSelected']) => void
  setRestriction: (restrictionSelected: State['restrictionSelected']) => void
  updateRestrictionAdded: (restrictionAdded: State['restrictionAdded']) => void
  updateMealOptions: (mealOptions: State['mealOptions']) => void
  updateDessertOptions: (dessertOptions: State['dessertOptions']) => void
  updateDrinkOptions: (drinksOptions: State['drinkOptions']) => void
}

export const useStore = create(
  persist<State & Action>(
    (set) => ({
      userName: '',
      optionSelected: 'lunch',
      restrictionSelected: 'omni',
      restrictionAdded: '',
      mealOptions: optionsInitial,
      dessertOptions: optionsInitial,
      drinkOptions: optionsInitial,

      updateUserName: (userName) => set(() => ({ userName: userName })),
      setOption: (optionSelected) =>
        set(() => ({
          optionSelected: optionSelected,
        })),
      setRestriction: (restrictionSelected) =>
        set(() => ({
          restrictionSelected: restrictionSelected,
        })),
      updateRestrictionAdded: (restrictionAdded) =>
        set(() => ({ restrictionAdded: restrictionAdded })),
      updateMealOptions: (mealOptions) =>
        set(() => ({ mealOptions: mealOptions })),
      updateDessertOptions: (dessertOptions) =>
        set(() => ({ dessertOptions: dessertOptions })),
      updateDrinkOptions: (drinksOptions) =>
        set(() => ({ drinkOptions: drinksOptions })),
    }),
    {
      name: 'movichef',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
