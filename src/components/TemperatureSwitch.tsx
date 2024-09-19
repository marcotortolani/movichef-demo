import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
export const TemperatureSwitch = ({
  checked,
  setChecked,
}: {
  checked: boolean
  setChecked: (checked: boolean) => void
}) => {
  return (
    <div className="flex space-x-0 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          'h-7  px-0  flex items-center rounded-full w-[82px] relative cursor-pointer transition-all duration-200',
          checked ? 'bg-hotRed' : 'bg-coldBlue '
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: checked ? 0 : 1, x: checked ? 0 : 40 }}
          transition={{ duration: 0.3 }}
          className="text-white font-poppinsReg uppercase text-[0.6rem]"
        >
          Frío
        </motion.div>

        <motion.div
          initial={{
            width: '20px',
            x: checked ? -16 : 38,
          }}
          animate={{
            height: ['20px', '10px', '20px'],
            width: ['20px', '30px', '20px', '20px'],
            x: checked ? 38 : -16,
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className={twMerge(
            'h-[20px] block rounded-full bg-white shadow-md z-10'
          )}
        ></motion.div>

        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="hidden"
          id="checkbox"
        />
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: checked ? 1 : 0, x: checked ? -32 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white font-poppinsReg uppercase text-[0.6rem]"
        >
          Caliente
        </motion.div>
      </label>
    </div>
  )
}
