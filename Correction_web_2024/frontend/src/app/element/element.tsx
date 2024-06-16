import { useState } from "react";
import { Button, Checkbox } from "antd";
import {
  DeleteOutlined,
} from "@ant-design/icons";

type ElementProps = {
  element:string;
  alasuppression: (element:string) => any;
};

export const Element = ({element, alasuppression}: ElementProps) => {
  const [check, setCheck] = useState<boolean>(false);

  const onCheck = (e:any) => {
    setCheck(e.target.checked);
  };
  
  return (
    <>

    <div>
      {check ? (
        <del>{element}</del> 
      ): (
        element
      )}

      <Checkbox onChange={onCheck}></Checkbox>
      <Button
        type="primary"
        danger={true}
        icon={<DeleteOutlined />}
        onClick={() => alasuppression(element)}
      />
    </div>
    </>
  );
};
