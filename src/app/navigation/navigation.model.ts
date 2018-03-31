export interface NavigationNode {
    url?: string;
    title?: string;
    tooltip?: string;
    description?: string;
    hidden?: boolean;
    blank?: boolean;
    children?: NavigationNode[];
}

export interface NavigationStepNode {
    id?: string;
    title?: string;
}

export interface NavigationStepViews {
    [name: string]: NavigationStepNode[];
}

export interface NavigationViews {
    [name: string]: NavigationNode[];
}
