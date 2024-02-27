// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
interface WasmModule {
}

export interface VideoDecoder {
  init(): void;
  decodeFromRTP(_0: any): void;
  onOutputAvailable(_0: any): void;
  onError(_0: any): void;
  delete(): void;
}

export interface VideoDecoderCallbacks {
  setOwner(_0: number): void;
  onOutput(_0: any): void;
  onError(_0: any): void;
  delete(): void;
}

export interface ListenerCallback {
  onload(_0: any): void;
  delete(): void;
}

interface EmbindModule {
  VideoDecoder: {new(_0: ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string): VideoDecoder};
  VideoDecoderCallbacks: {new(): VideoDecoderCallbacks};
  ListenerCallback: {new(): ListenerCallback};
  renderCanvas(_0: ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|string): void;
  renderCanvas2(_0: any): void;
  VideoDecoder_onError(_0: any): void;
}
export type MainModule = WasmModule & EmbindModule;
