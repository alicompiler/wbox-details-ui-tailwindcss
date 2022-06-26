export interface DetailsAction {
    text: string;
    onClick: () => void;
}

export interface DetailsOptions {
    title: string;
    subtitle?: string;
    stripped?: boolean;
    actions: Record<string, DetailsAction>
}