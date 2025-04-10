import { useState } from "react"
import { Select, SelectOption } from "./Select"

const options = [
  { label: "e.g.: Random", value: 1 },
  { label: "Female AI Avatar", value: 0 },
  { label: "Male AI Avatar", value: 2 },
  { label: "No preference AI Avatar", value: 3 },
  { label: "English", value: 4 },
  { label: "German", value: 5 },
  { label: "Formal", value: 6 },
  { label: "Informal", value: 7 },
  { label: "Only the AI Avatar in the Video", value: 8 },
  { label: "Add Other AI Generated Effects", value: 9 },
]


interface AppProps {
  parameters: any[];
  setParameters: any;
  onSubmitParameters: any;
  isLoading: boolean;
  onBacktoAI: any;
}

const App: React.FC<AppProps> = (props) => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => {setValue1(o), console.log(o.reduce((result, item) => {
          return `${result}${item.label},`
        }, "")), props.setParameters(o.reduce((result, item) => {
          return `${result}${item.label},`
        }, ""))}}
      />
      <br />
    </>
  )
}

export default App