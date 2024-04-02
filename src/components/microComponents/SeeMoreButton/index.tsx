import styles from './style.module.scss';
type ImgProps = {
  src: string;
  title: string;
  width: number;
  height: number;
};

type SeeMoreButtonProps = {
  link: string;
  fontStyle?: string;
  text?: string;
  img?: ImgProps;
  style?: React.CSSProperties;
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  link,
  fontStyle = 'font-mediumbutton',
  text = 'Veja Mais',
  img = {
    src: '/icons/arrow/arrow-right-white.svg',
    title: 'Botão veja mais',
    width: 11,
    height: 18,
  },
  style,
}) => {
  return (
    <a
      href={link}
      className={`${styles.SeeMoreButton} ${fontStyle}`}
      style={style}
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

export default SeeMoreButton;
