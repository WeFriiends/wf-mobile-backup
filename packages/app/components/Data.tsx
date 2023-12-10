import { Text } from "react-native";

type DataProps = {
    data: string
}

const Data = (props: DataProps) => {
    return (
        <Text>
            {props.data}
        </Text>
    )
}

export default Data;