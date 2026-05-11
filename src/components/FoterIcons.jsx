import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FooterSocial = () => {
  const icons = [
    {
      icon: FaPhoneAlt,
      link: "tel:+919911255302",
     color: "#007bff"
    },
    {
      icon: FaWhatsapp,
      link: "https://wa.me/+919911255302",
      color: "#25D366"
    }
  ];

  return (
    <div className="floating-icons">
      {icons.map((item, idx) => {
        const Icon = item.icon;

        return (
          <a
            key={idx}
            href={item.link}
            className="icon-btn"
            style={{ background: item.color }}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;
