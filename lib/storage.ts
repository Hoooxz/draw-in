// Centralized localStorage keys for quota tracking and settings
// Chat data is now stored in IndexedDB via session-storage.ts

export const STORAGE_KEYS = {
    // Quota tracking
    requestCount: "draw-in-request-count",
    requestDate: "draw-in-request-date",
    tokenCount: "draw-in-token-count",
    tokenDate: "draw-in-token-date",
    tpmCount: "draw-in-tpm-count",
    tpmMinute: "draw-in-tpm-minute",

    // Settings
    accessCode: "draw-in-access-code",
    accessCodeRequired: "draw-in-access-code-required",
    aiProvider: "draw-in-ai-provider",
    aiBaseUrl: "draw-in-ai-base-url",
    aiApiKey: "draw-in-ai-api-key",
    aiModel: "draw-in-ai-model",

    // Multi-model configuration
    modelConfigs: "draw-in-model-configs",
    selectedModelId: "draw-in-selected-model-id",

    // Chat input preferences
    sendShortcut: "draw-in-send-shortcut",

    // Diagram validation
    vlmValidationEnabled: "draw-in-vlm-validation-enabled",

    // Custom system message
    customSystemMessage: "draw-in-custom-system-message",

    // Panel visibility
    showRecentChats: "draw-in-show-recent-chats",
    showMyTemplates: "draw-in-show-my-templates",
    showQuickExamples: "draw-in-show-quick-examples",
} as const
