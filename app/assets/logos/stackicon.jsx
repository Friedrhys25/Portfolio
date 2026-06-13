import NextLogo from "./nextlogo";
import RNativeLogo from "./rnativelogo";

export default function StackIcon({ name, className = "", ...props }) {
  const key = String(name).toLowerCase();
  if (key === "nextjs" || key === "nextjs2") return <NextLogo className={className} {...props} />;
  if (key === "reactnative") return <RNativeLogo className={className} {...props} />;

  // try to load an image from assets/images by name
  const src = `/assets/images/${key}.png`;
  return (
    <img
      src={src}
      alt={name}
      className={className}
      style={{ width: 48, height: 48, objectFit: "contain" }}
      {...props}
    />
  );
}
