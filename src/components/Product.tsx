import clsx from 'clsx';
import css from './product.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price?: number;
  handleClick: () => void;
  clicks: number;
}

interface test {
  id: number;
  name: string;
}

const test: test[] = [
  { id: 1, name: 'qwe' },
  { id: 2, name: '123' },
  { id: 3, name: 'zzz' },
];

export default function Product({
  name,
  imgUrl,
  price,
  handleClick,
  clicks,
}: ProductProps) {
  return (
    <div>
      <h2 className={clsx(css.title, css.test)}>{name}</h2>
      <img src={imgUrl} alt={name} />
      <p onClick={handleClick}>
        Price: {price} {clicks} credits
      </p>
      {test.length > 0 && (
        <ul>
          {test.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
