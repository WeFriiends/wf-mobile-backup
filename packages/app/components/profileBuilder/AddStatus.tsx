import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { View } from 'dripsy'
import { useEffect, useState } from 'react'
import NextStepButton from '../ui/NextStepButton'
import PreviousStepButton from '../ui/PreviousStepButton'
import { Step } from 'app/types/Step'
import getOrientation from '../../lib/helpers/GetOrientation'
import Prompt from '../Prompt'
import Data from '../Data'

type AddStatusProps = {
  step: Step
  saveInput: (value: string | Array<string>, action: string) => void
  navigateToPreviousStep: (action: string) => void
  status: Array<string>
}

type ItemData = {
  id: string
  option: string
}
interface ItemProps {
  item: ItemData
  onPress: () => void
  backgroundColor: { backgroundColor: string }
}

const AddStatus = (props: AddStatusProps) => {
  const [options] = useState<any>(props?.step?.options)
  const [orientation, setOrientation] = useState<number>(1)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  useEffect(() => {
    setLayout()
    if (props.status) { 
      setSelectedIds([...props.status])
    }
  
  }, [])

  const setLayout = async () => {
    const orientation = await getOrientation()
    setOrientation(orientation)
  }

  const handlePress = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.filter((item) => item !== id)
      )
    } else if (selectedIds.length < 3) {
      setSelectedIds((prevSelectedIds) => [...prevSelectedIds, id])
    }
  }

  const handleInput = (action: string) => {
    if (action === 'next') {
      props.saveInput(selectedIds, action)
    } else {
      props.navigateToPreviousStep(action)
    }
  }

  const Item = ({ item, onPress, backgroundColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.input, backgroundColor]}>
      <Text style={[styles.option]}>{item.option}</Text>
    </TouchableOpacity>
  )

  const renderItem = ({ item }: { item: ItemData }) => {
    const isSelected = selectedIds.includes(item.id)
    const backgroundColor = isSelected ? '#FEDED2' : 'lightgrey'

    return (
      <View style={{ width: Dimensions.get('window').width / 2 }}>
        <Item
          item={item}
          onPress={() => handlePress(item.id)}
          backgroundColor={{ backgroundColor }}
        />
      </View>
    )
  }

  return (
    <View sx={{ alignItems: 'center' }}>
      <PreviousStepButton onSubmit={handleInput} action="prev" />
      <View sx={{ mt: 3 }}>
        <Prompt text={props.step.prompt} />
      </View>

      <View sx={{ mt: 3, mb: 3 }}>
        <Data data={props.step.data} color={'#1D878C'} />
      </View>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedIds}
        style={styles.flatList}
        numColumns={2}
      />
      <View sx={{ mt: 2, mb: 3 }}>
        <NextStepButton
          onSubmit={handleInput}
          action="next"
          isInputValidated={true}
          caption={'Next'}
          activeOpacity={0}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flatList: {
    height: 250, // Set your desired height here
  },
  input: {
    alignContent: 'center',
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
  option: {
    fontSize: 14,
  },
})

export default AddStatus
