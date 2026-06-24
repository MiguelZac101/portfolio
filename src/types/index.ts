export interface JourneyProjectGenerate {
    title?: string;
    description?: string;
    image?: string;
    repo: string;
    url?: string;
}

export interface JourneyItem {
    date: string;
    title: string;
    description: string;
    image: string;
    resource_url: string;
    resource_label: string;
    channel: string;
    project: JourneyProjectGenerate | null;
    in_progress?: boolean;
}

