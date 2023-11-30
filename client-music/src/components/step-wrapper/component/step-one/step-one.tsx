'use client'

import {TextArea, TextInput} from '@/lib/mui';
import styles from './step-one.module.css'
import {useInput} from "@/lib/hooks/use-input";
import {useActions} from "@/store/hooks/use-actions";

const StepOne = () => {
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const {setName, setText, setArtist} = useActions()

  return (
    <div className={styles.card}>
      <TextInput
        onBlur={() => {
          setName(name.value)
        }}
        value={name.value}
        onChange={(e) => name.onChange(e.target.value)}
        label={'Название трека'}/>
      <TextInput
        onBlur={() => {
          setArtist(artist.value)
        }}
        value={artist.value}
        onChange={(e) => artist.onChange(e.target.value)}
        label={'Имя испонителя'}/>
      <TextArea
        onBlur={() => {
          setText(text.value)
        }}
        value={text.value}
        onChange={(e) => text.onChange(e.target.value)}
        rows={3}
        size={'l'}
        placeholder="Текст песнип"/>
    </div>
  );
};

export default StepOne;