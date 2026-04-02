import { useI18n } from "@/lib/i18n";
import icon1 from '@/assets/icon_01.svg';
import icon2 from '@/assets/icon_02.svg';
import icon3 from '@/assets/icon_03.svg';
import icon4 from '@/assets/icon_04.svg';
import icon5 from '@/assets/icon_05.svg';
import icon6 from '@/assets/icon_06.svg';
import arrowSvg from '@/assets/arrow_long.svg';
import { motion } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 120, damping: 20 };

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: spring },
};

const HowItWorksSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-white py-40 overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-2xl text-black font-bold md:text-4xl">{t("how.title")}</h2>
      </div>

      <div className="mx-auto px-4 
        min-[1200px]:max-w-[1140px] 
        min-[1400px]:max-w-[1320px] 
        min-[1600px]:max-w-[1400px]">

        <div className="relative mb-16 hidden md:block h-10">

          <div
            className="absolute left-[-400px] right-[85.33%] top-1/2 -translate-y-1/2 h-3"
            style={{
              backgroundImage: `url(${arrowSvg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right center',
              backgroundSize: '100% auto'
            }}
          />

          <div className="relative grid grid-cols-3 w-full h-full">

            <div className="flex items-center justify-center relative">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-md">
                1
              </div>
            </div>

            <div className="flex items-center justify-center relative">
              <div
                className="absolute left-[-50%] right-[50%] mr-6 h-3"
                style={{
                  backgroundImage: `url(${arrowSvg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: '100% auto'
                }}
              />
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-md">
                2
              </div>
            </div>

            <div className="flex items-center justify-center relative">
              <div
                className="absolute left-[-50%] right-[50%] mr-6 h-3"
                style={{
                  backgroundImage: `url(${arrowSvg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: '100% auto'
                }}
              />
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-md">
                3
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="grid gap-12 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[icon1, icon2, icon3].map((icon, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={item}
              whileHover={{ scale: 1.01 }}
              transition={spring}
            >
              <div className="flex h-[220px] w-full items-center justify-center">
                <img src={icon} alt="" className="max-h-full object-contain" />
              </div>
              <p className="mt-8 max-w-[280px] text-md leading-relaxed text-black font-medium">
                {t(`how.find.step${idx + 1}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto my-20 flex max-w-xs items-center justify-center gap-4">
        <span className="bg-black text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest">{t("how.or")}</span>
      </div>

      <div className="mx-auto px-4 
        min-[1200px]:max-w-[1140px] 
        min-[1400px]:max-w-[1320px] 
        min-[1600px]:max-w-[1400px]">


        <motion.div
          className="grid gap-12 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[icon4, icon5, icon6].map((icon, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={item}
              whileHover={{ scale: 1.01 }}
              transition={spring}
            >
              <div className="flex h-[220px] w-full items-center justify-center">
                <img src={icon} alt="" className="max-h-full object-contain" />
              </div>
              <p className="mt-8 max-w-[280px] text-md leading-relaxed text-black font-medium">
                {t(`how.leave.step${idx + 1}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="relative mt-16 hidden md:block h-10">
          <div className="relative grid grid-cols-3 w-full h-full">

            <div className="flex items-center justify-center relative">
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-md">
                1
              </div>
            </div>

            <div className="flex items-center justify-center relative">
              <div
                className="absolute left-[-50%] right-[50%] mr-6 h-3"
                style={{
                  backgroundImage: `url(${arrowSvg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: '100% auto'
                }}
              />
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-md">
                2
              </div>
            </div>

            <div className="flex items-center justify-center relative">
              <div
                className="absolute left-[-50%] right-[50%] mr-6 h-3"
                style={{
                  backgroundImage: `url(${arrowSvg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: '100% auto'
                }}
              />
              <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-lg font-bold text-white shadow-md">
                3
              </div>
              <div
                className="absolute left-[50%] right-[-100%] mr-6 h-3"
                style={{
                  backgroundImage: `url(${arrowSvg})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right center',
                  backgroundSize: '100% auto'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;