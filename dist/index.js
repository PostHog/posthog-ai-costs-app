"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  processEvent: () => processEvent
});
module.exports = __toCommonJS(index_exports);

// src/ai-cost-data/openai/fine-tuned-models.ts
var costs = [
  {
    model: {
      operator: "startsWith",
      value: "ft:gpt-3.5-turbo-"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "startsWith",
      value: "ft:gpt-4o-mini-2024-07-18:"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "startsWith",
      value: "ft:gpt-4o-2024-08-06:"
    },
    cost: {
      prompt_token: 375e-8,
      completion_token: 15e-6
    }
  }
];

// src/ai-cost-data/togetherai/chat/index.ts
var costs2 = [
  {
    model: {
      operator: "equals",
      value: "allenai/OLMo-7B-Instruct"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "allenai/OLMo-7B-Twin-2T"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "allenai/OLMo-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Austism/chronos-hermes-13b"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "deepseek-ai/deepseek-coder-33b-instruct"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 8e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "garage-bAInd/Platypus2-70B-instruct"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-2b-it"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-7b-it"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Gryphe/MythoMax-L2-13b"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "lmsys/vicuna-13b-v1.5"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "lmsys/vicuna-7b-v1.5"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/Mistral-7B-Instruct-v0.1"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/Mistral-7B-Instruct-v0.2"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/Mixtral-8x7B-Instruct-v0.1"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Capybara-7B-V1p9"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-SFT"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-2-Yi-34B"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 8e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openchat/openchat-3.5-1210"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Open-Orca/Mistral-7B-OpenOrca"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-0.5B-Chat"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-1.8B-Chat"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-4B-Chat"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-7B-Chat"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-14B-Chat"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "snorkelai/Snorkel-Mistral-PairRM-DPO"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/alpaca-7b"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "teknium/OpenHermes-2-Mistral-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "teknium/OpenHermes-2p5-Mistral-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/RedPajama-INCITE-Chat-3B-v1"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/RedPajama-INCITE-7B-Chat"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/StripedHyena-Nous-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Undi95/ReMM-SLERP-L2-13B"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Undi95/Toppy-M-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "WizardLM/WizardLM-13B-V1.2"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "upstage/SOLAR-10.7B-Instruct-v1.0"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 88e-8,
      completion_token: 88e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 35e-7,
      completion_token: 35e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-70B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 88e-8,
      completion_token: 88e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-8B-Instruct-Lite"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-70B-Instruct-Lite"
    },
    cost: {
      prompt_token: 54e-8,
      completion_token: 54e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/WizardLM-2-8x22B"
    },
    cost: {
      prompt_token: 12e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/Mixtral-8x22B-Instruct-v0.1"
    },
    cost: {
      prompt_token: 24e-7,
      completion_token: 24e-7
    }
  }
];

// src/ai-cost-data/togetherai/chat/llama.ts
var costs3 = [
  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-13b-Instruct-hf"
    },
    cost: {
      prompt_token: 225e-9,
      completion_token: 225e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-34b-Instruct-hf"
    },
    cost: {
      prompt_token: 776e-9,
      completion_token: 776e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-70b-Instruct-hf"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "codellama/CodeLlama-7b-Instruct-hf"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-2-70b-chat-hf"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-2-13b-chat-hf"
    },
    cost: {
      prompt_token: 225e-9,
      completion_token: 225e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-2-7b-chat-hf"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-3-70b-chat-hf"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Llama-3-8b-chat-hf"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-llama-2-7b"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "NousResearch/Nous-Hermes-Llama2-13b"
    },
    cost: {
      prompt_token: 225e-9,
      completion_token: 225e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/Llama-2-7B-32K-Instruct"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 88e-8,
      completion_token: 88e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 5e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-70B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 88e-8,
      completion_token: 88e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-70B-Instruct-Lite"
    },
    cost: {
      prompt_token: 54e-8,
      completion_token: 54e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/Meta-Llama-3-8B-Instruct-Lite"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  }
];

