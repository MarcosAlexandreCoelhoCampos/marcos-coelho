interface BoltWhiteFileProp {
  fill?: string;
  className?: string;
}

const BoltWhiteFile: React.FC<BoltWhiteFileProp> = ({
  fill = 'none',
  className = '',
}) => {
  return (
    <svg
      width='167'
      height='889'
      viewBox='0 0 167 889'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M100.963 0.5L75.5013 352.725L75.4487 353.453L76.1464 353.239L166.295 325.636L24.1962 882.292L71.4973 424.837L71.6233 423.619L70.6808 424.4L0.626009 482.498L51.45 0.5H76H100.963Z'
        stroke='white'
      />
    </svg>
  );
};

export default BoltWhiteFile;
