import { Button, Checkbox, Image, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector, useRouter } from 'src/hooks';
import './styles.scss';

import { AppQuality } from 'src/common/app-quality';
import { DELETE_CARD, IS_CHECK, UPDATE_QUALITY } from 'src/store/constant';
import { ICard } from 'src/store/reducer/card-reducer';

export interface CardListProps {}

export const CardList = () => {
  const [checkAll, setCheckAll] = useState(false);

  const { location } = useRouter();

  const { cardList } = useAppSelector((s: any) => s.rootReducer.cardReducer);

  const [list, setList] = useState<ICard[]>(cardList);

  const [total, setTotal] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setList(cardList);
  }, [cardList]);

  useEffect(() => {
    setList(list);
    console.log('change');
    const total = list.reduce((total, acc) => {
      if (acc.isCheck && acc.amount) {
        return (total += acc.amount);
      }
      return total;
    }, 0);

    setTotal(total);
  }, [list]);

  const onCheckAllChange = (e: any) => {
    setCheckAll(e.target.checked);
    const result = list.map((el: any) => {
      return { ...el, isCheck: e.target.checked };
    });

    setList(result);

    if (e.target.checked) {
      const total = list.reduce((total: any, el: any) => {
        return (total += el.amount);
      }, 0);
      setTotal(total);
    } else {
      setTotal(0);
    }
  };

  const handleChange = (valueChange: any, el: any) => {
    if (location.pathname.includes('card') && valueChange < 1) {
      dispatch({
        type: DELETE_CARD,
        id: el.id,
      });
    }

    dispatch({
      type: UPDATE_QUALITY,
      payload: { id: el.id, quality: valueChange },
    });

    dispatch({
      type: IS_CHECK,
      payload: {
        id: el.id,
        isCheck: el.isCheck,
      },
    });
  };

  const onChange = (e: any, id: number) => {
    const newList: ICard[] = [...list];

    const result = newList.map((el: any) => {
      if (id === el.id) {
        return { ...el, isCheck: e.target.checked };
      }
      return { ...el };
    });

    setList(result);

    dispatch({
      type: IS_CHECK,
      payload: {
        id,
        isCheck: e.target.checked,
      },
    });

    const isAll = result.every((el: any) => el.isCheck);
    setCheckAll(isAll);
    const total = result.reduce((total, acc) => {
      if (acc.isCheck) {
        return (total += acc.amount);
      }
      return total;
    }, 0);

    setTotal(total);
  };

  return (
    <>
      {list.length > 0 ? (
        <div className="card-list">
          <div className="header-list">
            <div>
              <Checkbox onChange={onCheckAllChange} checked={checkAll}>
                Products
              </Checkbox>
            </div>
            <div className="header-right">
              <p>Price</p>
              <p>Quality</p>
              <p>Amout</p>
            </div>
          </div>
          {list.map((el: any) => {
            return (
              <div className="content" key={el.id}>
                <div className="d-flex">
                  <Checkbox
                    onChange={(e) => onChange(e, el.id)}
                    checked={el.isCheck}
                  ></Checkbox>
                  <Image
                    src={el.image}
                    width={200}
                    style={{
                      padding: '30px',
                    }}
                  />
                  <p>{el.title}</p>
                </div>
                <div className="d-flex right">
                  <div className="margin-right">{el.price}</div>

                  <AppQuality
                    value={el.quality}
                    handleChange={(e) => handleChange(e, el)}
                  />
                  <div>{el.amount}</div>
                </div>
              </div>
            );
          })}

          <div className="total">
            <h3>Total: {total}</h3>
            <Button type="primary" style={{ width: '120px' }}>
              Order
            </Button>
          </div>
        </div>
      ) : (
        <div className="card-list"> Empty card</div>
      )}
    </>
  );
};
