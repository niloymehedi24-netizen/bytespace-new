export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-[#c8ff00] text-black hover:bg-[#b9f000]",
    secondary: "bg-[#123fe5] text-white hover:bg-[#0f35c4]",
    outline:
      "border border-black bg-transparent text-black hover:bg-black hover:text-white",
    white: "bg-white text-black hover:bg-gray-100",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
