export interface AlertTheme {
    empty: string;
    error: string;
    loading: string;
}

export interface DetailsGroupTheme {
    wrapper: string;
    wrapperCard: string;
    title: string;
    subtitle: string;
    item: {
        wrapper: string;
        wrapperStripped: string;
        title: string;
        value: string;
        action: string;
        actionWrapper: string;
        text: string;
    },
    arrayItem: {
        list: string;
        item: string;
        text: string;
    }
    header: {
        wrapper: string;
        title: string;
        subtitle: string;
    },
    detailsWrapper: string;
}

export interface Theme {
    detailsGroup: DetailsGroupTheme;
    alert: AlertTheme;
    spinner: string;
    rightToLeft: boolean;
}
