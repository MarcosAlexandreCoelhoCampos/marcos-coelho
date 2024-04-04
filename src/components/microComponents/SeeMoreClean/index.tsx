import styles from './style.module.scss';
type ImgProps = {
  src: string;
  title: string;
  width: number;
  height: number;
};

type SeeMoreCleanProps = {
  href: string;
  fontStyle?: string;
  text?: string;
  img?: ImgProps;
  style?: React.CSSProperties;
  className?: string;
};

const SeeMoreClean: React.FC<SeeMoreCleanProps> = ({
  href,
  fontStyle = 'font-bigbutton',
  text = 'Veja Mais',
  img = {
    src: '/icons/arrow/arrow-right-green.svg',
    title: 'Link para saber mais',
    width: 11,
    height: 18,
  },
  style,
  className = '',
}) => {
  return (
    <a
      className={`${styles.SeeMoreClean} ${fontStyle} ${className}`}
      style={style}
      href={href}
    >
      {text}
      {img && (
        <img
          src={img.src}
          title={img.title}
          width={img.width}
          height={img.height}
          aria-hidden='true'
        />
      )}
    </a>
  );
};

export default SeeMoreClean;
