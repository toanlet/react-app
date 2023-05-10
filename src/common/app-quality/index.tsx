import { Space, Button } from 'antd';
import { NumericInput } from '../app-input';
import './styles.scss';
export interface AppQualityProps {
  value: string;
  handleChange: (e: any, id?: number) => void;
}
export const AppQuality: React.FC<AppQualityProps> = ({
  value,
  handleChange,
}) => {
  const _onChageValue = (type = false) => {
    if (type) {
      handleChange(+value + 1);
    } else {
      handleChange(+value - 1);
    }
  };
  return (
    <Space.Compact style={{ width: '100%', height: 'fit-content' }}>
      <Button type="primary" onClick={() => _onChageValue()}>
        -
      </Button>

      <NumericInput value={value} onChange={handleChange} />

      <Button type="primary" onClick={() => _onChageValue(true)}>
        +
      </Button>
    </Space.Compact>
  );
};
