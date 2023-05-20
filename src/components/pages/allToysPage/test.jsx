import { Rating, Star, ThinStar, RoundedStar, ThinRoundedStar, StickerStar } from '@smastrom/react-rating';
import { useState } from 'react';

const includedShapesStyles = [Star, ThinStar, RoundedStar, ThinRoundedStar, StickerStar].map((itemShapes) => { 
    return { itemShapes, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }
})
const star = { itemShapes: ThinStar, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' }
console.log(star);
console.log(includedShapesStyles[1]);

const Test = ()=> {
  const [rating, setRating] = useState(3);

  return (
    <div>
    {
      <Rating
        style={{ maxWidth: 80 }}
        value={rating}
        onChange={setRating}
        itemStyles={star}
      />
    }
    </div>
  )
}
export default Test;