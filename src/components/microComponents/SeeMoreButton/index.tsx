import styles from './style.module.scss';
type ImgProps = {
  src: string;
  title: string;
  width: number;
  height: number;
};

type SeeMoreButtonProps = {
  action: () => void;
  actived: boolean;
  fontStyle?: string;
  textActive?: string;
  textDesable?: string;
  img?: ImgProps;
  style?: React.CSSProperties;
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  action,
  actived = false,
  fontStyle = 'font-bigbutton',
  textActive = 'Veja Mais',
  textDesable = 'Ver menos',
  img = {
    src: '/icons/arrow/arrow-down-green.svg',
    title: 'Link para saber mais sobre o site',
    width: 18,
    height: 10,
  },
  style,
}) => {
  return (
    <button
      className={`${styles.SeeMoreButton} ${fontStyle} ${
        actived && styles.actived
      }`}
      style={style}
      onClick={action}
    >
      {actived ? textDesable : textActive}
      {img && (
        <img
          src={img.src}
          title={img.title}
          width={img.width}
          height={img.height}
          aria-hidden='true'
        />
      )}
    </button>
  );
};

export default SeeMoreButton;
