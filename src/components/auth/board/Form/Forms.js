import React from "react";
import { useState } from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./JoinForm/Step1";
import Step2 from "./JoinForm/Step2";
import Form from "react-bootstrap/Form";

function Forms(props) {
  return (
    <>
      <Form>
        {/* -----------------------form-------------------------- */}
        <Steps>
          <Step component={Step1} />
          <Step component={Step2} />
        </Steps>
        {/* -----------------------form-------------------------- */}
      </Form>
    </>
  );
}
export default Forms;
