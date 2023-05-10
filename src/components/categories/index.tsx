/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { getCategories } from '../../api/categories';
import { Product } from '../../type/categories';
import Item from './item';
import './styles.scss';
import { Row } from 'antd';
function Categories() {
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    handleGetList();
  }, []);

  const handleGetList = async () => {
    const res = await getCategories();
    if (res.status === 200) {
      setList(res.data);
    }
  };

  return (
    <div className="main-list">
      <Row gutter={[16, 24]}>
        {list
          .filter((el) => el.categoryId === 32)
          .map((el) => {
            return <Item {...el} title={el.name} quality={1} />;
          })}
      </Row>
    </div>
  );
}

export default Categories;
