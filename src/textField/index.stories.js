import { html } from "lit-html";

import "./index.js";

export default {
  title: "kuc/text-field",
  argTypes: {
    required: {
      control: "boolean"
    },
    error: {
      control: { type: "text" }
    }
  },
  parameters: {
    actions: {
      handles: ["change"]
    }
  }
};

const Template = ({
  label,
  value,
  placeholder,
  error,
  required,
  className,
  id
}) =>
  html`
    <kuc-text-field
      .className="${className}"
      .id="${id}"
      .label="${label}"
      .value="${value}"
      .placeholder="${placeholder}"
      .error="${error}"
      ?required="${required}"
    ></kuc-text-field>
  `;

export const Base = Template.bind({});
Base.args = {
  label: "Username",
  value: "hunghaubmt",
  required: false,
  placeholder: "Input username",
  error: "",
  className: "my-class",
  id: ""
};