// src/ai-cost-data/togetherai/completion/index.ts
var costs4 = [
  {
    model: {
      operator: "equals",
      value: "zero-one-ai/Yi-34B"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 8e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "zero-one-ai/Yi-6B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-2b"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-7b"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/phi-2"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Nexusflow/NexusRaven-V2-13B"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-0.5B"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-1.8B"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-4B"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-14B"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "Qwen/Qwen1.5-72B"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/GPT-JT-Moderation-6B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/RedPajama-INCITE-Base-3B-v1"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/RedPajama-INCITE-7B-Base"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/RedPajama-INCITE-Instruct-3B-v1"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/RedPajama-INCITE-7B-Instruct"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "togethercomputer/StripedHyena-Hessian-7B"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/Mistral-7B-v0.1"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/Mixtral-8x7B-v0.1"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  }
];

// src/ai-cost-data/azure/index.ts
var costs5 = [
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-45-turbo"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt4-turbo-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-preview-1106"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo-1106"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt35"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo-0613"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-16k"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-vision"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  }
];

// src/ai-cost-data/google/index.ts
var costs6 = [
  {
    model: {
      operator: "includes",
      value: "gemini-pro"
    },
    cost: {
      prompt_token: 125e-9,
      completion_token: 375e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "gemini-1.0-pro-vision-001"
    },
    cost: {
      prompt_token: 125e-9,
      completion_token: 375e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "gemini-1.0-pro"
    },
    cost: {
      prompt_token: 125e-9,
      completion_token: 375e-9
    }
  },
  {
    model: {
      operator: "includes",
      value: "gemini-1.5-flash"
    },
    cost: {
      prompt_token: 35e-8,
      completion_token: 105e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "gemini-flash-1.5-8b"
    },
    cost: {
      prompt_token: 375e-10,
      completion_token: 15e-8
    }
  },
  {
    model: {
      operator: "includes",
      value: "gemini-1.5-pro"
    },
    cost: {
      prompt_token: 35e-7,
      completion_token: 105e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-5-sonnet-v2@20241022"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    },
    showInPlayground: false
  }
];

// src/ai-cost-data/cohere/index.ts
var costs7 = [
  {
    model: {
      operator: "equals",
      value: "cohere/command-r"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 15e-7
    }
  }
];

// src/ai-cost-data/mistral/index.ts
var costs8 = [
  {
    model: {
      operator: "equals",
      value: "open-mistral-7b"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 25e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "open-mixtral-8x7b"
    },
    cost: {
      prompt_token: 7e-7,
      completion_token: 7e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistral-small-latest"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistral-medium-latest"
    },
    cost: {
      prompt_token: 27e-7,
      completion_token: 81e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistral-large-latest"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistral-embed"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  }
];

// src/ai-cost-data/openrouter/index.ts
var costs9 = [
  {
    model: {
      operator: "equals",
      value: "sao10k/l3.3-euryale-70b"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 15e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "inflatebot/mn-mag-mell-r1"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/o1"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 6e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "eva-unit-01/eva-llama-3.33-70b"
    },
    cost: {
      prompt_token: 4e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "x-ai/grok-2-vision-1212"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "x-ai/grok-2-1212"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r7b-12-2024"
    },
    cost: {
      prompt_token: 375e-10,
      completion_token: 15e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-2.0-flash-exp:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-exp-1206:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.3-70b-instruct"
    },
    cost: {
      prompt_token: 13e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "amazon/nova-lite-v1"
    },
    cost: {
      prompt_token: 6e-8,
      completion_token: 24e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "amazon/nova-micro-v1"
    },
    cost: {
      prompt_token: 35e-9,
      completion_token: 14e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "amazon/nova-pro-v1"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 32e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwq-32b-preview"
    },
    cost: {
      prompt_token: 13e-8,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-exp-1121:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/learnlm-1.5-pro-experimental:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "eva-unit-01/eva-qwen-2.5-72b"
    },
    cost: {
      prompt_token: 4e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o-2024-11-20"
    },
    cost: {
      prompt_token: 25e-7,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-large-2411"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-large-2407"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/pixtral-large-2411"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "x-ai/grok-vision-beta"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-exp-1114:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "infermatic/mn-inferor-12b"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2.5-coder-32b-instruct"
    },
    cost: {
      prompt_token: 8e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "raifle/sorcererlm-8x22b"
    },
    cost: {
      prompt_token: 45e-7,
      completion_token: 45e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "eva-unit-01/eva-qwen-2.5-32b"
    },
    cost: {
      prompt_token: 26e-7,
      completion_token: 34e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "thedrummer/unslopnemo-12b"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-haiku-20241022:beta"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-haiku-20241022"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-haiku:beta"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-haiku"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "neversleep/llama-3.1-lumimaid-70b"
    },
    cost: {
      prompt_token: 3375e-9,
      completion_token: 45e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthracite-org/magnum-v4-72b"
    },
    cost: {
      prompt_token: 1875e-9,
      completion_token: 225e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-sonnet:beta"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-sonnet"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "x-ai/grok-beta"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/ministral-8b"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/ministral-3b"
    },
    cost: {
      prompt_token: 4e-8,
      completion_token: 4e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2.5-7b-instruct"
    },
    cost: {
      prompt_token: 27e-8,
      completion_token: 27e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "nvidia/llama-3.1-nemotron-70b-instruct"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "inflection/inflection-3-pi"
    },
    cost: {
      prompt_token: 25e-7,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "inflection/inflection-3-productivity"
    },
    cost: {
      prompt_token: 25e-7,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-flash-1.5-8b"
    },
    cost: {
      prompt_token: 375e-10,
      completion_token: 15e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthracite-org/magnum-v2-72b"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 3e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "liquid/lfm-40b"
    },
    cost: {
      prompt_token: 15e-8,
      completion_token: 15e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "thedrummer/rocinante-12b"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-3b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-3b-instruct"
    },
    cost: {
      prompt_token: 18e-9,
      completion_token: 3e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-1b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-1b-instruct"
    },
    cost: {
      prompt_token: 1e-8,
      completion_token: 2e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-90b-vision-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-90b-vision-instruct"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-11b-vision-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.2-11b-vision-instruct"
    },
    cost: {
      prompt_token: 55e-9,
      completion_token: 55e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2.5-72b-instruct"
    },
    cost: {
      prompt_token: 23e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2-vl-72b-instruct"
    },
    cost: {
      prompt_token: 4e-7,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "neversleep/llama-3.1-lumimaid-8b"
    },
    cost: {
      prompt_token: 1875e-10,
      completion_token: 1125e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/o1-mini-2024-09-12"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 12e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/o1-preview"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 6e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/o1-preview-2024-09-12"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 6e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/o1-mini"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 12e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/pixtral-12b"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r-08-2024"
    },
    cost: {
      prompt_token: 1425e-10,
      completion_token: 57e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r-plus-08-2024"
    },
    cost: {
      prompt_token: 2375e-9,
      completion_token: 95e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2-vl-7b-instruct"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-flash-1.5-exp"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "sao10k/l3.1-euryale-70b"
    },
    cost: {
      prompt_token: 35e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-flash-1.5-8b-exp"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "ai21/jamba-1-5-large"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 8e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "ai21/jamba-1-5-mini"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/phi-3.5-mini-128k-instruct"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "nousresearch/hermes-3-llama-3.1-70b"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "nousresearch/hermes-3-llama-3.1-405b"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3.1-sonar-huge-128k-online"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 5e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/chatgpt-4o-latest"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "sao10k/l3-lunaris-8b"
    },
    cost: {
      prompt_token: 3e-8,
      completion_token: 6e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "aetherwiing/mn-starcannon-12b"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o-2024-08-06"
    },
    cost: {
      prompt_token: 25e-7,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-405b"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "nothingiisreal/mn-celeste-12b"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3.1-sonar-small-128k-chat"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-pro-1.5-exp"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3.1-sonar-large-128k-chat"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 1e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3.1-sonar-large-128k-online"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 1e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3.1-sonar-small-128k-online"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-405b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-405b-instruct"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-405b-instruct:nitro"
    },
    cost: {
      prompt_token: 1462e-8,
      completion_token: 1462e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-8b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-8b-instruct"
    },
    cost: {
      prompt_token: 2e-8,
      completion_token: 5e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-70b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-70b-instruct"
    },
    cost: {
      prompt_token: 13e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3.1-70b-instruct:nitro"
    },
    cost: {
      prompt_token: 325e-8,
      completion_token: 325e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-nemo"
    },
    cost: {
      prompt_token: 4e-8,
      completion_token: 9e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/codestral-mamba"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 25e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o-mini"
    },
    cost: {
      prompt_token: 15e-8,
      completion_token: 6e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o-mini-2024-07-18"
    },
    cost: {
      prompt_token: 15e-8,
      completion_token: 6e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2-7b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2-7b-instruct"
    },
    cost: {
      prompt_token: 54e-9,
      completion_token: 54e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-2-27b-it"
    },
    cost: {
      prompt_token: 27e-8,
      completion_token: 27e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "alpindale/magnum-72b"
    },
    cost: {
      prompt_token: 1875e-9,
      completion_token: 225e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-2-9b-it:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemma-2-9b-it"
    },
    cost: {
      prompt_token: 3e-8,
      completion_token: 6e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "01-ai/yi-large"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 3e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "ai21/jamba-instruct"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 7e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-sonnet-20240620:beta"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3.5-sonnet-20240620"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "sao10k/l3-euryale-70b"
    },
    cost: {
      prompt_token: 35e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "cognitivecomputations/dolphin-mixtral-8x22b"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "qwen/qwen-2-72b-instruct"
    },
    cost: {
      prompt_token: 34e-8,
      completion_token: 39e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-7b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-7b-instruct"
    },
    cost: {
      prompt_token: 3e-8,
      completion_token: 55e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-7b-instruct:nitro"
    },
    cost: {
      prompt_token: 7e-8,
      completion_token: 7e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-7b-instruct-v0.3"
    },
    cost: {
      prompt_token: 3e-8,
      completion_token: 55e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "nousresearch/hermes-2-pro-llama-3-8b"
    },
    cost: {
      prompt_token: 3e-8,
      completion_token: 3e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/phi-3-mini-128k-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/phi-3-mini-128k-instruct"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 1e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/phi-3-medium-128k-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/phi-3-medium-128k-instruct"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 1e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "neversleep/llama-3-lumimaid-70b"
    },
    cost: {
      prompt_token: 3375e-9,
      completion_token: 45e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-flash-1.5"
    },
    cost: {
      prompt_token: 75e-9,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3-sonar-large-32k-online"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 1e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "deepseek/deepseek-chat"
    },
    cost: {
      prompt_token: 14e-8,
      completion_token: 28e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3-sonar-small-32k-chat"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "perplexity/llama-3-sonar-large-32k-chat"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 1e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o-2024-05-13"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-guard-2-8b"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o"
    },
    cost: {
      prompt_token: 25e-7,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4o:extended"
    },
    cost: {
      prompt_token: 6e-6,
      completion_token: 18e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "neversleep/llama-3-lumimaid-8b:extended"
    },
    cost: {
      prompt_token: 1875e-10,
      completion_token: 1125e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "neversleep/llama-3-lumimaid-8b"
    },
    cost: {
      prompt_token: 1875e-10,
      completion_token: 1125e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3-8b-instruct:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3-8b-instruct"
    },
    cost: {
      prompt_token: 3e-8,
      completion_token: 6e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3-8b-instruct:extended"
    },
    cost: {
      prompt_token: 1875e-10,
      completion_token: 1125e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3-8b-instruct:nitro"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3-70b-instruct"
    },
    cost: {
      prompt_token: 23e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-3-70b-instruct:nitro"
    },
    cost: {
      prompt_token: 792e-9,
      completion_token: 792e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mixtral-8x22b-instruct"
    },
    cost: {
      prompt_token: 9e-7,
      completion_token: 9e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/wizardlm-2-8x22b"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "microsoft/wizardlm-2-7b"
    },
    cost: {
      prompt_token: 55e-9,
      completion_token: 55e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-pro-1.5"
    },
    cost: {
      prompt_token: 125e-8,
      completion_token: 5e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-turbo"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r-plus"
    },
    cost: {
      prompt_token: 285e-8,
      completion_token: 1425e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r-plus-04-2024"
    },
    cost: {
      prompt_token: 285e-8,
      completion_token: 1425e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "databricks/dbrx-instruct"
    },
    cost: {
      prompt_token: 108e-8,
      completion_token: 108e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "sophosympatheia/midnight-rose-70b"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 8e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command"
    },
    cost: {
      prompt_token: 95e-8,
      completion_token: 19e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r"
    },
    cost: {
      prompt_token: 475e-9,
      completion_token: 1425e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3-haiku:beta"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 125e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3-haiku"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 125e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3-opus:beta"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 75e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3-opus"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 75e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3-sonnet:beta"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-3-sonnet"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "cohere/command-r-03-2024"
    },
    cost: {
      prompt_token: 475e-9,
      completion_token: 1425e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-large"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 6e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-3.5-turbo-0613"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-turbo-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "nousresearch/nous-hermes-2-mixtral-8x7b-dpo"
    },
    cost: {
      prompt_token: 54e-8,
      completion_token: 54e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-small"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 6e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-tiny"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 25e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-medium"
    },
    cost: {
      prompt_token: 275e-8,
      completion_token: 81e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-7b-instruct-v0.2"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "cognitivecomputations/dolphin-mixtral-8x7b"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-pro-vision"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 15e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/gemini-pro"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 15e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mixtral-8x7b"
    },
    cost: {
      prompt_token: 54e-8,
      completion_token: 54e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mixtral-8x7b-instruct"
    },
    cost: {
      prompt_token: 24e-8,
      completion_token: 24e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mixtral-8x7b-instruct:nitro"
    },
    cost: {
      prompt_token: 54e-8,
      completion_token: 54e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "openchat/openchat-7b:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "openchat/openchat-7b"
    },
    cost: {
      prompt_token: 55e-9,
      completion_token: 55e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "neversleep/noromaid-20b"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 225e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-2:beta"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-2"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-2.1:beta"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-2.1"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "teknium/openhermes-2.5-mistral-7b"
    },
    cost: {
      prompt_token: 17e-8,
      completion_token: 17e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-vision-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "lizpreciatior/lzlv-70b-fp16-hf"
    },
    cost: {
      prompt_token: 35e-8,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "undi95/toppy-m-7b:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "undi95/toppy-m-7b:nitro"
    },
    cost: {
      prompt_token: 7e-8,
      completion_token: 7e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "undi95/toppy-m-7b"
    },
    cost: {
      prompt_token: 7e-8,
      completion_token: 7e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "alpindale/goliath-120b"
    },
    cost: {
      prompt_token: 9375e-9,
      completion_token: 9375e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "openrouter/auto"
    },
    cost: {
      prompt_token: -1,
      completion_token: -1
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-3.5-turbo-1106"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-1106-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/palm-2-chat-bison-32k"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/palm-2-codechat-bison-32k"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "jondurbin/airoboros-l2-70b"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "xwin-lm/xwin-lm-70b"
    },
    cost: {
      prompt_token: 375e-8,
      completion_token: 375e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-3.5-turbo-instruct"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "mistralai/mistral-7b-instruct-v0.1"
    },
    cost: {
      prompt_token: 18e-8,
      completion_token: 18e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "pygmalionai/mythalion-13b"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-3.5-turbo-16k"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-32k"
    },
    cost: {
      prompt_token: 6e-5,
      completion_token: 12e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-32k-0314"
    },
    cost: {
      prompt_token: 6e-5,
      completion_token: 12e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "nousresearch/nous-hermes-llama2-13b"
    },
    cost: {
      prompt_token: 17e-8,
      completion_token: 17e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "mancer/weaver"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 225e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "huggingfaceh4/zephyr-7b-beta:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-2.0:beta"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "anthropic/claude-2.0"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "undi95/remm-slerp-l2-13b"
    },
    cost: {
      prompt_token: 8e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "undi95/remm-slerp-l2-13b:extended"
    },
    cost: {
      prompt_token: 1125e-9,
      completion_token: 1125e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/palm-2-chat-bison"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "google/palm-2-codechat-bison"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gryphe/mythomax-l2-13b:free"
    },
    cost: {
      prompt_token: 0,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "gryphe/mythomax-l2-13b"
    },
    cost: {
      prompt_token: 7e-8,
      completion_token: 7e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "gryphe/mythomax-l2-13b:nitro"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "gryphe/mythomax-l2-13b:extended"
    },
    cost: {
      prompt_token: 1125e-9,
      completion_token: 1125e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "meta-llama/llama-2-13b-chat"
    },
    cost: {
      prompt_token: 198e-9,
      completion_token: 198e-9
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-3.5-turbo"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 15e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-3.5-turbo-0125"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 15e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4"
    },
    cost: {
      prompt_token: 3e-5,
      completion_token: 6e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "openai/gpt-4-0314"
    },
    cost: {
      prompt_token: 3e-5,
      completion_token: 6e-5
    }
  }
];

// src/ai-cost-data/fireworks/index.ts
var costs10 = [
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/mixtral-8x7b-instruct"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/mixtral-8x22b-instruct"
    },
    cost: {
      prompt_token: 12e-7,
      completion_token: 12e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/yi-large"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 3e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/sd3"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/sd3-medium"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/stable-diffusion-xl-1024-v1-0"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/playground-v2-1024px-aesthetic"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/playground-v2-5-1024px-aesthetic"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/SSD-1B"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/japanese-stable-diffusion-xl"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/sd3-turbo"
    },
    cost: {
      prompt_token: 13e-5,
      completion_token: 13e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/sd3-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/sd3-medium-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/stable-diffusion-xl-1024-v1-0-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/playground-v2-1024px-aesthetic-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/playground-v2-5-1024px-aesthetic-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/SSD-1B-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/japanese-stable-diffusion-xl-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/sd3-turbo-ControlNet"
    },
    cost: {
      prompt_token: 2e-4,
      completion_token: 2e-4
    }
  },
  {
    model: {
      operator: "equals",
      value: "accounts/fireworks/models/llama-v3p1-405b-instruct"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 3e-6
    }
  }
];

// src/ai-cost-data/groq/index.ts
var costs11 = [
  {
    model: {
      operator: "equals",
      value: "llama2-70b-4096"
    },
    cost: {
      prompt_token: 7e-7,
      completion_token: 8e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "mixtral-8x7b-32768"
    },
    cost: {
      prompt_token: 24e-8,
      completion_token: 24e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "gemma-7b-it"
    },
    cost: {
      prompt_token: 7e-8,
      completion_token: 7e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "gemma2-9b-it"
    },
    cost: {
      prompt_token: 2e-7,
      completion_token: 2e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "llama3-70b-8192"
    },
    cost: {
      prompt_token: 59e-8,
      completion_token: 79e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "llama3-8b-8192"
    },
    cost: {
      prompt_token: 5e-8,
      completion_token: 8e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "llama3-groq-70b-8192-tool-use-preview"
    },
    cost: {
      prompt_token: 89e-8,
      completion_token: 89e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "llama3-groq-8b-8192-tool-use-preview"
    },
    cost: {
      prompt_token: 19e-8,
      completion_token: 19e-8
    }
  }
];

// src/ai-cost-data/qstash/index.ts
var costs12 = [
  {
    model: {
      operator: "includes",
      value: "llama"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  },
  {
    model: {
      operator: "includes",
      value: "mistral"
    },
    cost: {
      prompt_token: 3e-7,
      completion_token: 3e-7
    }
  }
];

// src/ai-cost-data/openai/index.ts
var costs13 = [
  {
    model: {
      operator: "equals",
      value: "ada"
    },
    cost: {
      prompt_token: 4e-7,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-ada-001"
    },
    cost: {
      prompt_token: 4e-7,
      completion_token: 4e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "babbage"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 5e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "curie"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-curie-001"
    },
    cost: {
      prompt_token: 2e-6,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "davinci"
    },
    cost: {
      prompt_token: 2e-5,
      completion_token: 2e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-davinci-001"
    },
    cost: {
      prompt_token: 2e-5,
      completion_token: 2e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-davinci-002"
    },
    cost: {
      prompt_token: 2e-5,
      completion_token: 2e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-davinci-003"
    },
    cost: {
      prompt_token: 2e-5,
      completion_token: 2e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-0301"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-1106"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 2e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-instruct"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-instruct-0914"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4"
    },
    cost: {
      prompt_token: 3e-5,
      completion_token: 6e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-0314"
    },
    cost: {
      prompt_token: 3e-5,
      completion_token: 6e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-0613"
    },
    cost: {
      prompt_token: 3e-5,
      completion_token: 6e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-32k"
    },
    cost: {
      prompt_token: 6e-5,
      completion_token: 12e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-32k-0314"
    },
    cost: {
      prompt_token: 6e-5,
      completion_token: 12e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-32k-0613"
    },
    cost: {
      prompt_token: 6e-5,
      completion_token: 12e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-0125-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-1106-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-1106-vision-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 15e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-2024-05-13"
    },
    cost: {
      prompt_token: 5e-6,
      completion_token: 15e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-mini"
    },
    cost: {
      prompt_token: 15e-8,
      completion_token: 6e-7
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-mini-2024-07-18"
    },
    cost: {
      prompt_token: 15e-8,
      completion_token: 6e-7
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-0613"
    },
    cost: {
      prompt_token: 15e-7,
      completion_token: 2e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo-16k"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-16k-0613"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 4e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-3.5-turbo-0125"
    },
    cost: {
      prompt_token: 5e-7,
      completion_token: 15e-7
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo-2024-04-09"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-turbo-0125-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-ada-002"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-ada"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-ada-002-v2"
    },
    cost: {
      prompt_token: 1e-7,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-3-small"
    },
    cost: {
      prompt_token: 2e-8,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "text-embedding-3-large"
    },
    cost: {
      prompt_token: 13e-8,
      completion_token: 0
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4-vision-preview"
    },
    cost: {
      prompt_token: 1e-5,
      completion_token: 3e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-35-turbo-16k-0613"
    },
    showInPlayground: true,
    cost: {
      prompt_token: 3e-6,
      completion_token: 4e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "gpt-4o-2024-08-06"
    },
    showInPlayground: true,
    cost: {
      prompt_token: 25e-7,
      completion_token: 1e-5
    }
  },
  {
    model: {
      operator: "equals",
      value: "o1-preview"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 6e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "o1-preview-2024-09-12"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 6e-5
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "o1-mini"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 12e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "o1-mini-2024-09-12"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 12e-6
    },
    showInPlayground: true
  }
];
var modelDetails = {
  "gpt-4": {
    matches: [
      "gpt-4",
      "gpt-4-0314",
      "gpt-4-0613",
      "gpt-4-32k",
      "gpt-4-32k-0314",
      "gpt-4-0125-preview",
      "gpt-4-1106-preview"
    ],
    searchTerms: ["gpt 4", "gpt-4", "chat gpt 4", "4", "chat 4"],
    info: {
      maxTokens: 8192,
      releaseDate: "2024-03-13",
      description: "GPT-4 is the latest and most advanced model in the GPT series, demonstrating sophisticated capabilities in complex reasoning, theory of mind, and narrative understanding.",
      tradeOffs: [
        "More expensive than GPT-3.5 Turbo",
        "Performance can vary even with temperature=0",
        "May struggle with world-building in absurd scenarios"
      ],
      benchmarks: {
        mmlu: 0.864,
        ifeval: 0.67,
        hellaswag: 0.953,
        bbh: 0.831
      },
      capabilities: [
        "Advanced reasoning",
        "Theory of mind",
        "Complex narrative understanding",
        "Chain-of-thought processing"
      ],
      strengths: [
        "Strong performance in theory of mind tasks",
        "Ability to track and reason about multiple entities",
        "Can explain its reasoning process"
      ],
      weaknesses: [
        "May struggle with highly abstract or unrealistic scenarios",
        "Output can be non-deterministic even at temperature=0",
        "Performance depends on how 'normal' the scenario is"
      ],
      recommendations: [
        "Complex reasoning and analysis tasks",
        "Professional content creation and editing",
        "Advanced coding and technical problem-solving",
        "Multi-step planning and strategy development",
        "Academic research and paper writing",
        "Detailed technical documentation"
      ]
    }
  },
  "gpt-4o": {
    matches: ["gpt-4o", "gpt-4o-2024-05-13"],
    searchTerms: ["gpt 4o", "gpt-4o", "chat gpt 4o", "4o", "chat 4o"],
    info: {
      maxTokens: 128e3,
      releaseDate: "2024-05-13",
      description: "GPT-4 Optimized (GPT-4o) is designed for high performance in reasoning, creativity, and technical tasks while maintaining consistent output quality.",
      tradeOffs: [
        "Higher resource requirements for optimal performance",
        "Increased cost per token for premium capabilities",
        "May require more specific prompting for best results",
        "Larger context window increases memory usage",
        "Response time varies with complexity of task"
      ],
      benchmarks: {
        mmlu: 0.887,
        ifeval: 0.902,
        hellaswag: 0.942,
        bbh: 0.913
      },
      capabilities: [
        "Advanced reasoning and problem-solving",
        "Strong coding abilities",
        "Mathematical computation",
        "Creative content generation",
        "Technical analysis"
      ],
      strengths: [
        "Consistent output quality",
        "Strong technical performance",
        "Reliable response generation",
        "Broad knowledge base"
      ],
      weaknesses: [
        "May produce overconfident responses",
        "Requires clear prompt engineering",
        "Performance varies with task complexity"
      ],
      recommendations: [
        "Technical and analytical projects",
        "Software development tasks",
        "Mathematical problem-solving",
        "Content creation and analysis"
      ]
    }
  },
  "gpt-4o-mini": {
    matches: ["gpt-4o-mini", "gpt-4o-mini-2024-07-18"],
    searchTerms: [
      "gpt 4o mini",
      "gpt-4o-mini",
      "chat gpt 4o mini",
      "chat 4o mini"
    ],
    info: {
      maxTokens: 128e3,
      releaseDate: "2024-07-18",
      description: "GPT-4o Mini is a cost-optimized variant of GPT-4o, designed for high-efficiency processing while maintaining strong performance. It excels in rapid inference and resource-efficient operations, making it ideal for production deployments requiring a balance of cost and capability.",
      tradeOffs: [
        "Lower cost per token compared to GPT-4o",
        "Reduced latency for faster processing",
        "Smaller model size for efficient deployment",
        "Optimized for common tasks and queries",
        "Balance of performance and resource usage"
      ],
      benchmarks: {
        mmlu: 0.82,
        ifeval: 0.872,
        hellaswag: 0.885,
        truthfulqa: 0.793,
        gsm8k: 0.846
      },
      capabilities: [
        "Efficient natural language processing",
        "Quick response generation",
        "Code understanding and generation",
        "Task-specific optimization",
        "Resource-efficient inference",
        "Consistent output quality",
        "Scalable deployment support"
      ],
      strengths: [
        "Cost-effective processing",
        "Low latency responses",
        "Efficient resource utilization",
        "Strong performance on common tasks",
        "Reliable output quality",
        "Optimized for production use",
        "Excellent scaling characteristics"
      ],
      weaknesses: [
        "Lower performance on complex reasoning",
        "Reduced capability in specialized domains",
        "Limited context understanding vs larger models",
        "May struggle with nuanced tasks",
        "Less suitable for cutting-edge research"
      ],
      recommendations: [
        "High-volume production deployments",
        "Cost-sensitive applications",
        "Real-time processing needs",
        "Standard NLP tasks",
        "Efficient API integrations",
        "Resource-constrained environments",
        "Scalable system architectures"
      ]
    }
  },
  "gpt-4-turbo": {
    matches: [
      "gpt-4-turbo",
      "gpt-4-turbo-2024-04-09",
      "gpt-4-turbo-0125-preview"
    ],
    searchTerms: [
      "gpt 4 turbo",
      "gpt-4-turbo",
      "chat gpt 4 turbo",
      "4 turbo",
      "chat 4 turbo"
    ],
    info: {
      maxTokens: 128e3,
      releaseDate: "2024-04-09",
      description: "GPT-4 Turbo is a more recent model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {
        bbh: 0.876,
        hellaswag: 0.942,
        mmlu: 0.865
      },
      capabilities: [],
      strengths: [],
      weaknesses: [],
      recommendations: []
    }
  },
  "gpt-3.5-turbo": {
    matches: [
      "gpt-3.5-turbo",
      "gpt-3.5-turbo-0301",
      "gpt-35-turbo",
      "gpt-3.5-turbo-1106",
      "gpt-3.5-turbo-instruct",
      "gpt-3.5-turbo-instruct-0914",
      "gpt-3.5-turbo-0613",
      "gpt-3.5-turbo-16k",
      "gpt-3.5-turbo-16k-0613",
      "gpt-35-turbo-16k",
      "gpt-35-turbo-16k-0613",
      "gpt-3.5-turbo-0125"
    ],
    searchTerms: ["gpt 3.5", "gpt-3.5", "chat gpt 3.5", "chat 3.5"],
    info: {
      maxTokens: 16385,
      releaseDate: "2023-11-06",
      description: "GPT-3.5 Turbo is a more recent model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {
        hellaswag: 0.855,
        mmlu: 0.698
      },
      capabilities: [],
      strengths: [],
      weaknesses: [],
      recommendations: []
    }
  },
  "text-embedding-3": {
    matches: ["text-embedding-3-small", "text-embedding-3-large"],
    searchTerms: ["text embedding 3", "text-embedding-3"],
    info: {
      maxTokens: 3072,
      releaseDate: "2022-12-15",
      description: "Text Embedding 3 is a model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {},
      capabilities: [],
      strengths: [],
      weaknesses: [],
      recommendations: []
    }
  },
  "text-embedding-ada": {
    matches: [
      "text-embedding-ada-002",
      "text-embedding-ada",
      "text-embedding-ada-002-v2"
    ],
    searchTerms: ["text embedding ada", "text-embedding-ada"],
    info: {
      maxTokens: 1536,
      releaseDate: "2022-12-15",
      description: "Text Embedding Ada is a model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {},
      capabilities: [],
      strengths: [],
      weaknesses: [],
      recommendations: []
    }
  },
  "o1-preview": {
    matches: ["o1-preview", "o1-preview-2024-09-12"],
    searchTerms: [
      "o1 preview",
      "o1-preview",
      "chat gpt o1",
      "chat gpt o1 preview",
      "chat o1",
      "chat o1 preview"
    ],
    info: {
      maxTokens: 128e3,
      releaseDate: "2024-09-12",
      description: "O1 Preview is a model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {
        mmlu: 0.908
      },
      capabilities: [],
      strengths: [],
      weaknesses: [],
      recommendations: []
    }
  },
  "o1-mini": {
    matches: ["o1-mini", "o1-mini-2024-09-12"],
    searchTerms: ["o1 mini", "o1-mini", "chat gpt o1 mini", "chat o1 mini"],
    info: {
      maxTokens: 128e3,
      releaseDate: "2024-09-12",
      description: "O1 Mini is a model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {},
      capabilities: [],
      strengths: [],
      weaknesses: [],
      recommendations: []
    }
  },
  "gpt-4-vision-preview": {
    matches: ["gpt-4-vision-preview", "gpt-4-1106-vision-preview"],
    searchTerms: [
      "gpt 4 vision",
      "gpt-4-vision",
      "gpt 4 vision preview",
      "chat gpt 4 vision",
      "chat 4 vision"
    ],
    info: {
      maxTokens: 128e3,
      releaseDate: "2023-11-06",
      description: "GPT-4 Vision is a model that offers a balance between cost and performance.",
      tradeOffs: ["More expensive than GPT-3.5 Turbo"],
      benchmarks: {
        bbh: 0.876,
        hellaswag: 0.942,
        mmlu: 0.865
      },
      capabilities: ["Vision"],
      strengths: ["Can process images"],
      weaknesses: ["More expensive than GPT-3.5 Turbo"],
      recommendations: ["Use for tasks that require image processing"]
    }
  }
};
var reverseModelMap = {};
for (const parentModel in modelDetails) {
  const details = modelDetails[parentModel];
  details.matches.forEach((modelName) => {
    reverseModelMap[modelName] = parentModel;
  });
}
var openAIProvider = {
  costs: costs13,
  modelDetails,
  reverseModelMap
};

