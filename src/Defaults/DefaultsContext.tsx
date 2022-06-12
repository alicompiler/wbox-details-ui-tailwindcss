import React, {PropsWithChildren, useContext} from "react";
import {Defaults} from "./Defaults";
import {DefaultsContext as DetailsUIDefaultContext, defaults as detailsUIDefaults} from "wbox-details-ui";
import {Spinner} from "../Components/Spinner";
import {Alert} from "../Components/Alert";

const defaults: Defaults = {
    loadingMessage: 'Loading Data...',
    emptyMessage: 'No Data',
    errorMessage: 'Failed To Fetch Data!',
}

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider = (props: PropsWithChildren<Partial<Defaults>>) => {
    const {children, ...otherProps} = props;
    return <DefaultsContext.Provider value={{...defaults, ...otherProps}}>
        <DetailsUIDefaultContext.Provider value={{
            ...detailsUIDefaults,
            renderLoading: () => <Spinner/>,
            renderError: () => <Alert type={'error'}/>,
        }}>
            {
                children
            }
        </DetailsUIDefaultContext.Provider>
    </DefaultsContext.Provider>
};

export function useDefaults() {
    return useContext(DefaultsContext);
}
