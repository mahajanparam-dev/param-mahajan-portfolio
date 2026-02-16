import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", color: "#00f5ff" }}
      >
        Param Mahajan
      </motion.h1>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          width: "120px",
          height: "120px",
          margin: "40px auto",
          borderRadius: "50%",
          border: "2px solid #00f5ff",
          boxShadow: "0 0 20px #00f5ff",
        }}
      />
    </section>
  );
}
