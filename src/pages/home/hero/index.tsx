import heroImage from '../../../assets/images/hero.jpeg';

export default function Hero() {
  const style = {
    backgroundImage: `url("${heroImage}")`,
  };

  return (
    <div 
      className="bg-cover bg-center min-h-[535px]" 
      style={style}
    />
  );
}
