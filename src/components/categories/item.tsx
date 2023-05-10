/* eslint-disable react-hooks/exhaustive-deps */

import { Card, Col, Image } from 'antd';
import { useRouter } from 'src/hooks';

export interface ItemProps {
  title: string;
  imageURL: string;
  description: string;
  price: number;
  id: string | number;
  quality: number;
}

const { Meta } = Card;

const Item: React.FC<ItemProps> = ({
  title,
  imageURL,
  description,
  price,
  id,
  quality,
}) => {
  const { navigate } = useRouter();
  const handleEdit = () => {
    navigate('/detail', {
      state: {
        title,
        imageURL,
        description,
        price,
        id,
        quality,
      },
    });
  };
  return (
    <Col span={6}>
      <Card hoverable className="item" onClick={handleEdit}>
        <Image src={imageURL} className="image" />
        <Meta title={title} />
        <p>Price: {price}</p>
      </Card>
    </Col>
  );
};

export default Item;
