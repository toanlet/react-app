import { useState } from 'react';
import { Image, Button } from 'antd';
import { useAppDispatch, useAppSelector, useRouter } from 'src/hooks';
import './styles.scss';

import { ADD_TO_CARD } from 'src/store/constant';
import { AppQuality } from 'src/common/app-quality';
import { useModalContext } from 'src/context/modal-contex';
import { AppModal } from 'src/common/app-modal';
import { addToCard } from 'src/store/action';

const Detail: React.FC<any> = () => {
  const { location } = useRouter();
  const [value, setValue] = useState<string>('1');
  const { handleClose, isOpen, handleOpen } = useModalContext();

  const dispatch = useAppDispatch();
  const { wishList } = useAppSelector((s: any) => s.rootReducer);

  console.log('wishlist state', wishList);

  const handleAddToCard = () => {
    const cardItem = {
      title: location.state.title,
      description: location.state.description,
      price: location.state.price,
      image: location.state.imageURL,
      quality:
        (location.state.quality !== 1 && location.state.quality) || +value,
      id: location.state.id,
      amount:
        (location.state.quality !== 1 && location.state.quality) ||
        +value * location.state.price,
      isCheck: false,
    };

    // dispatch({
    //   type: ADD_TO_CARD,
    //   payload: cardItem,
    // });
    // handleOpen();
    dispatch(
      addToCard({
        name: location.state.title,
        description: location.state.description,
        price: location.state.price,
        image: location.state.imageURL,
        id: location.state.id,
      })
    );
  };

  const handleChange = (valueChange: any, id: number) => {
    if (id === location.state.id) {
      if (location.pathname.includes('detail') && valueChange <= 1) {
        setValue('1');
      } else {
        setValue(valueChange);
      }
    }
  };

  return (
    <div className="detail">
      <Image src={location.state.imageURL} />
      <div className="content">
        <h3>{location.state.title}</h3>
        <p>{location.state.description}</p>
        <p>{location.state.price}</p>

        <AppQuality
          value={value}
          handleChange={(e) => handleChange(e, location.state.id)}
        />

        <Button onClick={handleAddToCard} className="add-card">
          Add to card
        </Button>

        <AppModal
          open={isOpen}
          handleClose={handleClose}
          seconds={2}
          content="Add to card"
        />
      </div>
    </div>
  );
};

export default Detail;
