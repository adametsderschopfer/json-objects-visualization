import { ICore } from "./core/interfaces";
import JOV from "./core/core";

(<ICore>window.JOV) = { create: (JOV.create) };