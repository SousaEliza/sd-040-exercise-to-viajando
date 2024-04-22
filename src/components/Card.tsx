type CardProp = {
  city: string;
  country: string;
  imageUrl: string;
  visited?: boolean;
};

function Card({ cityInfo }: { cityInfo: CardProp }) {
  return (
    <div className="city-card">
      <div id="details">
        <p id="city-name">{ cityInfo.city }</p>
        <p id="country-name">{ cityInfo.country }</p>
        { cityInfo.visited ? <span>Já Fui!</span> : <span>Não Fui.</span>}
      </div>
      <img src={ cityInfo.imageUrl } alt={ cityInfo.city } />
    </div>
  );
}

export default Card;
