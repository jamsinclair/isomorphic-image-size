type SizeResult = {
    width: number;
    height: number;
    type: string;
    mime: string;
    wUnits: string;
    hUnits: string;
}

export default function get_image_size(data: Array | ArrayBuffer, ext: string): SizeResult | null;
