export interface Menu {
    name: string;
    icon?: string;
    children?: Menu[];
    action?: {
        type: 'LINK' | 'ROUTER' | 'CALLBACK';
        url?: string;
        callback?: () => undefined;
    },
    notification?: {
        text: string;
        useDot?: boolean;
    }
}