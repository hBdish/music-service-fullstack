import styles from './create-play-list.module.css'
import {Button, Card, Icon, TextInput} from "@gravity-ui/uikit";
import {useRef, useState} from "react";
import {classNames} from "@/lib/class-names/class-names";
import {Plus} from "@gravity-ui/icons";
import {VStack} from "@/components/stack";
import {useOutsideEvent} from "@/lib/hooks/use-outside-event";
import {useAppDispatch} from "@/store/hooks/hooks";
import {cretePlaylist} from "@/store/slice/play-list/play-list-service";
import {useInput} from "@/lib/hooks/use-input";

const CreatePlayList = () => {
  const [cardIsFocused, setCardIsFocused] = useState(false)
  const ref = useRef(null)
  const dispatch = useAppDispatch()
  const name = useInput('')

  useOutsideEvent(ref, () => {
    setCardIsFocused(false)
  })

  function changeFocus(focus: boolean) {
    return () => {
      setCardIsFocused(focus)
    }
  }

  const crPlaylist = () => {
    dispatch(cretePlaylist(name.value))
  }

  return (
    <div
      ref={ref}
      className={classNames(styles.createCard, {[styles.cardIsFocused]: cardIsFocused}, [])}
    >
      <Card style={{width: '100%', height: '100%'}}>

        {cardIsFocused &&
          <VStack
            className={styles.content}
            gap={'16'}
            max
            align={"center"}
            justify={"center"}
          >
            <TextInput
              value={name.value}
              onChange={(e) => name.onChange(e.target.value)}
            />
            <Button
              view={'outlined-action'}
              onClick={crPlaylist}
            >
              Создать
            </Button>
          </VStack>
        }
        {!cardIsFocused &&
          <VStack
            className={styles.content}
            max
            align={"center"}
          >
            <Button
              view={'outlined'}
              onClick={changeFocus(true)}
            >
              <Icon data={Plus}/>
            </Button>
          </VStack>
        }
      </Card>
    </div>

  );
};

export default CreatePlayList;