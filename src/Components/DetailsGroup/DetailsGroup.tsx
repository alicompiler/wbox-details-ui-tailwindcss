import {Field, GroupComponentProps} from "wbox-details-ui";
import {useTheme} from "../../Theme/UseTheme";
import React from "react";
import {DetailsOptions} from "./DetailsOptions";

export function DetailsGroup(props: GroupComponentProps) {
    const options = props.group.options as DetailsOptions;
    const data = props.data as Record<string, unknown>
    const {fields} = props;
    const theme = useTheme();
    console.log(data, options, fields, theme);
    return <div className={theme.detailsGroup.wrapper}>
        <div className={theme.detailsGroup.header.wrapper}>
            <h3 className={theme.detailsGroup.header.title}>
                {options.title}
            </h3>
            {
                options.subtitle &&
                <p className={theme.detailsGroup.header.subtitle}>
                    {options.subtitle}
                </p>
            }
            <div className={theme.detailsGroup.detailsWrapper}>
                <dl>
                    {
                        fields.map((field, index) =>
                            <div key={field.name}
                                 className={options.stripped && index % 2 === 1 ? theme.detailsGroup.item.wrapper : theme.detailsGroup.item.wrapperStripped}>
                                <dt className={theme.detailsGroup.item.title}>
                                    <Title value={data[field.name]} field={field}/>
                                </dt>
                                <dd className={theme.detailsGroup.item.value}>
                                    <Value data={data} field={field}/>
                                </dd>
                            </div>)
                    }
                </dl>
            </div>
        </div>
    </div>
}

interface TitleProps {
    value: unknown;
    field: Field;
}

function Title({value, field}: TitleProps) {
    if (!field.renderTitle) {
        return <span>{field.title}</span>;
    }
    return field.renderTitle(value, field);
}


interface ValueProps {
    data: Record<string, unknown>;
    field: Field;
}

function Value({data, field}: ValueProps) {
    const value = data[field.name];
    if (!field.renderValue) {
        return <span>{String(value)}</span>
    }
    return field.renderValue(value, field, data, undefined);
}