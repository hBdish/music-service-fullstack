
import {TextArea, TextInput } from '@/lib/mui';
import styles from './step-one.module.css'

const StepOne = () => {
  return (
    <div className={styles.card}>
      <TextInput label={'Название трека'} />
      <TextInput label={'Имя испонителя'}  />
      <TextArea rows={3} size={'l'} placeholder="Текст песнип" />
    </div>
  );
};

export default StepOne;