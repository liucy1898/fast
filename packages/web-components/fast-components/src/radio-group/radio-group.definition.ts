import { WebComponentDefinition } from "@microsoft/fast-tooling/dist/esm/data-utilities/web-component";
import { DataType } from "@microsoft/fast-tooling";
import { Orientation } from "@microsoft/fast-web-utilities";

export const fastRadioGroupDefinition: WebComponentDefinition = {
    version: 1,
    tags: [
        {
            name: "fast-radio-group",
            title: "Radio group",
            description: "The FAST radio-group element",
            attributes: [
                {
                    name: "value",
                    description: "The value attribute",
                    default: undefined,
                    required: false,
                    type: DataType.string,
                },
                {
                    name: "orientation",
                    description: "The orientation attribute",
                    default: Orientation.horizontal,
                    values: [
                        { name: Orientation.horizontal },
                        { name: Orientation.vertical },
                    ],
                    required: false,
                    type: DataType.string,
                },
                {
                    name: "name",
                    description: "The name attribute",
                    type: DataType.string,
                    default: "",
                    required: false,
                },
                {
                    name: "required",
                    description: "The required attribute",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
                {
                    name: "disabled",
                    description: "The disabled attribute",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
                {
                    name: "readonly",
                    description: "The readonly attribute",
                    type: DataType.boolean,
                    default: false,
                    required: false,
                },
            ],
            slots: [
                {
                    name: "",
                    title: "Default slot",
                    description:
                        "Supports fast-radio elements or elements with a role of 'radio'",
                },
                {
                    name: "label",
                    title: "Label slot",
                    description: "The visual label for the group",
                },
            ],
        },
    ],
};