// src/ai-cost-data/anthropic/index.ts
var costs14 = [
  {
    model: {
      operator: "equals",
      value: "claude-instant-1"
    },
    cost: {
      prompt_token: 163e-8,
      completion_token: 551e-7
    }
  },
  {
    model: {
      operator: "equals",
      value: "claude-v1"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "claude-2"
    },
    cost: {
      prompt_token: 8e-6,
      completion_token: 24e-6
    }
  },
  {
    model: {
      operator: "equals",
      value: "claude-instant-1.2"
    },
    cost: {
      prompt_token: 163e-8,
      completion_token: 551e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "claude-2.0"
    },
    cost: {
      prompt_token: 1102e-8,
      completion_token: 3268e-8
    }
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-opus-20240229"
    },
    cost: {
      prompt_token: 15e-6,
      completion_token: 75e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-sonnet-20240229"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-5-sonnet-20240620"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-5-sonnet-20241022"
    },
    cost: {
      prompt_token: 3e-6,
      completion_token: 15e-6
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-haiku-20240307"
    },
    cost: {
      prompt_token: 25e-8,
      completion_token: 125e-8
    },
    showInPlayground: true
  },
  {
    model: {
      operator: "equals",
      value: "claude-3-5-haiku-20241022"
    },
    cost: {
      prompt_token: 1e-6,
      completion_token: 5e-6
    },
    showInPlayground: true
  }
];
var modelDetails2 = {
  "claude-3-opus": {
    matches: ["claude-3-opus-20240229"],
    searchTerms: ["claude 3 opus", "claude-3-opus", "opus"],
    info: {
      maxTokens: 2e5,
      releaseDate: "2024-03-04",
      description: "Claude 3 Opus is Anthropic's most advanced model, demonstrating exceptional performance across complex tasks with near-perfect recall in long-context scenarios and sophisticated capabilities in coding, analysis, and creative work.",
      tradeOffs: [
        "Premium pricing reflects advanced capabilities",
        "Higher latency due to model complexity",
        "Resource-intensive for optimal performance"
      ],
      benchmarks: {
        mmlu: 0.868,
        hellaswag: 0.954,
        bbh: 0.868,
        math: 0.952
      },
      capabilities: [
        "Near-perfect recall with 200k context window",
        "Advanced mathematical reasoning and problem-solving",
        "Superior code generation and debugging",
        "Complex document analysis and summarization",
        "Sophisticated data extraction and interpretation",
        "Multi-step reasoning tasks",
        "Advanced pattern recognition"
      ],
      strengths: [
        "Exceptional context handling (>99% accuracy in NIAH tests)",
        "Strong performance in mathematical tasks (95.2% accuracy)",
        "Advanced code generation capabilities (68.4% success rate)",
        "Precise document summarization",
        "Focused and actionable responses",
        "Self-awareness in identifying artificial content",
        "Consistent performance across diverse tasks"
      ],
      weaknesses: [
        "Occasional struggles with PDF data extraction",
        "Challenges with heat map interpretation",
        "Potential for hallucination in visual analysis",
        "May return errors for certain coding edge cases",
        "Higher latency compared to lighter models"
      ],
      recommendations: [
        "Large-context processing applications",
        "Complex mathematical and analytical tasks",
        "Advanced software development projects",
        "Detailed document analysis and summarization",
        "Research and academic applications",
        "Enterprise-grade AI solutions",
        "Tasks requiring high accuracy and reliability"
      ]
    }
  },
  "claude-3-sonnet": {
    matches: [
      "claude-3-sonnet-20240229",
      "claude-3-5-sonnet-20240620",
      "claude-3-5-sonnet-20241022"
    ],
    searchTerms: [
      "claude 3 sonnet",
      "claude-3-sonnet",
      "sonnet",
      "claude 3.5 sonnet"
    ],
    info: {
      maxTokens: 2e5,
      releaseDate: "2024-03-04",
      description: "Claude 3 Sonnet offers a strong balance of intelligence and speed, suitable for most use cases.",
      tradeOffs: [
        "Lower cost than Opus",
        "Slightly reduced capabilities compared to Opus"
      ],
      benchmarks: {
        mmlu: 0.887,
        // 88.7% on MMLU
        hellaswag: 0.89,
        // 89% on HellaSwag
        bbh: 0.931
      },
      capabilities: [
        "General reasoning and analysis",
        "Code generation and review",
        "Content creation and editing",
        "Task automation",
        "Data analysis"
      ],
      strengths: [
        "Balanced performance profile",
        "Reliable output quality",
        "Good response speed",
        "Strong general knowledge",
        "Versatile across many tasks"
      ],
      weaknesses: [
        "May need guidance on complex tasks",
        "Less specialized than Opus",
        "Moderate processing speed"
      ],
      recommendations: [
        "General purpose development",
        "Content creation and editing",
        "Business analysis",
        "Educational applications",
        "Daily productivity tasks"
      ]
    }
  },
  "claude-3-haiku": {
    matches: ["claude-3-haiku-20240307", "claude-3-5-haiku-20241022"],
    searchTerms: [
      "claude 3 haiku",
      "claude-3-haiku",
      "haiku",
      "claude 3.5 haiku"
    ],
    info: {
      maxTokens: 2e5,
      releaseDate: "2024-03-04",
      description: "Claude 3 Haiku is optimized for rapid response times and high throughput, delivering impressive speed while maintaining reliable performance. It excels in scenarios requiring quick interactions and efficient processing of straightforward tasks.",
      tradeOffs: [
        "Optimized for speed and efficiency",
        "Excellent performance-to-cost ratio",
        "Best suited for high-throughput applications",
        "Balance of speed and reliability"
      ],
      benchmarks: {
        mmlu: 0.752,
        hellaswag: 0.859,
        bbh: 0.737
      },
      capabilities: [
        "High-speed token generation (134 tokens/sec)",
        "Low latency responses (0.43s to first token)",
        "Efficient streaming support",
        "Function/tool calling",
        "JSON mode support",
        "Parallel query processing",
        "Context window handling up to 200k tokens"
      ],
      strengths: [
        "Superior output speed (134.2 tokens/second)",
        "Minimal latency (0.43s TTFT)",
        "Consistent performance across context lengths",
        "Efficient resource utilization",
        "Cost-effective processing",
        "Reliable API features",
        "Stable performance over time"
      ],
      weaknesses: [
        "Performance varies with input length",
        "Latency increases with context size",
        "Lower quality index compared to larger models",
        "Variable speed with parallel processing",
        "Response time sensitivity to input complexity"
      ],
      recommendations: [
        "Real-time applications",
        "Customer service automation",
        "Quick content checks",
        "Simple queries and responses",
        "High-volume, straightforward tasks"
      ]
    }
  },
  "claude-2": {
    matches: ["claude-2", "claude-2.0"],
    searchTerms: ["claude 2", "claude-2"],
    info: {
      maxTokens: 2e5,
      releaseDate: "2023-07-11",
      description: "Claude 2 is Anthropic's previous generation model, offering reliable performance for various tasks.",
      tradeOffs: [
        "More affordable than Claude 3",
        "Less capable than newer models"
      ],
      benchmarks: {},
      capabilities: [
        "General text generation",
        "Basic analysis",
        "Code assistance",
        "Content creation",
        "Task automation"
      ],
      strengths: [
        "Stable performance",
        "Reliable outputs",
        "Good general knowledge",
        "Cost-effective",
        "Proven track record"
      ],
      weaknesses: [
        "Older architecture",
        "Limited advanced features",
        "Less refined outputs"
      ],
      recommendations: [
        "Legacy applications",
        "Basic automation",
        "General text processing",
        "Simple analysis tasks",
        "Standard content creation"
      ]
    }
  },
  "claude-instant": {
    matches: ["claude-instant-1", "claude-instant-1.2"],
    searchTerms: ["claude instant", "claude-instant"],
    info: {
      maxTokens: 1e5,
      releaseDate: "2023-08-09",
      description: "Claude Instant is Anthropic's faster, lighter previous generation model.",
      tradeOffs: [
        "Fastest response times in Claude 2 series",
        "Most affordable",
        "Reduced capabilities"
      ],
      benchmarks: {
        mmlu: 0.734
      },
      capabilities: [
        "Quick responses",
        "Basic text processing",
        "Simple queries",
        "Lightweight tasks",
        "Efficient processing"
      ],
      strengths: [
        "Fast processing speed",
        "Resource efficient",
        "Cost-effective",
        "Consistent performance",
        "Low latency"
      ],
      weaknesses: [
        "Basic capabilities only",
        "Limited analysis depth",
        "Simpler responses"
      ],
      recommendations: [
        "Quick response systems",
        "Basic chatbots",
        "Simple automation",
        "High-volume processing",
        "Efficient text handling"
      ]
    }
  },
  "claude-3.5-sonnet": {
    matches: ["claude-3-5-sonnet-20240620", "claude-3-5-sonnet-20241022"],
    searchTerms: ["claude 3.5 sonnet", "claude-3-5-sonnet"],
    info: {
      maxTokens: 2e5,
      releaseDate: "2024-06-20",
      description: "Claude 3.5 Sonnet is Anthropic's latest model, delivering enhanced performance with optimized speed and efficiency. It excels in graduate-level reasoning, undergraduate knowledge, and code generation while maintaining high throughput.",
      tradeOffs: [
        "Balanced performance-to-cost ratio",
        "Optimized for production workloads",
        "High throughput with moderate latency",
        "Strong accuracy with reasonable resource usage"
      ],
      benchmarks: {
        mmlu: 0.887,
        hellaswag: 0.89,
        bbh: 0.931,
        multilingual_math: 0.916,
        // 91.6% on multilingual math tasks
        reasoning_over_text: 0.871
        // 87.1% on reasoning over text
      },
      capabilities: [
        "Advanced graduate-level reasoning",
        "Strong undergraduate knowledge base",
        "Superior code generation and review",
        "Complex data extraction and analysis",
        "Multi-step problem solving",
        "High-accuracy classification tasks",
        "Efficient document processing"
      ],
      strengths: [
        "Exceptional coding performance",
        "High precision in classification (85%)",
        "Strong data extraction capabilities",
        "Efficient throughput (~79 tokens/second)",
        "Reliable performance on complex tasks",
        "Excellent multilingual math processing",
        "Superior text reasoning abilities"
      ],
      weaknesses: [
        "Lower performance on abstract reasoning puzzles",
        "Struggles with numerical and date-related questions",
        "May introduce regressions in certain classification scenarios",
        "Requires clear prompting for optimal performance",
        "Variable performance on complex extraction tasks"
      ],
      recommendations: [
        "Production-grade applications requiring reliability",
        "Code generation and review systems",
        "Complex data extraction pipelines",
        "High-accuracy classification systems",
        "Document analysis and processing",
        "Educational and academic applications",
        "Enterprise-scale deployments"
      ]
    }
  },
  "claude-3.5-haiku": {
    matches: ["claude-3-5-haiku-20241022"],
    searchTerms: ["claude 3.5 haiku", "claude-3-5-haiku"],
    info: {
      maxTokens: 2e5,
      releaseDate: "2024-10-22",
      description: "Claude 3.5 Haiku represents a significant advancement in high-throughput, cost-effective AI processing. It delivers enhanced performance over its predecessor while maintaining exceptional speed and efficiency, making it ideal for large-scale applications requiring quick responses.",
      tradeOffs: [
        "Optimized for maximum throughput",
        "Enhanced speed-to-performance ratio",
        "Improved cost efficiency",
        "Better balance of speed and accuracy"
      ],
      benchmarks: {
        quality_index: 62,
        // Improved Quality Index over Claude 3 Haiku
        throughput: 145,
        // tokens per second
        ttft: 0.39
        // Time to First Token in seconds
      },
      capabilities: [
        "Enhanced token generation speed (145 tokens/sec)",
        "Reduced latency (0.39s to first token)",
        "Improved parallel processing",
        "Advanced streaming capabilities",
        "Robust function calling",
        "Enhanced JSON mode reliability",
        "Efficient context handling up to 200k tokens",
        "Improved error handling"
      ],
      strengths: [
        "Superior throughput (145 tokens/second)",
        "Minimal startup latency (0.39s TTFT)",
        "Enhanced stability under load",
        "Improved response consistency",
        "Better error recovery",
        "More reliable streaming",
        "Enhanced parallel processing capabilities",
        "Optimized resource utilization"
      ],
      weaknesses: [
        "Performance degradation with very long contexts",
        "Variability in complex reasoning tasks",
        "May struggle with nuanced analysis",
        "Limited creative capabilities",
        "Reduced performance in edge cases"
      ],
      recommendations: [
        "High-volume API services",
        "Real-time chat systems",
        "Large-scale data processing",
        "Streaming applications",
        "Cost-sensitive deployments",
        "Quick-response systems",
        "Parallel processing workflows",
        "Resource-constrained environments"
      ]
    }
  }
};
var reverseModelMap2 = {};
for (const parentModel in modelDetails2) {
  const details = modelDetails2[parentModel];
  details.matches.forEach((modelName) => {
    reverseModelMap2[modelName] = parentModel;
  });
}
var anthropicProvider = {
  costs: costs14,
  modelDetails: modelDetails2,
  reverseModelMap: reverseModelMap2
};

