import { MarkerOptions } from "./kakao-maps.constants";
import { LatLng } from "./kakao-maps.LatLng";
import { KakaoMap } from "./kakao-maps.KakaoMap";
import { Viewpoint } from "./kakao-maps.Viewpoint";
import { MarkerImage } from "./kakao-maps.MarkerImage";
import { Roadview } from "./kakao-maps.Roadview";
export declare class Marker {
    private object;
    constructor(options: MarkerOptions);
    setMap(map_or_roadview: KakaoMap | Roadview): Promise<any>;
    getMap(): any;
    setImage(image: MarkerImage): Promise<any>;
    getImage(): any;
    setPosition(position: LatLng | Viewpoint): Promise<any>;
    getPosition(): LatLng;
    setZIndex(zIndex: number): Promise<any>;
    getZIndex(): any;
    setVisible(visible: boolean): Promise<any>;
    getVisible(): any;
    setTitle(title: string): Promise<any>;
    getTitle(): any;
    setDraggable(draggable: boolean): Promise<any>;
    getDraggable(): any;
    setClickable(clickable: boolean): Promise<any>;
    getClickable(): any;
    setAltitude(altitude: number): Promise<any>;
    getAltitude(): any;
    setRange(range: number): Promise<any>;
    getRange(): any;
    setOpacity(opacity: number): Promise<any>;
    getOpacity(): any;
}
