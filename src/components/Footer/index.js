import "./index.css";

function Footer() {
  return (
    <div className="footer">
      <div>Copyright © {new Date().getFullYear()} CompanyName</div>
      <div
        className="beian"
        onClick={() => window.open("https://beian.miit.gov.cn/", "_blank")}
      >
        ICP
      </div>
    </div>
  );
}

export default Footer;
