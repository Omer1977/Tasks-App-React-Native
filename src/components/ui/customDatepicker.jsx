import {Datepicker} from '@ui-kitten/components';

const CustomDatepicker = props => {
  const {onSelectDate} = props;
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

export default CustomDatepicker;
