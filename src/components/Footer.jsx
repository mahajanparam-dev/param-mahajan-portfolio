export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "40px 0",
      borderTop: "1px solid rgba(0,255,255,0.2)",
      marginTop: "60px"
    }}>
      <p>© {new Date().getFullYear()} Param Mahajan</p>
    </footer>
  );
}
