import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
        margin: "0px 0px -10% 0px",
      }}
      variants={{
        hidden: { opacity: 0, y: 14, filter: "blur(2px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}