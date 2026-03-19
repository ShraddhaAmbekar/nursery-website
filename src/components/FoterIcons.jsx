import {  FaPhoneAlt ,FaWhatsapp } from "react-icons/fa";

const FooterSocial = () => {
  const icons = [
    { icon:  FaPhoneAlt, link: "https://facebook.com", color: "#4267B2" },
    { icon: FaWhatsapp, link: "https://wa.me/1234567890", color: "#25D366" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        zIndex: 9999,
      }}
    >
      {icons.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: item.color,
              color: "#fff",
              fontSize: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
            }}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default FooterSocial;
