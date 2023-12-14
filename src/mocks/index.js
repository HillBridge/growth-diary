import { setupWorker } from "msw/browser";
import channelList from "./channels/list.js";

export const worker = setupWorker(...channelList);
