export interface DetailsAction {
    text: string;
    onClick: (value: unknown, data: unknown) => void;
}

export interface DetailsOptions {
    title: string;
    subtitle?: string;
    stripped?: boolean;
    actions?: Record<string, DetailsAction>
}