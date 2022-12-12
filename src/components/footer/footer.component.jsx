import "./footer.styles.scss";

const Footer = ({ portfolio }) => {
  return (
    <footer>
      <section className="footer__info">
        <a href={portfolio} target="_blank">
          Developed by:<span>iMadfxq</span>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
