import {Field, GroupComponentProps} from "wbox-details-ui";
import {useTheme} from "../../Theme/UseTheme";
import React from "react";
import {DetailsAction, DetailsOptions} from "./DetailsOptions";

export function DetailsGroup(props: GroupComponentProps) {
    const options = props.group.options as DetailsOptions;
    const data = props.data as Record<string, unknown>
    const {fields} = props;
    const theme = useTheme();
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
        </div>
        <div className={theme.detailsGroup.detailsWrapper}>
            <dl>
                {
                    fields.map((field, index) => {
                        const value = data[field.name];
                        const itemWrapperClassName = options.stripped && index % 2 === 1
                            ? theme.detailsGroup.item.wrapper
                            : theme.detailsGroup.item.wrapperStripped;
                        return <div key={field.name} className={itemWrapperClassName}>
                            <dt className={theme.detailsGroup.item.title}>
                                <Title value={value} field={field}/>
                            </dt>
                            <dd className={theme.detailsGroup.item.value}>
                                <Value data={data} field={field} action={options.actions?.[field.name]}/>
                            </dd>
                        </div>
                    })
                }
            </dl>
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
    action?: DetailsAction;
}

function Value({data, field, action}: ValueProps) {
    const value = data[field.name];
    const theme = useTheme();
    if (!field.renderValue) {
        if (isArrayOfStrings(value)) {
            return <ValueList values={value as string[]}/>
        }

        if (action) {
            return <div className={theme.detailsGroup.item.actionWrapper}>
                <span className={theme.detailsGroup.item.text}>{String(value)}</span>
                <button onClick={() => action?.onClick?.(value, data)}
                        className={theme.detailsGroup.item.action}>{action.text}</button>
            </div>
        }

        return <span className={theme.detailsGroup.item.text}>{String(value)}</span>
    }
    return field.renderValue(value, field, data, undefined);
}

function isArrayOfStrings(values: unknown) {
    if (Array.isArray(values)) {
        for (const v of values) {
            if (typeof v !== "string") {
                return false;
            }
        }
        return true;
    }
    return false;
}

function ValueList({values}: { values: string[] }) {
    const theme = useTheme();
    return <ul className={theme.detailsGroup.arrayItem.list}>
        {
            values.map((value, index) =>
                <li key={index}
                    className={theme.detailsGroup.arrayItem.item}>
                    <span className={theme.detailsGroup.arrayItem.text}>{value}</span>
                </li>)
        }
    </ul>
}