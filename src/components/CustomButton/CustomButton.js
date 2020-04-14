import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./CustomButton.css";
import "./CustomButton.less";

const CustomButton = (props) => {
  return (
    <>
      <Button className="css-class less-class" type="primary">
        CustomButton
      </Button>
    </>
  );
};

export default CustomButton;
