import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { OptionType, RestrictionType } from '../types/types'

type State = {
  userName: string | null
  optionSelected: OptionType
  restrictionSelected: RestrictionType
  restrictionAdded: string
  mealOptions: {
    temperature: 'hot' | 'cold'
    ingredients: string[]
  }
  dessertOptions: {
    temperature: 'hot' | 'cold'
    ingredients: string[]
  }
  drinkOptions: {
    temperature: 'hot' | 'cold'
    ingredients: string[]
  }
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
      userName: null,
      optionSelected: null,
      restrictionSelected: null,
      restrictionAdded: '',
      mealOptions: {
        temperature: 'hot',
        ingredients: [],
      },
      dessertOptions: {
        temperature: 'cold',
        ingredients: [],
      },
      drinkOptions: {
        temperature: 'cold',
        ingredients: [],
      },

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
