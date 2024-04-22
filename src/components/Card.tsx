type CardProp = {
  city: string;
  country: string;
  imageUrl: string;
  visited?: boolean;
};

function Card({ cityInfo }: { cityInfo: CardProp }) {
  return (
    <div>
      <p>{ cityInfo.city }</p>
      <p>{ cityInfo.country }</p>
      <img src={ cityInfo.imageUrl } alt={ cityInfo.city } />
      { cityInfo.visited ? <span>Já Fui!</span> : <span>Não Fui.</span>}
    </div>
  );
}

export default Card;
