export interface NavigationNode {
    url?: string;
    title?: string;
    tooltip?: string;
    hidden?: boolean;
    children?: NavigationNode[];
}

export interface NavigationViews {
    [name: string]: NavigationNode[];
}