// src/ai-cost-data/awsBedrock/index.ts
var costs15 = [
  {
    model: {
      operator: "equals",
      value: "meta.llama3-8b-instruct-v1%3A0"
    },
    cost: {
      prompt_token: 22e-5,
      completion_token: 72e-5
    }
  }
];

// src/ai-cost-data/mappings.ts
var openAiPattern = /^https:\/\/api\.openai\.com/;
var anthropicPattern = /^https:\/\/api\.anthropic\.com/;
var azurePattern = /^(https?:\/\/)?([^.]*\.)?(openai\.azure\.com|azure-api\.net)(\/.*)?$/;
var localProxyPattern = /^http:\/\/127\.0\.0\.1:\d+\/v\d+\/?$/;
var heliconeProxyPattern = /^https:\/\/oai\.hconeai\.com/;
var amdbartekPattern = /^https:\/\/.*\.amdbartek\.dev/;
var anyscalePattern = /^https:\/\/api\.endpoints\.anyscale\.com/;
var cloudflareAiGatewayPattern = /^https:\/\/gateway\.ai\.cloudflare\.com/;
var twoYFV = /^https:\/\/api\.2yfv\.com/;
var togetherPattern = /^https:\/\/api\.together\.xyz/;
var lemonFox = /^https:\/\/api\.lemonfox\.ai/;
var fireworks = /^https:\/\/api\.fireworks\.ai/;
var perplexity = /^https:\/\/api\.perplexity\.ai/;
var googleapis = /^https:\/\/(.*\.)?googleapis\.com/;
var openRouter = /^https:\/\/(api\.)?openrouter\.ai/;
var wisdomInANutshell = /^https:\/\/api\.wisdominanutshell\.academy/;
var groq = /^https:\/\/api\.groq\.com/;
var cohere = /^https:\/\/api\.cohere\.ai/;
var mistral = /^https:\/\/api\.mistral\.ai/;
var deepinfra = /^https:\/\/api\.deepinfra\.com/;
var qstash = /^https:\/\/qstash\.upstash\.io/;
var firecrawl = /^https:\/\/api\.firecrawl\.dev/;
var awsBedrock = /^https:\/\/bedrock-runtime\.[a-z0-9-]+\.amazonaws\.com\/.*/;
var providers = [
  {
    pattern: openAiPattern,
    provider: "OPENAI",
    costs: [...openAIProvider.costs, ...costs],
    modelDetails: openAIProvider.modelDetails
  },
  {
    pattern: anthropicPattern,
    provider: "ANTHROPIC",
    costs: anthropicProvider.costs,
    modelDetails: anthropicProvider.modelDetails
  },
  {
    pattern: azurePattern,
    provider: "AZURE",
    costs: [...costs5, ...openAIProvider.costs]
  },
  {
    pattern: localProxyPattern,
    provider: "LOCAL"
  },
  {
    pattern: heliconeProxyPattern,
    provider: "HELICONE"
  },
  {
    pattern: amdbartekPattern,
    provider: "AMDBARTEK"
  },
  {
    pattern: anyscalePattern,
    provider: "ANYSCALE"
  },
  {
    pattern: cloudflareAiGatewayPattern,
    provider: "CLOUDFLARE"
  },
  {
    pattern: twoYFV,
    provider: "2YFV"
  },
  {
    pattern: togetherPattern,
    provider: "TOGETHER",
    costs: [
      ...costs2,
      ...costs3,
      ...costs4,
      ...costs4
    ]
  },
  {
    pattern: lemonFox,
    provider: "LEMONFOX"
  },
  {
    pattern: fireworks,
    provider: "FIREWORKS",
    costs: costs10
  },
  {
    pattern: perplexity,
    provider: "PERPLEXITY"
  },
  {
    pattern: googleapis,
    provider: "GOOGLE",
    costs: costs6
  },
  {
    pattern: openRouter,
    provider: "OPENROUTER",
    costs: costs9
  },
  {
    pattern: wisdomInANutshell,
    provider: "WISDOMINANUTSHELL"
  },
  {
    pattern: groq,
    provider: "GROQ",
    costs: costs11
  },
  {
    pattern: cohere,
    provider: "COHERE",
    costs: costs7
  },
  {
    pattern: mistral,
    provider: "MISTRAL",
    costs: costs8
  },
  {
    pattern: deepinfra,
    provider: "DEEPINFRA"
  },
  {
    pattern: qstash,
    provider: "QSTASH",
    costs: costs12
  },
  {
    pattern: firecrawl,
    provider: "FIRECRAWL"
  },
  {
    pattern: awsBedrock,
    provider: "AWS",
    costs: costs15
  }
];
var _a;
var playgroundModels = (_a = providers.map((provider) => {
  var _a2;
  return (_a2 = provider.costs) == null ? void 0 : _a2.filter((cost) => cost.showInPlayground).map((cost) => ({
    name: cost.model.value,
    provider: provider.provider
  }));
}).flat().filter((model) => model !== void 0)) != null ? _a : [];
var defaultProvider = providers.find(
  (provider) => provider.provider === "OPENAI"
);
var allCosts = providers.flatMap((provider) => {
  var _a2;
  return (_a2 = provider.costs) != null ? _a2 : [];
});
var approvedDomains = providers.map((provider) => provider.pattern);
var modelNames = allCosts.map((cost) => cost.model.value);
var parentModelNames = providers.reduce((acc, provider) => {
  if (provider.modelDetails) {
    acc[provider.provider] = Object.keys(provider.modelDetails);
  }
  return acc;
}, {});

