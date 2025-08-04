import icon from "../../assets/images/logo.png";

export default function Logo({ size = 40 }) {
  return (
    <img
      src={icon}
      alt="Logo"
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block" }}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
    />
  );
}
