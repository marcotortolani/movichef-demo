/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import logoDarkBrand from '../assets/images/logo_dark.webp'

import ordenarSVG from '../assets/images/SVG/ordenar_1.svg'
import cocinarSVG from '../assets/images/SVG/cocinar_1.svg'
import secarSVG from '../assets/images/SVG/secar_1.svg'
import lavarSVG from '../assets/images/SVG/lavar_1.svg'

const DEGREE = 1800
const TIME_SPINNING = 3

const DATA_CHORES = [
  {
    id: 1,
    name: 'Ordena',
    action: 'Ordenar',
    imgSVG: ordenarSVG,
  },
  {
    id: 2,
    name: 'Cocina',
    action: 'Cocinar',
    imgSVG: cocinarSVG,
  },
  {
    id: 3,
    name: 'Seca',
    action: 'Secar',
    imgSVG: secarSVG,
  },
  {
    id: 4,
    name: 'Lava',
    action: 'Lavar',
    imgSVG: lavarSVG,
  },
]

export default function RouletteChores({
  show,
  onClose,
}: {
  show: boolean
  onClose: () => void
}) {
  const [choresSelected, setChoresSelected] = useState<number[]>([])
  const [catWheel, setCatWheel] = useState<number>(0)
  const [totalDegree, setTotalDegree] = useState(DEGREE)
  const [showChoreSelected, setShowChoreSelected] = useState(false)
  // const [rouletteSound] = useSound(sounds?.rouletteWheel, {
  //   soundEnabled: soundOn,
  // })
  const [_, navigate] = useLocation()

  const SECTIONS_WHEEL = DATA_CHORES.length

  const handleSpin = () => {
    const extraDegree = Math.floor(Math.random() * (360 - 1) + 1)
    const newTotalDegree = DEGREE + extraDegree
    setTotalDegree(newTotalDegree)

    /* nuevo calculo condiserando la ubicacion de la flecha/puntero */
    // ubicación inicial de la flecha indicadora en grados
    const initialArrowPosDegrees = 0 // 90 (posicion de la flecha) + 45 (desviacion de la ruleta)
    const adjustedExtraDegree = (extraDegree + initialArrowPosDegrees) % 360
    const cat = Math.floor(adjustedExtraDegree / (360 / SECTIONS_WHEEL)) + 1

    if (choresSelected.find((item) => item === cat)) {
      return handleSpin()
    }

    //rouletteSound()

    setCatWheel(cat)
  }

  useEffect(() => {
    if (!catWheel) return
    setTimeout(() => {
      // navigate('/category/' + DATA_CHORES[catWheel - 1].id)
      // show chore selected
      setShowChoreSelected(true)
      setChoresSelected((prev) => [...prev, catWheel])
    }, TIME_SPINNING * 1000 + 500)
  }, [catWheel])

  const handleNext = (path: string | null) => {
    if (path === null) return
    navigate(path)
  }

  return (
    <div
      className={`${
        show ? ' translate-y-0 opacity-100 ' : ' translate-y-full opacity-20'
      } bg-bkg  absolute bottom-0 z-20 w-screen h-screen flex flex-col items-center overflow-x-hidden gap-20 px-2 transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <div className=" w-full max-w-md">
        <button
          type="button"
          onClick={onClose}
          className=" absolute top-6 right-6"
        >
          <svg
            className=" w-6 h-6 fill-textDark"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"></path>
            </g>
          </svg>
        </button>
        <img
          className=" w-1/4 max-w-[150px] mx-auto mt-4"
          src={logoDarkBrand}
          alt="Logo Brand Light"
        />

        <div className=" w-full px-4 h-fit flex flex-col items-center gap-10  ">
          <div className=" w-full h-fit ">
            <h2 className=" font-poppinsBold text-2xl text-center">
              Ahora repartamos tareas
            </h2>
            <p className=" font-poppinsReg text-sm text-textGray text-center">
              Gira la rueda para ver qué tarea te toca
            </p>
          </div>

          <div className=" w-full aspect-square flex items-center justify-center">
            <div className=" relative w-full h-full">
              <div className="z-30 absolute -top-0 left-0 w-full h-20 flex justify-center">
                <div
                  className="absolute top-0 left-1/2 rotate-180 scale-75 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 
                  border-l-[40px] border-r-[40px] border-b-[40px] 
                  border-l-transparent border-r-transparent border-primary"
                ></div>
              </div>
              <div
                className={` z-10 relative w-full aspect-square overflow-hidden bg-black p-12 flex items-center justify-center rounded-full`}
                style={
                  catWheel !== 0
                    ? {
                        transform: `rotate(${totalDegree}deg)`,
                        transitionDuration: `${TIME_SPINNING}s`,
                      }
                    : { transform: `rotate(45deg)` }
                }
              >
                {Array(4)
                  .fill(1)
                  .map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        i === 0
                          ? 'left-0 top-0 bg-tertiary'
                          : i === 1
                          ? 'left-0 bottom-0 bg-secondary'
                          : i === 2
                          ? 'right-0 bottom-0 bg-tertiary '
                          : 'right-0 top-0 bg-secondary'
                      } ${
                        choresSelected?.includes(i + 1)
                          ? 'filter grayscale'
                          : ''
                      } absolute z-0 w-1/2 h-1/2 flex items-center justify-center`}
                    ></div>
                  ))}
                <div className=" z-50 relative w-full h-full rounded-full ">
                  {DATA_CHORES.map((item, i) => (
                    <RuletaSection
                      key={i}
                      text={item.name}
                      section={i + 1}
                      icon={item.imgSVG}
                      isDisabled={choresSelected?.includes(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className=" z-50 absolute flex items-center justify-center">
              <SpinnerButton
                disabled={choresSelected.length === SECTIONS_WHEEL}
                onSpin={handleSpin}
                color={'#000'}
              />
            </div>
          </div>

          <div className=" flex items-center justify-between gap-5 w-full">
            <button
              onClick={() => handleNext('/recipes')}
              className={` bg-primary transition font-bold text-xl uppercase w-1/2 py-2 rounded-xl mt-4`}
            >
              Saltar
            </button>
            <button
              onClick={handleSpin}
              disabled={choresSelected.length === SECTIONS_WHEEL}
              className={` disabled:bg-neutral-400 disabled:text-textGray bg-primary transition font-bold text-xl uppercase w-1/2 py-2 rounded-xl mt-4`}
            >
              ¡Girar!
            </button>
          </div>
        </div>
        <div
          className={`${
            showChoreSelected ? ' scale-100 ' : ' scale-0 '
          } z-50 bg-black/20 backdrop-blur-sm w-full h-full absolute left-0 top-0 transition-all duration-200 ease-in-out flex items-center justify-center`}
        >
          <div
            className={` w-5/6 max-w-sm aspect-square flex flex-col items-center justify-center gap-4 bg-primaryLighter shadow-lg shadow-black/30 transition-all duration-200 ease-in-out rounded-2xl`}
          >
            {catWheel > 0 && (
              <img
                className=" w-1/2"
                src={DATA_CHORES[catWheel - 1].imgSVG}
                alt=""
              />
            )}
            {catWheel > 0 && (
              <p className=" font-poppinsExtBold text-2xl text-center text-black">
                ¡Te toca{' '}
                <span className=" lowercase">
                  {DATA_CHORES[catWheel - 1].action}!
                </span>
              </p>
            )}
            <button
              type="button"
              onClick={() => {
                setCatWheel(0)
                setTotalDegree(DEGREE)
                setShowChoreSelected(false)
              }}
              className=" bg-tertiary px-4 py-2 font-poppinsSemBold text-xl text-primaryLighter uppercase rounded-lg "
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const SpinnerButton = ({
  disabled,
  onSpin,
  color,
}: {
  disabled: boolean
  onSpin: () => void
  color: string
}) => (
  <div className=" z-50 w-[4.5rem] h-[4.5rem] ">
    <button
      disabled={disabled}
      onClick={onSpin}
      style={{ backgroundColor: color }}
      className=" w-full h-full p-3 flex items-center justify-center rounded-full"
    >
      <svg
        className=" fill-primaryLighter -rotate-[120deg] -scale-x-100 "
        viewBox="0 0 24 24"
      >
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
          <path d="M23,12A11,11,0,1,1,12,1a10.9,10.9,0,0,1,5.882,1.7l1.411-1.411A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707L16.42,4.166A8.9,8.9,0,0,0,12,3a9,9,0,1,0,9,9,1,1,0,0,1,2,0Z"></path>
        </g>
      </svg>
    </button>
  </div>
)

const RuletaSection = ({
  text,
  section,
  icon,
  isDisabled,
}: {
  text: string
  section: number
  icon: string
  isDisabled: boolean
}) => (
  <div
    className={`${
      section === 1
        ? 'left-0 top-0 bg-primaryLighter rounded-tl-full'
        : section === 2
        ? 'left-0 bottom-0 bg-primary rounded-bl-full'
        : section === 3
        ? 'right-0 bottom-0 bg-primaryLighter rounded-br-full '
        : 'right-0 top-0 bg-primary rounded-tr-full'
    } ${
      isDisabled ? ' filter grayscale ' : ''
    } z-50 absolute w-1/2 h-1/2 flex items-center justify-center`}
  >
    <div
      className={` ${
        section === 1
          ? ' -top-14 md:-top-[70px] -left-[50px] md:-left-[58px] -rotate-[43deg] '
          : section === 2
          ? ' top-12 -left-14 -rotate-[134deg]'
          : section === 3
          ? ' top-14 left-[51px] rotate-[136deg] '
          : ' -top-12 left-[50px] rotate-[46deg] '
      }  z-50 absolute inset-1 w-full h-full transform font-poppinsBold`}
    >
      <CurvedText text={text} radius={10} />
    </div>
    <div
      className={`${
        section === 1
          ? ' top-2 left-2  -rotate-45 '
          : section === 2
          ? ' -top-2 left-2  -rotate-[135deg]'
          : section === 3
          ? ' -top-2 -left-2  rotate-[135deg] '
          : ' top-2 -left-2  rotate-45 '
      }  absolute w-full h-full inset-0 flex items-center justify-center`}
    >
      <img className="w-1/2 h-full" src={icon} alt="Icon Ruleta" />
    </div>
  </div>
)

const CurvedText = ({ text, radius }: { text: string; radius: number }) => {
  return (
    <div className="w-full h-full relative">
      <svg viewBox="0 0 130 100" className="w-full h-full">
        <defs>
          <path
            id="curve"
            d={`M 10, ${90 + radius} 
                A ${radius},${radius - 5} 0 0,1 120,${90 + radius}`}
            fill="transparent"
          />
        </defs>
        <text className="fill-current text-primaryLighter uppercase text-[1.3rem] font-bold">
          <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
