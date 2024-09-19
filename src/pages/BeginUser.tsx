//import { useState } from 'react'
import { useLocation } from 'wouter'

import { useStore } from '../store/AppStore'

import logoDarkBrand from '../assets/images/logo_dark.webp'
import beginImage from '../assets/images/comenzar.webp'
export default function BeginUser() {
  const userName = useStore((state) => state.userName)
  const updateUserName = useStore((state) => state.updateUserName)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, navigate] = useLocation()
  const handleNext = () => {
    navigate('/prepare')
  }
  return (
    <main className=" bg-bkg w-full h-dvh overflow-y-scroll flex flex-col items-center justify-evenly gap-2 px-6 pb-6">
      <div className="  z-40 w-full">
        <img
          className=" w-1/4 max-w-[150px] mx-auto"
          src={logoDarkBrand}
          alt="Logo Brand Light"
        />
      </div>

      <h2 className=" font-poppinsExtBold font-black uppercase text-2xl">
        ¡Empecemos!
      </h2>
      <p className=" text-textGray font-poppinsReg text-center text-xs leading-4 ">
        A continuación, te presentaremos algunas opciones que podrás elegir para
        poder ofrecerte una receta completamente personalizada.
      </p>
      <img
        className=" w-3/4 max-w-[300px]"
        src={beginImage}
        alt="People Cooking"
      />

      <div className=" w-full max-w-sm flex flex-col items-start gap-1 px-4 ">
        <label htmlFor="name" className=" font-poppinsSemBold text-sm">
          ¿Cuál es tu nombre?
        </label>
        <input
          type="text"
          id="name"
          value={userName !== null ? userName : ''}
          placeholder="Escribe tu nombre aquí..."
          onChange={(e) => updateUserName(e.currentTarget.value)}
          className=" w-full placeholder:font-poppinsReg font-poppinsMed outline-primary placeholder:text-placeholder  text-sm rounded-md px-4 py-2"
        />
      </div>
      <button
        onClick={handleNext}
        disabled={userName === ''}
        className=" disabled:bg-neutral-300 disabled:text-neutral-500 bg-primary font-poppinsBold text-2xl uppercase px-6 py-2 rounded-xl mt-4"
      >
        Continuar
      </button>
    </main>
  )
}
