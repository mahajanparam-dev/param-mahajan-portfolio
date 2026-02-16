import { stats } from "../data/stats";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [inView, value]);

  return <h3 ref={ref}>{count}+</h3>;
}

export default function Stats() {
  return (
    <section id="stats" className="section">
      <h2>Growth Metrics</h2>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ width: "220px", textAlign: "center" }}
          >
            <Counter value={stat.value} />
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
