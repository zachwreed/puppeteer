import 'devtools-protocol';

/**
 * Extended ProtocolMapping Module for ChromeCraft
 */
declare module 'devtools-protocol/types/protocol-mapping.js' {
  export namespace ProtocolMapping {
    export interface Commands {
      'ChromeCraft.setTag': {
        paramsType: [
          {
            tag: string;
          },
        ];
        returnType: void;
      };
    }
  }
}
