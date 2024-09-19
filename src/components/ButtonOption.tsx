import { motion } from 'framer-motion'

interface ButtonOptionProps {
  label: string
  icon?: React.ElementType
  isActive: boolean
  isDisabled?: boolean
  onClick: () => void
}

const ButtonOption = ({
  label,
  icon: Icon,
  isActive,
  isDisabled = false,
  onClick,
}: ButtonOptionProps) => {
  return (
    <div className=" w-full h-full flex flex-col items-center gap-2 ">
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 1.6 }}
        animate={{ scale: isActive ? 1.05 : 1 }}
        type="button"
        disabled={isDisabled}
        className={` ${
          isActive && !isDisabled
            ? 'bg-primary shadow-lg shadow-black/20 '
            : 'bg-white shadow-md '
        } disabled:bg-neutral-300 disabled:shadow-inner disabled:shadow-black/20 transition-all duration-200 ease-in-out p-3.5 w-full aspect-square overflow-hidden rounded-lg`}
        onClick={onClick}
      >
        {Icon && <Icon w="100%" h="100%" fill={isDisabled ? '#AAA' : '#000'} />}
      </motion.button>
      <h4
        className={`${
          isDisabled ? ' text-textGray/50' : 'text-textDark'
        } font-poppinsMed text-[0.7rem] text-center leading-3 uppercase`}
      >
        {label}
      </h4>
    </div>
  )
}

export default ButtonOption
