

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: {
        reviewSnippets?: {
            uri: string;
            reviewText: string;
        }[]
    }[]
  };
}

export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:4";

export interface VeoOperation {
  // FIX: `name` is optional in the SDK's `GenerateVideosOperation` type.
  name?: string;
  // FIX: `done` is optional in the SDK's `GenerateVideosOperation` type.
  done?: boolean;
  response?: {
    // FIX: The `generatedVideos` property is optional in the SDK's `GenerateVideosResponse` type, which caused assignment errors.
    generatedVideos?: {
      // FIX: Removed the 'aspectRatio' property from the 'video' object below.
      // The Gemini SDK's `GenerateVideosOperation` response does not include this property on the `Video` type,
      // and its presence caused a type mismatch.
      // FIX: The SDK's `GeneratedVideo` type has an optional `video` property, so this is now optional to match.
      video?: {
        // FIX: The `uri` property is optional in the SDK's `Video` type, which caused assignment errors.
        uri?: string;
      };
    }[];
  };
  error?: any;
}

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}
