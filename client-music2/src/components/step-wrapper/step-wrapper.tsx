'use client'
import {FC, ReactNode, useState} from 'react';
import {Button, Card, Icon, RadioButton, RadioButtonOption} from "@gravity-ui/uikit";
import styles from './step-wrapper.module.css'
import {ChevronLeft, ChevronRight} from "@gravity-ui/icons";
import {HStack, VStack} from "@/components/stack";

interface StepWrapper {
  children: ReactNode
  stepOne?: ReactNode
  stepTwo?: ReactNode
  stepThree?: ReactNode
  createTrack: () => void
  canCreateTrack?: boolean
}

const options: RadioButtonOption[] = [
  {value: '0', content: 'Загрузите трек'},
  {value: '1', content: 'Загрузите обложку'},
  {value: '2', content: 'Информация о треке'},
];


const StepWrapper: FC<StepWrapper> = (props) => {
  const {canCreateTrack = false, createTrack, children, stepOne, stepThree, stepTwo} = props
  const [step, setStep] = useState('0')

  const render = () => {
    switch (step) {
      case '0':
        return stepOne
      case '1':
        return stepTwo
      case '2':
        return stepThree
    }
  }

  const next = () => {
    setStep(prevState => {
      if (prevState === '2') return prevState

      let res = +prevState
      res += 1
      return res.toString()
    })
  }

  const back = () => {
    setStep(prevState => {
      if (prevState === '0') return prevState

      let res = +prevState
      res -= 1
      return res.toString()
    })
  }


  return (
    <div className={styles.page}>
      <HStack max align={"center"} justify={"between"}>
        <Button disabled={step === '0'} onClick={back} view={"action"}>
          <Icon data={ChevronLeft}/>
        </Button>
        <Card className={styles.card}>
          <VStack gap={'24'}>
            {children}
            {render()}
            <Button disabled={!canCreateTrack} onClick={createTrack}>
              Создать трек
            </Button>
          </VStack>
        </Card>
        <Button disabled={step === '2'} onClick={next} view={"action"}>
          <Icon data={ChevronRight}/>
        </Button>
      </HStack>

      <RadioButton
        className={styles.radioButton}
        options={options}
        onUpdate={(value) => setStep(value)}
        value={options[+step].value}
        size="xl">
        <RadioButton.Option content={options[0].content} value={options[0].value}/>
        <RadioButton.Option content={options[1].content} value={options[1].value}/>
        <RadioButton.Option content={options[2].content} value={options[2].value}/>
      </RadioButton>
    </div>
  );
};

export default StepWrapper;