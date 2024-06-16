import { useState } from "react";
import { Form, Button, Input } from "antd";

type AddElementProps = {
    alajout: (element:string) => any;
  };

export const AddElement = ({alajout}:AddElementProps) => {
    const [newElement, setNewElement] = useState<string>("");

    return (
          <>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: false }}
              onFinish={() => alajout(newElement)}
              autoComplete="off"
            >
              <Form.Item
                label="Element"
                name="element"
                rules={[{ required: true, message: "L'élement est obligatoire !"}]}
              >
                <Input onChange={(e) => setNewElement(e.target.value)} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Ajouter
              </Button>
              </Form.Item>
            </Form>
          </>
    )
}