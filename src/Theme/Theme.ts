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
        title: string;
        value: string;
        action: string;
    }
}

export interface Theme {
    detailsGroup: DetailsGroupTheme;
    alert: AlertTheme;
    spinner: string;
    rightToLeft: boolean;
}
