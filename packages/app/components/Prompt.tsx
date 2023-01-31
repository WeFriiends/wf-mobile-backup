import { Text } from "dripsy";

type PromptProps = {
    text: string
}

const Prompt = (props: PromptProps) => {
    return (
        <Text>
            {props.text}
        </Text>
    )
}

export default Prompt;