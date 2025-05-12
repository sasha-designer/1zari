interface Kakao {
  maps: {
    load(callback: () => void): void;
    LatLng: new (lat: number, lng: number) => any;
    Map: new (container: HTMLElement, options: any) => any;
    Marker: new (options: any) => any;
  };
}

interface Window {
  kakao: Kakao;
}
