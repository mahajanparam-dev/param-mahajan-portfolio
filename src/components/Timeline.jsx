import { timeline } from "../data/timeline";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <h2>Engineering Journey</h2>
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: "30px" }}
          >
            <h3 style={{ color: "#00f5ff" }}>{item.year}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