// src/index.ts
var import_js_big_decimal = __toESM(require("js-big-decimal"));
async function processEvent(event) {
  if (event.event !== "$ai_generation" || !event.properties) {
    return event;
  }
  if (!event.properties["$ai_provider"] || !event.properties["$ai_model"]) {
    return event;
  }
  const provider = providers.find((provider2) => event.properties["$ai_provider"] === provider2.provider.toLowerCase());
  if (!provider || !provider.costs) {
    return event;
  }
  const cost = findCostFromModel(
    provider.costs,
    event.properties["$ai_model"]
  );
  if (!cost) {
    return event;
  }
  if (event.properties["$ai_input_tokens"]) {
    event.properties["$ai_input_cost_usd"] = parseFloat(import_js_big_decimal.default.multiply(cost.cost.prompt_token, event.properties["$ai_input_tokens"]));
  }
  if (event.properties["$ai_output_tokens"]) {
    event.properties["$ai_output_cost_usd"] = parseFloat(import_js_big_decimal.default.multiply(cost.cost.completion_token, event.properties["$ai_output_tokens"]));
  }
  if (event.properties["$ai_input_cost_usd"] && event.properties["$ai_output_cost_usd"]) {
    event.properties["$ai_total_cost_usd"] = parseFloat(import_js_big_decimal.default.add(event.properties["$ai_input_cost_usd"], event.properties["$ai_output_cost_usd"]));
  }
  return event;
}
var findCostFromModel = (costs16, aiModel) => {
  return costs16.find((cost) => {
    const valueLower = cost.model.value.toLowerCase();
    if (cost.model.operator === "startsWith") {
      return aiModel.startsWith(valueLower);
    } else if (cost.model.operator === "includes") {
      return aiModel.includes(valueLower);
    }
    return valueLower === aiModel;
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  processEvent
});
