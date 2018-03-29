export interface NavigationNode {
    url?: string;
    title?: string;
    tooltip?: string;
    description?: string;
    hidden?: boolean;
    blank?: boolean;
    children?: NavigationNode[];
}

export interface NavigationViews {
    [name: string]: NavigationNode[];
}
