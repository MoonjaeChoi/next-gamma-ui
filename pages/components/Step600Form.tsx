import React, { useState, useEffect } from 'react'

import { ActionMeta, SingleValue } from "react-select"
import ComboBox from './control/ComboBox';
import { comboBoxOption, comboBoxOptions } from './control/interfaceType';
import * as ISelectType from './control/interfaceType';


//import ComboBox from '@/components/control/ComboBox';
//import { comboBoxOption, comboBoxOptions } from '@/components/control/interfaceType';

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
}

interface ArrayObjectSelectState {
  selectedVehicle: Vehicle | null;
}


const vehicles: Vehicle[] = [
  { id: 1, make: 'Audi', model: 'A4', year: 2009,  },
  { id: 2, make: 'Beta', model: 'Betman', year: 2010,  },
  { id: 3, make: 'Cesc', model: 'Bug', year: 2023,  },
  { id: 4, make: 'Emma', model: 'Horse', year: 2023,  },
  { id: 5, make: 'Ford', model: 'Fiesta', year: 2023,  },
  { id: 6, make: 'Gene', model: 'Motor', year: 2023,  },
  { id: 7, make: 'KIA', model: 'Grandu', year: 2023,  },
  { id: 8, make: 'Hyun', model: 'K9', year: 2009, },
];

type Props = {}

const Step600Form = (props: Props) => {

  const [suggestedkeyword, setSuggestedKeyword] = useState<ISelectType.IOptionObj[]>([])

  useEffect(() => {
    let list: Array<ISelectType.IOptionObj> = []

    list.push({
      label: '선택',
      color: 'gray',
      isDisabled: true,
    })

    vehicles.map((item, i) => {
      list.push({
        label: item.model,
        color: 'red'
      })
      console.log(item.model)
    })

    setSuggestedKeyword(list)
  }, [])

  const onChangeWord = (
    newValue: SingleValue<ISelectType.IOptionObj>,
    actionMeta: ActionMeta<ISelectType.IOptionObj>
  ) => {
    const name = newValue?.label;
    const color = newValue?.color;
  }

  const changeInputValue = async (e: any) => {

    if (e && e.label)
    {
      console.log('changeInputValue : ' + e.label)
    }
  }

  return (
    <div className="container">
      <h3>스케줄 수정</h3>
      <div className="content">
        <div className="modal">
          <span>직원</span>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-5 leading-[2]"
              htmlFor="DraftWord"
            >
              문서를 작성하기 위한 첫 번째 단계인 <br/>초안을 작성하기 위해,<br/>
              단어를 선택하는 단계입니다. <br/>
              초안 작성 시 단어 선택은 문서의 품질과 목적에 큰 영향을 미칩니다.<br/>
              문서 작성을 위한 단어를 선택하여 주십시오.
            </label>
            <ComboBox
              id="select-draft-words-form"
              instanceId="select-draft-words-form"
              defaultValue={comboBoxOptions[1]}
              isDisabled={false}
              isLoading={false}
              isClearable={true}
              name="draft-words"
              options={suggestedkeyword}
              onChange={changeInputValue}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step600Form