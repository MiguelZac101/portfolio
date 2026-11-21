export type JourneyProjectGenerate = {
    description?: string;
    repo: string;
} & (
    | { url: string; title: string; image: string; imageWidth: number; imageHeight: number }
    | { url?: undefined; title?: undefined; image?: undefined; imageWidth?: undefined; imageHeight?: undefined }
);

export interface JourneyItem {
    date: string;
    title: string;
    description: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    resource_url: string;
    resource_label: string;
    channel: string;
    project: JourneyProjectGenerate | null;
    in_progress?: boolean;
}
