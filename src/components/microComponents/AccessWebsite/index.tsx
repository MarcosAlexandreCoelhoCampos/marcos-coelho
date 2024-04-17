import styles from './style.module.scss';
type ImgProps = {
  src: string;
  title: string;
  width: number;
  height: number;
};

type AccessWebsiteProps = {
  link: string;
  fontStyle?: string;
  text?: string;
  img?: ImgProps;
  style?: React.CSSProperties;
};

const AccessWebsite: React.FC<AccessWebsiteProps> = ({
  link,
  fontStyle = 'font-mediumbutton',
  text = 'Acessar site',
  img = {
    src: '/icons/arrow/arrow-right-white.svg',
    title: 'Link para saber mais sobre o site',
    width: 11,
    height: 18,
  },
  style,
}) => {
  return (
    <a
      href={link}
      className={`${styles.AccessWebsite} ${fontStyle}`}
      style={style}
      target='_blanck'
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

export default AccessWebsite;
