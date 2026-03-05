interface BarsIconProps {
  className?: string;
}

export default function BarsIcon({ className = 'w-8 h-8' }: BarsIconProps) {
  return (
    <div className={`flex flex-col justify-center items-center space-y-1.5 ${className}`}>
      <div className="h-1 bg-current rounded-full w-10 group-hover:w-12 group-hover:translate-x-1 transition-all duration-300 ease-in-out"></div>
      <div className="h-1 bg-current rounded-full w-10 group-hover:w-12 group-hover:translate-x-1 transition-all duration-300 ease-in-out delay-75"></div>
      <div className="h-1 bg-current rounded-full w-10 group-hover:w-12 group-hover:translate-x-1 transition-all duration-300 ease-in-out delay-150"></div>
      <div className="h-1 bg-current rounded-full w-10 group-hover:w-12 group-hover:translate-x-1 transition-all duration-300 ease-in-out delay-200"></div>
    </div>
  );
}
