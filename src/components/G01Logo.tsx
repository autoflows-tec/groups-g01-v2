interface G01LogoProps {
  className?: string;
}

const G01Logo = ({ className = "h-8 w-8" }: G01LogoProps) => {
  return (
    <div className={`${className} relative`}>
      <img 
        src="/g01-logo.png" 
        alt="G01" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default G01Logo;